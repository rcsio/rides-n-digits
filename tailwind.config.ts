import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      aspectRatio: {
        card: "1.5857",
        "4/3": "4 / 3",
      },
    },
  },
};
export default config;
