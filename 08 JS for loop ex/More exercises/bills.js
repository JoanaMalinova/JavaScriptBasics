function bills(input) {
    let months = Number(input[0]);
    let electricBill= 0;
    let waterBill = 20;
    let internetBill = 15;
    let otherBill = 0;
    let index = 1;
    let totalEl = 0;
    let totalWater = 0;
    let totalInternet = 0;
    let totalOther = 0;

    for( let i  = 1; i <= months; i++){
        electricBill = Number(input[index]);
        totalEl += electricBill;
        totalWater += waterBill;
        totalInternet += internetBill;
        otherBill = electricBill + waterBill + internetBill + 0.2 * (electricBill +waterBill +internetBill);
        totalOther += otherBill;
           index++;
    }
    let total = totalEl + totalInternet + totalWater + totalOther;
    console.log(`Electricity: ${totalEl.toFixed(2)} lv`);
    console.log(`Water: ${totalWater.toFixed(2)} lv`);
    console.log(`Internet: ${totalInternet.toFixed(2)} lv`);
    console.log(`Other: ${totalOther.toFixed(2)} lv`);
    console.log(`Average: ${(total / months).toFixed(2)} lv`);
}
bills([5,
    68.63,
    89.25,
    132.53,
    93.53,
    63.22
    ])