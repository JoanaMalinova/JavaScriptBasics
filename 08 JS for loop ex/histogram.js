function histogram(input) {
    let n = Number(input[0]);
    let counter1 = 0 ;
    let counter2 = 0;
    let counter3 = 0;
    let counter4 = 0;
    let counter5 =0;
    let index = 1;
    


    for (let num = 1; num <= n; num++) {        
       let number = Number(input[index]);
       if(number < 200){
           counter1++;

       }else if(number <= 399){
           counter2++;

       }else if(number <= 599){
           counter3++;
        
       }else if(number <= 799){
           counter4++;

       }else {
           counter5++;

       }
       index++
      
        
    }
    console.log(`${(100 * counter1 / n).toFixed(2)}%`);
    console.log(`${(100 * counter2 / n).toFixed(2)}%`);
    console.log(`${(100 * counter3 / n).toFixed(2)}%`);
    console.log(`${(100 * counter4 / n).toFixed(2)}%`);
    console.log(`${(100 * counter5 / n).toFixed(2)}%`);

}
histogram([3,1,2,999])