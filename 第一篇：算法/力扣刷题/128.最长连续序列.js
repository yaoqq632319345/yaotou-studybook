/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 class UniSet {
  constructor (n) {
      this.arr = new Array(n)
      this.size = new Array(n)
      for (let i = 0; i < this.arr.length; i++) {
          this.arr[i] = i
          this.size[i] = 1
      }
  }

  get (idx) {
      return this.arr[idx] = (this.arr[idx] === idx ? idx : this.get(this.arr[idx]))
  }

  concat (i, j) {
      console.log(i, j)
      if (this.get(i) === this.get(j)) return
      this.size[this.get(j)] += this.size[this.get(i)]
      this.arr[this.get(i)] = this.get(j)
  }
}
var longestConsecutive = function(nums) {
    let map = {}
    let uniset = new UniSet(nums.length)
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i]
        if (map[curr] !== undefined) continue
        if (map[curr - 1] !== undefined) {
            uniset.concat(map[curr - 1], i)
        }
        if (map[curr + 1] !== undefined) {
            uniset.concat(map[curr + 1], i)
        }
        map[curr] = i
    }
    console.log(uniset)
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        res = Math.max(uniset.size[uniset.get(i)], res)
    }
    return res
};
// @lc code=end

