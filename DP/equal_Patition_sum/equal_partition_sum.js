// Given a non-empty array containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

// Note:

// Each of the array element will not exceed 100. The array size will not exceed 200.

// Example 1:

// Input: [1, 5, 11, 5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].
// Example 2:

// Input: [1, 2, 3, 5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.


// S/2 

const rec = function (arr, n, sum, subset = []) {
    console.log(arr, n, sum, subset);

    if (sum == 0) {
        return true;
    }
    if (sum < 0 || n >= arr.length) {
        return false;
    }
    if (arr[n] > sum) {
        return rec(arr, n + 1, sum, subset)
    } else {
        subset.push(arr[n])
        let result1 = rec(arr, n + 1, sum - arr[n], subset);
        let result2 = rec(arr, n + 1, sum, subset);
        if (result1) {
            return result1;
        } else {
            subset.pop();
            return result2;
        }
    }
}

let arr = [1, 5, 5, 7];
let sum = arr.reduce((sum, el) => sum + el, 0);
let result = rec(arr, 0, sum / 2);

console.log(result);





