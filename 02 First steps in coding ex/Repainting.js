function repainting(input) {

    let nylonNeeded = Number(input[0]);
    let paintNeeded = Number(input[1]);
    let dilutant = Number(input[2]);
    let hoursWork = Number(input[3]);
    let sum = (nylonNeeded + 2) * 1.5 + (paintNeeded + 0.1 * paintNeeded) * 14.5 + dilutant * 5 + 0.4;
    let workersPay = 0.3 * sum * hoursWork;
    console.log(sum + workersPay);
}
repainting(["10 ","11 ","4 ","8 "])