///Roman TO integer
import char_to_int from './char_to_int'
let roman_to_Int=(x) => {
    if(x == null) return -1;
    var num = char_to_int(x.charAt(0));
    var p, c;
    
    for(var i = 1; i < x.length; i++){
    c = char_to_int(x.charAt(i));
    p = char_to_int(x.charAt(i-1));
    if(c <= p){
    num += c;
    } else {
    num = num - p*2 + c;
    }
    }
    
    return num;
    }
    export default roman_to_Int;
    
   