const { printMatrix } = require('../../util/util');


function getMinimumDenominations(possibleLengths, TotalLength) {
    let n = possibleLengths.length;
    const dp = Array(n)
        .fill(0)
        .map(() => Array(TotalLength + 1).fill(0));

    let firstPossibleLength = possibleLengths[0];
    for (let i = 0; i < TotalLength; i++) {
        let currentTotalLength = i;
        if (currentTotalLength % firstPossibleLength == 0) {
            dp[0][i] = currentTotalLength / firstPossibleLength;
        } else {
            dp[0][i] = -1;
        }
    }

    for (let currentIndex = 1; currentIndex < n; currentIndex++) {
        for (let currentTotalLength = 1; currentTotalLength < TotalLength + 1; currentTotalLength++) {
            console.log('running for : ', currentIndex, currentTotalLength);
            let currentLength = possibleLengths[currentIndex];
            let maxPiecesFromPrevLengths = dp[currentIndex - 1][currentTotalLength];

            if (currentLength > currentTotalLength) { //exclude
                dp[currentIndex][currentTotalLength] = maxPiecesFromPrevLengths
            } else {
                // let coinsOfCurrentDenomination = parseInt(currentTotalLength / currentLength);
                // let remainingTotal = currentTotalLength % currentLength;
                // let minimumCoinsRequiredForRemainingTotal = dp[currentIndex][remainingTotal]
                let remainingLength = currentTotalLength - currentLength;
                let maxPiecesOfRemainingLength = dp[currentIndex][remainingLength];
                let maximumPiecesFromThisLength = -1;
                if (maxPiecesOfRemainingLength == -1) {
                    maximumPiecesFromThisLength = -1;
                    dp[currentIndex][currentTotalLength] = maxPiecesFromPrevLengths;
                } else {
                    maximumPiecesFromThisLength = 1 + dp[currentIndex][currentTotalLength - currentLength];
                    if (maxPiecesFromPrevLengths == -1) {
                        dp[currentIndex][currentTotalLength] = maximumPiecesFromThisLength;
                    } else {
                        dp[currentIndex][currentTotalLength] = Math.max(maxPiecesFromPrevLengths, maximumPiecesFromThisLength);
                    }
                }
            }
        }
        printMatrix(dp);
    }
    return dp[n - 1][TotalLength];
}


let possibleLengths = [2, 3, 5], totalLength = 5;
console.log(getMinimumDenominations(possibleLengths, totalLength))
