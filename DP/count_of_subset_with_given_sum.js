const { printMatrix } = require('../util/util');

let isSubsetWithGivenSumPossible = function (arr, sum) {
    let n = arr.length;

    const dp = Array(n)
        .fill(0)
        .map(() => Array(sum + 1).fill(0));

    // populate the sum=0 column, as we can always have '0' sum without including any element
    for (let i = 0; i < n; i++) {
        dp[i][0] = 1;
    }
    for (let currentSum = 1; currentSum <= sum; currentSum++) {
        if (arr[0] == currentSum) {
            dp[0][currentSum] = 1;
        }
    }

    for (let currentIndex = 1; currentIndex < n; currentIndex++) {
        for (let currentSum = 1; currentSum <= sum; currentSum++) {
            let previousCount = dp[currentIndex - 1][currentSum];

            if (arr[currentIndex] > currentSum) {
                dp[currentIndex][currentSum] = previousCount;
                //console.log('second')
            } else {
                dp[currentIndex][currentSum] = previousCount + dp[currentIndex - 1][currentSum - arr[currentIndex]];
                //console.log('third')

            }

            //printMatrix(dp);

        }
    }

    return dp[n - 1][sum];
};



console.log(isSubsetWithGivenSumPossible([1, 2, 3, 6], 9))
console.log(isSubsetWithGivenSumPossible([1, 2, 7, 2, 5], 10))
console.log(isSubsetWithGivenSumPossible([1, 3, 4, 8], 6))

