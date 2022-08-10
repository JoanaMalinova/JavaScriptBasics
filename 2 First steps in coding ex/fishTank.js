function fishTank(input) {
    let lengthCm = Number(input[0]);
    let widthCm = Number(input[1]);
    let heightCm = Number(input[2]);
    let percent = Number(input[3]);
    let volume = lengthCm * widthCm * heightCm;
    let realVolume = volume - (percent/100) * volume;
    console.log(realVolume / 1000)
}
fishTank(["85 ","75 ","47 ","17 "])