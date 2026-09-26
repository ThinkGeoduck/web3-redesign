// Content for the Web3 Carnival redesign.
// Everything here is taken from web3carnival.world (captured 2026-09-26) unless
// marked `placeholder` or `editorial`. Do not add facts that are not on the
// official site. Exception: NEXT_EDITION is an illustrative concept edition
// (the team asked for a hypothetical place and date); the UI labels it.

const MEDIA = "https://www.web3carnival.world/_next/static/media/";
const SITE = "https://www.web3carnival.world";

export const LOGO_SRC = `${MEDIA}logo.a67d6019.svg`;

export type Role = "Founder" | "Builder" | "Developer" | "Investor" | "Creator";
export const ROLES: Role[] = ["Founder", "Builder", "Developer", "Investor", "Creator"];

/* ------------------------------------------------------------------ */
/* Next edition: nothing confirmed yet                                  */
/* ------------------------------------------------------------------ */

export const NEXT_EDITION = {
  // Illustrative concept edition, not an announcement.
  concept: true,
  name: "Web3 Carnival 2026",
  date: "9–13 Dec 2026",
  startISO: "2026-12-09T09:00:00+05:30",
  city: "Bengaluru",
  venue: "BIEC, Bengaluru",
  venueLong: "Bangalore International Exhibition Centre",
  note: "Five days, seven Cons and a side event every night, back where it all started. Join the list and we will tell you the moment tickets go on sale.",
};

/* ------------------------------------------------------------------ */
/* Links                                                                */
/* ------------------------------------------------------------------ */

export const LINKS = {
  calendly: "https://calendly.com/web3carnival",
  email: "contact@threewaystudio.world",
  phone: "+91 97537 34795",
  threeway: "https://www.threewaystudio.world",
  forms: {
    sponsor: "https://tally.so/r/nraYpv",
    speaker: "https://tally.so/r/w8ar2x",
    media: "https://tally.so/r/mY09gd",
    community: "https://tally.so/r/mVQNdv",
    volunteer: "https://tally.so/r/w2aoZV",
    superDemo: "https://tally.so/r/nP1r4b",
    affiliate: "https://tally.so/r/woezp1",
  },
};

