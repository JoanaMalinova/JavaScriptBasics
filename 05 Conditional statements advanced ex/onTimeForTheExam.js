function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);
    let examTotalMinutes = examHour * 60 + examMinute ;
    let arrivalTotalMinutes = arrivalHour * 60 + arrivalMinute;
    let diff = examTotalMinutes - arrivalTotalMinutes;
    let hour =Math.trunc( diff / 60 );
    let minute = diff % 60;
    if (diff < 0 ){
        console.log("Late")
        if(diff <= -60){
            if(minute >= -9 ){
                console.log(`${Math.abs(hour)}:0${Math.abs(minute)} hours after the start`)
                }else  {
                console.log(`${Math.abs(hour)}:${Math.abs(minute)} hours after the start`)
                }

         }else {           
            
            console.log(`${Math.abs(minute)} minutes after the start`)
        
       }

    }else if (diff <= 30) {
        console.log("On time ")
        if(diff >= 1 ) {
            
            console.log(`${minute} minutes before the start`)
            
        }
    }else {
        console.log("Early")
        if( diff >= 60){
            if(minute <= 9 ){
                console.log(`${hour}:0${minute} hours before the start`)
                }else  {
                console.log(`${hour}:${minute} hours before the start`)
                }

        }else {
            console.log (`${minute} minutes before the start`)

        }

    }

}
onTimeForTheExam([16,00,15,00])