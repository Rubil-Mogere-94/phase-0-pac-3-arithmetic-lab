// Basic math functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Increment and decrement
function increment(n) {
  return n + 1;
}

function decrement(n) {
  return n - 1;
}

// Parsing integers
function makeInt(n) {
  return parseInt(n, 10); // Always base 10
}

// Parsing floating point numbers
function preserveDecimal(n) {
  return parseFloat(n);
}

// Export if required for Node.js testing environment
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  increment,
  decrement,
  makeInt,
  preserveDecimal
};
