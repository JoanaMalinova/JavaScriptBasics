function equalSumsEvenOddPosition(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let oddSum = 0;
    let evenSum = 0;
    let number = '';

    for (let i = num1; i <= num2; i++) {
        let currentNum = "" + i;
        for (let j = 0; j < 6; j++) {
            let digit = Number(currentNum.charAt(j));
            if(j % 2 === 0){
                evenSum += digit;
            }else{
                oddSum += digit;
            }
           
        }
        if(evenSum === oddSum){
            number += currentNum + " ";
        }
        evenSum = 0;
        oddSum = 0;
        
    }
    console.log(number);
}
equalSumsEvenOddPosition(["123456",
"124000"])

