function fuelTank2(input) {

    let fuelType = input[0];
    let fuelQuantity = input[1];
    let clubCard = input[2];
    let fuelPrice = 0;
    switch (fuelType){
        case"Gas":
        switch(clubCard){
            case "Yes":
               fuelPrice = fuelQuantity * 0.85; 
                break;
            case "No":
                fuelPrice = fuelQuantity * 0.93;
                break;
        }
        break;
        case"Gasoline":
        switch(clubCard){
            case "Yes":
                fuelPrice = fuelQuantity * 2.04;
                break;
            case "No":
                fuelPrice = fuelQuantity * 2.22;
                break;
        }
        break;
        case"Diesel":
        switch(clubCard){
            case "Yes":
                fuelPrice = fuelQuantity * 2.21;
                break;
            case "No":
                fuelPrice = fuelQuantity * 2.33;
                break;
        }
        break;
    }
    if(fuelQuantity >= 25 ){
        fuelPrice -= 0.1 * fuelPrice;
    }else if (fuelQuantity >=20){
        fuelPrice -= 0.08 * fuelPrice;
    }
    console.log(fuelPrice.toFixed(2) + " lv.");
}
fuelTank2(["Gas",30,"Yes"])