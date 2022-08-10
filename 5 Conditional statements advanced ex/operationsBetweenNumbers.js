function operationBetweenNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];
    let result = 0;
    let evenOdd = "";
    var num2IsZero = false;

    switch (operator){
        case "+":
            result = num1 + num2;
            if(result % 2 == 0 ){
                evenOdd = "even";
            }else {
                evenOdd = "odd";
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOdd}`);
            break;

         case "-":
             result = num1 - num2;
             if(result % 2 == 0 ){
                evenOdd = "even";
            }else {
                evenOdd = "odd";
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOdd}`);
             break;
         case "*":
             result = num1 * num2;
             if(result % 2 == 0 ){
                evenOdd = "even";
            }else {
                evenOdd = "odd";
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOdd}`);
             break;
        case "/":
            if(num2 == 0){
                num2IsZero = true;
                break;
            }
            result = num1 / num2;
            console.log(`${num1} / ${num2} = ${result.toFixed(2)}`)
            
             break;
        case "%" :  
            if(num2 == 0){
                num2IsZero = true;
                break;
            }
             result = num1 % num2;
             console.log(`${num1} % ${num2} = ${result}`)
             break;
        
    }

    if(num2IsZero){
        console.log(`Cannot divide ${num1} by zero`)
    }

 
}
operationBetweenNumbers([112,0,"/"])
