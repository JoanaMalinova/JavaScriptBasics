function yardGreening(input) {
    let area = input[0];
    let sum = area * 7.61
    let discount = 0.18 * sum;
    let finalSum = sum - discount;
    console.log('The final price is: '+ finalSum + ' lv.');
    console.log('The discount is: '+discount + ' lv.')
}
yardGreening(["550"])