function pets(input){

    let days = Number(input[0]);
    let foodLeft = Number(input[1]);
    let dogFood = Number(input[2]);
    let catFood = Number(input[3]);
    let tortoiseFood = Number(input[4]);

    let foodNeeded = (dogFood + catFood + tortoiseFood / 1000 ) * days;
    let diff = Math.abs (foodLeft - foodNeeded);
    if(foodLeft >= foodNeeded) {
        console.log(`${Math.floor(diff)} kilos of food left.`)
    }else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`)
    }
}
pets([2,10,1,1,1200])