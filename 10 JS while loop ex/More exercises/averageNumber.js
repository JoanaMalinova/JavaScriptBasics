function averageNumber(input) {
    let n = Number(input[0]);
    let index = 1;
    let sum = 0;
    let counter = 0;

    for (let i = 1; i <= n; i++) {
        let number = Number(input[index]);
        sum += number;
        counter ++;
        index++;
        
    }
    console.log((sum / counter).toFixed(2))
}
averageNumber([4,
    95,
    23,
    76,
    23
    
    
    
    ])