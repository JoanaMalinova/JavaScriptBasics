function carToGo(input){

    let budget = Number(input[0])
    let season = input[1];
    let carClass = "";
    let carType = "";
    let price = 0;

    if(budget <= 100){
        carClass = "Economy class";
        switch (season) {
            case "Summer":
                carType = "Cabrio"
                price = 0.35 * budget;
                break;
            case "Winter":
                carType = "Jeep"
                price = 0.65 * budget;
                break;
        }
    }else if(budget <= 500) {
        carClass = "Compact class";
        switch (season) {
            case "Summer":
                carType = "Cabrio";
                price = 0.45 * budget;
                break;
            case "Winter":
                carType = "Jeep";
                price = 0.8 * budget;
                break;
        }
    }else {
        carClass = "Luxury class";
        carType = "Jeep";
        price = 0.9 * budget;
       
       
    
    }
    console.log(carClass)
    console.log(`${carType} - ${price.toFixed(2)}`)
    
}   
carToGo([450,"Summer"])