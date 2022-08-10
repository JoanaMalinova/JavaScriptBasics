function flowers(input){
    let chrysatemum = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let holiday = input[4];
    let sum = 0;
    switch (season) {
        case "Spring":
        case "Summer":
            sum = chrysatemum * 2 + roses * 4.1 + tulips * 2.5 ;
            break;
        case "Autumn":
        case "Winter":
            sum = chrysatemum * 3.75 + roses * 4.5 + tulips * 4.15 ;
        
            break;            
    }
    switch (holiday) {
        case "Y":
            sum += 0.15 *sum;
            break;        
        }
    if(tulips > 7 && season === "Spring" ) {
        sum -= 0.05 * sum;
    }
    if(roses >= 10 && season === "Winter"){
        sum -= 0.1 * sum;
    }
    if(chrysatemum + roses + tulips > 20) {
        sum -= 0.2 * sum;
    }
    sum += 2; 
    console.log(sum.toFixed(2))

}
flowers([2,4,8,"Spring","Y"])

