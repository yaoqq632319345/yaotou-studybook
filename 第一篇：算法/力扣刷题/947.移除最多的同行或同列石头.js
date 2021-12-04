/*
 * @lc app=leetcode.cn id=947 lang=javascript
 *
 * [947] 移除最多的同行或同列石头
 */

// @lc code=start
/**
 * @param {number[][]} stones
 * @return {number}
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
    //   console.log(i, j)
      if (this.get(i) === this.get(j)) return
      this.arr[this.get(i)] = this.get(j)
  }
}
var removeStones = function(stones) {
    let uniset = new UniSet(stones.length)

    let mapX = {}, mapY = {}

    for (let i = 0; i < stones.length; i++) {
        let x = stones[i][0]
        let y = stones[i][1]
        // console.log(mapX[x], mapY[y])
        if (mapX[x] !== undefined) {
            uniset.concat(i, mapX[x])
        }
        if (mapY[y] !== undefined) {
            uniset.concat(i, mapY[y])
        }

        mapX[x] = i
        mapY[y] = i
    }
    // console.log(uniset)
    let res = stones.length
    for (let i = 0; i < stones.length; i++) {
        if (uniset.get(i) === i) {
            // console.log(res)
            res--
        }
    }
    return res
};
// @lc code=end

