function lunchBreak(input) {

    let series = input[0];
    let episodeTime = input[1];
    let breakTime = input[2];

    let lunchBreak = breakTime / 8;
    let restTime = breakTime / 4;
    let reaminingTime = breakTime - (lunchBreak + restTime);
    let diff = Math.abs(episodeTime - reaminingTime);
    diff = Math.ceil(diff);
    if(reaminingTime >= episodeTime){
        console.log(`You have enough time to watch ${series} and left with ${diff} minutes free time.`)
    }else {
        console.log(`You don't have enough time to watch ${series}, you need ${diff} more minutes.`)
    }
}
lunchBreak(["Game of Thrones","60","96"])