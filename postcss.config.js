/* global module */
module.exports = {
  input: 'index.css',
  output: 'build/ticketfly-css-box-objects.css',

  use: [
    'postcss-import',
    'postcss-cssnext'
  ]
};
