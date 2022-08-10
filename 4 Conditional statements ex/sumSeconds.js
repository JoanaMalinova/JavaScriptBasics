function sumSeconds(input){

    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);
    let totalTimeInSec = first + second + third ;
    let totalTimeInMin = totalTimeInSec / 60 ;
    let mins = Math.trunc(totalTimeInMin);
    let secs = totalTimeInSec % 60;
    if(secs < 10){
        console.log(`${mins}:0${secs}`);
    } else {
        console.log(`${mins}:${secs}`);
    }

}
sumSeconds([35,45,44])