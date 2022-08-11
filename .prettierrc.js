module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: '**/*.json',
      options: {
        parser: 'json',
      },
    },
    {
      files: '**/*.{css,scss}',
      options: {
        parser: 'css',
      },
    },
  ],
};
