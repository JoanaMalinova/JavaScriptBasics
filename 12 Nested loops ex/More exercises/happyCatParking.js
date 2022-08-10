function happyCatParking(input) {

    let days = Number(input[0]);
    let hours = Number(input[1]);
    let tax = 0;
    let dayTax = 0;
    let totalTax = 0;

    for (let day = 1; day <= days; day++) {
        for (let hour = 1; hour <= hours; hour++) {
            if(day % 2 === 0){
                if(hour % 2 !== 0){
                    tax = 2.5;
                }else {
                    tax = 1;
                }
            }else{
                if(hour % 2 === 0){
                    tax = 1.25;
                }else {
                    tax = 1;
                }
            }
            dayTax += tax;
            
        }
        console.log(`Day: ${day} - ${dayTax.toFixed(2)} leva`)
        totalTax += dayTax;
        dayTax = 0;
        
    }
    console.log(`Total: ${totalTax.toFixed(2)} leva`)
}
happyCatParking([5,2])