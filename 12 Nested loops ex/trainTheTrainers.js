function trainTheTrainers(input){
    let n = Number(input[0]);
    let presentation = input[1];
    let index = 2;
    let totalGrade = 0;
    let finalGrade = 0;
    let counter = 0;

    while(presentation !== "Finish"){
       for (let i = 1; i <= n; i++) {
        let grade = Number(input[index]);    
        totalGrade += grade; 
        counter ++;   
        index++;           
       }
       finalGrade += totalGrade;
       console.log(`${presentation} - ${(totalGrade / n).toFixed(2)}.`) 
       presentation = input[index];      
       totalGrade = 0;
       index++;
    }
    console.log(`Student's final assessment is ${(finalGrade / counter).toFixed(2)}.`)
}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


