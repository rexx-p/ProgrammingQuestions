const { printMatrix } = require('../../util/util');

let canPartition = function (arr) {
    let sum = arr.reduce((s, el) => s + el, 0);

    // if 'sum' is a an odd number, we can't have two subsets with equal sum
    if (sum % 2 !== 0) return false;

    // we are trying to find a subset of given numbers that has a total sum of ‘sum/2’.
    sum = sum / 2;
    let n = arr.length;

    const dp = Array(n)
        .fill(false)
        .map(() => Array(sum + 1).fill(false));

    // populate the sum=0 column, as we can always have '0' sum without including any element
    for (let i = 0; i < n; i++) {
        dp[i][0] = true;
    }
    for (let currentSum = 1; currentSum <= sum; currentSum++) {
        if (arr[0] == currentSum) {
            dp[0][currentSum] = true;
        }
    }

    for (let currentIndex = 1; currentIndex < n; currentIndex++) {
        for (let currentSum = 1; currentSum <= sum; currentSum++) {

            let possibleWithPreviousElements = dp[currentIndex - 1][currentSum];

            if (possibleWithPreviousElements) {
                dp[currentIndex][currentSum] = possibleWithPreviousElements;
                continue;
            }


            if (arr[currentIndex] > sum) {
                dp[currentIndex][currentSum] = possibleWithPreviousElements;
            } else {
                dp[currentIndex][currentSum] = dp[currentIndex - 1][sum - arr[currentIndex]];
            }
           // printMatrix(dp);

        }
    }

    return dp[n - 1][sum];
};



console.log(canPartition([1, 2, 3, 4]))
console.log(canPartition([1, 1, 3, 4, 7]))
console.log(canPartition([2, 3, 4, 6]))
console.log(canPartition([1, 5, 5, 7]))

