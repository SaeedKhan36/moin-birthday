/**
 * Edit this file to change names, birthday date, photos, and wishes.
 * Date format: YYYY-MM-DD
 */
export const person = {
  firstName: "Moin Bhai",
  nickname: "Moin Bhai",
  fullName: "Moin Bhai",
  title: "Merchant Navy",
  /** Put his real birthday here (year-month-day) */
  birthDate: "1992-09-25",
  from: "your little brother",
  tagline:
    "Another year of you, Bhai. Thank you for every mile you sail, and every day you come home to us.",
};

export const photos = [
  {
    src: "/photos/ship-deck.jpg",
    alt: "Moin Bhai on the ship deck",
    title: "On the ship",
    note: "Working day on the tanker. Sea and sky behind him.",
    tag: "At sea",
  },
  {
    src: "/photos/sunset-deck.jpg",
    alt: "Moin Bhai on the ship at sunset",
    title: "Sunset on deck",
    note: "Quiet evening after work. Soft light, open water.",
    tag: "At sea",
  },
  {
    src: "/photos/bridge.jpg",
    alt: "Moin Bhai on the ship bridge",
    title: "On the bridge",
    note: "Where he keeps watch. Radar, maps, and the road ahead.",
    tag: "At sea",
  },
  {
    src: "/photos/casual.jpg",
    alt: "Moin Bhai at home",
    title: "Back at home",
    note: "Shore leave mode. Same smile, no uniform needed.",
    tag: "Home",
  },
  {
    src: "/photos/gym.jpg",
    alt: "Moin Bhai at the gym",
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
    from: "Your little brother",
    text: "Happy birthday Moin Bhai. Growing up with you made me stronger. You left home for the sea, but you never left my heart.",
  },
  {
    from: "Always your brother",
    text: "I miss you when the ship takes you far. Every time you come home, the house feels full again. Stay safe. Come back soon.",
  },
  {
    from: "With love",
    text: "You are not just my big brother. You are my quiet hero. Proud of the man you are. Happy birthday.",
  },
] as const;

/** Short emotional notes from brother to brother */
export const brotherTalks = [
  {
    title: "When you are at sea",
    text: "Bhai, when you are on the ship I think about you every day. I know the work is hard and the nights are long. Please take care of yourself. We are waiting for you at home.",
  },
  {
    title: "When you come home",
    text: "The best days are when you walk through the door. Same smile. Same jokes. For a while the sea feels far away, and we are just two brothers again.",
  },
  {
    title: "What I never say enough",
    text: "Thank you for being my big brother. Thank you for the advice, the scoldings, and the love. I do not say it often, but I am proud of you. Always.",
  },
  {
    title: "For this birthday",
    text: "This website is my small gift. I cannot sail a ship like you, but I can build this for you. Happy birthday, Moin Bhai. May this year bring you peace, health, and more days at home.",
  },
] as const;

export const nav = [
  { href: "#countdown", label: "Countdown" },
  { href: "#timers", label: "Timers" },
  { href: "#brother", label: "Brother" },
  { href: "#gallery", label: "Photos" },
  { href: "#wishes", label: "Wishes" },
] as const;
