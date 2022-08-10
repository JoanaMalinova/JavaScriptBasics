function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = input[2];
    let loanPrice = 0;

    switch(season) {
        case "Spring":
            loanPrice = 3000;            
           break;
        case "Summer":
        case "Autumn":
            loanPrice = 4200;
            break;
        case "Winter":
            loanPrice = 2600;
            break;

    }
    if(fishermen >= 12 ){
        loanPrice -= 0.25 * loanPrice;

    }else if (fishermen >= 7) {
        loanPrice -= 0.15 * loanPrice;
    }else {
        loanPrice -= 0.1 * loanPrice;
    }
    if(fishermen % 2 == 0 && season !== "Autumn") {
        loanPrice -= 0.05 * loanPrice
    }
    let diff = Math.abs(budget - loanPrice);
   if(budget >=  loanPrice) {
       console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
   }else {
       console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
   }
}