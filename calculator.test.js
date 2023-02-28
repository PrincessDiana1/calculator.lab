const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 80;
    actual = sum(40, 40);
    expect(actual).toBe(expected);
    
  });
  { expected = 200;
    actual = sum(100, 100);
    expect(actual).toBe(expected);
  };

  
  test('can add two negative numbers', () => {
    expected = -2;
    actual = sum(-1, -1);
    expect(actual).toBe(expected);
    
  });

  test('can add zero', () => {
    expected = 2;
    actual = sum (2, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  ('can subtract two small positive numbers', () => {
    expected = 6;
    actual = subtract(12, 6);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
    expected = 50;
    actual = subtract(100, 50);
    expect(actual).toBe(expected);
    
  });
 
  test('can subtract two negative numbers', () => {
    expected = 0;
    actual = subtract(-1, -1);
    expect(actual).toBe(expected);
    
  });

});

describe('multiply', () => {
  test('can multiple two Large positive numbers', () => { 
    expected = 2640;
    actual = multiply(60, 44);
    expect(actual).toBe(expected);
    
  });

  test('can multiple two negative numbers', () => { 
    expected = 15;
    actual = multiply(-5, -3);
    expect(actual).toBe(expected);
    
  });

});

describe('divide', () => {
  test('can divide two large negative numbers', () => { 
    expected = 1.2857142857142858;
    actual = divide(-99, -77);
    expect(actual).toBe(expected);
    
  });

  test('can divide two small positive numbers', () => { 
    expected = 2;
    actual = divide(100, 50);
    expect(actual).toBe(expected);
    
  });

});

describe('modulus', () => {
  test('can modulus two positive numbers', () => { 
    expected = 18;
    actual = modulus(66, 24);
    expect(actual).toBe(expected);
    
  });
  
  test('can modulus negative numbers', () => { 
    expected = -2;
    actual = modulus(-44, -7);
    expect(actual).toBe(expected);
    
  });
});

describe('even', () => {
  test('can find even number', () => { 
    expected = true;
    actual = even (24);
    expect(actual).toBe(expected);
    
  });

  test('number is not even', () => { 
    expected = false;
    actual = even (-8953);
    expect(actual).toBe(expected);
    
  });
});

describe('odd', () => {
  test('can find odd number', () => { 
    expected = true;
    actual = odd(23);
    expect(actual).toBe(expected);
    
  });

  test('negtive number is not odd', () => { 
    expected = false;
    actual = odd (584);
    expect(actual).toBe(expected);
    
  });

});
