function housePainting(input) {

    let height = Number(input[0]);
    let length = Number(input[1]);
    let heightRoof = Number(input[2]);
    let greenPaint = 2 * height * height - 1.2 * 2 + 2 * (height * length - 1.5 * 1.5);
    let redPaint = 2 * height * length + 2 * (height * heightRoof / 2);
    let greenLtr = greenPaint / 3.4;
    let redLtr = redPaint / 4.3;
    console.log(greenLtr.toFixed(2));
    console.log(redLtr.toFixed(2));
}
housePainting([6,10,5.2])