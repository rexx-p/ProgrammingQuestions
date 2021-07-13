const { printMatrix } = require('../../util/util');


function getMaximumProfit(wt, val, W) {
    let n = val.length;
    const dp = Array(n)
        .fill(0)
        .map(() => Array(W + 1).fill(0));

    for (let i = 0; i <= W; i++) {
        let currentCapacity = i;
        let profit = 0
        while (currentCapacity >= wt[0]) {
            profit += val[0];
            currentCapacity -= wt[0];
        }
        dp[0][i] = profit;
    }

    for (let currentIndex = 0; currentIndex < n; currentIndex++) {
        for (let currentCapacity = 1; currentCapacity < W + 1; currentCapacity++) {
            console.log('running for : ', currentIndex, currentCapacity);
            let currentWeight = wt[currentIndex];
            if (currentWeight > currentCapacity) { //exclude
                dp[currentIndex][currentCapacity] = dp[currentIndex - 1][currentCapacity];
            } else {
                let maxProfitOnExclude = currentIndex > 0 ? dp[currentIndex - 1][currentCapacity] : 0;
                let maxProfitOnInclude = val[currentIndex] + dp[currentIndex][currentCapacity - currentWeight];
                dp[currentIndex][currentCapacity] = Math.max(maxProfitOnExclude, maxProfitOnInclude);
            }
        }
        printMatrix(dp);
    }
    return dp[n - 1][W];
}


let lengths = [1, 2, 3, 4, 5], totalLength = 5, prices = [2, 6, 7, 10, 13];
console.log(getMaximumProfit(lengths, prices, totalLength))
