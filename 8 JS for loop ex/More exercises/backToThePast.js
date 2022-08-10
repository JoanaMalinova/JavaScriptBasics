function backToThePast(input){

    let inheritance = Number(input[0]);
    let finalYear = Number(input[1]);
    age = 18;

    for(let year = 1800; year <= finalYear; year++){
       
        if( year % 2 === 0){
            inheritance -= 12000;
        }else{
            inheritance -= 12000 + 50 * age ;
        }
        age++;
        
    }
let diff = Math.abs(inheritance);
if(inheritance >= 0) {
   console.log(`Yes! He will live a carefree life and will have ${diff.toFixed(2)} dollars left.`)
}else {
    console.log(`He will need ${diff.toFixed(2)} dollars to survive.`)
}
}
backToThePast([100000.15,
    1808
    ])

