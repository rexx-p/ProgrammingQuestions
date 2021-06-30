# DP1 - Break down a large problem into smaller problems

How to recognise - Choice and Optimal (Minimum, Maximum)
DP = Recursion -> Memoization -> Top-down


Types of Knapsack - fractional, 0/1 , unbounded supply

##### 0/1 Knapsack - 

Input - weightArray, valueArray/priceArray, CapacityOfKnapsack

Desired Output - Maximize profit

Kya kya choices h tumhare paas ->
1) agar(if) item ka weight hi bag ki capacity (ya remaining capacity) se jyaada h, tb toh koi choice hi nhi h ki hum us item ko include hi nhi krenge.
2) agar upr wali condition satisfy ho rhi h, tb humare paas choice h ki usey rkhein ya na rkhein. 

Note - Ab rkhna h ya nhi rkhna wo humare desired output pe depend krta h. Yhn hum usey bag mein rkhenge ya nhi ye depend krega ki usko include krne pe max Profit ho rha h ya nhi.


#### Making of recursion Function
1) Function arguments - all inputs of problem -> (int weightArray[], int valueArray, int bagCapacity, int sizeOfValueAndWeightArray)

2) output - desired output -> maxProfit -> int

3) Base Condition -> Where Recursion will terminate (output on smallest valid input)
- sizeOfValueAndWeightArray == 0 or bagCapacity == 0
In this case maximumProfit will be 0.
    >if(sizeOfValueAndWeightArray == 0 || bagCapacity == 0)
return 0;

4) Choice Diagram -> How the function is going to call
    Function(I/P) -> Function(Smaller I/P)
- ab upr likhi choices ke according agr uska weight hi jyaada h bag se toh we won't include it,
means function will return -
    > return recursiveFunction(weightArray, valueArray, W, n-1)
- agar uska weight km h toh hum rkh bhi skte hain ya nhi bhi, rkhenge ya nhi depend krega last output pe.
    > return MAX(valueArray[n-1]+ recursiveFunction(weightArray, valueArray, W - weightArray[n-1], n-1) ,    recursiveFunction(weightArray, valueArray, W, n-1) )
