'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function sockMerchant(n, ar) {

   const colorCounts = {}
    
   for (const color of ar){
       if (colorCounts[color])
       colorCounts[color]++ 
       else
       colorCounts[color]=1
   }
   
   let colorPairs = 0
   
   for (const color in colorCounts){
     let pairs = Math.floor(colorCounts[color]/2)
     colorPairs += pairs
   }
   
   return colorPairs



}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
