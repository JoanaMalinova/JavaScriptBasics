function streamOfLetters(input) {
    let command = input[0];
    let index = 1;
    let word = '';
    let letterO = 0;
    let letterN = 0;
    let letterC = 0;

    while(command !== "End") {    
        let letter =command.codePointAt(0);   
       
           if(command === 'c'){
                letterC ++;
                if(letterC > 1){
                    word += command;
                }
            }else if(command === 'o'){
                letterO ++;
                if(letterO > 1){
                    word += command;
                }
            }else if(command === 'n'){
                letterN ++;
                if(letterN > 1){
                    word += command;
                }
            }else if(letter < 65 || (letter > 90 && letter < 97)|| letter >122) {

            } else {
            word += command;       
            }
            command = input[index];
            index++;
            if(letterC >= 1 && letterN >= 1 && letterO >= 1){

                process.stdout.write(word + " ");

                letterC = 0;
                letterN = 0;
                letterO = 0;
                word = ""                
            }
            
        }
   
       
    
}
streamOfLetters(['o',
'S',
'%',
'o',
'l',
'^',
'v',
'e',
'c',
'n',
'&',
'm',
'e',
'c',
'o',
'n',
'End'    
    ])