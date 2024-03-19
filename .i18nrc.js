const { description } = require('./package.json');
const { defineConfig } = require('@arietta-studio/i18n-cli');

module.exports = defineConfig({
  reference: description,
  entry: 'public/locales/en',
  entryLocale: 'en',
  output: 'public/locales',
  outputLocales: ['lt'],
  splitToken: 2500,
  temperature: 0,
  modelName: 'gpt-3.5-turbo',
});
