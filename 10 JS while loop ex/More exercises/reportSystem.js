function reportSystem(input){

    let sum = Number(input[0]);
    let command = input[1];
    let counter = 0;
    let cash = 0;
    let card = 0;
    let cashTotal = 0;
    let cardTotal = 0;
    let index = 2;
    let total = 0;
    let moneyCollected = false;
    

    while(command !== "End"){
        let money = Number(command);       
        counter ++;
        if(counter % 2 === 0){
           
            if( money < 10){
                console.log("Error in transaction!");

            }else {
                card ++;
                console.log("Product sold!");
                cardTotal += money;
                total += money;
            }            
        }else {
            
            if( money > 100){
                console.log("Error in transaction!");  
            }else {
                cash ++;
                console.log("Product sold!");
                cashTotal += money;
                total += money;
            }
        }
        if(total >= sum){
           moneyCollected = true;
           break;
        }
        command = input[index];
        index ++;
        

    }
    if(moneyCollected){
        console.log(`Average CS: ${(cashTotal / cash).toFixed(2)}`);
        console.log(`Average CC: ${(cardTotal / card).toFixed(2)} `)
    }else {
        console.log('Failed to collect required money for charity.')
    }
    
}
reportSystem([600,
    86,
    150,
    98,
    227,
    "End"
    
    ])
