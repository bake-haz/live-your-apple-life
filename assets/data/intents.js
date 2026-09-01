/*
 * Live Your Apple Life — APPROVED 8 Life Intents (single source of truth)
 *
 * These represent USER INTENT / LIFE STATE, not technical categories.
 * A visitor should feel "this understands what I'm trying to make better"
 * — not "another website full of iPhone tips."
 *
 * This is the ONLY place the 8 Life Intents are defined.
 * - index.html renders the home grid from this list.
 * - site.js renders the footer from this list.
 * - Each intent page lives at intents/<slug>.html.
 *
 * To change the structure later, edit here and the pages — do not scatter
 * the IA across many files.
 */
window.LIFE_INTENTS = [
  {
    slug: "make-my-iphone-look-better",
    title: "I want my iPhone to look better",
    tagline: "A clean Home Screen, a wallpaper you love, and a device that feels calm to look at.",
    intro:
      "Your iPhone is something you see dozens of times a day. Making it look better isn't vanity — " +
      "it's about a Home Screen that feels calm instead of cluttered, and a device that feels like it " +
      "belongs to you. We'll help you get there without buying anything."
  },
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
  },
  {
    slug: "apple-ecosystem",
    title: "I want my Apple devices to work better together",
    tagline: "When iPhone, Mac, iPad, and Watch actually help — not just because they can.",
    intro:
      "If you have more than one Apple device, they can take small burdens off your day: start here, finish " +
      "there, find anything anywhere. We'll focus on the Handoff and Continuity features that genuinely make " +
      "life easier — and be honest about when the ecosystem isn't worth chasing."
  }
];