export const SOCIALS = [
  { name: "X", href: "https://x.com/web3carnival" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/web3carnival" },
  { name: "Instagram", href: "https://instagram.com/web3carnival" },
  { name: "Telegram", href: "https://t.me/web3carnival2023" },
  { name: "WhatsApp", href: "https://chat.whatsapp.com/CiSjo3ZtmB71gn9CtTb9J1" },
  { name: "Linktree", href: "https://linktr.ee/web3carnival2023" },
] as const;

/* ------------------------------------------------------------------ */
/* The seven Cons + programme formats                                   */
/* ------------------------------------------------------------------ */

export type ProgrammeItem = {
  id: string;
  name: string;
  kind: "Con" | "Showcase" | "Awards" | "Side event";
  summary: string;
  topics: string[];
  // editorial: suggested audience fit written by the redesign team, not the organisers
  roles: Role[];
};

export const PROGRAMME: ProgrammeItem[] = [
  {
    id: "infrastructure",
    name: "Blockchain & its Infrastructure Con",
    kind: "Con",
    summary: "The backbone of the decentralised world: the chains, tooling and infrastructure the rest of Web3 is built on.",
    topics: ["Layer 1s", "Layer 2s", "Tooling", "Interoperability"],
    roles: ["Developer", "Builder", "Founder"],
  },
  {
    id: "dao",
    name: "DAO & Governance Con",
    kind: "Con",
    summary: "How decentralised autonomous organisations work, and how new governance models are reshaping industries and communities.",
    topics: ["DAOs", "Governance", "Community"],
    roles: ["Builder", "Creator", "Founder"],
  },
  {
    id: "metaverse",
    name: "Metaverse & GameFi Con",
    kind: "Con",
    summary: "Where virtual worlds and gaming meet, and the new kinds of experience that come out of it.",
    topics: ["Metaverse", "GameFi", "Virtual worlds"],
    roles: ["Creator", "Builder", "Investor"],
  },
  {
    id: "zk",
    name: "ZK & Security Con",
    kind: "Con",
    summary: "Zero-knowledge proofs and security protocols: the mechanisms behind Web3's trust architecture.",
    topics: ["Zero-knowledge", "Audits", "Privacy"],
    roles: ["Developer", "Builder"],
  },
  {
    id: "defi",
    name: "CeFi DeFi & Staking Con",
    kind: "Con",
    summary: "Centralised and decentralised finance side by side, and what staking means for the financial system ahead.",
    topics: ["DeFi", "CeFi", "Staking"],
    roles: ["Investor", "Founder", "Developer"],
  },
  {
    id: "enterprise",
    name: "Enterprise Blockchain Con",
    kind: "Con",
    summary: "Enterprise blockchain in practice: how businesses are changing processes and working together on shared ledgers.",
    topics: ["Enterprise", "Supply chain", "Payments"],
    roles: ["Founder", "Builder", "Investor"],
  },
  {
    id: "nft",
    name: "NFT & Utilities Con",
    kind: "Con",
    summary: "NFTs and utility tokens, where digital art, collectibles and utility come together to redefine ownership and value.",
    topics: ["NFTs", "Digital art", "Utility tokens"],
    roles: ["Creator", "Investor", "Founder"],
  },
  {
    id: "demo-night",
    name: "Demo Night",
    kind: "Showcase",
    summary: "Startups demo to investors, incubators and accelerators in one room, with one agenda: push the limits of Web3.",
    topics: ["Startups", "Fundraising", "Live demos"],
    roles: ["Founder", "Investor"],
  },
  {
    id: "awards",
    name: "Web3 Carnival Awards",
    kind: "Awards",
    summary: "Recognition across security, education, community, gaming, journalism, UX and more. Nominate yourself or someone else.",
    topics: ["Awards", "Nominations"],
    roles: ["Creator", "Builder", "Founder"],
  },
  {
    id: "side-events",
    name: "Daily side events",
    kind: "Side event",
    summary: "Pitch battles, founder and funder nights, meetups, dinners and launches around the main programme.",
    topics: ["Networking", "Pitching", "Meetups"],
    roles: ["Founder", "Investor", "Creator", "Builder", "Developer"],
  },
];

export const AWARD_CATEGORIES = [
  "Oracle Excellence Award",
  "Interoperability Pioneer Award",
  "Metaverse Maestro Award",
  "Web3 Education Evangelist Award",
  "Social Impact Soldier Award",
  "Security Sentinel Award",
  "Gaming Guru Award",
  "Community Catalyst Award",
  "Layer-2 Luminary Award",
  "Whisperers of Web3 Award",
  "UX/UI Unicorn Award",
  "Staking Star Award",
  "Best DWeb Pioneer Award",
  "ZKP Zenith Award",
];

/* ------------------------------------------------------------------ */
/* Past events, newest first                                            */
/* ------------------------------------------------------------------ */

export type PastEvent = {
  title: string;
  iso: string | null; // null when the official site lists no year
  day: string;
  month: string;
  year: string;
  venue: string;
  city: string;
  stop: string;
  href: string | null;
  poster: string | null;
};

const P = (path: string) => `${SITE}${path}`;

export const PAST_EVENTS: PastEvent[] = [
  { title: "Bitcoin Pizza Day", iso: "2025-05-22", day: "22", month: "May", year: "2025", venue: "Multiple venues", city: "Across India", stop: "India 2025", href: null, poster: null },
  { title: "Founders & Funders Night", iso: "2025-04-05", day: "05", month: "Apr", year: "2025", venue: "Delhi", city: "Delhi", stop: "Delhi 2025", href: "https://lu.ma/la293z9t", poster: P("/maha.png") },
  { title: "Elevator Pitch Battle, Bitcoin MENA side event", iso: "2024-12-12", day: "12", month: "Dec", year: "2024", venue: "Dubai", city: "Dubai", stop: "Dubai 2024", href: "https://lu.ma/u7o037il", poster: P("/events/4.png") },
  { title: "DeGen Summit", iso: "2024-09-16", day: "16", month: "Sep", year: "2024", venue: "HUONE Singapore", city: "Singapore", stop: "Singapore 2024", href: "https://lu.ma/7a1zyw5g", poster: P("/1.png") },
  { title: "KOL Awards Night, DeGen Summit", iso: "2024-09-16", day: "16", month: "Sep", year: "2024", venue: "Singapore", city: "Singapore", stop: "Singapore 2024", href: "https://lu.ma/0gj3tf66", poster: P("/events/1.png") },
  { title: "Pitch Fest, DeGen Summit ’24", iso: "2024-09-16", day: "16", month: "Sep", year: "2024", venue: "Singapore", city: "Singapore", stop: "Singapore 2024", href: "https://lu.ma/dnhnnn1d", poster: P("/events/2.png") },
  { title: "W3WC: World Web3 Consortium", iso: "2024-04-22", day: "22", month: "Apr", year: "2024", venue: "Millennium Plaza Downtown", city: "Dubai", stop: "Dubai 2024", href: "https://lu.ma/w3wc", poster: P("/events/3.png") },
  { title: "Book Launch by Harman Puri", iso: "2023-12-10", day: "10", month: "Dec", year: "2023", venue: "Palm Meadows", city: "Bengaluru", stop: "Bengaluru 2023", href: "https://lu.ma/kof4nm5e", poster: P("/2.avif") },
  { title: "Exclusive High-Tea by TimeChain Labs", iso: "2023-12-09", day: "09", month: "Dec", year: "2023", venue: "Palm Meadows", city: "Bengaluru", stop: "Bengaluru 2023", href: "https://lu.ma/sredmkl8", poster: P("/3.avif") },
  { title: "Demo Night with Brinc", iso: "2023-12-06", day: "06", month: "Dec", year: "2023", venue: "Palm Meadows", city: "Bengaluru", stop: "Bengaluru 2023", href: "https://lu.ma/qxc9y3fg", poster: P("/4.avif") },
  { title: "Road to EthDenver: BukTrips Traveller Meetup", iso: "2023-12-06", day: "06", month: "Dec", year: "2023", venue: "Palm Meadows", city: "Bengaluru", stop: "Bengaluru 2023", href: "https://lu.ma/Bukweb3carnival2023", poster: P("/5.avif") },
  { title: "Cypher Genesis Summit", iso: "2023-12-06", day: "06", month: "Dec", year: "2023", venue: "Palm Meadows", city: "Bengaluru", stop: "Bengaluru 2023", href: "https://lu.ma/msd9mhri", poster: P("/7.avif") },
  { title: "Private Gala Dinner with TON", iso: "2023-12-04", day: "04", month: "Dec", year: "2023", venue: "Palm Meadows", city: "Bengaluru", stop: "Bengaluru 2023", href: "https://lu.ma/privatew3carnival", poster: P("/6.avif") },
  { title: "The Signal After Dark", iso: null, day: "28", month: "Apr", year: "Year not listed", venue: "Dubai", city: "Dubai", stop: "Dubai", href: null, poster: P("/web3.png") },
];

// Stops shown on the destination board, oldest first, ending on the placeholder.
export const STOPS = [
  { city: "Bengaluru", when: "Dec 2023", note: "Flagship week, Palm Meadows", anchor: "bengaluru-2023" },
  { city: "Dubai", when: "Apr 2024", note: "World Web3 Consortium", anchor: "dubai-2024" },
  { city: "Singapore", when: "Sep 2024", note: "DeGen Summit, KOL Awards Night, Pitch Fest", anchor: "singapore-2024" },
  { city: "Dubai", when: "Dec 2024", note: "Elevator Pitch Battle, Bitcoin MENA side event", anchor: "dubai-2024" },
  { city: "Delhi", when: "Apr 2025", note: "Founders & Funders Night", anchor: "delhi-2025" },
  { city: "Across India", when: "May 2025", note: "Bitcoin Pizza Day", anchor: "india-2025" },
  { city: "Bengaluru", when: "Dec 2026", note: "Next stop · 9–13 December, BIEC", anchor: "", placeholder: true },
];

/* ------------------------------------------------------------------ */
/* Speakers                                                             */
/* ------------------------------------------------------------------ */

export type Speaker = {
  name: string;
  role: string;
  location: string;
  photo: string;
  x?: string;
  linkedin?: string;
  virtual?: boolean;
};

type Raw = [string, string, string, string, string, string];

// Typos from the source are corrected (Partner, Philippines, Entrepreneur).
const RAW: Raw[] = [
  ["Raj Kapoor", "Founder, India Blockchain Alliance & Founder, Web3 On The Sea", "India", "raj.064687c4.png", "https://x.com/rajkapoor1984", "https://www.linkedin.com/in/indieblock"],
  ["Prashant Kumar", "Head of Generative AI, Growth Markets, Accenture Song", "Malaysia", "Prashant.76610cb1.jpeg", "https://x.com/hereispk", "https://www.linkedin.com/in/prashantkumar2006"],
  ["Jong-Chan Chung", "Venture Manager, Blockchain Founders Group", "Korea", "Jong.c06bde34.jpg", "https://twitter.com/guyukyukgu", "https://www.linkedin.com/in/jongchanchung"],
  ["Femina Pulliyil Madasheri", "Blockchain consultant", "Bengaluru, India", "Femina.bc6bbc12.jpeg", "", "https://www.linkedin.com/in/femina-pm-b016b3111/"],
  ["John Eggleston", "Serial Entrepreneur, Co-founder of Artysan Accelerator", "Tasmania, Australia", "John Eggleston.e3d3a6c8.jpeg", "https://twitter.com/EgglestonTweets", "https://www.linkedin.com/in/john-eggleston-256021231/"],
  ["Vinit Sinha", "Director, Cybersecurity, Mastercard & President, ISACA", "Delhi, India", "vinitsinha.e9a11217.jpeg", "", "https://www.linkedin.com/in/vinit-sinha-63514b68"],
  ["Hariharan Ramakrishnan", "Senior Engineering Manager, Digital, Ford Credit IT", "India", "hariharan.8a4122c8.jpeg", "", "https://www.linkedin.com/in/hihari/"],
  ["Zach Marks", "Founder & CEO, Jia", "United States", "zach.96d82da6.jpeg", "https://twitter.com/zmarks215", "https://www.linkedin.com/in/zachmarks/"],
  ["Satish Kumar", "Founder & CEO, Simsy Ventures", "UAE", "satish.d216bf4a.jpeg", "", "https://www.linkedin.com/in/simsykumar/"],
  ["Alexander Jacobi", "Crypto Project Advisor & Co-Founder, Punchword", "Germany", "alexander.fb9e9849.jpeg", "https://twitter.com/aj_alexjacobi", "https://www.linkedin.com/in/aj-alexjacobi/"],
  ["Kanishka Agiwal", "Head, Service Lines, India & South Asia, Amazon Web Services (AWS)", "India", "kanishka.f3dd6d46.jpeg", "https://twitter.com/kanishkaagiwal", "https://www.linkedin.com/in/kanishkaagiwal/"],
  ["Anıl Karaçay", "Founder of Anatolian Blockchain", "Ankara, Turkey", "anil.dec31873.jpg", "https://twitter.com/anilchain", "https://www.linkedin.com/in/anilkaracay"],
  ["Trish Kane", "Founder & CEO of Healerverse", "Florida, USA", "trish.8bfcf30a.jpeg", "https://twitter.com/healerverse", "https://www.linkedin.com/in/trishmkane"],
  ["Masayuki Tani", "Founding Partner, Pro-Innovation Legal", "Japan", "masayuki.b1a70507.jpeg", "https://twitter.com/masat_jp", "https://www.linkedin.com/in/masayuki-tani-b19545151/"],
  ["Lisa JY Tan", "CEO and Founder of Economics Design", "Japan", "lisa.f6f40967.png", "https://twitter.com/lisajytan", "https://www.linkedin.com/in/lisajytan/"],
  ["Kunal Kumar", "Blockchain Researcher, Coinbase", "India", "kunal.f3a104d5.jpeg", "https://twitter.com/kr_kunal4", "https://www.linkedin.com/in/kunal-kumar-623b1877/"],
  ["Kamlesh Nagware", "Co-founder, FSV Capital", "India", "kamlesh.5f2dd642.png", "https://twitter.com/KNagware", "https://in.linkedin.com/in/kamlesh-nagware-1456094b"],
  ["Nadja Bester", "Co-founder, AdLunam · Documentary Executive Producer · Host of The Future of NFTs", "Dubai", "nadja.cdcddeb3.png", "https://twitter.com/NadjaBester", "https://www.linkedin.com/in/nadjabester"],
  ["Ajeet Khurana", "Angel Investor; Ex-CEO, Zebpay", "Dubai, UAE", "ajeet.b49103e2.png", "https://x.com/ajeetk", "https://www.linkedin.com/in/ajeetkhurana"],
  ["Maaz Memon", "CEO and Founder of BhaiFinance", "New York, USA", "maaz.430c8d9f.png", "https://twitter.com/daddymaaz", "https://www.linkedin.com/in/maazmemon/"],
  ["Ken Berry", "CEO, Blockchain Network Philippines", "Philippines", "ken.3301cf20.jpeg", "https://twitter.com/kenberey", "https://www.linkedin.com/in/kenneth-james-berey-14688699/"],
  ["Abhishek Bhattacharya", "CEO and Co-Founder of The Impact Wave", "India", "abhishek.dbbe6fa9.jpeg", "https://twitter.com/abhib3012", "https://www.linkedin.com/in/abhib3012/"],
  ["Evan Luthra", "Angel Investor & Entrepreneur, 2x Forbes 30 Under 30", "India", "evan.fddb6c46.jpeg", "https://twitter.com/EvanLuthra", "https://in.linkedin.com/in/evanluthra"],
  ["Vidhi Doshi", "Sr. Associate, Blockchain Founders Fund & Advisor, Stanford AI & Web3", "India", "vidhi.5cc9f80d.jpg", "https://x.com/vidhidoshi0212", "https://www.linkedin.com/in/vidhi-doshi-118965134"],
  ["Teddy Pahagbia", "Founder, BLVCK Pixel & Board Member, Institute of Digital Fashion, UK", "France", "teddycrop.59016bfd.jpeg", "https://twitter.com/mr_metaverse", "https://www.linkedin.com/in/teddypahagbia/"],
  ["Astha Yadav", "Senior Blockchain Developer, OCBC Bank & ZK Advocate", "Singapore", "astha.94dc315e.jpeg", "", "https://www.linkedin.com/in/astha-yadav27"],
  ["Kapil Dhiman", "Strategic Advisor & Coach, Ex-Web3 Lead, PwC", "Mumbai, India", "kapil.7154d44f.jpeg", "", "https://www.linkedin.com/in/kapil-dhiman-5a68b0138"],
  ["Viivek Mehata", "Fund Manager, Leo Ventures", "India", "vivek.250a8c10.jpeg", "https://twitter.com/mehtaandmore", "https://www.linkedin.com/in/viivek-mehata16"],
  ["Ritam Gupta", "Partner, NonceBlox & NonceVC", "Dubai, UAE", "ritamcrop.52778bc0.jpeg", "https://twitter.com/ritamg123", "https://www.linkedin.com/in/ritamgupta/"],
  ["Anuradha Chowdhary", "Founder & CEO, ZeroTo3 Collective", "India", "anuradha.213e5c6b.jpeg", "https://twitter.com/Anuradha_RC", "https://linkedin.com/in/anuradha-chowdhary-2bb28795"],
  ["Shishir Gupta", "Managing Director, Sorted Wallet", "Hong Kong", "shishir.03b096a9.jpeg", "https://twitter.com/KuchBhiGupta", "https://www.linkedin.com/in/shishrgupta/"],
  ["Parth Chadha", "Founder & CEO, STAN", "India", "parth.7dda7fbb.png", "https://x.com/theparthchadha", "https://www.linkedin.com/in/parth-chadha"],
  ["Shantnoo Saxsena", "Founder, Encryptus Europe", "UAE", "shantanoo.5fe909e7.png", "https://twitter.com/Shantnoo6", "https://www.linkedin.com/in/shantnu-saxena/"],
  ["Jason Fernandes", "Co-Founder, AdLunam · Blockchain & Crypto Advisor · Investor & Mentor", "India", "jason.1d8a0733.png", "https://twitter.com/AdLunamInc", "https://www.linkedin.com/in/thejasonfernandes/"],
  ["Varun Singhi", "Co-Founder and Strategy Head, PropFTX", "India", "varun.47f0cb1f.jpg", "https://twitter.com/VarunSinghi", "https://www.linkedin.com/in/singhi/"],
  ["Ligia Paraiso", "Founder and CEO, WeDeserve Freedom", "Paris, France", "ligia.9883ec2f.jpg", "https://twitter.com/Ligiaspfc", "https://www.linkedin.com/in/ligia-paraiso/"],
  ["Anish Mohammed", "Co-Founder, CTO & Chief Scientist, Panther Protocol", "Dubai", "aneesh.7f75e89f.jpg", "https://twitter.com/anishmohammed", "https://www.linkedin.com/in/anishmohammed/"],
  ["Divya Prashanth", "CEO and Co-Founder, HQNFTS · Solana Superteam UK · Nasdaq Contributor", "London", "divya.10fc7870.jpg", "", "https://uk.linkedin.com/in/divya-b4427912a"],
  ["Mudit Marda", "Co-Founder and CTO, DRIFE", "India", "mudit.94af19e2.png", "", "https://in.linkedin.com/in/muditmarda"],
  ["Preetam Rao", "CEO and Co-Founder, QuillAudits", "India", "preetam.f58b6872.jpeg", "https://twitter.com/raopreetam_", "https://www.linkedin.com/in/raopreetam"],
  ["Arvin Khamseh", "Founder of the SoldOut NFTs", "Dubai", "arvin.57746226.jpeg", "https://twitter.com/ArvinkNft", "https://www.linkedin.com/in/arvinkhamseh/"],
  ["Abhishek Singh", "Founding Member, Voice of Crypto", "London, UK", "abhishek2.6e8bc00e.jpeg", "https://twitter.com/rbkasr", "https://www.linkedin.com/in/abhisheksinghrajpurohit/"],
  ["Varuni Trivedi", "Editor in Chief, Voice of Crypto", "Mumbai, India", "varuni.9b14b1c7.jpeg", "https://twitter.com/varuni_trivedi", "https://www.linkedin.com/in/varuni-trivedi-316663149/"],
  ["Yax Sheth", "CEO, ChainClave", "Dubai", "yax.577b0182.png", "https://twitter.com/Yax22", "https://www.linkedin.com/in/yax22/"],
  ["Vinod Kumar", "Founder, Cypher Blockchain", "India", "vinod.248c68e3.jpg", "https://twitter.com/answervinod", "https://linkedin.com/in/answervinod"],
  ["Naman Kabra", "Head of Business Development and Growth, Metasky", "India", "naman.c9235a5b.jpeg", "https://twitter.com/307naman", "https://www.linkedin.com/in/namankabra/"],
  ["Alankar Saxena", "CTO & Co-founder, Mudrex", "India", "alankar.8cbc8b2c.png", "https://twitter.com/alankar_saxena", "https://in.linkedin.com/in/saxenaalankar"],
  ["Punit Agarwal", "Founder and CEO, KoinX", "India", "punit.81bbc05f.jpeg", "https://twitter.com/a__punit", "https://www.linkedin.com/in/iampunit/"],
  ["Romil Verma", "CEO, Outdefine", "San Francisco, USA", "romil.c817d078.jpeg", "https://twitter.com/romilvrma", "https://www.linkedin.com/in/vermaromil/"],
  ["Nanda Khiara", "Artist, writer, storyteller, speaker & founder of GALLERY NK", "UK", "nanda.0018a6ae.jpeg", "https://twitter.com/NandaKhiara", "https://www.linkedin.com/in/nanda-khiara-4941786/"],
  ["Parika Soni", "Web3 Startup Advisor", "Singapore", "parika.64400963.jpeg", "https://twitter.com/parikaa_sonii", "https://www.linkedin.com/in/Parika-soni"],
  ["Karan Keswani", "CEO, BharatBox", "India", "karan.6854b869.jpeg", "https://twitter.com/Karanverse", "https://www.linkedin.com/in/karan-keswani-87b13548"],
  ["Vijay Pravin", "Founder and CEO, bitsCrunch", "Germany", "vijay.ac7b92cb.jpeg", "https://twitter.com/VijayPravinM", "https://www.linkedin.com/in/vijaypravin/"],
  ["Arnaud Wenger", "General Counsel, Sakura Linkage International", "Singapore", "arnaud.70d9808b.png", "", "https://www.linkedin.com/in/arnaud-wenger-104ab83b/"],
  ["Amirsan Roberto", "Co-founder & Managing Partner, Sinofy", "Singapore", "amirsan.b72c133a.png", "", "https://www.linkedin.com/in/amirsanroberto/"],
  ["Aditya Mehrotra", "Founder and Chief Strategist, Verseatile", "India", "aditya.badcf435.jpeg", "https://twitter.com/adi_verseatile", "https://www.linkedin.com/in/aditya-mehrotra20"],
  ["Anisha Patnaik", "Founder, LexStart Partners & The Chain Project", "India", "anisha.a0ec57c1.jpeg", "https://twitter.com/AnishaPatnaik", "https://www.linkedin.com/in/anishapatnaik/"],
  ["Popoola Kayode Joseph", "Secret Network Africa Lead, Secret Foundation", "Nigeria", "pope.fb0c16e1.png", "https://twitter.com/thepopeblack", "https://www.linkedin.com/in/thepopeblack/"],
  ["Shruti Kohli", "Sr. BD Manager (Global Partnerships), Bitrue", "India", "shruti.b5fc0a9d.jpeg", "https://twitter.com/ShrutiK57785716", "https://www.linkedin.com/in/shruti-kohli-35377b52/"],
  ["Jeffrey Broer", "Founder, Mulana IM & Advisor, Graviton", "Hong Kong", "jeffrey.45742f15.jpeg", "https://x.com/jebbery/", "https://www.linkedin.com/in/jeffreybroer"],
  ["Angad B Sodhi", "Director of Media, NFTs, Tech & Culture, India Blockchain Alliance", "India", "angad.de8ba582.jpeg", "https://twitter.com/angadbsodhi", "https://www.linkedin.com/in/angadbsodhi"],
  ["Sourabh Kumar", "Chief Executive Officer, World Crypto Council OÜ", "Estonia", "sourabh.6cc92c63.jpeg", "", "https://www.linkedin.com/in/sourabhkumar0303/"],
  ["Manbir Singh", "Developer Community Manager, MetaMask", "India", "manbir.d34db32f.jpeg", "", ""],
  ["Dr. Ritesh Jain", "Founder & Board Advisor, Infynit · Fintech, Payments & Financial Inclusion (G20 GPFI)", "London, UK", "ritesh.4f049d73.jpeg", "https://twitter.com/ritesh5182", "https://www.linkedin.com/in/drriteshjain"],
  ["Parth Chaturvedi", "Investments Lead, CoinSwitch Ventures · ex-FalconX & Onyx by J.P. Morgan", "India", "parth2.1fa7623b.jpeg", "https://twitter.com/Parth4vedi", "https://www.linkedin.com/in/parth-chaturvedi-a672165a/"],
  ["Zenobia Godschalk", "SVP of Communications, Swirlds", "Atlanta, USA", "zenobia.9eb82915.jpeg", "https://twitter.com/zenobiazag", "https://www.linkedin.com/in/zenobiaaustingodschalk/"],
  ["Arul Prakash", "Co-Founder, BukTrips", "San Francisco Bay Area, USA", "arul.15dff767.jpeg", "", ""],
  ["Karan Ambwani", "dYdX Foundation India & MENA Lead", "India", "karan2.55744d2a.jpeg", "https://twitter.com/0xkarana", "https://www.linkedin.com/in/karan-ambwani/"],
  ["Prasanna Lohar", "CEO, Block Stack · Founder, India Blockchain Forum · Bank and Fintech Advisor", "India", "prasanna.cdaf4a95.jpeg", "https://twitter.com/loharprasanna", "https://www.linkedin.com/in/prasannalohar"],
];

const VIRTUAL = new Set(["Trish Kane", "Zenobia Godschalk"]);

export const SPEAKERS: Speaker[] = RAW.map(([name, role, location, file, x, linkedin]) => ({
  name,
  role,
  location,
  photo: MEDIA + encodeURIComponent(file),
  x: x || undefined,
  linkedin: linkedin || undefined,
  virtual: VIRTUAL.has(name),
}));

// Groups speaker locations into regions for the roster filter.
export function regionOf(location: string): string {
  const l = location.toLowerCase();
  if (/india|bengaluru|mumbai|delhi/.test(l)) return "India";
  if (/uae|dubai/.test(l)) return "Middle East";
  if (/singapore|japan|korea|hong kong|malaysia|philippines|australia/.test(l)) return "Asia-Pacific";
  if (/usa|united states|san francisco|new york/.test(l)) return "Americas";
  if (/nigeria/.test(l)) return "Africa";
  return "Europe";
}

export const REGIONS = ["India", "Middle East", "Asia-Pacific", "Europe", "Americas", "Africa"];

// Featured on the home lineup. Billing tiers are editorial, for layout only.
export const HEADLINERS = ["Lisa JY Tan", "Anish Mohammed", "Evan Luthra", "Ajeet Khurana", "Nadja Bester", "Kanishka Agiwal"];

/* ------------------------------------------------------------------ */
/* Audiences and figures                                                */
/* ------------------------------------------------------------------ */

export const AUDIENCES = [
  { name: "Startups", text: "Meet mentors, industry experts and investors, and move faster on the path to success." },
  { name: "Web3 enthusiasts", text: "For anyone excited about a decentralised future who wants to be part of the movement." },
  { name: "Developers", text: "Try the latest technology, meet global leaders, find clients and grow your network." },
  { name: "Investors", text: "Find promising projects, with founders flying in from around the world." },
  { name: "Policy makers", text: "See where governance meets technology, with solutions for finance, healthcare and e-governance." },
  { name: "Enterprises", text: "Find solutions that change how your business works, and meet regional authorities." },
  { name: "Academia & institutions", text: "Educators, students and researchers: see how blockchain and Web3 are reshaping industries." },
  { name: "Incubators & accelerators", text: "Pick up new insight, meet fellow catalysts and find the startups you want to back." },
];

// As reported on web3carnival.world; not independently verified.
export const FIGURES = [
  { value: "5000+", label: "Attendees" },
  { value: "1500+", label: "Potential Web3 startups" },
  { value: "1000+", label: "Web3 developers" },
  { value: "750+", label: "Partners" },
  { value: "500+", label: "KOLs" },
  { value: "250+", label: "Investors & accelerators" },
];

/* ------------------------------------------------------------------ */
/* Partners                                                             */
/* ------------------------------------------------------------------ */

export type Partner = { name: string; logo: string; href?: string };
const M = (f: string) => MEDIA + f;

export const PARTNER_GROUPS: { title: string; partners: Partner[] }[] = [
  {
    title: "Past sponsors",
    partners: [
      { name: "Brinc", logo: M("Brinc1.56a62acc.png"), href: "https://www.brinc.io/" },
      { name: "Soulverse", logo: M("thirdsponsor.fc60193d.jpeg"), href: "https://soulverse.us/" },
      { name: "Outdefine", logo: M("outdefine.5d938a9f.svg"), href: "https://www.outdefine.com/" },
      { name: "Verseatile", logo: M("versatile.8e2fed7c.png"), href: "https://www.verseatile.live/" },
      { name: "Bounce", logo: M("bounce.5e187b53.png"), href: "https://beta.letsbounce.gg/" },
      { name: "Safeverse", logo: M("safeverse.cd64c454.jpeg"), href: "https://safeverse.io/" },
      { name: "CasaNFT", logo: M("casanft.ae12e5c3.svg"), href: "https://www.casanft.com/" },
    ],
  },
  {
    title: "Payment & ticketing",
    partners: [
      { name: "CopperX", logo: M("CopperX.ed5b8ac3.svg"), href: "https://copperx.io/" },
      { name: "Paytm Insider", logo: M("paytmInsider.e57af19d.png"), href: "https://insider.in/" },
      { name: "Explara", logo: M("explaraLogo.406e789d.svg"), href: "https://www.explara.com/" },
    ],
  },
  {
    title: "Community partners",
    partners: [
      { name: "Nefto", logo: M("NeftoLogo.af8101b9.png"), href: "https://www.nefto.in/" },
      { name: "Codeate", logo: M("codeate.a206e904.png"), href: "https://www.codeate.in/" },
      { name: "Web3Kerala", logo: M("web3kerala.d649fbdb.png"), href: "https://web3kerala.com/" },
      { name: "Social3", logo: M("social3.449a9023.svg"), href: "https://app.social3.club/" },
      { name: "The Blockchain Hive", logo: M("theblockchainhive.86236e09.png"), href: "https://theblockchainhive.com/" },
      { name: "MetaKraft", logo: M("metakraft.39745fa6.svg"), href: "https://metakraft.live/" },
      { name: "GearFi", logo: M("gearfi.952f405c.png"), href: "https://www.gearfi.in/" },
      { name: "BuidlUp", logo: M("buidlup.e7c94cdf.png"), href: "https://www.buidlup.io/" },
      { name: "Collider", logo: M("Collider.aaae4e40.png"), href: "https://joincollider.com/" },
      { name: "SecureDApp", logo: M("securedapp.accbf994.svg"), href: "https://securedapp.io/" },
      { name: "Soclly", logo: M("soclly.a09d8cef.png"), href: "https://www.soclly.com/" },
      { name: "Zuraverse", logo: M("zuraverse.618eb7fb.png"), href: "https://zuraverse.xyz/" },
      { name: "Blockwee", logo: M("blockwee.22ae6026.png"), href: "https://blockwee.com/" },
      { name: "LawBlocks", logo: M("lawblocks.0e1bceb1.png"), href: "https://lawblocks.io/" },
      { name: "Hyderabad DAO", logo: M("hyddao.538ad6b4.png"), href: "https://www.hyderabaddao.com/" },
      { name: "Chainrisk", logo: M("chainrisk.0521d62e.png"), href: "https://www.chainrisk.cloud/" },
      { name: "Macha", logo: M("macha.27c388fd.png"), href: "https://www.macha.ai/" },
      { name: "Tribe Academy", logo: M("tribeacademy.f21b89d5.png"), href: "https://www.tribeacademy.in/" },
    ],
  },
  {
    title: "Media partners",
    partners: [
      { name: "BitcoinWorld", logo: M("BitcoinWorld.48ad5898.png"), href: "https://bitcoinworld.co.in/" },
      { name: "CoinsCapture", logo: M("CoinsCapture.77a514ee.svg"), href: "https://coinscapture.com/" },
      { name: "The News Crypto", logo: M("newscrypto.fcb21a41.png"), href: "https://thenewscrypto.com/" },
      { name: "Voice of Crypto", logo: M("voiceofcrypto.6825b0cd.png"), href: "https://voiceofcrypto.online/" },
      { name: "CryptoNewsZ", logo: M("CryptoNewsZ.d37432bc.svg"), href: "https://www.cryptonewsz.com/" },
      { name: "U.Today", logo: M("utoday.a9ad60ab.png"), href: "https://u.today/" },
      { name: "The Crypto Times", logo: M("cryptotimes.a4cb257e.svg"), href: "https://www.cryptotimes.io/" },
      { name: "Coin Edition", logo: M("coinedition.41ee4110.png"), href: "https://coinedition.com/" },
      { name: "Coinpedia", logo: M("coinspedia.c82d6a72.png"), href: "https://coinpedia.org/" },
      { name: "DroomDroom", logo: M("droom.b25e26b3.png"), href: "https://droomdroom.com/" },
      { name: "ICOholder", logo: M("icoholder.ce2201e7.png"), href: "https://icoholder.com/" },
      { name: "Coin Gabbar", logo: M("coingabbar.9dfbd7e3.png"), href: "https://www.coingabbar.com/" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Best-known companies connected to past editions                      */
/* ------------------------------------------------------------------ */

// Ordered roughly by company size. Each relation says exactly how the company
// is connected, taken from web3carnival.world. Only current roles are used;
// "ex-" affiliations (PwC, J.P. Morgan, Zebpay) are left out on purpose.
// Logos are from Wikimedia Commons (company marks) or web3carnival.world
// (partner files). Speaker employers did not sponsor; the UI says so.
export type Company = { name: string; relation: string; kind: "speaker" | "partner"; logo?: string };

export const COMPANIES: Company[] = [
  { name: "Amazon Web Services", logo: "/logos/aws.svg", relation: "Kanishka Agiwal, Head of Service Lines, India & South Asia", kind: "speaker" },
  { name: "Mastercard", logo: "/logos/mastercard.svg", relation: "Vinit Sinha, Director, Cybersecurity", kind: "speaker" },
  { name: "Accenture Song", logo: "/logos/accenture.svg", relation: "Prashant Kumar, Head of Generative AI, Growth Markets", kind: "speaker" },
  { name: "Coinbase", logo: "/logos/coinbase.svg", relation: "Kunal Kumar, Blockchain Researcher", kind: "speaker" },
  { name: "Ford Credit", logo: "/logos/ford.svg", relation: "Hariharan Ramakrishnan, Senior Engineering Manager", kind: "speaker" },
  { name: "OCBC Bank", logo: "/logos/ocbc.svg", relation: "Astha Yadav, Senior Blockchain Developer", kind: "speaker" },
  { name: "Paytm Insider", logo: "/logos/paytm-insider.png", relation: "Ticketing partner, 2023", kind: "partner" },
  { name: "TON", logo: "/logos/ton.svg", relation: "Hosted the private gala dinner, Bengaluru 2023", kind: "partner" },
  { name: "MetaMask", logo: "/logos/metamask.svg", relation: "Manbir Singh, Developer Community Manager", kind: "speaker" },
  { name: "dYdX Foundation", relation: "Karan Ambwani, India & MENA Lead", kind: "speaker" },
  { name: "Swirlds", relation: "Zenobia Godschalk, SVP of Communications", kind: "speaker" },
  { name: "CoinSwitch Ventures", relation: "Parth Chaturvedi, Investments Lead", kind: "speaker" },
  { name: "Brinc", logo: "/logos/brinc.png", relation: "Sponsor, and host of Demo Night 2023", kind: "partner" },
  { name: "Secret Foundation", relation: "Popoola Kayode Joseph, Africa Lead", kind: "speaker" },
  { name: "Blockchain Founders Fund", relation: "Vidhi Doshi, Senior Associate", kind: "speaker" },
  { name: "Mudrex", relation: "Alankar Saxena, CTO & Co-founder", kind: "speaker" },
  { name: "Panther Protocol", relation: "Anish Mohammed, CTO & Chief Scientist", kind: "speaker" },
  { name: "QuillAudits", relation: "Preetam Rao, CEO", kind: "speaker" },
];

// Partner logos for the second marquee row, all from web3carnival.world.
export const PARTNER_LOGOS = [
  { name: "Brinc", logo: "/logos/brinc.png", relation: "Sponsor" },
  { name: "Paytm Insider", logo: "/logos/paytm-insider.png", relation: "Ticketing partner" },
  { name: "CopperX", logo: "/logos/copperx.svg", relation: "Crypto payment partner" },
  { name: "Explara", logo: "/logos/explara.svg", relation: "Ticketing partner" },
  { name: "Outdefine", logo: "/logos/outdefine.svg", relation: "Sponsor" },
  { name: "Soulverse", logo: "/logos/soulverse.jpeg", relation: "Sponsor" },
  { name: "Safeverse", logo: "/logos/safeverse.jpeg", relation: "Sponsor" },
  { name: "Verseatile", logo: "/logos/verseatile.png", relation: "Sponsor" },
  { name: "CasaNFT", logo: "/logos/casanft.svg", relation: "Sponsor" },
  { name: "U.Today", logo: "/logos/utoday.png", relation: "Media partner" },
  { name: "The Crypto Times", logo: "/logos/cryptotimes.svg", relation: "Media partner" },
  { name: "BitcoinWorld", logo: "/logos/bitcoinworld.png", relation: "Media partner" },
];

export const INVOLVEMENT = [
  { id: "attend", title: "Attend", text: "Tickets for the next edition are not on sale yet. Join the list and we will tell you the moment they are.", href: "/register", cta: "Get on the list", primary: true },
  { id: "speak", title: "Speak", text: "Share what you are building with founders, developers and investors from across the world.", href: LINKS.forms.speaker, cta: "Apply to speak" },
  { id: "partner", title: "Partner", text: "Sponsor the next edition and put your brand in front of the people building Web3.", href: LINKS.forms.sponsor, cta: "Apply to sponsor" },
  { id: "demo", title: "Demo", text: "Startups: apply for Super Demo and pitch to investors, incubators and accelerators.", href: LINKS.forms.superDemo, cta: "Apply to demo" },
  { id: "media", title: "Media", text: "Cover the carnival as a media partner.", href: LINKS.forms.media, cta: "Apply as media" },
  { id: "community", title: "Community", text: "Bring your community in as a community partner.", href: LINKS.forms.community, cta: "Apply as a community" },
  { id: "volunteer", title: "Volunteer", text: "Help run the carnival and meet everyone behind the scenes.", href: LINKS.forms.volunteer, cta: "Apply to volunteer" },
  { id: "affiliate", title: "Affiliate", text: "Share Web3 Carnival with your network through the affiliate programme.", href: LINKS.forms.affiliate, cta: "Join as an affiliate" },
];

export const NAV = [
  { href: "/event", label: "Next edition" },
  { href: "/programme", label: "Programme" },
  { href: "/speakers", label: "Speakers" },
  { href: "/archive", label: "Past stops" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/partners", label: "Partners" },
];
