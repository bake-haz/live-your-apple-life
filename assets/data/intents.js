/*
 * Live Your Apple Life — APPROVED 6 Life Intents (single source of truth)
 *
 * These represent USER INTENT / LIFE STATE, not technical categories.
 * A visitor should feel "this understands what I'm trying to make better"
 * — not "another website full of iPhone tips."
 *
 * This is the ONLY place the 6 Life Intents are defined.
 * - index.html renders the home grid from this list.
 * - site.js renders the footer from this list.
 * - Each intent page lives at intents/<slug>.html.
 *
 * IA note: "make-my-iphone-look-better" was merged into "make-it-mine"
 * (appearance is part of making a device feel personal). "apple-ecosystem"
 * is defined but intentionally not listed here, so it stays out of the main
 * navigation until it has real content. Their pages still exist on disk.
 *
 * To change the structure later, edit here and the pages — do not scatter
 * the IA across many files.
 */
window.LIFE_INTENTS = [
  {
    slug: "protect-my-iphone",
    title: "I want to protect my new iPhone",
    tagline: "You just spent real money. Here's how to keep it safe — without overbuying.",
    intro:
      "A new iPhone feels precious because it is. The good news: you don't need every accessory on the " +
      "shelf. We'll help you decide what actually protects your phone, and what's just noise — balancing " +
      "safety, size, looks, and how it feels in your hand. (Guidance only — this is not a shop.)"
  },
  {
    slug: "make-it-mine",
    title: "I want to make my iPhone more personal",
    tagline: "Small touches that make it feel like yours, not a default phone.",
    intro:
      "Personalization isn't only about settings. It's the feeling that this device reflects you — your " +
      "style, your rhythm, your taste. We'll show low-effort ways to give your iPhone personality, so it " +
      "feels less like a tool and more like yours."
  },
  {
    slug: "new-iphone",
    title: "I just got a new iPhone",
    tagline: "The few things that matter on day one — and what can happily wait.",
    intro:
      "A new iPhone is exciting, and easy to overthink. You don't need to change everything on day one. " +
      "We'll walk through first setup, moving from an old iPhone or Android, and the small choices that " +
      "matter — while helping you skip the purchases and settings you don't need yet."
  },
  {
    slug: "protect-my-data",
    title: "I'm worried about losing my data",
    tagline: "Photos, messages, accounts — keep them safe so you can stop worrying.",
    intro:
      "The fear is real: one dropped phone, and years of photos could be gone. The reassuring part is that " +
      "a little setup removes almost all of that risk. We'll help you back up the things that matter, move " +
      "to a new device without losing anything, and feel calm about your data again."
  },
  {
    slug: "old-iphone",
    title: "I want to figure out what to do with my old iPhone",
    tagline: "Sell it, trade it in, keep it, or give it away — decide with confidence.",
    intro:
      "An old iPhone still has value, either to you or someone else. Whether you want cash, a backup phone, " +
      "or to pass it on, we'll help you choose and then erase it safely so your data never leaves with it."
  },
  {
    slug: "make-my-iphone-work-better",
    title: "I want my iPhone to work better for me",
    tagline: "Less clutter, fewer distractions, and a phone that fits your day.",
    intro:
      "Sometimes the phone that's supposed to help ends up adding noise — notifications, battery anxiety, a " +
      "Home Screen that fights you. We'll help you quiet the clutter and tune a few settings so daily use " +
      "feels more comfortable and less stressful."
  }
];
