function numberDivisibleBy9(input){

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let sum = 0;

    for(let num = num1; num <= num2; num++){
        if(num % 9 == 0){
            sum += num;                     
        }
        
    }
    console.log("The sum: "+sum); 

    for(let num = num1; num <= num2; num++){
        if(num % 9 == 0){           
            console.log(num);           
        }
    }
   
}
numberDivisibleBy9(["100", "200"])