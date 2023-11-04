const assert = require('assert');
const Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.sum',() => {
    it('returns the sum of an array of numbers', () => {
      const expectedResult = 6;
      const inputArray = [1,2,3]
      
      const result = Calculate.sum(inputArray)
      
      assert.strictEqual(result, expectedResult);
    });
    
    it('returns the sum of a four item list', ()=>{
      const expectedResult = 22;
      const inputArray = [4,6,5,7];
      
      const result = Calculate.sum(inputArray);
      
      assert.strictEqual(result, expectedResult);
      
    });
  });
describe('.sum', () => {
  it('returns zero for an empty array', () => {
    const expectedResult = 0;
    const inputArray = [];
    
    const result = Calculate.sum(inputArray);

    assert.strictEqual(result, expectedResult);
  });
});
});




////////////////////////3/////////////////////////////////


var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('5! = 120', () => {
      const expectedResult = 120;
      const num = 5;

      const result = Calculate.factorial(num);

      assert.equal(expectedResult, result);
    });
    it('edge block that covers edge cases, returns 1 when you pass 0', () => {
      const expectedResult = 1;
      const num = 0;

      const result = Calculate.factorial(num);

      assert.equal(result, expectedResult)
    });
  });
});