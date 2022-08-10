function coins(input) {
    let sum = Number(input[0]);
    let coins = 0;
    while( sum >= 0.01){
        if(sum >= 2){
            coins ++;
            sum -= 2;
        }else if (sum >= 1){
            coins++;
            sum -= 1;

        }else if(sum >= 0.5){
            coins++;
            sum -= 0.5;

        }else if (sum >= 0.2){
            coins++;
            sum -= 0.2;
        }else if(sum >= 0.1) {
            coins++;
            sum -= 0.1;
        }else if(sum >= 0.05) {
            coins++
            sum -= 0.05;
        }else if(sum >= 0.02){
            coins++;
            sum -= 0.02;

        }else if(sum >= 0.01){
            coins++;
            sum -= 0.01;

        }
        sum = Math.round(sum*100)/100;
    }
    console.log(coins)
}
coins(["2.73"])