import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-onboarding"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    // typescript 파일을 babel-loader로 처리하도록 설정
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [
              require.resolve("@babel/preset-react"),
              [
                require.resolve("@babel/preset-typescript"),
                {
                  allExtensions: true,
                  isTSX: true,
                },
              ],
            ],
          },
        },
      ],
    });
    return config;
  },
};

export default config;
