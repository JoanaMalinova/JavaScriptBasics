function sumPrimeNonPrime(input) {    
   
    let index = 1;
    let command = input[0];
    let isNegative = false;
    let primeNumber = 0;
    let nonPrimeNumber = 0;

    while(command !== "stop"){
        let number = Number(command);
        if(number < 0){
            isNegative = true;
        }else if((number === 1)||(number === 2)||(number === 3)||(number === 5)||(number === 7)||
        ((number % 2 !== 0)&&(number % 3 !== 0 )&&(number % 5 !== 0))&&(number % 7 !== 0)){
            primeNumber += number;
        }else {
            nonPrimeNumber += number;
        }

        command = input[index];
        index++;
    }
    if(isNegative){
        console.log('Number is negative.')
    }
    console.log(`Sum of all prime numbers is: ${primeNumber}`)
    console.log(`Sum of all non prime numbers is: ${nonPrimeNumber}`)
}
sumPrimeNonPrime(["0",
"-9",
"0",
"stop"])

