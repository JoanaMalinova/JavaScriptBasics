function depositCalculator(input) {

let depositedSum = Number(input[0]);
let depositPeriod = Number(input[1]);
let interest = Number(input[2]);
let totalInterest = (interest/100) *depositedSum;
let interestPerMonth = totalInterest/12;
let totalSum = depositedSum + depositPeriod * interestPerMonth;
console.log(totalSum)
}
depositCalculator(["200 ","3 ","5.7 "])