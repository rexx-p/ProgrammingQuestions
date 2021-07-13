const { printMatrix } = require('../../util/util');


function getMinimumDenominations(denominations, Total) {
    let n = denominations.length;
    const dp = Array(n)
        .fill(0)
        .map(() => Array(Total + 1).fill(0));

    // for (let i = 0; i < n; i++) {

    //     dp[0][i] = 1;

    // }

    for (let currentIndex = 0; currentIndex < n; currentIndex++) {
        for (let currentTotal = 1; currentTotal < Total + 1; currentTotal++) {
            console.log('running for : ', currentIndex, currentTotal);
            let currentDenomination = denominations[currentIndex];
            let minimumCoinsFromPrevCoins = currentIndex > 0 ? dp[currentIndex - 1][currentTotal] : 0;

            if (currentDenomination > currentTotal) { //exclude
                dp[currentIndex][currentTotal] = minimumCoinsFromPrevCoins
            } else {
                let coinsOfCurrentDenomination = parseInt(currentTotal / currentDenomination);
                let remainingTotal = currentTotal % currentDenomination;
                let minimumCoinsRequiredForRemainingTotal = dp[currentIndex][remainingTotal]
                let minimumCoinsusingThisCoin = coinsOfCurrentDenomination + minimumCoinsRequiredForRemainingTotal;
                if (minimumCoinsFromPrevCoins == 0) {
                    dp[currentIndex][currentTotal] = minimumCoinsusingThisCoin;
                } else {
                    dp[currentIndex][currentTotal] = Math.min(minimumCoinsFromPrevCoins, minimumCoinsusingThisCoin);
                }
            }
        }
        printMatrix(dp);
    }
    return dp[n - 1][Total];
}


let denominations = [1, 2, 3], totalAmount = 5;
console.log(getMinimumDenominations(denominations, totalAmount))
