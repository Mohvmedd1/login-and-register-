function calculator(a,b,sign){
if(isNaN(a) === true  || isNaN(b) === true )
return "unknown value";
switch(sign){
    case '+':
        return a + b;
    case '-':
        return a - b;
    case '*':
        return a * b;
    case '/':
        if(b === 0) return "Infinity";
        return a / b;
    default:
return "unknown value";

    }
}

console.log(calculator(10, 5, '+')); // 15
console.log(calculator(10, 5, '-')); // 5

console.log(calculator(10, 5, '*')); // 50
console.log(calculator(10, 5, '/')); // 2

console.log(calculator(10, 0, '/')); // division by zero
console.log(calculator(10, 5, '%')); // unknown value

    console.log("-----------------------------");
    console.log(`-----------------------------`);
    console.log(`-----------------------------`);
    console.log(`-----------------------------`);



function unusualFive() {
  return "Fivee".length;
}