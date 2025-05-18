import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"], // 경로는 프로젝트에 맞게
  theme: {
    extend: {
      colors: {
        main: "var(--color-main)",
        font: "var(--color-font)",
        "font-gray": "var(--color-font-gray)",
        correct: "var(--color-correct)",
        incorrect: "var(--color-incorrect)",
        "correct-bg": "var(--color-correct-bg)",
        "incorrect-bg": "var(--color-incorrect-bg)",
        background: "var(--color-background)",
        tag: "var(--color-tag)",
        border: "var(--color-border)",
        "sub-text": "var(--color-sub-text)",
        "modal-bg": "var(--color-modal-bg)",
      },
      fontFamily: {
        "regular-18": "var(--font-regular-18)",
        "regular-14": "var(--font-regular-14)",
        "sb-18": "var(--font-sb-18)",
        "md-12": "var(--font-md-12)",
      },
    },
  },
};

export default config;
