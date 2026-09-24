import { ArrowDown, Ship, Sparkles } from "lucide-react";
import { person } from "~/config";

export function Hero({ birthday, age }: { birthday: boolean; age: number }) {
  return (
    <section id="top" className="shell relative overflow-hidden pb-10 pt-10 sm:pb-14 sm:pt-14">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-in relative z-10">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="chip bg-[#bae6fd]">
              <Ship className="size-3.5" />
              {person.title}
            </span>
            <span className="chip bg-[#fef08a]">
              <Sparkles className="size-3.5" />
              {birthday ? `Birthday today · ${age}` : `Turning ${age + 1}`}
            </span>
            <span className="chip bg-[#ccfbf1]">Home now</span>
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            From {person.from}
          </p>

          <h1 className="font-display text-[clamp(2.6rem,8vw,4.75rem)] font-bold leading-[0.95] tracking-tight">
            Happy Birthday,{" "}
            <span className="text-gradient">{person.nickname}</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {person.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#countdown" className="btn-primary">
              See countdown
              <ArrowDown className="size-4" />
            </a>
            <a href="#gallery" className="btn-secondary">
              See photos
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="float-a absolute -left-3 top-6 z-20 hidden rounded-2xl border-[1.5px] border-line bg-[#fef08a] px-3 py-2 text-xs font-semibold shadow-[3px_3px_0_#1c1917] sm:block">
            Stay safe
          </div>
          <div className="float-b absolute -right-2 bottom-16 z-20 hidden rounded-2xl border-[1.5px] border-line bg-[#bae6fd] px-3 py-2 text-xs font-semibold shadow-[3px_3px_0_#1c1917] sm:block">
            Home now
          </div>

          <div className="ink-card relative overflow-hidden bg-[#0c4a6e] p-2 sm:p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(var(--radius-card)-0.35rem)]">
              <img
                src="/photos/bridge.jpg"
                alt="Moin Bhai on the ship bridge"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white sm:p-5">
                <p className="font-display text-xl font-bold sm:text-2xl">
                  Works on ships.
                </p>
                <p className="mt-1 text-sm text-sky-100">
                  Celebrating at home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WaveDivider />
    </section>
  );
}

function WaveDivider() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 overflow-hidden opacity-40" aria-hidden>
      <svg
        className="wave-strip h-full w-[200%]"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
      >
        <path
          fill="#0ea5e9"
          d="M0,20 C120,35 240,5 360,20 C480,35 600,5 720,20 C840,35 960,5 1080,20 C1200,35 1320,5 1440,20 L1440,40 L0,40 Z"
        />
        <path
          fill="#0ea5e9"
          transform="translate(1440,0)"
          d="M0,20 C120,35 240,5 360,20 C480,35 600,5 720,20 C840,35 960,5 1080,20 C1200,35 1320,5 1440,20 L1440,40 L0,40 Z"
        />
      </svg>
    </div>
  );
}
