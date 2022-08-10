function cake(input){

    let cakeLength = Number(input[0]);
    let cakeWidth = Number(input[1]);
    let cakeArea = cakeLength * cakeWidth;   
    let index = 3;
    let command = input[2];
    let piecesLeft = cakeArea;
    let noMorePieces = false;
     while(command !== "STOP" ){
         let pieces = Number(command);
         piecesLeft -= pieces;
         if(piecesLeft <= 0){
             noMorePieces = true;
             break;
         }
        
         command = input[index];
         index ++;
     }
     let diff = Math.abs(piecesLeft)
     if(!noMorePieces){
        console.log(`${diff} pieces are left.`)
     }else {
        console.log(`No more cake left! You need ${diff} pieces more.`)
     }
     
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

