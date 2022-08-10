function footballLeague(input){

    let stadionCapacity = Number(input[0]);
    let fans = Number(input[1]);
    let index = 2;
    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;
    let total = 0;

    for (let i = 1; i <= fans; i++) {
        let sector = input[index];
        total ++;
        switch(sector){
            case "A":
                sectorA ++;
                break;
            case "B":
                sectorB ++;
                break;
            case "V":
                sectorV ++;
                break;
            case "G":
                sectorG ++;
                break;
        }
        index++;
        
    }
    console.log((sectorA * 100 / total).toFixed(2)+"%");
    console.log((sectorB * 100 / total).toFixed(2)+"%");
    console.log((sectorV * 100 / total).toFixed(2)+"%");
    console.log((sectorG * 100 / total).toFixed(2)+"%");
    console.log((fans * 100 / stadionCapacity).toFixed(2)+"%");
}
footballLeague([76,
    10,
    "A",
    'V',
    'V',
   'V',
    'G',
    'B',
    'A',
    'V',
    'B',
    'B'
    ])