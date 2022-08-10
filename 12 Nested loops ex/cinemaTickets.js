function cinemaTickets(input){
    let movie = input[0];
    let index = 1;   
    let total = 0; 
    let standart = 0;
    let kid = 0;
    let student = 0;
    while(movie !== "Finish"){
        let counter = 0;
        let seats = Number(input[index]);
        index ++;        
        let projection = input[index];
        while(projection !== "End"){
            counter++;
            switch(projection){
                case 'standard':
                    standart ++;
                    break;
                case 'kid':
                    kid ++;
                    break;
                case 'student':
                    student ++;
                    break;

            }
            if(counter === seats){
                break;
            }
            index++;
            projection = input[index];
        }
        total += counter;
        console.log(`${movie} - ${(counter * 100 / seats).toFixed(2)}% full.`)
        index++;
        movie = input[index];
        index++;
    }
    console.log(`Total tickets: ${total}`);
    console.log(`${(student * 100 / total).toFixed(2)}% student tickets.`);
    console.log(`${(standart * 100/ total).toFixed(2)}% standard tickets.`);
    console.log(`${(kid * 100 / total).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

