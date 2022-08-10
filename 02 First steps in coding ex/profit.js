function profit(input){
    let coinsOfOne = Number(input[0]);
    let coinsOfTwo = Number(input[1]);
    let billOfFive = Number(input[2]);
    let sum = Number(input[3]);

    for (let i = 0; i <= coinsOfOne; i++) {
        for (let j = 0; j <= coinsOfTwo; j++) {
            for (let k = 0; k <= billOfFive; k++) {
                if(i * 1 + j * 2 + k * 5 === sum ){
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`)
                }
               
            }
        }
        
    }
}
profit([5,
    3,
    1,
    7
    
    ])