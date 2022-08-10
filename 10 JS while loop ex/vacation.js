function vacation(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let placeToStay = "";
    let location = "";
    let price = 0;

    if(budget <= 1000){
        placeToStay = "Camp";
        switch(season) {
            case "Summer":
                location = "Alaska";
                price = 0.65 * budget;
                break;
            case "Winter":
                location = "Morocco";
                price = 0.45 * budget;
                break;
        }

    }else if(budget <= 3000){
        placeToStay = "Hut";
        switch(season) {
            case "Summer":
                location = "Alaska";
                price = 0.8 * budget;
                break;
            case "Winter":
                location = "Morocco";
                price = 0.6 * budget;

                break;
        }

    }else {
        placeToStay = "Hotel";
        price = 0.9 * budget;
        switch(season) {
            case "Summer":
                location = "Alaska";
                break;
            case "Winter":
                location = "Morocco"
                break;
        }

    }
    console.log(`${location} - ${placeToStay} - ${price.toFixed(2)}`)
}
vacation([800,"Summer"])