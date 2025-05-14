import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettierConfig from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // 공통 룰
  {
    rules: {
      // var쓰지 말기
      "no-var": "error",
      // 생성자나 클래스는 반드시 대문자로 시작 해야함.
      "new-cap": ["error", { newIsCap: true }],
    },
  },

  // 일반 파일에서는 화살표 함수 권장
  {
    files: ["**/*.ts", "**/*.tsx"],
    excludedFiles: ["app/**/layout.tsx", "app/**/page.tsx"],
    rules: {
      "prefer-arrow-callback": ["warn"],
    },
  },

  // layout/page 파일에서는 화살표 함수 규칙 해제
  {
    files: ["app/**/layout.tsx", "app/**/page.tsx"],
    rules: {
      // 함수 선언 명시
      "@typescript-eslint/explicit-function-return-type": "error",
      // 반드시 function 선언
      "func-style": ["error", "declaration", { allowArrowFunctions: false }],
      // export default () => {} 금지
      "import/no-anonymous-default-export": "error",
    },
  },

  // Prettier와 충돌 방지
  {
    name: "prettier",
    rules: {
      ...prettierConfig.rules,
    },
  },
];

export default eslintConfig;
