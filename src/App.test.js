import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Calculations from './functions/calculation.js';
import testRoman from './functions/testRoman.js';
import int_to_roman from './functions/int_to_roman';
import roman_to_Int from './functions/roman_to_Int';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


//TESTING ROMAN VALIDITY
test('Check Valid Roman Number Test - 1',()=>{
  expect(testRoman('V')).toBeTruthy()
});
test('Check Valid Roman Number Test - 2 (Invalid number)',()=>{
  expect(testRoman('VIIII')).toBeFalsy()
});
test('Check Valid Roman Number Test - 3 (Invalid big number)',()=>{
  expect(testRoman('XCC')).toBeFalsy()
});

//TESTING INT TO ROMAN
test('Check INT TO ROMAN Test - 1',()=>{
  expect(int_to_roman(3)).toBe('III')
});
test('Check INT TO ROMAN Test - 2',()=>{
  expect(int_to_roman(100)).toBe('C')
});
//TESTING ROMAN TO INT
test('Check ROMAN TO INT Test - 1',()=>{
  expect(roman_to_Int('C')).toBe(100)
});
test('Check ROMAN TO INT Test - 2',()=>{
  expect(roman_to_Int('MMMCMXCIX')).toBe(3999)
});

//TESTING ROMAN CALCULATIONS
test('RomanNumbers not filled Properly',()=>{
  expect(Calculations('','X','+')).toBe(-1)
});
//Adding Test
test('Adding Roman numbers Test - 1 ',()=>{
  expect(Calculations('V','V','+')).toBe("X")
});
test('Adding Roman numbers Test - 2 ',()=>{
  expect(Calculations('X','X','+')).toBe("XX")
});

test('Adding RomanNumbers Above 3999- Number too Big',()=>{
  expect(Calculations('MMMCMXCIX','X','+')).toBe('too high')
});
//Subtraction Test
test('Subtraction Roman numbers Test - 1 ',()=>{
  expect(Calculations('V','II','-')).toBe("III")
});
test('Subtraction Roman numbers Equal Number test  ',()=>{
  expect(Calculations('V','V','-')).toBe("")
});
test('Subtraction Roman numbers - smaller first number (answer in negatives) ',()=>{
  expect(Calculations('ii','V','-')).toBe(-2)
});
//Multiplication Test
test('Multiplication Roman numbers  ',()=>{
  expect(Calculations('XXV','II','X')).toBe('L')
});
test('Multiplication RomanNumbers above 3999- Number too Big',()=>{
  expect(Calculations('C','C','X')).toBe('too high')
});
test('Multiplication RomanNumbers- RomanNumbers not filled Properly',()=>{
  expect(Calculations('C','','X')).toBe(-1)
});

//Written by Karan Nandkumar