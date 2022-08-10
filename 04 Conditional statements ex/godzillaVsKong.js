function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let clothingPerPerson = Number(input[2]);
    let clothingPrice = statists * clothingPerPerson;
    let decorPrice = 0.1 * budget;
    if (statists > 150) {
        clothingPrice -= 0.1 * clothingPrice;
    }
    let diff = Math.abs(clothingPrice + decorPrice - budget);
    if(clothingPrice + decorPrice > budget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
    }else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
    }
}
godzillaVsKong([20000,120,55.5])