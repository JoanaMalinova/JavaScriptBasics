function bikeRace(input) {

    let juniorBikers = Number(input[0]);
    let seniorBikers = Number(input[1]);
    let trace = input[2];
    let income = 0;

    switch(trace) {
        case "trail" :
            income = juniorBikers * 5.5 + seniorBikers * 7;
            break;
        case "cross-country":
            income = juniorBikers * 8 + seniorBikers * 9.5;
            if(juniorBikers + seniorBikers >= 50){
                income -= 0.25 *income;
            }
            break;
        case "downhill":
            income = juniorBikers * 12.25 + seniorBikers * 13.75;
            break;
        case "road":
            income = juniorBikers * 20 + seniorBikers * 21.5;
            break;
    }
    income -= 0.05 * income;
    console.log(income.toFixed(2))
}
bikeRace([10,20,"trail"])