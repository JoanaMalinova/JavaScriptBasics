function hotelRoom(input) {

    let month = input[0];
    let nights = input[1];
    let studioPrice = 0;
    let apprtPrice = 0;

    switch(month){
        case "May":
        case "October":
            studioPrice = 50 * nights;
            apprtPrice = 65 * nights;
            if(nights > 14) {
                studioPrice -= 0.3 * studioPrice;
                apprtPrice -= 0.1 * apprtPrice;
            }else if (nights > 7){
                studioPrice -= 0.05 * studioPrice;

            }
            break;
        case "June":
        case "September":
            studioPrice = 75.2 * nights;
            apprtPrice = 68.7 * nights;
            if(nights > 14) {
                studioPrice -= 0.2 * studioPrice;
                apprtPrice -= 0.1 * apprtPrice;
            }
            break;
        case "July":
        case "August":
            studioPrice = 76 * nights;
            apprtPrice = 77 * nights;
            if(nights > 14){
                apprtPrice -= 0.1 * apprtPrice;
            }
            break;


    }
    console.log(`Apartment: ${apprtPrice.toFixed(2)} lv.`)
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
}