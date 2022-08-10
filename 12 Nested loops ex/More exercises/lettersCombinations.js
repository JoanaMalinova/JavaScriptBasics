function lettersCombination(input){
    let startLetter =input[0]
    let endLetter = input[1]
    let oddLetter =input[2]
    let startNum = startLetter.charCodeAt(0);
    let endNum = endLetter.charCodeAt(0);
    let oddNum = oddLetter.charCodeAt(0);
    let printLn = '';
    let counter = 0;
    
    for (let i = startNum; i <= endNum; i++) {
        for (let j = startNum; j <= endNum; j++) {
          for (let k = startNum; k <= endNum; k++) {
              if( i === oddNum || j === oddNum || k === oddNum){
                  continue;
                 
              }
              counter ++;
              printLn += String.fromCharCode(i) + String.fromCharCode(j)+String.fromCharCode(k) + " ";              
              
          }
           
        }
        
    }
    console.log(printLn+counter)
}
lettersCombination(['a','c','z'])