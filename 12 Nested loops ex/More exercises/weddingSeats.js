function weddingSeats(input){
    let sectors = input[0];
    let rows = input[1];
    let seatsOdd = input[2];
    let startSector = "A".charCodeAt(0);
    let lastSector = sectors.charCodeAt(0);
    let seatsStart = "a".charCodeAt(0);
    let seatsEnd = seatsStart + seatsOdd;
    let totalSeats = 0;

    for (let i = startSector; i <= lastSector; i++) {
     
       for (let j = 1; j < rows; j++) {       
        if( j % 2 !==0){
            for (let k = seatsStart; k <= seatsEnd; k++) {
                totalSeats ++;
                let sector = String.fromCharCode(i);              
                let seat = String.fromCharCode(k);
                console.log(sector + j + seat);
          }
        }else {
            for ( let k = seatsStart; k <= seatsEnd + 2; k++) {
                totalSeats ++;
                let sector = String.fromCharCode(i);              
                let seat = String.fromCharCode(k);             
                console.log(sector + j + seat)
            }
        }
       }      
       rows ++;
        
    }
    console.log(totalSeats)


}
weddingSeats(['C',
    4,
    2
    ])