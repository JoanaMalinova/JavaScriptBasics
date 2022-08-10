function minNumber(input){

 let command = input[0];
 let index = 1;
 let minNum = Number.MAX_SAFE_INTEGER;
 while(command !== "Stop"){
     let number = Number(command);
     if(number < minNum) {
         minNum = number;
     }
     command = input[index];
     index++
 }
 console.log(minNum)
}
minNumber(["-10",
"20",
"-30",
"Stop"])

