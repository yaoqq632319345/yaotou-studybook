/*
 * @lc app=leetcode.cn id=1202 lang=javascript
 *
 * [1202] 交换字符串中的元素
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
 class UniSet {
  constructor (n) {
      this.arr = new Array(n)
      for (let i = 0; i < this.arr.length; i++) {
          this.arr[i] = i
      }
  }

  get (idx) {
      return this.arr[idx] = (this.arr[idx] === idx ? idx : this.get(this.arr[idx]))
  }

  concat (i, j) {
      if (this.get(i) === this.get(j)) return
      this.arr[this.get(i)] = this.get(j)
  }
}
var smallestStringWithSwaps = function(s, pairs) {
    let uniset = new UniSet(s.length)

    for (let i = 0; i < pairs.length; i++) {
        uniset.concat(pairs[i][0], pairs[i][1])
    }

    let queueMap = {}
    for (let i = 0; i < s.length; i++) {
        if (!queueMap[uniset.get(i)]) queueMap[uniset.get(i)] = []
        queueMap[uniset.get(i)].push(s[i]) 
    }

    for (let i in queueMap) {
        queueMap[i].sort((a, b) => {
            return b.charCodeAt() - a.charCodeAt()
        })
    }
    // console.log(queueMap)
    let res = ''
    for (let i = 0; i < s.length; i++) {
        res += queueMap[uniset.get(i)].pop()
    }
    return res
};
// @lc code=end

