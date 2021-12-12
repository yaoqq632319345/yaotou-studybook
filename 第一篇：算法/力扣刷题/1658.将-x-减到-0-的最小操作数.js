/*
 * @lc app=leetcode.cn id=1658 lang=javascript
 *
 * [1658] 将 x 减到 0 的最小操作数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
 function search (nums, target) {
  let l = 0, r = nums.length - 1, mid;
  while (l <= r) {
      mid = (l + r) >> 1
      if (nums[mid] === target) return mid
      if (nums[mid] > target) r = mid - 1
      else l = mid + 1
  }
  return -1
}
var minOperations = function(nums, x) {
  let suml = [0], sumr = [0]
  for (let i = 0; i < nums.length; i++) suml[i + 1] = nums[i] + suml[i]
  for (let i = nums.length - 1; i >= 0; i--) sumr[nums.length - i] = nums[i] + sumr[nums.length - i - 1]

  let res = -1
  for (let i = 0; i < suml.length; i++) {
      let j = search(sumr, x - suml[i])

      if (j === -1) continue
      if (i + j > nums.length) continue
      if (res === -1 || res > i + j) res = i + j
  }
  return res
};
// @lc code=end

