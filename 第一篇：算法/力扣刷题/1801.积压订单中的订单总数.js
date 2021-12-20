/*
 * @lc app=leetcode.cn id=1801 lang=javascript
 *
 * [1801] 积压订单中的订单总数
 */

// @lc code=start
/**
 * @param {number[][]} orders
 * @return {number}
 */
 class Heap {
  constructor (fn) {
    this.arr = []
    this.fn = fn
  }
  front () {
    return this.arr[0] || -1
  }
  push (val) {
    this.arr.push(val)
    if (this.arr.length > 1) this.up(this.arr.length - 1)
  }
  pop () {
    let res = this.arr[0]
    if (!res) return -1
    if (this.arr.length === 1) return this.arr.pop()
    this.arr[0] = this.arr.pop()
    this.down(0)
    return res
  }
  swap (i, j) {
    [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]]
  }
  up (id) {
    let parent = ((id + 1) >> 1) - 1
    // console.log(parent)
    if (parent >= 0 && this.fn(this.arr[id], this.arr[parent])) {
      // console.log('aaaa', this.arr[id])
      this.swap(id, parent)
      this.up(parent)
    }
  }
  down (id) {
    let left = id * 2 + 1, right = id * 2 + 2
    if (left < this.arr.length) {
      if (this.fn(this.arr[left], this.arr[id])) {
        this.swap(id, left)
        this.down(left)
      }
      if (right < this.arr.length) {
        if (this.fn(this.arr[right], this.arr[id])) {
          this.swap(id, right)
          this.down(right)
        }
      }
    }
  }
}
var getNumberOfBacklogOrders = function(orders) {
  let minH = new Heap((c, p) => c.price < p.price)
  let maxH = new Heap((c, p) => {
    // console.log(c, p)
    return c.price > p.price
  })
  for (let i = 0; i < orders.length; i++) {
    let [p, a, t] = orders[i]
    // buy
    if (t === 0) {
      while (minH.front() != -1 && minH.front().price <= p && a > 0) {
        let front = minH.front()
        let cnt = front.cnt
        front.cnt -= a
        if (front.cnt <= 0) minH.pop()
        a -= cnt
      }
      if (a > 0)
        maxH.push({
          price: p,
          cnt: a
        })
    } else {
      while (maxH.front() != -1 && maxH.front().price >= p && a > 0) {
        let front = maxH.front()
        let cnt = front.cnt
        front.cnt -= a
        if (front.cnt <= 0) maxH.pop()
        a -= cnt
      }
      if (a > 0)
        minH.push({
          price: p,
          cnt: a
        })
    }
  // console.log(minH.arr, maxH.arr)
  }
  let res = 0
  minH.arr.forEach(a => res += a.cnt)
  maxH.arr.forEach(a => res += a.cnt)
  return res %1000000007
  
};
// @lc code=end

