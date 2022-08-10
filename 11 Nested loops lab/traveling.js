function travelling(input){
    let destination = input[0]
    let index = 1; 
    let money = 0;
    let totalMoney = 0;
    while(destination !== "End"){
        let sumNeeded = input[index];
         while(totalMoney < sumNeeded){
            index++;
            money = Number(input[index]);
            totalMoney += money;
           
         }
        totalMoney = 0;
        index++;
        console.log(`Going to ${destination}!`)
        destination = input[index];
        index++;
    }
}
travelling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
