function primePairs(input){
    let firstPairStart = Number(input[0]);
    let secondPairStart = Number(input[1]);
    let firstPairDiff = Number(input[2]);
    let secondPairDiff = Number(input[3]);
    let firstPairEnd = firstPairStart + firstPairDiff;
    let secondPairEnd = secondPairDiff + secondPairStart;

    for (let first = firstPairStart; first <= firstPairEnd; first++) {
       for (let second = secondPairStart; second <= secondPairEnd; second++) {
           if(first % 2 !== 0 && first % 3 !== 0 && first % 5 !== 0 && first % 7 !== 0){
               if(second % 2 !== 0 && second % 3 !== 0 && second % 5 !== 0 && second % 7 !== 0){
                   console.log(`${first}${second}`)
               }
           }
       }
        
    }


}
primePairs([10,
    30,
    9,
    6
    ])