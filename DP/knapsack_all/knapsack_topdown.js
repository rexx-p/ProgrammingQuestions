// Given weights and values of n items, 
// put these items in a knapsack of capacity W to get the maximum total value in the knapsack. 
// In other words, given two integer arrays val[0..n - 1] and wt[0..n - 1] which represent values and weights associated with n items respectively. 
// Also given an integer W which represents knapsack capacity, 
// find out the maximum value subset of val[] such that sum of the weights of this subset is smaller than or equal to W.
// You cannot break an item, either pick the complete item or don’t pick it(0 - 1 property).


let wt = [1, 1, 1], W = 2, val = [10, 20, 30];

//Trick -  we will calculate maximum profit for each item starting with empty array and progress accordingly.
// In the end we will get if that is the array what is the maximum profit for given input.

let t = []; //2d array but index will be 1 less than the corresponding index in weight or value matrix. -WHY?
//Because we need to store value of maximumProfit when there is no value in weight/value error, at -1 index if you may.
//In other words, we are not only concerned with indexes/elements but empty arrays as well, WHICH will essentially be our BASE CONDITION.
const getMaximumProfit = (wt, val, W, N) => {
    for (let n = 0; n < N ; n++) { // i will represent w (it's time, we as well calculate maximum profit for all values, wheather we need it or not)
        t[n] = [];
        debugger;
        for (let w = 0; w < N ; w++) { // j will represent n
            if (n == 0 || w == 0) {
                t[n][w] = 0;
            } else {
                //agar(if) item ka weight hi bag ki capacity (ya remaining capacity) se jyaada h, 
                //tb toh koi choice hi nhi h ki hum us item ko include hi nhi krenge.
                if (wt[n - 1] > W) {
                    t[n][w] = t[n][w - 1];

                } else {  // agar upr wali condition satisfy ho rhi h, tb humare paas choice h ki usey rkhein ya na rkhein. 
                    // Ab rkhna h ya nhi rkhna wo humare desired output pe depend krta h. 
                    // Yhn hum usey bag mein rkhenge ya nhi ye depend krega ki usko include krne pe max Profit ho rha h ya nhi.
                    let maxProfitIfNotIncluded = t[n][w - 1];
                    let maxProfitIfIncluded = val[n - 1] + t[n][w - 1];
                    t[n][w] = Math.max(maxProfitIfNotIncluded, maxProfitIfIncluded);
                }
            }
        }
    }
    console.log(t);
    return t[N-1][W-1];
}

console.log(getMaximumProfit(wt, val, W, wt.length))

