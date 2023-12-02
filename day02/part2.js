const fs = require('fs');

const values = fs.readFileSync('input.txt').toString().split("\n");

let possibleColors = {red:12, green:13, blue:14};

let total = 0;
for (i = 0; i < values.length; i++) {
    let game = parseInt(values[i].replace(/^Game ([\d]+).*$/, '$1'));
    let possible = true;

    let colors = {red: 0, green: 0, blue: 0};
    for (let color in possibleColors) {
        let matches = [...values[i].matchAll(`([\\d]+) ${color}`)];
        for (let j in matches) {
            if (parseInt(matches[j][1]) > colors[color]) {
                colors[color] = parseInt(matches[j][1]);
            }
        }
    }
    total += colors.red * colors.green * colors.blue;
}

console.log(total);