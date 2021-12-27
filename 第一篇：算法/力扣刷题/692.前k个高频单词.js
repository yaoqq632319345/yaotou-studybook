/*
 * @lc app=leetcode.cn id=692 lang=javascript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 class Heap {
  /**
   * 
   * @param {*} arr 
   * @param {*} fun (子节点， 父节点) { 返回子节点是否比父节点优先 }
   */
  constructor (arr, fun) {
    this.fn = fun
    this.arr = []
    for (let i = 0; i < arr.length; i++) {
      this.push(arr[i])
    }
  }

  pop () {
    if (this.size() == 0) return null
    let res = this.arr[0]

    this.arr[0] = this.arr.pop()
    
    this.down(0)

    return res
  }
  push (val) {
    this.arr.push(val)

    this.up(this.arr.length - 1)
  }

  /** 交换 */
  swap (i, j) {
    let temp = this.arr[i]
    this.arr[i] = this.arr[j]
    this.arr[j] = temp
  }
  up (idx) {
    let parent = Math.floor((idx - 1) / 2)

    if (this.fn(this.arr[idx], this.arr[parent])) {
      this.swap(idx, parent)

      this.up(parent)
    }
  }

  size () {
    return this.arr.length
  }
  down (idx) {
    let left = 2 * idx + 1
    let right = 2 * idx + 2

    if (left < this.size()) { // 如果有左子节点
      if (this.fn(this.arr[left], this.arr[idx])) {
        this.swap(left, idx)

        this.down(left)
      }

      if (right < this.size()) {
        if (this.fn(this.arr[right], this.arr[idx])) {
          this.swap(right, idx)

          this.down(right)
        }
      }
    }
  }
}
var topKFrequent = function(words, k) {
    let map = {}
    for (let i = 0; i < words.length; i++) {
        map[words[i]] = (map[words[i]] || 0) + 1
    }
    // console.log(map)
    let heap = new Heap(Object.keys(map), function (child, parent) {
        if (map[child] === map[parent]) {
            let i = 0;
            while (child[i] == parent[i]) i++
            // console.log(child[i], parent[i])
            if (!child[i]) return true
            if (!parent[i]) return false
            return child[i].charCodeAt() < parent[i].charCodeAt()
        }
        return map[child] > map[parent]
    })
    let res = []
    while (k--) {
        res.push(heap.pop())
    }
    return res
};
// @lc code=end

