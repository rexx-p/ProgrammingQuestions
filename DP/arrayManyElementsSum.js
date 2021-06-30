// Input - Array, sum, numberOfElements
const findElementForTwo = (arr, sum) => {
    console.log('Searching for : ', arr, sum);
    let i = 0;
    while (i < arr.length) {
        let j = 0;
        let complimentryNumber = sum - arr[i]
        if (complimentryNumber <= 0) {
            i++
            continue;
        }
        while (j < arr.length) {
            if (i == j) {
                j++;
                continue;
            }
            if (arr[j] == complimentryNumber) {
                return [arr[i], arr[j]];
            }
            j++;
        }
        i++;
    }
    return -1;
}

const findElements = (arr, sum, n) => {
    console.log('Searching for : ', arr, sum, n);
    if (n == 2)
        return findElementForTwo(arr, sum);
    let i = 0;
    while (i < arr.length) {
        let remainingArray = arr.filter((x, index) => index != i);
        let remainingSum = sum - arr[i];
        if (remainingSum <= 0) {
            i++;
            continue;
        };
        let result = -1;
        if (n == 3)
            result = findElementForTwo(remainingArray, remainingSum);
        else
            result = findElements(remainingArray, remainingSum, n - 1);
        if (result != -1) {
            return [arr[i], ...result];
        }
        i++;
    }
    return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 9;
let n = 4;
console.log(findElements(arr, sum, n));