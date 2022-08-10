function skiTrip(input) {
    let daysStay = input[0];
    let roomType = input[1];
    let evaluation = input[2];
    let nights = daysStay -1;
    let priceToStay = 0;
    switch(roomType) {
        case "room for one person":
           priceToStay = nights * 18;
            break;
        case "apartment":
            priceToStay = nights * 25;
            if(daysStay < 10 ){
                priceToStay -= 0.3 *priceToStay;

            }else if(daysStay <= 15){
                priceToStay -= 0.35 * priceToStay;
            }else {
                priceToStay -= 0.5 * priceToStay;
            }
            break;
        case "president apartment":
            priceToStay = nights * 35;
            if(daysStay < 10 ){
                priceToStay -= 0.1 * priceToStay;
            }else if(daysStay <= 15){
                priceToStay -= 0.15 * priceToStay;
            }else {
                priceToStay -= 0.2 * priceToStay;
            }
            break;
    }
    switch(evaluation){
        case "positive":
            priceToStay += 0.25 * priceToStay;
            break;
        case "negative":
            priceToStay -= 0.1 * priceToStay;
            break;
    }
    console.log(priceToStay.toFixed(2));

}
skiTrip([14,"apartment","positive"])