/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
    this.arr = []
    this.k = k
    for (let i = 0; i < nums.length; i++) {
        this.add(nums[i], true)
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val, flag) {
    if (!this.arr.length || this.arr.length < this.k) {
        this.arr.push(val)
        this.up(this.arr.length - 1)
    } else {
        if (val > this.arr[0]) {
            this.arr[0] = val
            this.down(0)
        }
    }
    // console.log(this.arr)
    if (!flag) {
        return this.arr[0]
    }
};
KthLargest.prototype.swap = function(i, j) {
    let temp = this.arr[i]
    this.arr[i] = this.arr[j]
    this.arr[j] = temp
};
KthLargest.prototype.up = function(idx) {
    while (idx > 0) {
        let parent = (idx - 1) >> 1
        if (this.arr[idx] < this.arr[parent]) {
            this.swap(idx, parent)
            idx = parent
        } else {
            break
        }
    }
};
KthLargest.prototype.down = function(idx) {
    let minI = idx * 2 + 1
    let min = this.arr[minI] === undefined ? Infinity : this.arr[minI]
    let right = this.arr[minI + 1] === undefined ? Infinity : this.arr[minI + 1]
    
    if (right < min) {
        min = right
        minI = minI + 1
    }

    if (min < this.arr[idx]) {
        this.swap(idx, minI)
        this.down(minI)
    }
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

