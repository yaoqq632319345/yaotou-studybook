/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
  let p = head, q = head

  while (q && q.next) {
      p = p.next
      q = q.next.next
  }
  let head2 = reverseList(p.next)
  p.next = null

  p = head;
  q = head2

  while (q) {
      let pN = p.next
      let qN = q.next
      p.next = q
      q.next = pN

      p = pN
      q = qN
  }
  
  return head



};
var reverseList = function(head) {
if (!head || !head.next) return head

let tail = head.next
let newHead = reverseList(tail)
head.next = tail.next
tail.next = head

return newHead
};
function reverse(head) {
  let pre = null
  let p = head
  while (p) {
      let next = p.next
      p.next = pre
      pre = p
      p = next
  }
  return pre
}
// @lc code=end

