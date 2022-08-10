function vowelSum(input){

    let word = input[0];
    let value = 0;

    for(i = 0; i < word.length ; i++){
        letter = word[i];
        switch(letter){
            case "a":
                value += 1;
                break;
            case "e":
                value += 2;
                break;
            case "i" :
                value += 3;
                break;
            case "o" :
                value += 4;
                break;
            case "u" :
                value += 5;
                break;
        }
    }
    console.log(value)
}
vowelSum(["hello"])