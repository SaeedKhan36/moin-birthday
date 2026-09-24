import { Heart, MessageCircleHeart } from "lucide-react";
import { brotherTalks, person } from "~/config";

export function BrotherTalk() {
  return (
    <section id="brother" className="shell py-14 sm:py-20">
      <div className="reveal mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
          Brother to brother
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Words I want to <span className="text-gradient">tell you</span>
        </h2>
        <p className="mt-3 text-muted">
          From your little brother. Simple words from the heart.
        </p>
      </div>

      <div className="reveal mx-auto mt-10 max-w-3xl">
        <div className="ink-card overflow-hidden bg-gradient-to-br from-[#fff8e7] via-white to-[#e0f2fe] p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full border-[1.5px] border-line bg-[#fda4af] shadow-[2px_2px_0_#1c1917]">
              <MessageCircleHeart className="size-5" strokeWidth={2.25} />
            </span>
            <div>
              <p className="font-display text-lg font-bold">Dear {person.nickname},</p>
              <p className="text-sm text-muted">A letter from home</p>
            </div>
          </div>

          <p className="text-[1.05rem] leading-relaxed text-muted">
            Today is your birthday, and I keep thinking about us. You are older.
            You went to the sea. I stayed and learned to code. Different paths,
            same blood. Distance never made you less my brother. It only made
            me miss you more.
          </p>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
            When you are away, I look at your photos and feel proud. When you
            are home, I feel lucky. Thank you for being the brother I look up to.
            Happy birthday. I love you.
          </p>
          <p className="mt-6 font-display text-base font-bold">
            Your little brother
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {brotherTalks.map((talk, i) => (
          <article
            key={talk.title}
            className="reveal ink-card flex flex-col bg-white p-5 sm:p-6"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-full border-[1.5px] border-line bg-[#fef08a]">
                <Heart className="size-3.5" strokeWidth={2.25} />
              </span>
              <h3 className="font-display text-base font-bold tracking-tight sm:text-lg">
                {talk.title}
              </h3>
            </div>
            <p className="flex-1 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
              {talk.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
