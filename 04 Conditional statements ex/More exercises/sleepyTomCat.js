function sleepyTomCat(input) {

    let holidays = Number(input[0]);
    let workdays = 365 - holidays;
    let totalPlaytime = holidays * 127 + workdays * 63;
    let diff = Math.abs(30000 - totalPlaytime);
    let minutes = diff % 60;
    let hours = Math.trunc(diff / 60);
    if(totalPlaytime > 30000){
        console.log("Tom will run away");
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    }else {
        console.log("Tom sleeps well");
        console.log(`${hours} hours and ${minutes} minutes less for play`);

    }
}
sleepyTomCat([20])