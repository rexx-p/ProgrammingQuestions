const { printMatrix } = require('../../util/util');

let isSubsetWithGivenSumPossible = function (arr, sum) {
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
                //console.log('first')
            } else {


                if (arr[currentIndex] > currentSum) {
                    dp[currentIndex][currentSum] = possibleWithPreviousElements;
                    //console.log('second')
                } else {
                    dp[currentIndex][currentSum] = dp[currentIndex - 1][currentSum - arr[currentIndex]];
                    //console.log('third')

                }
            }
            //printMatrix(dp);

        }
    }

    return dp[n - 1][sum];
};



console.log(isSubsetWithGivenSumPossible([1, 2, 3, 7], 6))
console.log(isSubsetWithGivenSumPossible([1, 2, 7, 1, 5], 10))
console.log(isSubsetWithGivenSumPossible([1, 3, 4, 8], 6))

