module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
    '../supplemental/**/*.stories.mdx'
  ],
  addons: [
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-storysource',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-measure',
    '@storybook/addon-actions',
    '@storybook/addon-outline',
    "@storybook/addon-notes",
    "@storybook/addon-options",
    "@storybook/addon-knobs",
  ],
  framework: '@storybook/react',
}
