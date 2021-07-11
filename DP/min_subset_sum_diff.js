const { printMatrix } = require('../util/util');

let minimumSubsetDiff = function (arr) {
    let totalSum = arr.reduce((s, el) => s + el, 0);


    // we are trying to find a subset of given numbers that has a total sum of ‘sum/2’.
    let sum = Math.round(totalSum / 2);
    let n = arr.length;


    const dp = Array(n)
        .fill(0)
        .map(() => Array(sum + 1).fill(0));

    // populate the sum=0 column, as we can always have '0' sum without including any element
    for (let i = 0; i < n; i++) {
        dp[i][0] = 0;
    }
    for (let currentSum = 1; currentSum <= sum; currentSum++) {
        if (currentSum >= arr[0]) {
            dp[0][currentSum] = arr[0];
        } else {
            dp[0][currentSum] = 0
        }
    }

    for (let currentIndex = 1; currentIndex < n; currentIndex++) {
        for (let currentSum = 1; currentSum <= sum; currentSum++) {
            let previousMaxSumBelowCurrentSum = dp[currentIndex - 1][currentSum];

            if (arr[currentIndex] > currentSum) {
                dp[currentIndex][currentSum] = previousMaxSumBelowCurrentSum;
                //console.log('second')
            } else {
                let result1 = arr[currentIndex] + dp[currentIndex - 1][currentSum - arr[currentIndex]];
                let result2 = previousMaxSumBelowCurrentSum;
                dp[currentIndex][currentSum] = Math.max(result1, result2);
                //console.log('third')

            }

            //printMatrix(dp);

        }
    }
    let maxSumBelowHalfSum = dp[n - 1][sum];
    let remainingSubSetSum = totalSum - maxSumBelowHalfSum;

    return Math.abs(maxSumBelowHalfSum - remainingSubSetSum);
};



console.log(minimumSubsetDiff([1, 2, 3, 9]))
// console.log(minimumSubsetDiff([1, 2, 7, 1, 5]))
 console.log(minimumSubsetDiff([1, 3, 100, 4]))

