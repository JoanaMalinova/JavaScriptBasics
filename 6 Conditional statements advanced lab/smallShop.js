function smallShop(input) {

    let product = input[0];
    let town = input[1];
    let quantity = input[2];
    let price = 0;
    switch(product) {
        case"coffee":
         switch(town){
             case"Sofia":
             price = 0.5 * quantity;
             break;
             case"Plovdiv":
             price = 0.4 * quantity;
             break;        
             case"Varna":
             price = 0.45 * quantity;
             break;

         }
        break;
        case"water":
        switch(town){
            case"Sofia":
            price = 0.8 * quantity;
            break;
            case"Plovdiv":
            price = 0.7 * quantity;
            break;        
            case"Varna":
            price = 0.7 * quantity;
            break;

        }
        break;
        case"beer":
        switch(town){
            case"Sofia":
            price = 1.2 * quantity;
            break;
            case"Plovdiv":
            price = 1.15 * quantity;
            break;        
            case"Varna":
            price = 1.1 * quantity;
            break;

        }
        break;
        case"sweets":
        switch(town){
            case"Sofia":
            price = 1.45 * quantity;
            break;
            case"Plovdiv":
            price = 1.3 * quantity;
            break;        
            case"Varna":
            price = 1.35 * quantity;
            break;

        }
        break;
        case "peanuts":
            switch(town){
                case"Sofia":
                price = 1.6 * quantity;
                break;
                case"Plovdiv":
                price = 1.5 * quantity;
                break;        
                case"Varna":
                price = 1.55 * quantity;
                break;
   
            }
        break;
    }
    console.log(price)
}