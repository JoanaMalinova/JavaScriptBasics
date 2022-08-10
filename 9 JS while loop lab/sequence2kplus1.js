function sequence2kplus(input){
    let n = Number(input[0]);
    let nextNumber = 1;
    let index = 1;

    while(nextNumber <= n){
       console.log(nextNumber);
       nextNumber = 2 *nextNumber + 1;
       index ++ ;
    }
}
sequence2kplus(["17"])