function shopping(input) {

    let budget = Number(input[0]);
    let vidioCards = Number(input[1]);
    let processors = Number(input[2]);
    let rams = Number(input[3]);
    let vidCardSum = vidioCards * 250;
    let processSum = processors * 0.35 * vidCardSum;
    let ramSum = rams * 0.1 * vidCardSum;
    let totalSum = vidCardSum + processSum + ramSum;
    if(vidioCards > processors){
        totalSum -= 0.15 * totalSum;
    }
    let diff = Math.abs(budget - totalSum);
    if (budget >= totalSum) {
        console.log(`You have ${diff.toFixed(2)} leva left!`)
    }else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`)
    }

}
shopping([900,2,1,3])