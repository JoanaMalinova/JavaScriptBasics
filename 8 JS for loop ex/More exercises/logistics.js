function logistics(input) {
    let count = Number(input[0]);
    let index = 1;
    let price = 0;
    let total = 0;
    let miniBus = 0;
    let truck = 0;
    let train = 0;

    for(let i = 1; i <= count; i++){
        let tonage = Number(input[index]);
        total += tonage;
        index ++ ;
        if(tonage <= 3){
            miniBus += tonage;
            price += tonage * 200;
        }else if(tonage <= 11){
            truck += tonage;
            price += tonage * 175;
        }else {
            train += tonage;
            price += tonage * 120;
        }
    }
    console.log((price / total).toFixed(2));
    console.log((miniBus * 100 / total).toFixed(2)+'%');
    console.log((truck * 100 / total).toFixed(2)+'%');
    console.log(`${(train * 100 / total).toFixed(2)}%`)


}
logistics([4,
    1,
    5,
    16,
    3
    ])