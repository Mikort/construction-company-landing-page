import type { StorybookConfig } from "@storybook/react-webpack5";
import { Configuration } from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";

// noinspection SpellCheckingInspection
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["..\\public"],
  webpackFinal: async (config, { configType }) => {
    const cssRule = extractRule(config, /\.module\.css$/);
    if (cssRule === undefined) {
      return config;
    }

    cssRule.use = [
      require.resolve("style-loader"),
      {
        loader: require.resolve("css-loader"),
        options: {
          importLoaders: 1,
          sourceMap: true,
          modules: {
            mode: "local",
            localIdentName: "[local]--[hash:base64:5]",
          },
        },
      },
    ];

    return config;
  },
};

// TODO tree search rule -> oneOf[] | test[]
function extractRule(
  config: Configuration,
  test: RegExp
): RuleSetRule | undefined {
  if (config.module?.rules == null) {
    return undefined;
  }

  const testString = String(test);

  for (const rule of config.module.rules) {
    // @ts-ignore
    if (rule.oneOf == null) {
      continue;
    }

    // @ts-ignore
    const oneOfRule = rule.oneOf.find((oneOf) => {
      const oneOfTestString = String(oneOf.test);
      return oneOfTestString == testString;
    });

    if (oneOfRule != null) {
      return oneOfRule;
    }
  }

  return undefined;
}

export default config;
