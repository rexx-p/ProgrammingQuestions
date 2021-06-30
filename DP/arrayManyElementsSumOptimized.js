// Input - Array, sum, numberOfElements

const findElements = (arr, sum, n) => {
    console.log('Searching for : ', arr, sum, n);
    if (n == 1) {
        let x = arr.find(x => x == sum);
        return x ? [x] : -1
    }
    
    let i = 0;
    while (i < arr.length) {
        let remainingArray = arr.filter((x, index) => index != i);
        let remainingSum = sum - arr[i];
        if (remainingSum <= 0) {
            i++;
            continue;
        };
        let result = findElements(remainingArray, remainingSum, n - 1);
        if (result != -1) {
            return [arr[i], ...result];
        }
        i++;
    }
    return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 25;
let n = 4;
console.log(findElements(arr, sum, n));