function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    for (let i = floors; i >= 1; i--) {
        console.log()
        for (let j = 0; j < rooms; j++) {
          if(i === floors){
            process.stdout.write('L'+ i + j +" ")
          }else if(i % 2 === 0 ){
            process.stdout.write('O' + i + j + ' ');
          }else {
            process.stdout.write('A' + i + j + ' ');
          }
        }
        
    }
}
building(["6", "4"])