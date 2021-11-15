/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  // let num = Math.floor(Math.sqrt(c))
  // console.log(num);
  // for (let i = 0; i <= num; i++) {
  //   let b = Math.sqrt(c - i * i)
  //   if (b == parseInt(b)) return true
  // }
  // return false
  let max = Math.floor(Math.sqrt(c))
  let min = 0
  while (min <= max) {
    let target = min * min + max * max
    if (target === c) {
      return true
    }
    if (target < c) {
      min ++
    }
    if (target > c) {
      max --
    }
  }
  return false
};
// @lc code=end

