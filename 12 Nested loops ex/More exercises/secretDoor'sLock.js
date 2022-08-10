function secretDoorsLock(input){
    let thirdNumEnd = Number(input[0]);
    let secondNumEnd = Number(input[1]);
    let firstNumEnd = Number(input[2]);

    for (let i = 2; i <= thirdNumEnd;  i+= 2) {
        for (let j = 2; j <= secondNumEnd; j ++) {
            for (let k = 2; k <= firstNumEnd; k += 2) {
                if( j === 2 || j === 3 || j === 5 || j === 7){
                    console.log( i +" " + j + " " + k  )
                }
            }
        }
        
    }
}
secretDoorsLock([8,2,8])