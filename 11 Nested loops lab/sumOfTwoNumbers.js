function sumOfTwoNumbers(input) {
    let intervalStart = Number(input[0]);
    let intervalEnd = Number(input[1]);
    let magicNumber = Number(input[2]);
    let sum = 0;
    let counter = 0;
    let isFound = false;

    for (let i = intervalStart; i <= intervalEnd ; i++) {
        
        for (let j = intervalStart; j <= intervalEnd ; j++) {
            sum = i + j;
            counter ++;
            if(sum === magicNumber){
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
                isFound = true;
                break;
            }
            
        }
        if(isFound){
            break;
        }
        
    }
    if(!isFound){
        console.log(`${counter} combinations - neither equals ${magicNumber}`)
    }

}
sumOfTwoNumbers(["88", 
"888", 
"2000"])

