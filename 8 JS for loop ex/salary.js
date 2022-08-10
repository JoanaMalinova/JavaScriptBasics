function salary(input){

    let openTabs = Number(input[0]);
    let salary = Number(input[1]);
    let index = 2;
    let fine = 0;
    var salaryLost = false;
    

    for( let a = 1; a <= openTabs ; a++){
        let pageName = input[index];
        if(pageName === "Facebook"){
            fine += 150;

        }else if (pageName === "Instagram"){
            fine += 100;

        }else if (pageName === "Reddit"){
            fine += 50;

        }
        if(salary - fine <= 0){
            console.log("You have lost your salary.");
            salaryLost = true;
            break;
        }

         index++;
    }
    
    if(!salaryLost) {
        let rest = salary - fine;
        console.log(Math.trunc(rest));
    }
   
}
salary([3,500,"Facebook","Stackoverflow.com","softuni.bg"])