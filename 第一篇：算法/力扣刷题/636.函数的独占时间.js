/*
 * @lc app=leetcode.cn id=636 lang=javascript
 *
 * [636] 函数的独占时间
 */

// @lc code=start
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
  let stack1 = [], stack2 = []
  let res = new Array(n).fill(0)
  let preEnd = 0
  for (let i = 0; i < logs.length; i++) {
    const arr = logs[i].split(':')
    if (arr[1] === 'start') {
      stack1.push(arr[0]) // start 记录序号
      if (stack2.length) {
        stack2[stack2.length - 1] += arr[2] - preEnd // 两个start之后计算前一个长度
      }
      stack2.push(0) // start 记录长度
      preEnd = arr[2] // 记录之前的arr[2]值
    } else {
      const index = stack1.pop()
      res[index] += arr[2] - preEnd + stack2.pop() + 1
      preEnd = arr[2] - 0 + 1 // 记录之前的arr[2]值，end时这个值要加1
    }
    // console.log(stack1, stack2, preEnd)
    // console.log(res)
  }
  return res
};
// @lc code=end

