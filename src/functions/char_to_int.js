//Simple char to int function 
let char_to_int=(c)=>{
    switch (c){
    case 'I': return 1;
    case 'i': return 1;
    case 'V': return 5;
    case 'v': return 5;
    case 'X': return 10;
    case 'x': return 10;
    case 'L': return 50;
    case 'l': return 50;
    case 'C': return 100;
    case 'c': return 100;
    case 'D': return 500;
    case 'd': return 500;
    case 'M': return 1000;
    case 'm': return 1000;
    default: return -1;
    }
    }
    export default char_to_int;