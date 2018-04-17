function min(x, y, z) {
    if (x <= y && x <= z) return x;
    if (y <= x && y <= z) return y;
    else return z;
}

function editDistDP(str1, str2, m, n) {
    // Create a table to store results of subproblems
    let dp = Array(m + 1).fill(Array(n + 1));

    // Fill d[][] in bottom up manner
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            // If first string is empty, only option is to
            // isnert all characters of second string
            if (i == 0)
                dp[i][j] = j; // Min. operations = j

            // If second string is empty, only option is to
            // remove all characters of second string
            else if (j == 0)
                dp[i][j] = i; // Min. operations = i

            // If last characters are same, ignore last char
            // and recur for remaining string
            else if (str1[i - 1] === str2[j - 1])
                dp[i][j] = dp[i - 1][j - 1];

            // If last character are different, consider all
            // possibilities and find minimum
            else
                dp[i][j] = 1 + min(dp[i][j - 1], // Insert
                    dp[i - 1][j], // Remove
                    dp[i - 1][j - 1]); // Replace
        }
    }

    return dp[m][n];
}

let a = "sunday";
let b = "saturday";

editDistDP(a, b, a.length, b.length);
