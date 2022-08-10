function toyShop(input) {

    let holidayPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);
    let totalNum = puzzles + dolls + teddyBears + minions + trucks;
    let sum = 2.6 * puzzles + dolls * 3 + 4.1 * teddyBears + minions * 8.2 + 2 * trucks;
    if (totalNum >= 50) {

        sum -= 0.25 * sum;
    
    }
    let finalSum = sum - 0.1 * sum ;
    let diff = Math.abs(finalSum - holidayPrice);
    if(finalSum >= holidayPrice ) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);

    }else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }

}
toyShop([320,8,2,5,5,1])