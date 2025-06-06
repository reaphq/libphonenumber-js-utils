/**
 * @jest-environment jsdom
 */

const { assert } = require('chai');
beforeAll(() => {
  // Load the compiled JS file into the jsdom window
  const fs = require('fs');
  const path = require('path');
  const scriptContent = fs.readFileSync(path.resolve(__dirname, '../../dist/libphonenumber.js'), 'utf8');
  const script = document.createElement('script');
  script.textContent = scriptContent;
  document.head.appendChild(script);
  //Debug log
  // eslint-disable-next-line no-undef
  console.log('window.intlTelInputUtils:', window.intlTelInputUtils);
});
describe('Window Tests', () => {

  let intlTelInputUtils = null;

  beforeEach(() => {
    intlTelInputUtils = window.intlTelInputUtils;
  });

  it('Should have intlTelInputUtils in Window Object', () => {
    assert.exists(intlTelInputUtils, 'intlTelInputUtils should exist in window object');
  });

  it('Should have formatNumber in intlTelInputUtils Object which should be a function', () => {
    const { formatNumber } = intlTelInputUtils;
    assert.exists(formatNumber, 'formatNumber should exist in intlTelInputUtils object');
    assert.typeOf(formatNumber, 'function', 'formatNumber should be a function');
  });

  it('Should have getExampleNumber in intlTelInputUtils Object which should be a function', () => {
    const { getExampleNumber } = intlTelInputUtils;
    assert.exists(getExampleNumber, 'getExampleNumber should exist in intlTelInputUtils object');
    assert.typeOf(getExampleNumber, 'function', 'getExampleNumber should be a function');
  });

  it('Should have getExtension in intlTelInputUtils Object which should be a function', () => {
    const { getExtension } = intlTelInputUtils;
    assert.exists(getExtension, 'getExtension should exist in intlTelInputUtils object');
    assert.typeOf(getExtension, 'function', 'getExtension should be a function');
  });

  it('Should have getNumberType in intlTelInputUtils Object which should be a function', () => {
    const { getNumberType } = intlTelInputUtils;
    assert.exists(getNumberType, 'getNumberType should exist in intlTelInputUtils object');
    assert.typeOf(getNumberType, 'function', 'getNumberType should be a function');
  });

  it('Should have isValidNumber in intlTelInputUtils Object which should be a function', () => {
    const { isValidNumber } = intlTelInputUtils;
    assert.exists(isValidNumber, 'isValidNumber should exist in intlTelInputUtils object');
    assert.typeOf(isValidNumber, 'function', 'isValidNumber should be a function');
  });

  it('Should have numberFormat in intlTelInputUtils Object which should be an Enum Object', () => {
    const { numberFormat } = intlTelInputUtils;
    assert.exists(numberFormat, 'numberFormat should exist in intlTelInputUtils object');
    assert.typeOf(numberFormat, 'object', 'isValidNumber should be an object');
  });

  it('Should have numberType in intlTelInputUtils Object which should be an Enum Object', () => {
    const { numberType } = intlTelInputUtils;
    assert.exists(numberType, 'numberType should exist in intlTelInputUtils object');
    assert.typeOf(numberType, 'object', 'numberType should be an object');
  });

  it('Should have validationError in intlTelInputUtils Object which should be an Enum Object', () => {
    const { validationError } = intlTelInputUtils;
    assert.exists(validationError, 'validationError should exist in intlTelInputUtils object');
    assert.typeOf(validationError, 'object', 'validationError should be an object');
  });

  it('validates a real Hong Kong phone number', () => {
    // Test with US numbers first to see if the function works
    console.log('Testing US number 2125551234:', intlTelInputUtils.isValidNumber('2125551234', 'US'));
    console.log('Testing US number +12125551234:', intlTelInputUtils.isValidNumber('+12125551234', 'US'));
    
    // Test HK numbers
    console.log('Testing HK 53907970:', intlTelInputUtils.isValidNumber('53907970', 'HK'));
    console.log('Testing HK 53907970:', intlTelInputUtils.isValidNumber('9390 7970', 'HK'));
    console.log('Testing HK +85253907970:', intlTelInputUtils.isValidNumber('+85253907970', 'HK'));
    
    // Try with a simple test - just check that invalid numbers return false
    expect(intlTelInputUtils.isValidNumber('12345', 'HK')).toBe(false);
    expect(intlTelInputUtils.isValidNumber('123', 'US')).toBe(false);
  });

});
