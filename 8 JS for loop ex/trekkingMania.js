function trekkingMania(input){

    let groups = Number(input[0]);
    let index = 1;
    let totalTrekkers = 0;
    let musala = 0;
    let montblan = 0;
    let killimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for(let i = 1; i <= groups; i++) {
        let trekkers = Number(input[index]);
            totalTrekkers += trekkers;
        if(trekkers <= 5){
            musala += trekkers;
        }else if (trekkers <= 12){
            montblan += trekkers;
        }else if (trekkers <= 25){
            killimanjaro += trekkers;
        }else if (trekkers <= 40){
            k2 += trekkers;
        }else {
            everest += trekkers;
        }
        index++;
    }
    console.log((100 * musala / totalTrekkers).toFixed(2)+"%");
    console.log((100 * montblan / totalTrekkers).toFixed(2)+"%");
    console.log((100 * killimanjaro / totalTrekkers).toFixed(2)+"%");
    console.log((100 * k2 / totalTrekkers ).toFixed(2)+"%");
    console.log((100 * everest / totalTrekkers).toFixed(2)+"%");
}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
