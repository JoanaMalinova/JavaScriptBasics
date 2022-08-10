function gameOfIntervals(input) {
    let steps = Number(input[0]);
    let index = 1;
    let points = 0;
    let counter = 0;
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;
    let counter4 = 0;
    let counter5 = 0;
    let counter6 = 0;
    for(let i = 1; i <= steps; i++){
        let number = Number(input[index]);
        counter ++;
        if (number >= 0 && number <= 9){
            counter1 ++;
            points += number * 0.2;
        }else if (number>=0 && number <= 19){
            counter2 ++;
            points += number * 0.3;
        }else if (number >=0 && number <= 29){
            counter3 ++;
            points += number * 0.4;
        }else if (number >=0 && number <= 39){
            counter4 ++;
            points += 50;
        }else if (number >= 0 && number <= 50){
            counter5 ++;
            points += 100;
        }else {
            counter6 ++;
            points = points / 2;

        }
        index ++;
    }
    console.log(points.toFixed(2));
    console.log(`From 0 to 9: ${(counter1 * 100 / counter).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(counter2 *100 / counter).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(counter3 * 100 / counter).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(counter4 * 100 / counter).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(counter5 * 100 / counter).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(counter6 * 100 / counter).toFixed(2)}%`);
}
gameOfIntervals([10,
    43,
    57,
    -12,
    23,
    12,
    0,
    50,
    40,
    30,
    20
    ])