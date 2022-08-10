function oddEvenPosition(input){
    let n = Number(input[0]);
    let index = 1;
    let oddSum = 0;
    let evenSum = 0;
    let minOddNumber = Number.MAX_SAFE_INTEGER;
    let maxOddNumber = Number.MIN_SAFE_INTEGER;
    let minEvenNumber = Number.MAX_SAFE_INTEGER;
    let maxEvenNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= n; i++) {
      let number = Number(input[index]);
      if(i % 2 == 0){
        evenSum += number;
        if(number > maxEvenNumber){
            maxEvenNumber = number;
        }
        if(number < minEvenNumber){
            minEvenNumber = number;
        }
      }else {
        oddSum += number;
        if(number > maxOddNumber){
            maxOddNumber = number;
        }
        if(number < minOddNumber){
            minOddNumber = number;
        }

      }
            
      index++;
    }
          
    console.log('OddSum='+ oddSum.toFixed(2)+',');
    if(n == 0){
        console.log('OddMin=No,');
        console.log('OddMax=No,');
    }else {
    console.log('OddMin='+ minOddNumber.toFixed(2)+',');
    console.log('OddMax='+ maxOddNumber.toFixed(2)+',');
    }
    console.log('EvenSum='+ evenSum.toFixed(2)+',');
    if(n == 0 || n == 1){
        console.log('EvenMin=No,');
        console.log('EvenMax=No');
    }else {
    console.log('EvenMin='+ minEvenNumber.toFixed(2)+',');
    console.log('EvenMax='+ maxEvenNumber.toFixed(2));
    }
}
oddEvenPosition([6,
    2,
    3,
    5,
    4,
    2,
    1
    ])