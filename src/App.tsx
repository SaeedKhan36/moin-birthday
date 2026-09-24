import { Confetti } from "~/components/Confetti";
import { Countdown } from "~/components/Countdown";
import { Gallery } from "~/components/Gallery";
import { Hero } from "~/components/Hero";
import { Nav } from "~/components/Nav";
import { Footer, Story, Wishes } from "~/components/Story";
import { Timers } from "~/components/Timers";
import { person } from "~/config";
import { useBirthdayClock, useReveal } from "~/hooks";

export default function App() {
  const clock = useBirthdayClock(person.birthDate);
  useReveal();

  return (
    <div className="landing min-h-screen">
      <Confetti active={clock.birthday} />
      <Nav />
      <main>
        <Hero birthday={clock.birthday} age={clock.age} />
        <Countdown
          birthday={clock.birthday}
          turning={clock.turning}
          countdown={clock.countdown}
          until={clock.until}
        />
        <Timers lived={clock.lived} age={clock.age} />
        <Story />
        <Gallery />
        <Wishes />
      </main>
      <Footer />
    </div>
  );
}
