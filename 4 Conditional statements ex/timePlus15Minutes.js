function timePlus15Minutes(input) {

    let initialHour = Number(input[0]);
    let initialMinutes = Number(input[1]);
    let timeInMinutes = initialHour * 60 + initialMinutes + 15;
    let timeInHour = timeInMinutes / 60 ;
    let hour = Math.trunc(timeInHour);
    let minutes = timeInMinutes % 60 ;
    if(hour == 24){
        hour = 0;
    }
    if (minutes < 10) {
        console.log(`${hour}:0${minutes}`)
    }else {
        console.log(`${hour}:${minutes}`)
    }
}
timePlus15Minutes([1,46])