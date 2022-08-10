function moving(input){
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let noMoreSpace = false;
    let freeSpace = width * length * height;
    let command = input[3];
    let index = 4;

    while(command !== "Done"){
        let boxes = Number(command);
        freeSpace -= boxes;
        if(freeSpace <= 0){
            noMoreSpace = true;
            break;
        }
        command = input[index];
        index++;
    }
    let diff = Math.abs(freeSpace);
    if(noMoreSpace){
        console.log(`No more free space! You need ${diff} Cubic meters more.`);
    }else{
        console.log(`${diff} Cubic meters left.`);
    }

}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])


