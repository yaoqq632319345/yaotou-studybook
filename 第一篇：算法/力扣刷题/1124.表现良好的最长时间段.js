/*
 * @lc app=leetcode.cn id=1124 lang=javascript
 *
 * [1124] 表现良好的最长时间段
 */

// @lc code=start
/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {
  let dp = [0]
    for (let i = 0; i < hours.length; i++) {
        hours[i] = hours[i] > 8 ? 1 : -1
        dp[i+1] = dp[i] + hours[i]
    }
    // console.log(dp)
    let res = 0
    for (let i = 1; i < dp.length; i++) {
        let j = i
        while(j--) {
            if (dp[i] - dp[j] > 0)
                res = Math.max(res, i - j)
        }
    }
    return res
};
// @lc code=end

