/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

var MyLinkedList = function() {
  this.val = 0
  this.next = null
  this.cnt = 0
};

/** 
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function(index, isNode) {
  // console.log(index, this.cnt)
  if (index === -1 && isNode) return this

  // console.log(this.cnt, index)
  if (this.cnt - 1 < index) return -1
  let p = this.next
  // console.log(p)
  while (index-- > 0) {
      p = p.next
  }
  // console.log(p)
  if (isNode) return p
  return p.val
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function(val) {
  let head = this.next
  this.next = {
      val,
      next: head
  }
  this.cnt++
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) {
  if (this.cnt === 0) {
      this.addAtHead(val)
  } else {
      let p = this.next

      while (p && p.next) {
          p = p.next
      }

      p.next = {
          val,
          next: null
      }
      this.cnt++
  }
};

/** 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function(index, val) {
  let pre = this.get(index - 1, true), next = this.get(index, true)
  // console.log(pre, next)
  if (pre === -1) return
  else if (next === -1) this.addAtTail(val)
  else {
      pre.next = {
          val,
          next
      }
      this.cnt++
  }
};

/** 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function(index) {
  let pre = this.get(index - 1, true), next = this.get(index, true)
  if (next !== -1) {
      pre.next = next ? next.next : null
      this.cnt--
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

