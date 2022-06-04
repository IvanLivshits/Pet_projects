'use strict';

/*
//LECTURE: Functions

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
}

const Finland = describeCountry('Finland', 6, 'Helsinki');
const Russia = describeCountry('Russia', 144, 'Moscow');
const Germany = describeCountry('Germany', 83, 'Berlin');

console.log(Finland, '\n', Russia, '\n', Germany);

//LECTURE: Function Declaration vs. Expressions

function percentageOfWorld1(population) {
    return population * 100 / 7900;
}

const Finland = percentageOfWorld1(6);
const Russia = percentageOfWorld1(144);
const Germany = percentageOfWorld1(83);

console.log(`Finland = ${Finland}%, Russia = ${Russia}%, Germany = ${Germany}%`);

const percentageOfWorld2 = function (population) {
    return population * 100 / 7900;
}

console.log(`Finland = ${percentageOfWorld2(6)}%, Russia = ${percentageOfWorld2(144)}%, Germany = ${percentageOfWorld2(83)}%`);

//LECTURE: Arrow Functions

const percentageOfWorld3 = population => population * 100 / 7900;

console.log(`Finland = ${percentageOfWorld3(6)}%, Russia = ${percentageOfWorld3(144)}%, Germany = ${percentageOfWorld3(83)}%`);

//LECTURE: Functions Calling Other Functions
function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`;
}

function percentageOfWorld1(population) {
    return population * 100 / 7900;
}

console.log(describePopulation('Finland', 6));
console.log(describePopulation('Russia', 144));
console.log(describePopulation('Germany', 83));

//LECTURE: Intodaction to Arrays

const populations = [6, 144, 83, 52];
console.log(populations.length === 4);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

function percentageOfWorld1(population) {
    return population * 100 / 7900;
}

console.log(percentages);

//LECTURE: Basic Array Operations (Methods)

let neighbours = ['Ukraine', 'Latvia', 'Estonia', 'Finland', 'Belarus', 'Mongolia'];
neighbours.push('Utopia');
neighbours.pop();
if (!neighbours.includes('Germany')) {
    console.log(`Probably not a central European country :D`);
}
neighbours[2] = 'Kazahstan';

//LECTURE: Introduction to Objects

const myCountry = {
    country: `Russia`,
    capital: `Moscow`,
    language: `Russian`,
    population: 144.1,
    neighbours: ['Ukraine', 'Latvia', 'Estonia', 'Finland', 'Belarus', 'Mongolia']
};
console.log(myCountry);

//LECTURE: Dot vs. Bracket Notation

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

myCountry.population = myCountry.population + 2;
console.log(myCountry.population);

myCountry['population'] = myCountry['population'] - 2;
console.log(myCountry['population']);

//LECTURE: Object Methods

const myCountry = {
    country: `Russia`,
    capital: `Moscow`,
    language: `russian`,
    population: 144.1,
    neighbours: ['Ukraine', 'Latvia', 'Estonia', 'Finland', 'Belarus', 'Mongolia'],

    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        return this.isIsland;
    }
};

console.log(myCountry.describe(), `Is it Island country? - ${myCountry.checkIsland() ? `Yes` : `No`}`);

//LECTURE: Iteration: The for Loop

for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting! 📃`);
}

//LECTURE: Looping Arrays, Breaking and Continuing

const populations = [6, 144, 83, 52];
const percentages2 = [];

const percentageOfWorld1 = (population) => population * 100 / 7900;

for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);

//LECTURE: Looping Backwards and Loops in Loops

const listOfNeighbours = [[`Canada`, `Mexico`], [`Spain`], [`Norway`, `Sweden`, `Russia`]];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbours: ${listOfNeighbours[i][j]}`)
    }
}

//LECTURE: The while loop

const populations = [6, 144, 83, 52];
const percentages3 = [];

const percentageOfWorld1 = (population) => population * 100 / 7900;

let i = 0;

while (i < populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]));
    i++
}

console.log(percentages3);
*/