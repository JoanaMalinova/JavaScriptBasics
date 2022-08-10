function matchTickets(input) {

    let budget = Number(input[0]);
    let vipNormal = input[1];
    let people = input[2];
    let transportPrice = 0;
    let ticketPrice = 0;

    if (people <= 4){
        transportPrice = 0.75 * budget;
    }else if (people <= 9) {
        transportPrice = 0.6 * budget;
    }else if (people <= 24) {
        transportPrice = 0.5 * budget;
    }else if (people <= 49) {
        transportPrice = 0.4 * budget;
    }else{
        transportPrice = 0.25 * budget;

    }
    switch( vipNormal ){
        case "VIP":
            ticketPrice = 499.99 * people;
            break;
        case "Normal":
            ticketPrice = 249.99 * people;
            break;
    }
    let rest = budget - transportPrice;
    let diff = Math.abs(ticketPrice - rest);
    if(rest >= ticketPrice){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    }else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
}
matchTickets([30000,"VIP",49])