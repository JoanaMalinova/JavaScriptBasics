function specialNumbers(input){
    let n = Number(input[0]);
    let number = "";
    let printLn = "";
    
        for (let i = 1111; i <= 9999; i++) {
            let notSpecial = false;
            let num = ''+ i;
       for (let j = 0; j < 4; j++) {        
         let digit = Number(num.charAt(j));
         if(n % digit === 0){
             number += digit;
         }else{
             notSpecial = true;             
             break;
         }
       }
       if(!notSpecial){ 
       printLn += number + " ";
       }
       number = '';           
             
    }
    console.log(printLn) 
    
}
specialNumbers(["16"])