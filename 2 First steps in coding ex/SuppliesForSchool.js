function suppliesForSchool(input) {

    let packetPens = Number(input[0]);
    let packetMarkers = Number(input[1]);
    let ltrCleanser = Number(input[2]);
    let discountPercent = Number(input[3]);
    let sum = packetPens * 5.8 + packetMarkers * 7.2 +ltrCleanser * 1.2;
    let sumWithDiscount = sum - sum * discountPercent/100;
    console.log(sumWithDiscount)
}
suppliesForSchool(["2 ","3 ","4 ","25 "])