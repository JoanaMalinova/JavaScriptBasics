function multiplicationTable(input){

    let number =Number(input[0]);

    for (let num = 1; num <= 10; num++) {
        console.log(`${num} * ${number} = ${number * num}`)
        
    }
}
multiplicationTable([5])