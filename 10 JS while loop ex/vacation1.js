function vacation1(input){
    let vacationMoney = Number(input[0]);
    let savings = Number(input[1]);
    let index = 2;
    let counter = 0;
    let cantSave = false;
    let days = 0;
    let lastAction = '';
    while(savings < vacationMoney){
        days ++;
        let action = input[index];
        let money = Number(input[index +1])
        if(action === "spend"){
           if(lastAction === "spend") {
               counter ++;
            }else{
                counter = 0;
            }
            if(counter == 4){
                cantSave = true;
                break;
            }
            if(money >= savings){
                savings = 0;
            }else{

            savings -= money;

            }
        }else if(action === "save") {
            savings += money;
        }
        
        index += 2;
        lastAction = action;
        
    }
    if(cantSave){
        console.log("You can't save the money.");
        console.log(days);
    }else{
        console.log(`You saved the money for ${days} days.`)
    }
   
}
vacation1(["110",
"60",
"spend",
"10",
"spend",
"10",
"save",
"20",
"spend",
"10",
"spend",
"10",
"spend",
"10"])


