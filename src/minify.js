const path = require('path');
const minify = require('@node-minify/core');
const gcc = require('@node-minify/google-closure-compiler');

// Using Google Closure Compiler
minify({
  compressor: gcc,
  input: './libphonenumber/javascript/i18n/phonenumbers/demo-compiled.js',
  output: path.resolve(__dirname, '../dist/libphonenumber.js'),
  callback: function(err, min) {
    console.log(err)
  }
});
