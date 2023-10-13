
function calcTip(bill) {
    if (bill >= 50 && bill <= 300){
        return bill * 15 / 100;
    } else{
        return bill * 20 / 100;
    }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(totals)