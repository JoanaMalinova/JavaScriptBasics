function journey(input){

    let budget = Number(input[0]);
    let season = input[1];
    let placeToStay = ""
    let expenses = 0;
    let destination = "";

    if(budget > 1000) {
        placeToStay = "Hotel";
        expenses = 0.9 * budget;
        destination = "Europe";

    }else if (budget > 100){
        destination = "Balkans";
        if(season === "summer"){
            expenses = 0.4 * budget;
            placeToStay = "Camp";
        } else {
            expenses = 0.8 * budget;
            placeToStay = "Hotel";
        }

    }else{
        destination = "Bulgaria";
        if(season === "summer"){
            expenses = 0.3 * budget;
            placeToStay = "Camp";

        } else {
            expenses = 0.7 * budget;
            placeToStay = "Hotel";
        }

    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${placeToStay} - ${expenses.toFixed(2)}`)
}