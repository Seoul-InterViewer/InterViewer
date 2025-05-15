import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"], // 경로는 프로젝트에 맞게
  theme: {
    extend: {
      colors: {
        "o-w3": "rgba(255, 255, 255, 0.3)",
        "dark-gray": "#87879f",
        purple: "#8006fd",
        red: "#ff2121",
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
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
        ".border-bottom-light": {
          borderBottom: "1px solid rgba(255,255,255,0.3)",
        },
      });
    }),
  ],
};

export default config;
