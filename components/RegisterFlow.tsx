"use client";

import { useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Logo } from "./Logo";
import { NEXT_EDITION, PROGRAMME, ROLES, SOCIALS, type Role } from "@/lib/data";

const CONS = PROGRAMME.filter((p) => p.kind !== "Side event");
const STEPS = ["Who you are", "What you want", "Where to send it"];

type Errors = Partial<Record<"roles" | "name" | "email", string>>;

export function RegisterFlow() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [roles, setRoles] = useState<Role[]>([]);
  const [interests, setInterests] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const navigated = useRef(false);
  const uid = useId();

  const toggle = <T,>(list: T[], v: T) => (list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

  function validate(s: number): Errors {
    const e: Errors = {};
    if (s === 0 && roles.length === 0) e.roles = "Pick at least one role so we can tailor your programme.";
    if (s === 2) {
      if (!name.trim()) e.name = "Add your name as it should appear on your ticket.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) e.email = "Add a full email address, for example you@company.com.";
    }
    return e;
  }

  function go(to: number) {
    if (to > step) {
      const e = validate(step);
      setErrors(e);
      if (Object.keys(e).length) return;
    }
    setDir(to > step ? 1 : -1);
    if (to === STEPS.length) setDone(true);
    else setStep(to);
    navigated.current = true;
  }

  // Same variants on server and client; MotionConfig reducedMotion="user"
  // drops the horizontal slide for visitors who prefer reduced motion.
  const slide = {
    initial: { opacity: 0, x: 40 * dir },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 * dir },
  };

  if (done) return <IssuedTicket name={name.trim()} roles={roles} interests={interests} city={city.trim()} />;

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <ol className="flex gap-2 lg:col-span-3 lg:flex-col" aria-label="Progress">
        {STEPS.map((s, i) => (
          <li key={s} aria-current={i === step ? "step" : undefined} className="flex-1 lg:flex-none">
            <span className={`block h-1.5 rounded-full lg:hidden ${i <= step ? "bg-field" : "bg-ink/15"}`} />
            <span className={`hidden items-center gap-3 lg:flex ${i === step ? "text-ink" : "text-slate"}`}>
              <span
                className={`grid size-8 place-items-center rounded-full text-sm font-bold ${
                  i < step ? "bg-night text-paper" : i === step ? "on-field" : "shadow-[inset_0_0_0_1.5px_rgba(10,10,15,.25)]"
                }`}
              >
                {i < step ? <Check aria-hidden className="size-4" /> : i + 1}
              </span>
              <span className="font-semibold">{s}</span>
            </span>
          </li>
        ))}
      </ol>

      <div className="lg:col-span-8 lg:col-start-5">
        <p className="label text-slate lg:hidden">
          Step {step + 1} of {STEPS.length}: {STEPS[step]}
        </p>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={step}
            {...slide}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            // Move focus to the new step heading once it has entered.
            onAnimationComplete={() => navigated.current && headingRef.current?.focus()}
          >
            {step === 0 && (
              <fieldset aria-describedby={errors.roles ? `${uid}-roles` : undefined}>
                <legend>
                  <h2 ref={headingRef} tabIndex={-1} className="display text-[clamp(2.4rem,5vw,4rem)] outline-none">Who are you?</h2>
                </legend>
                <p className="mt-3 text-slate">Pick all that apply. We use this to suggest the Cons and side events that fit you.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {ROLES.map((r) => (
                    <button
                      key={r}
                      type="button"
                      aria-pressed={roles.includes(r)}
                      onClick={() => setRoles((l) => toggle(l, r))}
                      className="display min-h-12 rounded-full px-5 text-xl shadow-[inset_0_0_0_1.5px_rgba(10,10,15,.3)] transition-colors aria-pressed:bg-night aria-pressed:text-paper aria-pressed:shadow-none"
                    >
                      {r}
                    </button>
                  ))}
                </div>
                {errors.roles && <p id={`${uid}-roles`} className="mt-4 font-semibold text-alert" role="alert">{errors.roles}</p>}
              </fieldset>
            )}

            {step === 1 && (
              <fieldset>
                <legend>
                  <h2 ref={headingRef} tabIndex={-1} className="display text-[clamp(2.4rem,5vw,4rem)] outline-none">What do you want to see?</h2>
                </legend>
                <p className="mt-3 text-slate">Optional. Pick any Cons or programmes you want to hear about first.</p>
                <div className="mt-8 grid gap-2 sm:grid-cols-2">
                  {CONS.map((c) => {
                    const on = interests.includes(c.id);
                    const fit = c.roles.some((r) => roles.includes(r));
                    return (
                      <label
                        key={c.id}
                        className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-[4px] px-4 py-3 transition-colors ${
                          on ? "bg-night text-paper" : "bg-white shadow-[inset_0_0_0_1.5px_rgba(10,10,15,.15)] hover:shadow-[inset_0_0_0_1.5px_rgba(10,10,15,.4)]"
                        }`}
                      >
                        <input type="checkbox" checked={on} onChange={() => setInterests((l) => toggle(l, c.id))} className="size-5 accent-field" />
                        <span className="flex-1 font-semibold">{c.name}</span>
                        {fit && <span className={`label ${on ? "text-field" : "text-leaf"}`}>Fits you</span>}
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            )}

            {step === 2 && (
              <div>
                <h2 ref={headingRef} tabIndex={-1} className="display text-[clamp(2.4rem,5vw,4rem)] outline-none">Where do we send it?</h2>
                <p className="mt-3 text-slate">We will email you when tickets for the next edition open. Nothing else.</p>
                <div className="mt-8 grid max-w-lg gap-5">
                  <Field id={`${uid}-name`} label="Name on your ticket" error={errors.name}>
                    <input
                      id={`${uid}-name`}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? `${uid}-name-err` : undefined}
                      className={inputCls(!!errors.name)}
                    />
                  </Field>
                  <Field id={`${uid}-email`} label="Email" error={errors.email}>
                    <input
                      id={`${uid}-email`}
                      type="email"
                      inputMode="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      placeholder="you@company.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? `${uid}-email-err` : undefined}
                      className={inputCls(!!errors.email)}
                    />
                  </Field>
                  <Field id={`${uid}-city`} label="City you would travel from (optional)">
                    <input id={`${uid}-city`} value={city} onChange={(e) => setCity(e.target.value)} autoComplete="address-level2" className={inputCls(false)} />
                  </Field>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-ink/15 pt-6">
          {step > 0 && (
            <button type="button" onClick={() => go(step - 1)} className="inline-flex min-h-12 items-center gap-2 rounded-[3px] px-4 font-semibold hover:bg-ink/5">
              <ArrowLeft aria-hidden className="size-5" /> Back
            </button>
          )}
          <button
            type="button"
            onClick={() => go(step + 1)}
            className="ml-auto inline-flex min-h-12 items-center gap-2.5 rounded-[3px] bg-field px-6 font-bold text-night shadow-[0_2px_0_rgba(2,11,37,.25)] transition hover:-translate-y-0.5"
          >
            {step === STEPS.length - 1 ? "Print my ticket" : "Next"} <ArrowRight aria-hidden className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function inputCls(err: boolean) {
  return `h-12 w-full rounded-[3px] border-[1.5px] bg-white px-4 text-base outline-none focus:border-night focus:shadow-[0_0_0_3px_rgba(220,211,245,.9)] ${
    err ? "border-alert" : "border-ink/30"
  }`;
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="font-semibold">{label}</label>
      {children}
      {error && (
        <p id={`${id}-err`} className="text-sm font-semibold text-alert">{error}</p>
      )}
    </div>
  );
}

// The signature moment: the ticket prints, then the stub tears off.
function IssuedTicket({ name, roles, interests, city }: { name: string; roles: Role[]; interests: string[]; city: string }) {
  const reduce = useReducedMotion();
  const picked = PROGRAMME.filter((p) => interests.includes(p.id));
  const serial = String(Math.abs([...name].reduce((h, c) => (h * 31 + c.charCodeAt(0)) | 0, 7)) % 1000000).padStart(6, "0");

  return (
    <div role="status" className="grid gap-12 lg:grid-cols-12 lg:items-center">
      <div className="lg:col-span-5">
        <h2 className="display text-[clamp(2.8rem,6vw,5rem)]">You’re on the list, {name.split(" ")[0]}.</h2>
        <p className="mt-5 text-lg text-slate">
          When tickets for the next edition open, this is the ticket you will get. Until then, follow along:
        </p>
        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-semibold">
          {SOCIALS.slice(0, 4).map((s) => (
            <li key={s.name}>
              <a href={s.href} target="_blank" rel="noreferrer" className="text-leaf underline">{s.name}</a>
            </li>
          ))}
        </ul>
        <p className="mt-8 rounded-[4px] bg-paper-2 p-4 text-sm text-slate">
          Design prototype: this form does not send data anywhere yet. In production it would hand off to the official registration page on lu.ma.
        </p>
      </div>

      <div className="lg:col-span-7">
        <motion.div
          initial={reduce ? false : { y: -40, opacity: 0, rotate: -4 }}
          animate={{ y: 0, opacity: 1, rotate: -2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-stretch drop-shadow-[0_24px_30px_rgba(31,27,46,.3)]"
        >
          <div className="flex-1 rounded-l-[6px] on-field p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <p className="display text-[clamp(2.2rem,5vw,3.4rem)]">Admit one</p>
              <Logo size={48} />
            </div>
            <p className="display mt-6 text-[clamp(1.8rem,4vw,2.6rem)]">{name}</p>
            <p className="display mt-1 text-xl text-leaf">{roles.join(" × ")}</p>
            {picked.length > 0 && (
              <p className="mt-4 text-sm text-paper/85">Priority: {picked.map((p) => p.name.replace(" Con", "")).join(", ")}</p>
            )}
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-paper/30 pt-4 text-sm">
              <p><span className="label block text-paper/70">Date</span>{NEXT_EDITION.date}</p>
              <p><span className="label block text-paper/70">City</span>{NEXT_EDITION.city}</p>
              <p><span className="label block text-paper/70">From</span>{city || "Anywhere"}</p>
            </div>
          </div>
          <motion.div
            initial={reduce ? false : { x: 0, rotate: 0 }}
            animate={reduce ? undefined : { x: 18, rotate: 7, y: 10 }}
            transition={{ delay: 0.75, duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
            className="flex w-24 origin-top-left flex-col items-center justify-between rounded-r-[6px] bg-night text-paper bg-[linear-gradient(to_bottom,rgba(250,248,244,.35)_50%,transparent_50%)] bg-[length:2px_10px] bg-left bg-repeat-y p-4 sm:w-28"
          >
            <span className="label [writing-mode:vertical-rl]">Web3 Carnival</span>
            <span className="data text-xs font-bold [writing-mode:vertical-rl]">Nº {serial}</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
