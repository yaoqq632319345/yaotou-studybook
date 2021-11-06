/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let newHead = new ListNode(), newHead2 = new ListNode() // 创建两个虚拟头节点
  let p = head, s = newHead, b = newHead2 // 指针p指向原链表，s,b指向新的两个链表
  while (p) {
    let q = p.next // 缓存p的下一个节点
    p.next = null  // 断开p节点
    if (p.val < x) { // 小于x放入s后边，s后移
      s.next = p
      s = p
    } else { // else 放入b后边，b后移
      b.next = p
      b = p
    }
    p = q // p后移
  }
  s.next = newHead2.next
  return newHead.next
};
// @lc code=end

