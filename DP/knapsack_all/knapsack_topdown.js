// Given weights and values of n items, 
// put these items in a knapsack of capacity W to get the maximum total value in the knapsack. 
// In other words, given two integer arrays val[0..n - 1] and wt[0..n - 1] which represent values and weights associated with n items respectively. 
// Also given an integer W which represents knapsack capacity, 
// find out the maximum value subset of val[] such that sum of the weights of this subset is smaller than or equal to W.
// You cannot break an item, either pick the complete item or don’t pick it(0 - 1 property).



//Trick -  we will calculate maximum profit for each item starting with empty array and progress accordingly.
// In the end we will get if that is the array what is the maximum profit for given input.

let MaxProfit = []; //2d array but index will be 1 less than the corresponding index in weight or value matrix. -WHY?
//Because we need to store value of maximumProfit when there is no value in weight/value error, at -1 index if you may.
//In other words, we are not only concerned with indexes/elements but empty arrays as well, WHICH will essentially be our BASE CONDITION.
const getMaximumProfit = (wt, val, originalBagWeightCapacity, originalValueAndWeightArrayLength) => {
    for (let valueAndWeightArrayLength = 0; valueAndWeightArrayLength <= originalValueAndWeightArrayLength; valueAndWeightArrayLength++) { // i will represent w (it's time, we as well calculate maximum profit for all values, wheather we need it or not)
        MaxProfit[valueAndWeightArrayLength] = [];
        debugger;

        for (let bagWeightCapacity = 0; bagWeightCapacity <= originalBagWeightCapacity; bagWeightCapacity++) { // j will represent n
            if (valueAndWeightArrayLength == 0 || bagWeightCapacity == 0) {
                MaxProfit[valueAndWeightArrayLength][bagWeightCapacity] = 0;
            } else {
                if (wt[valueAndWeightArrayLength] <= bagWeightCapacity) {
                    let profit1 = MaxProfit[valueAndWeightArrayLength - 1][bagWeightCapacity];
                    let profit2 = val[valueAndWeightArrayLength] + MaxProfit[valueAndWeightArrayLength - 1][bagWeightCapacity - wt[valueAndWeightArrayLength]]
                    MaxProfit[valueAndWeightArrayLength][bagWeightCapacity] = Math.max(profit1, profit2);
                } else {
                    MaxProfit[valueAndWeightArrayLength][bagWeightCapacity] = MaxProfit[valueAndWeightArrayLength - 1][bagWeightCapacity];

                }
            }
        }

    }
    print(MaxProfit);
    return MaxProfit[originalValueAndWeightArrayLength - 1][originalBagWeightCapacity ];
}

function print(matrix) {
    console.log(matrix.map(x => '__').join(''));
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        let rowToPrint = [];
        for (let j = 0; j < row.length; j++) {
            const element = row[j];
            rowToPrint.push(element);
        }
        console.log(rowToPrint.join(','));
    }
}

let wt = [2, 3, 5], W = 8, val = [40, 20, 50];
debugger;
console.log(getMaximumProfit(wt, val, W, wt.length))
