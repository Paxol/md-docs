import type { Config } from "tailwindcss";

import baseConfig from "@md-docs/tailwind-config";

export default {
  content: ["./src/**/*.tsx"],
  presets: [baseConfig],
} satisfies Config;
