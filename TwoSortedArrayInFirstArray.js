// merge two sorted arrays in one array. 
// 	a. size of first array m+n  {1,4,6,8,0,0,0,0,0}
// 	b. size of array two n {0,2,3,5,9,10}
// 	merge in and store in first array. 
// 	result : {0,1,2,3,4,5,6,8,9,10}


let x = [1, 4, 6, 8, 0, 0, 0, 0, 0];
let y = [0, 2, 3, 5, 9, 10];

const sortIntoOne = (x, y, m, n) => {
    let yIndex = n - 1;
    let xIndex = m - 1;
    let insertIndex = m + n - 1;
    while (yIndex >= 0) {
        if (x[xIndex] > y[yIndex]) {
            x[insertIndex--] = x[xIndex--];
        } else {
            x[insertIndex--] = y[yIndex--];
        }
    }
    return x;
}

console.log(sortIntoOne(x, y, x.length - y.length, y.length))