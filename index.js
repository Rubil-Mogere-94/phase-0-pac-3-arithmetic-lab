// Basic Math Functions

// 1) add(a, b) - Adds two numbers and returns the result
function add(a, b) {
    return a + b;
  }
  
  // 2) subtract(a, b) - Subtracts b from a and returns the result
  function subtract(a, b) {
    return a - b;
  }
  
  // 3) multiply(a, b) - Multiplies two numbers and returns the result
  function multiply(a, b) {
    return a * b;
  }
  
  // 4) divide(a, b) - Divides a by b and returns the result
  function divide(a, b) {
    return a / b;
  }
  
  // 5) increment(n) - Increments n and returns the result
  function increment(n) {
    return n + 1;
  }
  
  // 6) decrement(n) - Decrements n and returns the result
  function decrement(n) {
    return n - 1;
  }
  
  // 7) makeInt(n) - Parses n as an integer and returns the parsed integer, assuming base 10
  function makeInt(n) {
    return parseInt(n, 10);
  }
  
  // 8) preserveDecimal(n) - Preserves n's decimals and returns the parsed floating-point number
  function preserveDecimal(n) {
    const parsedNumber = parseFloat(n);
    
    if (isNaN(parsedNumber)) {
      return NaN;
    }
    
    return parsedNumber;
  }
  
  // Test Cases
  var a, b;
  
  beforeEach(function() {
    a = Math.floor(Math.random() * 1000);
    b = Math.floor(Math.random() * 1000);
  });
  
  describe('basic math functions', function () {
    it("'add()' is a valid function", function() {
      expect(add).toBeDefined();
    });
  
    it("'subtract()' is a valid function", function() {
      expect(subtract).toBeDefined();
    });
  
    it("'multiply()' is a valid function", function() {
      expect(multiply).toBeDefined();
    });
  
    it("'divide()' is a valid function", function() {
      expect(divide).toBeDefined();
    });
  
    it('add(a, b) adds two numbers and returns the result', function() {
      expect(add(a, b)).toEqual(a + b);
    });
    
    it('subtract(a, b) subtracts b from a and returns the result', function() {
      expect(subtract(a, b)).toEqual(a - b);
    });
    
    it('multiply(a, b) multiplies two numbers and returns the result', function() {
      expect(multiply(a, b)).toEqual(a * b);
    });
    
    it('divide(a, b) divides a by b and returns the result', function() {
      expect(divide(a, b)).toEqual(a / b);
    });
    
    it('increment(n) increments n and returns the result', function() {
      expect(increment(a)).toEqual(a + 1);
    });
    
    it('decrement(n) decrements n and returns the result', function() {
      expect(decrement(a)).toEqual(a - 1);
    });
  });
  
  describe('makeInt(n)', function() {
    it('parses n as an integer and returns the parsed integer', function() {
      expect(makeInt(a.toString())).toEqual(a);
    });
  
    it('assumes base 10', function() {
      expect(makeInt('0x2328')).toEqual(0);
    });
  
    it('returns NaN as appropriate', function() {
      expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true);
    });
  });
  
  describe('preserveDecimal(n)', function() {
    it('preserves n\'s decimals and returns the parsed floating-point number', function() {
      expect(preserveDecimal("12.34")).toEqual(12.34);
      expect(preserveDecimal("100")).toEqual(100);
      expect(preserveDecimal("12.34abc")).toEqual(12.34);
      expect(preserveDecimal("0x10")).toEqual(16); // Hexadecimal interpretation
    });
  
    it('returns NaN as appropriate', function() {
      expect(isNaN(preserveDecimal("abc"))).toEqual(true);  // Invalid string
      expect(isNaN(preserveDecimal("12abc34"))).toEqual(true);  // Mixed string
    });
  });
  