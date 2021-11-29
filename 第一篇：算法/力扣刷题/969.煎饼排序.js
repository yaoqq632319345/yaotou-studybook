/*
 * @lc app=leetcode.cn id=969 lang=javascript
 *
 * [969] 煎饼排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var pancakeSort = function(arr) {
  let res = [] // 存储结果
  // 每次遍历可以确定最后一位[3,2,4,1] 一次遍历之后 => [1,3,2,4]
  // 所以遍历次数少1
  for (let j = arr.length - 1; j > 0; j--) {

      // 找最大值
      let max = arr[0], maxI = 0
      for (let i = 1; i <= j; i++) {
          if (arr[i] > max) {
              max = arr[i]
              maxI = i
          }
      }
      // console.log(maxI, j)
      if (maxI === j) { // 如果最大值在j位，直接下一次
          continue
      }
      if (maxI != 0) { // 如果最大值不在第一位，翻转到第一位
          reverse(arr, 0, maxI)
          res.push(maxI + 1)

      }
      // 现在最大值在第一位，翻转j位，把最大值放置j处
      reverse(arr, 0, j)
      res.push(j + 1)
  }
  return res
}

function reverse (arr, left, right) {
  left = left || 0;
  right = right || arr.length - 1;
  while(left <right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
  }
}
// @lc code=end

