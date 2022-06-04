/*
let weightMark = 78;
let weightJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;

// let weightMark = 95;
// let weightJohn = 85;
// let heightMark = 1.88;
// let heightJohn = 1.76;

let BMIMark = weightMark / heightMark ** 2;
let BMIJohn = weightJohn / heightJohn ** 2;

let markHigherBMI = (BMIMark > BMIJohn);

if (markHigherBMI) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's (${BMIJohn}) BMI is higher than Mark's (${BMIMark})!`);
}

//Coding challenge #3

// const scoreDolphins_1 = 96;
// const scoreDolphins_2 = 108;
// const scoreDolphins_3 = 89;
// const scoreKoalas_1 = 88;
// const scoreKoalas_2 = 91;
// const scoreKoalas_3 = 110;

//Data for Bonus 1
// const scoreDolphins_1 = 97;
// const scoreDolphins_2 = 112;
// const scoreDolphins_3 = 101;
// const scoreKoalas_1 = 109;
// const scoreKoalas_2 = 95;
// const scoreKoalas_3 = 123;

//Data for Bonus 2
const scoreDolphins_1 = 97;
const scoreDolphins_2 = 112;
const scoreDolphins_3 = 101;
const scoreKoalas_1 = 109;
const scoreKoalas_2 = 95;
const scoreKoalas_3 = 106;

const averageScoreDolphins = (scoreDolphins_1 + scoreDolphins_2 + scoreDolphins_3) / 3;
const averageScoreKoalas = (scoreKoalas_1 + scoreKoalas_2 + scoreKoalas_3) / 3;

console.log(`AVGDoplhins = ${averageScoreDolphins} and AVGKoalas = ${averageScoreKoalas}`);

if (averageScoreDolphins === averageScoreKoalas && averageScoreDolphins >= 100 && averageScoreKoalas >= 100) {
    console.log(`They have the same scores! We don't have a winner :(`);
} else if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins > 100) {
    console.log(`Dolphins won!`);
} else if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas > 100) {
    console.log(`Coalas won!`)
} else {
    console.log(`We don't have a winner :(`)
}
*/

//Coding Challenge #4

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 15 / 100 : bill * 20 / 100;
const totalValue = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`);