function cleverLilly(input) {

    let age = Number(input[0]);
    let washingMachineCost = Number(input[1]);
    let toyCost = Number(input[2]);
    let toyCounter = 0;
    let giftMoney = 0;
    let counter = 0;

    for( let num = 1; num <= age; num++){
        if(num % 2 != 0) {
            toyCounter++;
        }else {
            counter ++ ;
            giftMoney += 10 * counter;

        }
    }
    let totalSum = giftMoney + toyCost * toyCounter - counter;
    let diff = Math.abs(totalSum - washingMachineCost)
    if(totalSum >= washingMachineCost){
        console.log(`Yes! ${diff.toFixed(2)} `)
    }else {
        console.log(`No! ${diff.toFixed(2)}`)
    }
}
cleverLilly([21,1570.98,3])