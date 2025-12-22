import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://tanit-project.github.io',
  output: 'static',
  prefetch: true,
  integrations: [
    tailwind(),
    sitemap(),
    icon({
      include: {
        ph: [
          "star-duotone",
          // Core icons
          "star",
          "images",
          "image",
          "calendar",
          "calendar-check",
          "calendar-star",
          "gift",
          "balloon",
          "cpu",
          "shopping-bag",
          "chart-line-up",
          "check-circle",
          "lightbulb",
          "github-logo",
          "linkedin-logo",
          "user",
          "users-three",
          "envelope",
          "file-text",
          "file-py",
          "projector-screen",
          "code",
          "video",
          "speaker-simple-high",
          "info",
          // Animation & Action icons
          "play",
          "play-circle",
          "rocket-launch",
          "lightning",
          "sparkle",
          "magic-wand",
          "caret-down",
          "arrow-down",
          "arrow-right",
          "upload-simple",
          "clock",
          // UI icons
          "x-circle",
          "currency-dollar",
          "paint-brush",
          "brain",
          "robot",
          "atom",
          "hash",
          "text-aa",
          "whatsapp-logo",
          "instagram-logo",
          "storefront",
          "handbag",
          "t-shirt",
          "graduation-cap",
          // Duotone variants
          "lightning-duotone",
          "globe-duotone",
          "users-duotone",
          "buildings-duotone",
          "briefcase-duotone",
          "check-circle-duotone",
          "x-circle-duotone",
          "code-duotone",
          "puzzle-piece-duotone",
          "brain-duotone",
          "shield-check-duotone",
          "linkedin-logo-duotone",
          "twitter-logo-duotone",
          "github-logo-duotone",
          "currency-dollar-duotone",
          "arrow-left-duotone",
          "file-search",
          "layout-duotone",
          "calendar-duotone",
          "clock-duotone",
          "link-duotone",
          "check-square-duotone",
          "credit-card-duotone",
          "paint-brush-duotone",
          "chart-line-duotone",
          "google-logo-duotone",
          "lock-key-duotone",
          "certificate-duotone",
          "lifebuoy-duotone",
          "handshake-duotone",
          // Hero component icons
          "cursor",
          "dots-three",
          "heart",
          "chat-circle",
          "paper-plane-tilt",
          "bookmark-simple"
        ]
      }
    }),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
