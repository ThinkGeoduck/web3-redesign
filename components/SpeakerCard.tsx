import Image from "next/image";
import type { Speaker } from "@/lib/data";

// Two-ink riso duotones: the grayscale photo multiplies onto a spot colour.
const grounds = ["bg-field", "bg-field", "bg-paper-2", "bg-field"];

// Headshots come from many sources, so they are unified as grayscale 4:5 crops
// multiplied onto a stock colour.
export function SpeakerCard({ speaker, index = 0, priority = false }: { speaker: Speaker; index?: number; priority?: boolean }) {
  return (
    <figure className="group">
      <div className={`relative aspect-[4/5] overflow-hidden rounded-[2px] ${grounds[index % grounds.length]}`}>
        <Image
          src={speaker.photo}
          alt={speaker.name}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 16vw, (min-width: 768px) 25vw, 45vw"
          className="portrait-treatment object-cover object-top transition-transform duration-500 ease-(--ease-out-expo) group-hover:scale-[1.04]"
        />
      </div>
      <figcaption className="mt-3">
        <p className="display text-[1.35rem] leading-[0.9]">{speaker.name}</p>
        <p className="mt-1.5 text-[0.85rem] leading-snug text-slate">{speaker.role}</p>
        <p className="label mt-1.5 text-slate">
          {speaker.location}
          {speaker.virtual && " · joined virtually"}
        </p>
        {(speaker.x || speaker.linkedin) && (
          <p className="mt-2 flex gap-3 text-[0.8rem] font-semibold">
            {speaker.linkedin && (
              <a href={speaker.linkedin} target="_blank" rel="noreferrer" className="text-leaf underline decoration-1 hover:decoration-2">
                LinkedIn<span className="sr-only"> profile of {speaker.name}</span>
              </a>
            )}
            {speaker.x && (
              <a href={speaker.x} target="_blank" rel="noreferrer" className="text-leaf underline decoration-1 hover:decoration-2">
                X<span className="sr-only"> profile of {speaker.name}</span>
              </a>
            )}
          </p>
        )}
      </figcaption>
    </figure>
  );
}
