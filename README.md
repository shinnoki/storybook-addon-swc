# storybook-addon-swc

[![npm version](https://badge.fury.io/js/storybook-addon-swc.svg)](https://badge.fury.io/js/storybook-addon-swc)
[![codecov](https://codecov.io/gh/Karibash/storybook-addon-swc/branch/main/graph/badge.svg)](https://codecov.io/gh/Karibash/storybook-addon-swc)
[![license](https://img.shields.io/npm/l/storybook-addon-swc.svg)](https://img.shields.io/npm/l/storybook-addon-swc)
[![Github](https://img.shields.io/github/followers/Karibash?label=Follow&logo=github&style=social)](https://github.com/Karibash?tab=followers)
[![Twitter](https://img.shields.io/twitter/follow/Karibash?label=Follow&style=social)](https://twitter.com/intent/follow?screen_name=Karibash)

Storybook addon that improves build time by building with swc.

## 🚀 Installation

```
$ npm install -D storybook-addon-swc
```

## 👏 Getting Started

Edit the `.storybook/main.js` file and register the addon.

```js
module.exports = {
  addons: [
    'storybook-addon-swc',
  ],
};
```

## 🔧 Configurations

Additional configuration options can be passed as needed.

```js
module.exports = {
  addons: [
    {
      name: 'storybook-addon-swc',
      options: {
        enable: true,
        enableSwcLoader: true,
        enableSwcMinify: true,
        swcLoaderOptions: {},
        swcMinifyOptions: {},
      },
    },
  ],
};
```

### Options

| Name               | Description                                                                                 | Type                                                     | Default Value                                                                           |
|--------------------|---------------------------------------------------------------------------------------------|----------------------------------------------------------|-----------------------------------------------------------------------------------------|
| `enable`           | If set to false, this add-on will be disabled.                                              | boolean                                                  | `true`                                                                                  |
| `enableSwcLoader`  | If set to false, swc-loader is disabled and babel-loader is used.                           | boolean                                                  | `true`                                                                                  |
| `enableSwcMinify`  | If set to false, minify using swc is disabled and minify using conventional terser is used. | boolean                                                  | `true`                                                                                  |
| `swcLoaderOptions` | Options for swc loader.                                                                     | [object](https://swc.rs/docs/configuration/compilation)  | [see](https://github.com/Karibash/storybook-addon-swc/blob/master/src/index.ts#L19-L32) |
| `swcMinifyOptions` | Options for swc minify.                                                                     | [object](https://swc.rs/docs/configuration/minification) | [see](https://github.com/Karibash/storybook-addon-swc/blob/master/src/index.ts#L33-L37) |

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

Feel free to check [issues page](https://github.com/Karibash/storybook-addon-swc/issues) if you want to contribute.

## 📝 License

Copyright © 2020 [@Karibash](https://twitter.com/karibash).

This project is [```MIT```](https://github.com/Karibash/storybook-addon-swc/blob/master/LICENSE) licensed.
