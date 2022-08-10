function grade(input){
    let students = Number(input[0]);
    let grade = 0;
    let index = 1;
    let top = 0;
    let four = 0;
    let three = 0;
    let fail = 0;
    let totalGrade = 0;
        
    for(let i = 1; i <= students; i++) {
        grade = Number(input[index]);
        if(grade >= 5){
            top ++;
            totalGrade += grade;
        }else if (grade >= 4 ){
            four ++;
            totalGrade += grade;
        }else if (grade >= 3){
            three ++;
            totalGrade += grade;
        }else {
            totalGrade += grade;
            fail ++;
        }
        index++
    }
    let total = top + four + three + fail ;
    console.log(`Top students: ${(top * 100 / total).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(four * 100 / total).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(three * 100 / total).toFixed(2)}%`);
    console.log(`Fail: ${(fail * 100 / total).toFixed(2)}%`)
    console.log(`Average: ${(totalGrade / total).toFixed(2)}`)
}
grade([10,
    3.00,
    2.99,
    5.68,
    3.01,
    4,
    4,
    6.00,
    4.50,
    2.44,
    5    ])