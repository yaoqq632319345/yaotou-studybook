/*
 * @lc app=leetcode.cn id=641 lang=javascript
 *
 * [641] 设计循环双端队列
 */

// @lc code=start
/**
 * @param {number} k
 */
 var MyCircularDeque = function(k) {
  this.arr = new Array(k)
  this.cnt = 0
  this.head = 0
  this.tail = 0
};

/** 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertFront = function(value) {
  if (this.isFull()) return false
  this.arr[this.head] = value
  this.cnt++
  if (this.head === this.tail && !this.isFull()) {
      this.tail =  (this.tail + 1)% this.arr.length
  }
  this.head = (this.head + this.arr.length  - 1) % this.arr.length
  // console.log(this)
  return true
};

/** 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertLast = function(value) {
  if (this.isFull()) return false
  this.arr[this.tail] = value
  this.cnt++
  if (this.head === this.tail && !this.isFull()) {
      this.head = (this.head + this.arr.length  - 1) % this.arr.length
  }
  this.tail = (this.tail + 1) % this.arr.length

  return true
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.deleteFront = function() {
  if (this.isEmpty()) return false
  this.cnt--
  this.head = (this.head + 1) % this.arr.length
  return true
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.deleteLast = function() {
  if (this.isEmpty()) return false
  this.cnt--
  this.tail = (this.tail + this.arr.length - 1) % this.arr.length
  return true
};

/**
* @return {number}
*/
MyCircularDeque.prototype.getFront = function() {
  if (this.isEmpty()) return -1
  const idx = (this.head + 1) % this.arr.length
  return this.arr[idx]
};

/**
* @return {number}
*/
MyCircularDeque.prototype.getRear = function() {
  console.log(this.tail, this.arr)
  if (this.isEmpty()) return -1
  const idx = (this.tail + this.arr.length - 1) % this.arr.length
  return this.arr[idx]
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.isEmpty = function() {
  return this.cnt === 0
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.isFull = function() {
  return this.cnt === this.arr.length
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end

