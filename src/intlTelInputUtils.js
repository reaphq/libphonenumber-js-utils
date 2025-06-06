// Create and expose intlTelInputUtils
// Since i18n.phonenumbers namespace is not available after Google Closure Compiler minification,
// we need to use the hardcoded enum values like the original libphonenumber.js does

const intlTelInputUtils = {
  // Format a number to the given format
  formatNumber: function(number, countryCode, format) {
    if (typeof formatNumber === 'function') {
      return formatNumber(number, countryCode, format);
    }
    return number;
  },

  // Get an example number for the given country code
  getExampleNumber: function(countryCode, national, numberType) {
    if (typeof getExampleNumber === 'function') {
      return getExampleNumber(countryCode, national, numberType);
    }
    return '';
  },

  // Get the extension from a number
  getExtension: function(number, countryCode) {
    if (typeof getExtension === 'function') {
      return getExtension(number, countryCode);
    }
    return '';
  },

  // Get the type of the number
  getNumberType: function(number, countryCode) {
    if (typeof getNumberType === 'function') {
      return getNumberType(number, countryCode);
    }
    return -1;
  },

  // Check if a number is valid
  isValidNumber: function(number, countryCode) {
    if (typeof isValidNumber === 'function') {
      return isValidNumber(number, countryCode);
    }
    return false;
  },

  // Number format enum - using the same hardcoded values as src/libphonenumber.js
  // These correspond to i18n.phonenumbers.PhoneNumberFormat but are available after compilation
  numberFormat: {
    E164: 0,
    INTERNATIONAL: 1,
    NATIONAL: 2,
    RFC3966: 3
  },

  // Number type enum - using the same hardcoded values as src/libphonenumber.js  
  // These correspond to i18n.phonenumbers.PhoneNumberType but are available after compilation
  numberType: {
    FIXED_LINE: 0,
    MOBILE: 1,
    FIXED_LINE_OR_MOBILE: 2,
    TOLL_FREE: 3,
    PREMIUM_RATE: 4,
    SHARED_COST: 5,
    VOIP: 6,
    PERSONAL_NUMBER: 7,
    PAGER: 8,
    UAN: 9,
    VOICEMAIL: 10,
    UNKNOWN: -1
  },

  // Validation error enum - using the same hardcoded values as src/libphonenumber.js
  // These correspond to i18n.phonenumbers.PhoneNumberUtil.ValidationResult
  validationError: {
    IS_POSSIBLE: 0,
    INVALID_COUNTRY_CODE: 1,
    TOO_SHORT: 2,
    TOO_LONG: 3,
    NOT_A_NUMBER: 4
  }
};

// Expose to global scope
if (typeof window !== 'undefined') {
  window.intlTelInputUtils = intlTelInputUtils;
} else if (typeof global !== 'undefined') {
  global.intlTelInputUtils = intlTelInputUtils;
}

// Only export in Node.js environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = intlTelInputUtils;
} 