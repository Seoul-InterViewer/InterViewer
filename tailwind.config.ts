import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"], // 경로는 프로젝트에 맞게
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          pc: "1260px",
          mobile: "768px",
        },
      },
      colors: {
        main: "#F5C02F",
        font: "#111",
        correct: "#4DD943",
        incorrect: "#ff0303",
        correctBg: "#ECFFE4",
        incorrectBg: "#FDE9E9",
        background: "#fff",
        tag: "#EAEAEA",
        border: "#D9D9D9",
        subText: "#AAA",
        modalBg: "rgba(0, 0, 0, 0.4)",
        fontGray: "#545454",
      },
      fontSize: {
        // Bold
        bold56: ["3.5rem", { fontWeight: "bold" }],
        bold48: ["3rem", { fontWeight: "bold" }],
        bold40: ["2.5rem", { fontWeight: "bold" }],
        bold38: ["2.375rem", { fontWeight: "bold" }],
        bold32: ["2rem", { fontWeight: "bold" }],
        bold18: ["1.125rem", { fontWeight: "bold" }],
        bold14: ["0.875rem", { fontWeight: "bold" }],

        // Semibold
        sb28: ["1.75rem", { fontWeight: "600" }],
        sb24: ["1.5rem", { fontWeight: "600" }],
        sb20: ["1.25rem", { fontWeight: "600" }],
        sb18: ["1.125rem", { fontWeight: "600" }],
        sb16: ["1rem", { fontWeight: "600" }],
        sb14: ["0.875rem", { fontWeight: "600" }],
        sb12: ["0.75rem", { fontWeight: "600" }],

        // Regular
        regular24: ["1.5rem", { fontWeight: "400" }],
        regular18: ["1.125rem", { fontWeight: "400" }],
        regular14: ["0.875rem", { fontWeight: "400" }],

        // Medium
        medium12: ["0.75rem", { fontWeight: "500" }],
        medium10: ["0.625rem", { fontWeight: "500" }],
        medium8: ["0.5rem", { fontWeight: "500" }],
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".flex-center": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        ".hover-filter": {
          filter: "brightness(0.7)",
          transition: "filter ease-in 0.3s",
        },
        ".absolute-center": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
        ".border": {
          border: "1px solid #D9D9D9",
        },
      });
    }),
  ],
};

export default config;
