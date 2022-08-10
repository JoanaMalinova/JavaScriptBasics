function transportPrice(input) {

    let distance = input[0];
    let timeOfDay = input[1];
    let transportPrice = 0;

    if (distance >= 100){
        transportPrice = 0.06 * distance;
    
    }else if (distance >= 20){
        transportPrice = 0.09 * distance;
    }else{
        if(timeOfDay === "day") {
            transportPrice = 0.7 + 0.79 * distance;
        }else {
            transportPrice = 0.7 + 0.9 * distance;
        }
    }
    console.log(transportPrice.toFixed(2))
}
transportPrice([5,"day"])