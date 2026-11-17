import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://codetocost.com/",
    title: "CodeToCost",
    description:
      "Clear Architecture, Real Math, Zero Fluff. Real cost breakdowns of SaaS vs self-hosting — every number simulated, nothing guessed.",
    author: "CodeToCost",
    profile: "https://codetocost.com/about",
    ogImage: "og.png",
    lang: "en",
    timezone: "UTC",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 6,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
    toc: true,
  },
  socials: [
    { name: "youtube", url: "https://www.youtube.com/@CodeToCost" },
    { name: "x", url: "https://x.com/CodeToCost" },
    { name: "linkedin", url: "https://www.linkedin.com/company/codetocost/" },
    { name: "github", url: "https://github.com/codetocost" },
  ],
  shareLinks: [
    { name: "x", url: "https://x.com/intent/post?url=" },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/sharing/share-offsite/?url=",
    },
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20analysis&body=" },
  ],
});
