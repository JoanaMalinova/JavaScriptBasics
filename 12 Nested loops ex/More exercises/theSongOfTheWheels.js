function theSongOfTheWheels(input){
    let number = Number(input[0]);
    let counter = 0;
    let password = '';
    let printLn = '';
    let passwordFound = false;

    for (let a = 1; a <= 9; a++) {
       for (let b = 1; b <= 9; b++) {
           for (let c = 1; c <= 9; c++) {
              for (let d = 1; d <= 9; d++) {
                  if(a < b && c > d){
                      if(a * b + c * d === number){
                          counter ++;
                          printLn += ""+ a + b + c + d + " "
                          if(counter === 4){
                            passwordFound = true;
                            password = "" + a + b + c + d;
                          }

                      }
                  }
              }
           }
       }
        
    }
    console.log(printLn);
    if(!passwordFound){
        console.log("No!");
    }else {   
    console.log(`Password: ${password}`); 
}
}
theSongOfTheWheels([55])