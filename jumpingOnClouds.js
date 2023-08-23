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

/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 * accept the input array
 * create a dp array to store min jumps
 * iterate over the clouds
 * if the cloudsis a thunderhead skip if not consider the jumps
 */

function jumpingOnClouds(c) {
    const n = c.length;
    const dp = new Array(n).fill(Infinity);
    dp[0] = 0;
    
    for (let i = 1; i < n ; i++){
        if (c[i] === 1){
            continue;
        }else {
            dp[i]=Math.min(dp[i],dp[i-1]+1)
            if (i >= 2)
                dp[i]= Math.min(dp[i],dp[i-2]+1)
        }
    }
    return dp[n-1]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const c = readLine().replace(/\s+$/g, '').split(' ').map(cTemp => parseInt(cTemp, 10));

    const result = jumpingOnClouds(c);

    ws.write(result + '\n');

    ws.end();
}
