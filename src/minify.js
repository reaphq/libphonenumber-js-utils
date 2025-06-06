const path = require('path');
const minify = require('@node-minify/core');
const gcc = require('@node-minify/google-closure-compiler');
const fs = require('fs');

// Read the intlTelInputUtils file
const utilsContent = fs.readFileSync(path.resolve(__dirname, 'intlTelInputUtils.js'), 'utf8');

// Using Google Closure Compiler
minify({
  compressor: gcc,
  input: './libphonenumber/javascript/i18n/phonenumbers/demo-compiled.js',
  output: path.resolve(__dirname, '../dist/libphonenumber.js'),
  callback: function(err, min) {
    if (err) {
      console.error(err);
      return;
    }
    // Append the utils content to the minified file
    fs.appendFileSync(path.resolve(__dirname, '../dist/libphonenumber.js'), '\n' + utilsContent);
    console.log('Build completed successfully with intlTelInputUtils');
  }
});
