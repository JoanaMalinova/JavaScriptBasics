function trainingLab(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let rows = Math.floor(100 * length / 120);
    let workPlacePerRow = Math.floor((100 * width - 100 ) / 70);
    let totalWorkPlaces = rows * workPlacePerRow - 3;
    console.log(totalWorkPlaces.toFixed(2))
}
trainingLab([15,8.9])