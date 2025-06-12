# Libphonenumber-js-utils &middot; [![npm version](https://badge.fury.io/js/libphonenumber-js-utils.svg)](https://www.npmjs.com/package/libphonenumber-js-utils) [![Build Status](https://travis-ci.org/patw0929/libphonenumber-js-utils.svg)](https://travis-ci.org/patw0929/libphonenumber-js-utils)

## What is it

This repo is a compiled and minified version of the utilities functions from the [googlei18n's libphonenumber](https://github.com/googlei18n/libphonenumber) library.
The functions are exposed to `window.intlTelInputUtils` inside browser environment.

## How to use

* Add `libphonenumber-js-utils` to the package dependency.
* `import 'libphonenumber-js-utils';` in your code.
* The functions will be available in `window.intlTelInputUtils`.

## Features inside it

Name | Type | Description
-----|------|---------------
formatNumber | Function | Format Phone number according to country
getExampleNumber | Function | Get example phonenumber of a country
getExtension | Function |
getNumberType | Function | Get the type of number entered like `FIXED_LINE`, `MOBILE`, etc.
getValidationError | Function | Get the validation error
isValidNumber | Function | Check if a number is valid for a country
numberFormat | Enum | **Possible Values:**<br>&bull; `NATIONAL` <br>&bull; `INTERNATIONAL`
numberType | Enum | **Possible Values:**<br>&bull; `FIXED_LINE` <br>&bull; `MOBILE` <br>&bull; `UNKNOWN`
validationError | Enum | **Possible Values:**<br>&bull; `IS_POSSIBLE` <br>&bull; `INVALID_COUNTRY_CODE` <br>&bull; `TOO_SHORT` <br>&bull; `TOO_LONG` <br>&bull; `NOT_A_NUMBER`

## How to build it

### Install Dependencies & Compile

Install `maven` and `ant`. For MacOS

```sh
brew install ant
brew install maven
```

```sh
sh scripts/build-dependencies.sh
```

```sh
sh scripts/execute.sh
```

### Updating underlying google libphonenumber library

1. Bump googleLibphonenumberVersion in package.json to updated version.
2. Build dependencies with `sh scripts/build-dependencies.sh`
3. Delete `<arg line="--jscomp_error=undefinedNames" />` flag in libphonenumber/javascript/build.xml to allow the execution script to succeed.
4. Convert the built libphonenumber/javascript/i18n/phonenumbers/compile-demo.js from ecmascript2020 to es5 (https://jstool.gitlab.io/babel-es6-to-es5/)
5. Delete the "@babel/helpers - typeof" text in the generated code.
6. Run the execute script `sh scripts/execute.sh`
7. Check that the dist/libphonenumber.js is generated successfully.
8. Push code.

## Contributors

[![@superhit0](https://avatars.githubusercontent.com/superhit0?size=50)](https://github.com/superhit0) | [![@patw0929](https://avatars.githubusercontent.com/patw0929?size=50)](https://github.com/patw0929) | [![@nutboltu](https://avatars.githubusercontent.com/nutboltu?size=50)](https://github.com/nutboltu)
----|-----|-----

## Updating google libphonenumber lib
1. Bump googleLibphonenumberVersion in package.json to whichever version is necessary.
2. Rerun instructons above to build dependencies and compile.
3. Push changes
