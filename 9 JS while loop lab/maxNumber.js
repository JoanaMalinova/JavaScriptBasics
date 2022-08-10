function maxNumber(input){

    let command = input[0];
    let index = 1;
    let maxNum = Number.MIN_SAFE_INTEGER;
    while(command !== "Stop"){
        let number = Number(command);
        if(number > maxNum){
            maxNum = number;
        }
        command = input[index];
        index++;
    }
    console.log(maxNum)
}
maxNumber(["-1",
"-2",
"Stop"])


