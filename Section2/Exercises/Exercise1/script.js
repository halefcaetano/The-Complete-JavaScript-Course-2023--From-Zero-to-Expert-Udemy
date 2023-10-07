
let calcAverage = (first, second, third) => {
    let final = (first + second + third) / 3;
    return final;
};

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas){
    if (avgDolphins >= 2 * avgKoalas){
        return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins){
        return console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else{
        return console.log(`No team wins...`);
    }
}

const result = checkWinner(scoreDolphins, scoreKoalas);