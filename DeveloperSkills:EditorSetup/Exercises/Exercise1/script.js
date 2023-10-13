

const temperatures = [17, 21, 23];
let string = '...';
for (let i = 0; i < temperatures.length; i++){
    string += ` ${temperatures[i]}°C in ${i + 1} days ...`;
};

console.log(string)