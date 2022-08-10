function multiplyBy2(input) {
    let number = Number(input[0]);
    let inputNumber = 1;
    while (number >= 0 ){
        console.log(`Result: ${(number * 2).toFixed(2)}`);
        number = Number(input[inputNumber]);
        inputNumber ++;      

    }
    console.log("Negative number!")

}
multiplyBy2([-123])