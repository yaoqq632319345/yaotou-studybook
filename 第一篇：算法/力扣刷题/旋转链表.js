// https://leetcode-cn.com/problems/rotate-list/

var rotateRight = function(head, k) {
  if (!head || !head.next) return head
  let p = head
  let length = 1
  while (p.next) {
    length++
    p = p.next
  }
  p.next = head  // 首尾相接
  let num = length - k % length
  
  while (num > 0) {
    p = p.next
    num--
  }
  let newHead = p.next
  p.next = null
  return newHead
};