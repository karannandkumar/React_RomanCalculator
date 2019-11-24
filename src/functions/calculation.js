//Performs the Roman Calculation
//Step1 : Converts the Roman numbers to integers 
//Step2 : Pefroms calculation
//Step3 : Converts Answer back to Roman
//Step4 : Checks if Answer us Valid Roman Number
//Step5 : Returns Answers
import roman_to_Int from './roman_to_Int.js';
import int_to_roman from './int_to_roman.js';
import testRoman from './testRoman.js';
let Calculations = (number1,number2,operator)=>{
    if((number1==='')||(number2==='')){
        return -1;
    }
    else{
    const num1 = roman_to_Int(number1)
    const num2 = roman_to_Int(number2)
    let final =0;
    
   
    switch(operator) {
      case "+":
        final = num1 + num2;
        break;
      case "-":
        final = num1 - num2;
        break;
      case "X":
        final = num1 * num2;
        break;
     
      default:
        final = num1 + num2;
    }
  if(final<0){
    
     return -2;
  }
  else {
if(testRoman(int_to_roman(final))){
  
   return int_to_roman(final);
  }
  else{
   
     return 'too high';
  }
}
}
}
export default Calculations;

///Written by Karan Nandkumar