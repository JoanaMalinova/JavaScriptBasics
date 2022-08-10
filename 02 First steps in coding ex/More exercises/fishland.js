function fishland(input) {

    let mackerelPerKg = Number(input[0]);
    let spratPerKg = Number(input[1]);
    let kgBonito = Number(input[2]);
    let kgScad = Number(input[3]);
    let kgMussel = Number(input[4]);
    let bonitoPrice = 0.6 * mackerelPerKg +mackerelPerKg;
    let scadPrice = 0.8 * spratPerKg + spratPerKg;
    let sum = kgBonito * bonitoPrice + scadPrice * kgScad + kgMussel * 7.5;
    console.log(sum.toFixed(2));

}
fishland ([6.9,4.2,1.5,2.5,1])
