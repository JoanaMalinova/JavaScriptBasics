function bonusScore(input) {

    let number = Number(input[0]);
    let bonusPoints = 0;
    if(number <= 100) {
        bonusPoints = 5;

    }else if (number <= 1000) {
        bonusPoints = 0.2 * number;

    }else {
        bonusPoints = 0.1 * number;

    }
    if (number % 2 == 0){
        bonusPoints += 1;
    }
    if (number % 10 == 5){
        bonusPoints += 2;
    }
    console.log(bonusPoints)
    console.log(number + bonusPoints);

    
}
bonusScore([20])