function examPreparation(input){
let fail = Number(input[0]);
let problemTitle = input[1];
let index = 2;
let badGrades = 0;
let hasFailed = false;
let totalGrade = 0;
let counter = 0;
let lastProblem = '';

while(problemTitle !== "Enough"){
    let grade = Number(input[index]);
    totalGrade += grade;
    counter ++;

    if(grade <= 4){
        badGrades ++;
        if(badGrades === fail){
            hasFailed = true;
            break;
        }
    }
    lastProblem = problemTitle;
    problemTitle = input[index + 1];
    index += 2;
}
if(hasFailed){
    console.log(`You need a break, ${badGrades} poor grades.`)
    
}else{
    console.log(`Average score: ${(totalGrade / counter).toFixed(2)}`);
    console.log(`Number of problems: ${counter}`);
    console.log(`Last problem: ${lastProblem}`);

}
}
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

