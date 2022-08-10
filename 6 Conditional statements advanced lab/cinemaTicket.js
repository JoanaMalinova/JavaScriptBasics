function cinemaTicket(input) {

    let dayOfWeek = input[0];
    let ticketPrice = 0;

    switch(dayOfWeek) {
        case "Monday":
        case "Tuesday":
        case "Friday":
            ticketPrice = 12;
            break;
        case "Wednesday":
        case "Thursday":
            ticketPrice = 14;
            break;
        case "Saturday":
        case "Sunday":
            ticketPrice = 16;
            break;
    }
    console.log(ticketPrice)
}