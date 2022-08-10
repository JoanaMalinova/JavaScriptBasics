function oldBooks(input) {
    let wantedBook = input[0];
    let book = input[1];
    let bookFound = false;
    index = 2;
    let booksChecked = 0;
    while(book !== "No More Books"){
        if(book === wantedBook){
            bookFound = true;
            break;
        }
        booksChecked ++;
        book = input[index];
        index++;
    }
    if(bookFound){
        console.log(`You checked ${booksChecked} books and found it.`)
    }else {
        console.log("The book you search is not here!");
        console.log(`You checked ${booksChecked} books.`)
    }
}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


