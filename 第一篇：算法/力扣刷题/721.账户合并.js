/*
 * @lc app=leetcode.cn id=721 lang=javascript
 *
 * [721] 账户合并
 */

// @lc code=start
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
 class Uni_find {
  constructor (n) {
    this.arr = new Array(n)
    for (let i = 0; i < n; i++) {
      this.arr[i] = i
    }
  }

  get (x) {
    return this.arr[x] = (this.arr[x] === x ? x : this.get(this.arr[x]))
  }

  merge (a, b) {
    if (a === b) return
    this.arr[this.get(a)] = this.get(b)

  }
}
var accountsMerge = function(accounts) {
  let n = accounts.length
  let uni = new Uni_find(n)

  let map = new Map()
  for (let i = 0; i < n; i++) {
    let name = accounts[i][0]
    let size = accounts[i].length
    for (let j = 1; j < size; j++) {
      let email = accounts[i][j]
      if (map.has(email)) {
        uni.merge(i, map.get(email))
      } else {
        map.set(email, i)
      }
    }
  }

  // console.log(uni)
  for (let i = 0; i < n; i++) {
    if (uni.get(i) === i) {
      accounts[i] = sortAndSet(accounts[i])
    } else {
      accounts[uni.get(i)] = sortAndSet(accounts[uni.get(i)].concat(accounts[i]))
      
    }
  }

  let res = []

  for (let i = 0; i < accounts.length; i++) {
    if (uni.get(i) === i) res.push(accounts[i])
  }
  // console.log(res)
  // console.log(accounts)
  // return Object.values(res)
  return res
};
function sortAndSet(a) {
  let set = new Set(a)
  set.delete(a[0])

  return [a[0]].concat([...set].sort())
}
// @lc code=end

