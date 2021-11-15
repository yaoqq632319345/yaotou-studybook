/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let hair = new ListNode(0, head)
  let pre = tail = hair

  while (head) {
    console.log(head);
    let n = k
    while (n--) {
      tail = tail.next
      if (!tail) {
        console.log(tail);
        return hair.next
      }
    }
    let next = tail.next
    tail.next = null;
    [head, tail] = reverse(head, tail)
    pre.next = head

    pre = tail
    tail.next = next
    head = next
    console.log(head);
  }


  function reverse(head, tail) {
    let pre = tail.next
    let p = head
    while (p) {
      let next = p.next
      p.next = pre
      pre = p
      p = next
    }
    return [tail, head]
  }
  return hair.next

};
// @lc code=end

