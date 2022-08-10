function cinema(input) {

    let projection = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let income = 0;
    let seats = rows * columns;

    switch(projection){
        case"Premiere":
            income = 12 * seats;
            break;
        case "Normal":
            income = 7.5 * seats;
            break;
        case "Discount":
            income = 5 * seats;
            break;
    }
    console.log(`${income.toFixed(2)} leva`)
}