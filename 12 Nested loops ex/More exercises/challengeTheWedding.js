function challengeTheWedding(input){
    let men = Number(input[0]);
    let women = Number(input[1]);
    let freeTables = Number(input[2]);
    let printLn = '';
    let noMoreTables = false;
    
    for (let i = 1; i <= men; i++) {
       for (let j = 1; j <= women; j++) {
           if(freeTables === 0){
               noMoreTables = true;
               break;
           }
           freeTables -= 1;
           printLn += `(${i} <-> ${j}) `
       }
       if(noMoreTables){
           break;
       }
        
    }
    console.log(printLn);


}
challengeTheWedding([5,8,40])