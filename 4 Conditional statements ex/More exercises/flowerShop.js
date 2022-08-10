function flowerShop(input) {

    let magnolias = input[0];
    let hyacinths = input[1];
    let roses = input[2];
    let cactuses = input[3];
    let giftPrice = input[4];

    let sum = magnolias * 3.25 + hyacinths * 4 + roses * 3.5 + cactuses * 8;
    let finalSum = sum - 0.05 * sum;
    let diff = Math.abs(finalSum - giftPrice);

    if (finalSum >= giftPrice){
        console.log(`She is left with ${Math.floor(diff)} leva.`)
    }else {
        console.log(`She will have to borrow ${Math.ceil(diff)} leva.`)
    }
}
flowerShop([2,3,5,1,50])