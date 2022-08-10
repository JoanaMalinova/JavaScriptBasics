function oscars(input) {
    let actor = input[0];
    let academyPoints = Number(input[1]);
    let juryNum = Number(input[2]);
    let index = 3;
  
    let gotANominee = false;

    for(let i = 1; i <= juryNum; i++) {
        let juryMember = input[index];
        academyPoints += Number(input[index + 1]) * juryMember.length / 2;
        if(academyPoints > 1250.5) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            gotANominee = true;
            break;

        }
        index += 2;
                   
    }
    if(!gotANominee){
        let neededPoints = 1250.5 - academyPoints;
        console.log(`Sorry, ${actor} you need ${neededPoints.toFixed(1)} more!`)
    }
    
}
oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"]
)