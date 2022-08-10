function tradeComissions(input) {

    let town = input[0];
    let sales = Number(input[1]);
    let comission = 0;
    var error = false;
    switch (town) {
        case"Sofia" :
        if(sales > 10000){
            comission = 0.12 * sales;

        }else if(sales > 1000){
            comission = 0.08 * sales;
        }else if(sales > 500){
            comission = 0.07 * sales;

        }else if(sales >= 0){
            comission = 0.05 * sales;
        
        }else {
            console.log("error");
            error = true;
        }
        break;
        case"Varna" :
        if(sales > 10000){
            comission = 0.13 * sales;

        }else if(sales > 1000){
            comission = 0.1 * sales;
        }else if(sales > 500){
            comission = 0.075 * sales;

        }else if(sales >= 0){
            comission = 0.045 * sales;
        
        }else {
            console.log("error");
            error = true;
        }
        break;
        case"Plovdiv":
        if(sales > 10000){
            comission = 0.145 * sales;

        }else if(sales > 1000){
            comission = 0.12 * sales;
        }else if(sales > 500){
            comission = 0.08 * sales;

        }else if(sales >= 0){
            comission = 0.055 * sales;
        
        }else {
            console.log("error");
            error = true;
        }
        break;
        default:
            console.log("error");
            error = true;
        
    }
    if(!error){
        console.log(comission.toFixed(2))
    }
}
tradeComissions(["Sofia",1500])