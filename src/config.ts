/**
 * Edit this file to change names, birthday date, photos, and wishes.
 * Date format: YYYY-MM-DD
 */
export const person = {
  firstName: "Moin",
  nickname: "Moin Bhai",
  fullName: "Moin",
  title: "Merchant Navy",
  /** Put his real birthday here (year-month-day) */
  birthDate: "1992-09-25",
  from: "your little brother",
  tagline: "He works in the merchant navy. Right now he is home.",
};

export const photos = [
  {
    src: "/photos/ship-deck.jpg",
    alt: "Moin on the ship deck",
    title: "On the ship",
    note: "Working day on the tanker. Sea and sky behind him.",
    tag: "At sea",
  },
  {
    src: "/photos/sunset-deck.jpg",
    alt: "Moin on the ship at sunset",
    title: "Sunset on deck",
    note: "Quiet evening after work. Soft light, open water.",
    tag: "At sea",
  },
  {
    src: "/photos/bridge.jpg",
    alt: "Moin on the ship bridge",
    title: "On the bridge",
    note: "Where he keeps watch. Radar, maps, and the road ahead.",
    tag: "At sea",
  },
  {
    src: "/photos/casual.jpg",
    alt: "Moin at home",
    title: "Back at home",
    note: "Shore leave mode. Same smile, no uniform needed.",
    tag: "Home",
  },
  {
    src: "/photos/gym.jpg",
    alt: "Moin at the gym",
    title: "Gym time",
    note: "Staying strong on land too, not only on the ship.",
    tag: "Home",
  },
] as const;

export const milestones = [
  {
    label: "Job",
    value: "Merchant Navy",
    hint: "He works on ships",
  },
  {
    label: "Now",
    value: "Home",
    hint: "Home with family for now",
  },
  {
    label: "From",
    value: "Brother",
    hint: "This site is a birthday gift",
  },
] as const;

export const wishes = [
  {
    from: "Your brother",
    text: "Happy birthday Moin Bhai. You work hard on ships all year. Today we celebrate you at home. Proud of you.",
  },
  {
    from: "Family",
    text: "Happy birthday. Stay safe at sea, and enjoy your time at home. Love you.",
  },
  {
    from: "Home",
    text: "Wishing you a great year ahead. Come home soon, always.",
  },
] as const;

export const nav = [
  { href: "#countdown", label: "Countdown" },
  { href: "#timers", label: "Timers" },
  { href: "#gallery", label: "Photos" },
  { href: "#wishes", label: "Wishes" },
] as const;
