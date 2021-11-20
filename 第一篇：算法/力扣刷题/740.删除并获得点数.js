/*
 * @lc app=leetcode.cn id=740 lang=javascript
 *
 * [740] 删除并获得点数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  let max = 0
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i])
    }
    let sum = new Array(max+1).fill(0)

    nums.forEach(item => {
        sum[item] += item
    })

    console.log(sum)
    let dp = [0, 0]
    for (let i = 2; i<=sum.length+1; i++) {
        dp[i] = Math.max(dp[i-2] + sum[i-2], dp[i-1])
    }
    return dp[sum.length+ 1]
};
// @lc code=end

