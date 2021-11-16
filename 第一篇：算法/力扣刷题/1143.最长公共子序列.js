/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let len1 = text1.length, len2 = text2.length;
  const dp = new Array(len1 + 1).fill([]).map(() => new Array(len2 + 1).fill(0))

  for (let i = 1; i<=len1; i++) {
    let t1 = text1[i - 1]
    for (let j = 1; j <= len2; j++) {
      let t2 = text2[j - 1]

      if (t1 === t2) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j -1])
      }
    }
  }

  return dp[len1][len2]
};
// @lc code=end

