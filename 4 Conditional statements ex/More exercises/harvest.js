function harvest(input){

    let area = Number(input[0]);
    let grapePerSqMr = Number(input[1]);
    let wineNeeded = Number(input[2]);
    let workers = Number(input[3]);
    let grape = area * grapePerSqMr;
    let wineGrape = 0.4 * grape ;
    let wine = wineGrape / 2.5;
    let diff = Math.abs(wine - wineNeeded)
    let winePerPerson = Math.ceil(diff / workers);
    if( wine >= wineNeeded ){
        diff = Math.ceil(diff);
        console.log(`Good harvest this year! Total wine: ${wine} liters.`)
        console.log(`${diff} liters left -> ${winePerPerson} liters per person.`)
    }else {
        diff = Math.floor(diff)
        console.log(`It will be a tough winter! More ${diff} liters wine needed.`)
        
    }
}
harvest([650,2,175,3])