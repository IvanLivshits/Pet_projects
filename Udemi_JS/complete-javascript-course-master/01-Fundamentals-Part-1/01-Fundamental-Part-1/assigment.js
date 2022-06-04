//LECTURE: Values and Variables

const country = 'Russia';
const continent = 'Eurasia';
let population = 144.1 * 10 ** 6;

console.log(country);
console.log(continent);
console.log(population);


//LECTURE: Data Types
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


//LECTURE: let, const and var
language = 'mandarin';

//LECTURE: Basic Operators
let halfPopulation = population / 2;
population++;
console.log(population);
console.log(halfPopulation);

const populationOnFinland = 6 * 10 ** 6;
console.log(population > populationOnFinland);

console.log(33 * 10 ** 6 < population);

const description = country + ' is in ' + continent + ', and its ' + (population / (10 ** 6)) + ' million people speak ' + language;
console.log(description);

//LECTURE: Strings and Template Literals
console.log(`${country} is in ${continent}, and its ${population / (10 ** 6)} million people speak ${language}`);

//LECTURE: Taking Decisions: if/else Statements
if (population > 33 * 10 ** 6) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population / 10 ** 6} below  average`)
}

//LECTURE: Type Conversion and Coersion
console.log('9' - '5', '19' - '13' + '17', '19' - '13' + 17, '123' < 57, 5 + 6 + '4' + 9 - 4 - 2);

//LECTURE: Equality Operators: == vs. ===
/*
const numNeighbours = Number(prompt(`How many neigbour countries does your country have?`));

if (numNeighbours === 1) {
    console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
    console.log(`More than 1 border`);
} else {
    console.log(`No borders`);
}
*/

//LECTURE: Logical Operators
if ((language === 'english') && (population < 50 * 10 ** 6) && (isIsland === false)) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria :(`)
}

//LECTURE: The switch Statement
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log(`MOST number of native speakers!`);
        break;
    case 'spanish':
        console.log(`2nd place in number of native speakers`);
        break;
    case 'english':
        console.log(`3rd place`);
        break;
    case 'hindi':
        console.log(`Number 4`);
        break;
    case 'arabic':
        console.log(`5th most spoken language`);
        break;
    default:
        console.log(`Great language too :D`);
        break;
}

//LECTURE: The Conditional (Ternary) Operator
population > 33 * 10 ** 6 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);