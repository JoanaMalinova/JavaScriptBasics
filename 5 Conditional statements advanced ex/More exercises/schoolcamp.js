function schoolcamp(input) {
let season = input[0];
let group = input[1];
let students = input[2];
let nights = input[3];
let priceToStay = 0;
let sport = "";

switch(season){
    case "Winter":
       switch (group){
            case "boys":
                priceToStay = 9.6 * nights * students;
                sport = "Judo"
               break;
            case "girls":
                priceToStay = 9.6 * nights * students;
                sport = "Gymnastics"
               break;
            case "mixed":
                priceToStay = 10 * nights * students;
                sport = "Ski"
                break;
        
       }
        break;
    case "Spring":
        switch (group){
            case "boys":
                priceToStay = 7.2 * nights * students;
                sport = "Tennis"
               break;
            case "girls":
                priceToStay = 7.2 * nights * students;
                sport = "Athletics"
               break;
            case "mixed":
                priceToStay = 9.5 * nights * students;
                sport = "Cycling"
                break;
        
       }
        break;
    case "Summer":
        switch (group){
            case "boys":
                priceToStay = 15 * nights * students;
                sport = "Football"
               break;
            case "girls":
                priceToStay = 15 * nights * students;
                sport = "Volleyball"
               break;
            case "mixed":
                priceToStay = 20 * nights * students;
                sport = "Swimming"
                break;
        
       }
        break;

}
if(students >= 50){
    priceToStay -= 0.5 * priceToStay;

}else if(students >= 20){
    priceToStay -= 0.15 * priceToStay;

}else if (students >= 10){
    priceToStay -= 0.05 * priceToStay;

}
console.log(`${sport} ${priceToStay.toFixed(2)} lv.`)

}
schoolcamp(["Winter","mixed",9,15])

