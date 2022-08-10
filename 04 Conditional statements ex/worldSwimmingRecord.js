function worldSwimmingRecord(input){

    let recordInSec = Number(input[0]);
    let distanceInMtr = Number(input[1]);
    let timeInSecPerMtr = Number(input[2]);

    let time = distanceInMtr * timeInSecPerMtr + Math.floor(distanceInMtr / 15) * 12.5;
    if(time < recordInSec) {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`)
    }else {
        let diff = time - recordInSec;
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    }
}
worldSwimmingRecord([10464,1500,20])