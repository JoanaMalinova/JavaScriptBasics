function passwordGenerator(input){
    let n = Number(input[0]);
    let l = Number(input[1]);
    let printLn = '';

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            for (let k = 97; k < 97 + l; k++) {
                for (let o = 97; o < 97 + l; o++) {
                    for (let m = 1; m <= n; m++) {
                            let letter1 = String.fromCharCode(k);
                            let letter2 = String.fromCharCode(o);
                            if(m > i && m > j){
                                printLn += ""+ i +j + letter1 + letter2 + m + " ";
                            }
                       
                        
                    }
                    
                }
            }
        }
        
    }
    console.log(printLn)
}
passwordGenerator([4,2])