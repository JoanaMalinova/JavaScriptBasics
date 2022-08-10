function equalPairs(input){

    let n = Number(input[0]);
    let index = 1;
    let sum = 0;
    let nextSum = 0;
    let isEqual = false;
    let counter = 0;
    let maxdiff = Number.MIN_SAFE_INTEGER;
    let diff = 0;

    for (let i = 1; i <= n; i++) {
        
        for (let j = 1; j <= 2; j++) {
            let number = Number(input[index]);
            sum += number;
            index++;
        }
        if(i != 1 || n == 1){
            if(nextSum == sum){
            counter ++;
            }else{
           diff =Math.abs(nextSum - sum);
           if (diff > maxdiff){
               maxdiff = diff;
            }
            }
            if(counter == n - 1){
                isEqual = true;
             }
            }
        nextSum = sum;
        sum = 0;
        
    }
    if(isEqual){
        console.log(`Yes, value=${nextSum}`);
    } else {
        console.log(`No, maxdiff=${maxdiff}`);
    }
}
equalPairs([1,
    5,
    5 
    
    
    ])