function truckDriver(input) {
    
    let season = input[0];
    let kmPerMonth = Number(input[1]);
    let payment = 0;

   if(kmPerMonth <= 5000){
       switch(season) {
            case "Spring":
            case "Autumn":
                payment = 0.75 * 4 * kmPerMonth;
                break;
            case "Summer":
                payment = 0.9 * 4 * kmPerMonth;
                break;
            case "Winter":
                payment = 1.05 * 4 * kmPerMonth;
                break;
       }

   }else if (kmPerMonth <= 10000){
    switch(season) {
        case "Spring":
        case "Autumn":
            payment = 0.95 * 4 * kmPerMonth;
            break;
        case "Summer":
            payment = 1.1 * 4 * kmPerMonth;
            break;
        case "Winter":
            payment = 1.25 * 4 * kmPerMonth;
            break;
   }       

   }else if (kmPerMonth <= 20000){
       payment = 1.45 * 4 * kmPerMonth;

   }
    payment -= 0.1 * payment;
    console.log(payment.toFixed(2))
}
truckDriver(["Summer",3455])