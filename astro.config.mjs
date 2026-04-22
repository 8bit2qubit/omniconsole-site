import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://8bit2qubit.github.io",
  base: "/omniconsole-site",
  trailingSlash: "ignore",
  integrations: [icon()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-TW", "zh-CN"],
    routing: { prefixDefaultLocale: false },
  },
});
