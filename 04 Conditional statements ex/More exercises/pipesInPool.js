function pipesInPool(input){

    let volume = Number(input[0]);
    let debit1 = Number(input[1]);
    let debit2 = Number(input[2]);
    let awayTime = Number(input[3]);

    let pipe1 = debit1 * awayTime;
    let pipe2 = debit2 * awayTime;
    let totalWater = pipe1 + pipe2;
    if (totalWater > volume){
        let diff = totalWater - volume;
        console.log(`For ${awayTime} hours the pool overflows with ${diff} liters.`)
    }else {
        let fullPercent = ( totalWater / volume ) * 100;
        let pipe1Percent = (pipe1 / totalWater) * 100;
        let pipe2Percent = (pipe2 / totalWater) * 100;
        console.log(`The pool is ${fullPercent.toFixed(2)}% full. Pipe 1: ${pipe1Percent.toFixed(2)}%. Pipe 2: ${pipe2Percent.toFixed(2)}%.`)
    }
}
pipesInPool([1000,100,120,3])