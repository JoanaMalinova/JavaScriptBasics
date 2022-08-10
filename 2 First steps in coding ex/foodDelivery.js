function foodDelivery(input) {

    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let veggieMenus = Number(input[2]);
    let sum = chickenMenus * 10.35 + fishMenus * 12.4 + veggieMenus * 8.15;
    let dessert = 0.2 * sum;
    let total = sum + dessert + 2.5;
    console.log(total)
}
foodDelivery(["2 ","4 ","3 "])