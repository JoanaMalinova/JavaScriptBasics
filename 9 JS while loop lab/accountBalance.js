function accountBalance(input){    
    let index = 1;    
    let command = input[0];
    let sum = 0;

    while(command !== "NoMoreMoney") {    
        let installment = Number(command);
        if(installment < 0){
            console.log('Invalid operation!')
            break;
        } else {   
            console.log(`Increase: ${installment.toFixed(2)}`)
        }
        sum += installment;
        command = input[index];
        index ++ ; 
             
        
    }
    console.log(`Total: ${sum.toFixed(2)}`)
}
accountBalance(["120",
"45.55",
"-150"])
