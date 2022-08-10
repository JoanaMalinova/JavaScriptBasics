function newHouse(input) {
    let flower = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);
    let expenses = 0;
    finalPrice = 0;
    
    switch(flower){
        case "Roses":
            expenses = 5 * count;
            if(count > 80){
                finalPrice = expenses - 0.1 * expenses;
            }else {
                finalPrice = expenses;
            }
            break;
        case "Dahlias":
            expenses = 3.8 * count;
            if(count > 90) {
                finalPrice = expenses - 0.15 *expenses;
            }else {
                finalPrice = expenses;
            }
            break;
        case "Tulips":
            expenses = 2.8 * count;
            if(count > 80) {
                finalPrice = expenses - 0.15 * expenses;
            }else {
                finalPrice = expenses;
            }
            break;
        case "Narcissus":
            expenses = 3 * count;
            if (count < 120) {
                finalPrice = expenses + 0.15 * expenses;

            }else { 
                finalPrice = expenses;
            }
            break;
        case "Gladiolus":
            expenses = 2.5 * count;
            if(count < 80) {
                finalPrice = expenses + 0.2 * expenses;
            }else {
                finalPrice = expenses;
            }
            break;
    }
    diff = Math.abs(budget - finalPrice);
    if(budget >= finalPrice){
        console.log(`Hey, you have a great garden with ${count} ${flower} and ${diff.toFixed(2)} leva left.`)
    }else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }

}
