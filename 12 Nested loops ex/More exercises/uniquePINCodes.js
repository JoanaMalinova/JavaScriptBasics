function uniquePINCodes(input){
    let rightBorderFirst = Number(input[0]);
    let rightBorderSecond = Number(input[1]);
    let rightBorderThird = Number(input[2]);
    for (let i = 2; i <= rightBorderFirst; i += 2) {
        for (let j = 2; j <= rightBorderSecond; j++) {
            for (let k = 2; k <= rightBorderThird; k += 2) {
             if(j === 2 || j === 3 || j === 5 || j === 7){
                 console.log( i+ " "+j+" "+k)
             }
            
        }
        
    }
}
}
uniquePINCodes([8,
    2,
    8
     ])
