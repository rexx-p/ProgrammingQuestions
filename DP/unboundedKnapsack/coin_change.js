const { printMatrix } = require('../../util/util');


function getAllPossibleWays(denominations, Total) {
    let n = denominations.length;
    const dp = Array(n)
        .fill(0)
        .map(() => Array(Total + 1).fill(0));

    for (let i = 0; i < n; i++) {
        dp[i][0] = 1;

    }

    for (let currentIndex = 0; currentIndex < n; currentIndex++) {
        for (let currentTotal = 1; currentTotal < Total + 1; currentTotal++) {
            console.log('running for : ', currentIndex, currentTotal);
            let currentDenomination = denominations[currentIndex];
            let possibleWaysFromPrevCoins = currentIndex > 0 ? dp[currentIndex - 1][currentTotal] : 0;
            if (currentDenomination > currentTotal) { //exclude
                dp[currentIndex][currentTotal] = possibleWaysFromPrevCoins
            } else {
                let waysFromThisCoin = dp[currentIndex][currentTotal - currentDenomination];
                dp[currentIndex][currentTotal] = possibleWaysFromPrevCoins + waysFromThisCoin;
            }
        }
        printMatrix(dp);
    }
    return dp[n - 1][Total];
}


let denominations = [1, 2, 3], totalAmount = 5;
console.log(getAllPossibleWays(denominations, totalAmount))
