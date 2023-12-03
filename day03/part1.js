const fs = require('fs');

const values = fs.readFileSync('input.txt').toString().split("\n");

let total = 0;

for (let k = 0; k<values.length;k++) {
    let line = values[k];
    let number = 0;
    let minIndex = -1;
    let maxIndex = -1;
    let include = false;
    for (let i = 0; i < line.length; i++) {
        if (!isNaN(line[i]) && i != line.length -1) {
            if (minIndex == -1) {
                minIndex = i;
            }
            number = number*10+parseInt(line[i]);
            maxIndex = i;
        } else if (minIndex > -1) {
            if (i == line.length-1) {
                if (!isNaN(line[i])) {
                    if (minIndex == -1) {
                        minIndex = i;
                    }
                    number = number*10+parseInt(line[i]);
                    maxIndex = i;
                }
            }
            minIndex = Math.max(0, minIndex-1);
            maxIndex = Math.min(line.length -1, maxIndex+1);
            previousLine = Math.max(0, k-1);
            nextLine = Math.min(values.length-1, k+1);
            for (let j = previousLine; j <= nextLine;j++) {
                for (let l = minIndex; l<=maxIndex;l++) {
                    if (isNaN(values[j][l]) &&  values[j][l] != '.') {
                        include = true;
                    }
                }
            }
                        
            if (include) total += number;

            minIndex = -1;
            maxIndex = -1;
            number = 0;
            include = false;


        } 
    }
}

console.log(total);