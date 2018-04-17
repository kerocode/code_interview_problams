function findMinDiff(arr, isDynamic) {
    let sum = arr.reduce((a, b) => a + b);
    return isDynamic ? findMinDynamic(arr, arr.length, sum) : findMinRec(arr, arr.length, sum, 0);
}
//time complexity is (2^n)
function findMinRec(arr, idx, sum, sumSofar) {
    //base case 
    if (idx === 0) {
        return Math.abs(sum - (2 * sumSofar));
    } else {
        return Math.min(findMinRec(arr, idx - 1, sum, sumSofar + arr[idx - 1]),
            findMinRec(arr, idx - 1, sum, sumSofar));
    }
}

function findMinDynamic(arr, n, sum) {
    let dp = Array(n + 1).fill(Array(sum + 1).fill(0))
    for (let i = 0; i <= n; i++) {
        dp[i][0] = 1;
    }
    // Fill the partition table 
    // in bottom up manner
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= sum; j++) {
            // If i'th element is excluded
            dp[i][j] = dp[i - 1][j];

            // If i'th element is included
            if (arr[i - 1] <= j) {
                dp[i][j] |= dp[i - 1][j - arr[i - 1]];
            }
        }
    }
    console.log(dp);
    // Initialize difference of two sums. 
    let diff = Number.MAX_VALUE

    // Find the largest j such that dp[n][j]
    // is true where j loops from sum/2 t0 0
    for (let j = sum / 2; Math.floor(j) >= 0; j--) {
        // Find the 
        if (dp[n][Math.floor(j)]) {
            diff = sum - 2 * j;
            break;
        }
    }
    return diff;
}
let nums = [3, 1, 4, 2, 2, 1];
console.log(findMinDiff(nums));
console.log(findMinDiff(nums, true));
