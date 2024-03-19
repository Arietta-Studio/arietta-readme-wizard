const config = require('@arietta-studio/lint').stylelint;

module.exports = {
  ...config,
  rules: {
    'selector-id-pattern': null,
  },
};
