const country = 'Brazil';
const continent = 'South America';
let population = 2143000;
let populationSplit = population / 2;
const isIsland = 'no';
const langauage = 'portuguese';
const description = "Portugal is in Europe, and its 11 milion people speak portuguese";


if (population > 33000000){
    console.log(`${country}'s population is above average'`);
} else{
    let average = 33000000;
    let total = average - population;
    console.log(`${country}'s population is ${total} million below average'`)
}
