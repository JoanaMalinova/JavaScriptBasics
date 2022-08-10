function safePasswordsGenerator(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let maxPassword =Number(input[2]);
    let printLn = '';
    let maxedOut = false;
    let counter = 0;
    let numberA = 35;
    let numberB = 64;

    for (let x = 1; x <= a; x++) { 
        if(maxedOut){
            break;
        }
        for (let y = 1; y <= b; y++) {            
            
            let letterA = String.fromCharCode(numberA);
            let letterB = String.fromCharCode(numberB);
            printLn += letterA + letterB + x + y + letterB + letterA + "|";
            counter ++;   
            if(counter >= maxPassword){
                maxedOut = true;
                break;
            
            } 
            numberA ++;
            numberB ++;
            if(numberA > 55)  {
                numberA = 35;
            }
            if(numberB > 96)  {
                numberB = 64;
            }
            
        }                                   
   
    }
    console.log(printLn)
}
safePasswordsGenerator([20,50,10])