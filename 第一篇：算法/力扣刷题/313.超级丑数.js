/*
 * @lc app=leetcode.cn id=313 lang=javascript
 *
 * [313] 超级丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
  let res = [1]
  let arr = new Array(primes.length).fill(0)

  for (let i = 1; i < n; i++) {
      let cur = Infinity
      for (let j = 0; j < arr.length; j++) {
          cur = Math.min(cur, res[arr[j]] * primes[j])
      }
      res[i] = cur
      for (let i = 0; i < arr.length; i++) {
          if (cur === res[arr[i]] * primes[i]) arr[i]++
      }
      // console.log(arr)
  }
  // console.log(res)
  return res[n - 1]
};
// @lc code=end

