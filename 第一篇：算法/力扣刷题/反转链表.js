// https://leetcode-cn.com/problems/UHnkqh/submissions/
var reverseList = function(head) {
  if (!head || !head.next) return head

  let tail = head.next
  let newHead = reverseList(tail)
  head.next = tail.next
  tail.next = head

  return newHead
};