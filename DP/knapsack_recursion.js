// Given weights and values of n items, 
// put these items in a knapsack of capacity W to get the maximum total value in the knapsack. 
// In other words, given two integer arrays val[0..n - 1] and wt[0..n - 1] which represent values and weights associated with n items respectively. 
// Also given an integer W which represents knapsack capacity, 
// find out the maximum value subset of val[] such that sum of the weights of this subset is smaller than or equal to W.
// You cannot break an item, either pick the complete item or don’t pick it(0 - 1 property).



let wt = [1, 1, 1], W = 2, val = [10, 20, 30];


const getMaximumProfit = (wt, val, w, n) => {
    if (w == 0 || n == 0) {
        return 0;
    }

    //agar(if) item ka weight hi bag ki capacity (ya remaining capacity) se jyaada h, 
    //tb toh koi choice hi nhi h ki hum us item ko include hi nhi krenge.
    if (wt[n - 1] > w) {
        return getMaximumProfit(wt, val, w, n - 1);
    } else {  // agar upr wali condition satisfy ho rhi h, tb humare paas choice h ki usey rkhein ya na rkhein. 
        // Ab rkhna h ya nhi rkhna wo humare desired output pe depend krta h. 
        // Yhn hum usey bag mein rkhenge ya nhi ye depend krega ki usko include krne pe max Profit ho rha h ya nhi.
        return Math.max(val[n - 1] + getMaximumProfit(wt, val, w - wt[n - 1], n - 1), getMaximumProfit(wt, val, w, n - 1));
    }

}

console.log(getMaximumProfit(wt, val, W, wt.length))

