function sumNumbers(input){
    let number = Number(input[0]);
    let index = 1;
    let sum = 0;
    while(true){
        let nextNumber = Number(input[index]);
        sum += nextNumber
        if(sum >= number){
            break;
        }

        index++
    }
    console.log(sum)
}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
