import { Configuration } from 'webpack';
import { Config, JsMinifyOptions } from '@swc/core';

import { replaceLoader, replaceMinimizer } from './transformers';

export interface StoryBookAddonSwcOptions {
  enable: boolean;
  enableSwcLoader: boolean;
  enableSwcMinify: boolean;
  swcLoaderOptions: Config;
  swcMinifyOptions: JsMinifyOptions;
}

const defaultOptions: StoryBookAddonSwcOptions = {
  enable: true,
  enableSwcLoader: true,
  enableSwcMinify: true,
  swcLoaderOptions: {
    sourceMaps: true,
    jsc: {
      parser: {
        syntax: 'typescript',
        tsx: true,
      },
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  },
  swcMinifyOptions: {},
};

const includeSwcConfig = (config: Configuration, options: StoryBookAddonSwcOptions): Configuration => {
  if (!options.enable) return config;

  const transformers = [];
  if (options.enableSwcLoader) transformers.push(replaceLoader(options.swcLoaderOptions));
  if (options.enableSwcMinify) transformers.push(replaceMinimizer(options.swcMinifyOptions));

  return transformers.reduce((previous, current) => {
    return current(previous);
  }, config);
};

export const webpack = (config: Configuration, options: Partial<StoryBookAddonSwcOptions>): Configuration => {
  const mergedOptions: StoryBookAddonSwcOptions = { ...defaultOptions, ...options };
  return includeSwcConfig(config, mergedOptions);
};

export const managerWebpack = (config: Configuration, options: Partial<StoryBookAddonSwcOptions>): Configuration => {
  const mergedOptions: StoryBookAddonSwcOptions = { ...defaultOptions, ...options };
  return includeSwcConfig(config, mergedOptions);
};
