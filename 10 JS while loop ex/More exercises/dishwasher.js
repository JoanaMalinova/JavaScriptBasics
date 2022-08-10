function dishwasher(input) {
    let detergentBottles = Number(input[0]);
    let detergent = 750 * detergentBottles;
    let command = input[1];
    let index = 2;
    let counter = 0;
    let quanUsed = 0;
    let detergentOver = false;
    let dishes = 0;
    let pots = 0;
    let total = 0;

    while(command !== "End"){
        counter++;
        let utensils = Number(command);
        if(counter % 3 === 0){
            quanUsed = 15 * utensils;
            pots += utensils;
        }else {
            quanUsed = 5 * utensils;
            dishes += utensils;
        }
        total += quanUsed;
        if(total > detergent){
            detergentOver = true;
            break;
        }
        command = input[index];
        index++;

    }
    let diff = Math.abs(total - detergent);
    if(detergentOver){
        console.log(`Not enough detergent, ${diff} ml. more necessary!`);
    }else {
        console.log('Detergent was enough!');
        console.log(`${dishes} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${diff} ml.`)
    }
}
dishwasher(['1',
    '10',
    '15',
    '10',
    '12',
    '13',
    '30'
    
    
    
    ])