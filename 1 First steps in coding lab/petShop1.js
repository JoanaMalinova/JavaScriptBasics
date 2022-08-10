function petShop(input) {
    let dogFoodPacket = input[0];
    let catFoodPacket = input[1];
    let totalSum = dogFoodPacket*2.5 + catFoodPacket*4;
    console.log(`${totalSum} lv.`); 
}
petShop(["5 ","4 "]);