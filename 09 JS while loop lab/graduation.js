function graduation(input){
    let studantName = input[0];
    let index = 1;
    let grade = 1;
    let badGrade = 0;
    let isExcluded = false;
    let totalGrade = 0;
    while(grade <= 12){
        let mark = Number(input[index]);
        if(mark < 4){
           badGrade ++;
           if(badGrade == 2){
                isExcluded = true;
                break;
           }
           continue;
        }
        totalGrade += mark;
        index ++;
        grade ++;
    }
    if(isExcluded){
        console.log(`${studantName} has been excluded at ${grade} grade`)
    }else{
        console.log(`${studantName} graduated. Average grade: ${(totalGrade / 12).toFixed(2)}`)
    }
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
