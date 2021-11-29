/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  // 统计数量
  let map = new Map()
  for (let i = 0; i < tasks.length; i++) {
      map.set(tasks[i], (map.get(tasks[i]) || 0) + 1)
  }

  let max = 0, maxK
  // 获取最大任务次数
  for (let [key, val] of map) {
      if (max < val) {
          max = val
          maxK = key
      }
  }
  // console.log(max)
  let res = max + n * (max - 1) // 获取最大任务所需时间
  // 如果有相同次数任务，res顺延
  for (let [key, val] of map) {
      if (val === max && key != maxK) {res++}
  }
  // n值比较小的情况下，没有空闲时间
  let p = 0
  if (n*(max-1) < tasks.length - max) {
      p = tasks.length
  }

  return Math.max(res, p) // 取最大值
};
// @lc code=end

