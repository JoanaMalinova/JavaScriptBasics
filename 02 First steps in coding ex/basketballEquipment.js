function basketballEquipment(input) {
    let tax = Number(input[0]);
    let sneakers = tax - 0.4 * tax;
    let clothing = sneakers - 0.2 *sneakers;
    let ball = clothing / 4;
    let accessories = ball / 5;
    console.log(tax + sneakers + clothing + ball + accessories)
}
basketballEquipment(['365'])