function tennisRanklist(input) {

    let tournaments = Number(input[0]);
    let initialPoints = Number(input[1]);
    let index = 2;
    let totalPoints = initialPoints;
    let wins = 0;

    for(i = 1; i <= tournaments; i++) {
        let tournamentStage = input[index];
        switch (tournamentStage) {
            case "W":
                totalPoints += 2000;
                wins++;
                break;
            case "F":
                totalPoints += 1200;            
                break;
            case "SF":
                totalPoints += 720;
                break;
        }
        index++;
    }
    let averagePoints = (totalPoints - initialPoints) / tournaments;
    console.log(`Final points: ${totalPoints} `)
    console.log(`Average points: ${Math.floor(averagePoints)} `)
    console.log((100 * wins / tournaments).toFixed(2)+"%")
}
tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
