function vegetableMarket(input) {
    let priceVeggiePerKg = Number(input[0]);
    let priceFruitPerKg = Number(input[1]);
    let kgVeggie = Number(input[2]);
    let kgFruit = Number(input[3]);
    let sumInLev = priceVeggiePerKg * kgVeggie + kgFruit * priceFruitPerKg;
    let sumInEuro = sumInLev / 1.94;
    console.log(sumInEuro.toFixed(2))
}
vegetableMarket([0.194, 19.4 , 10,10])