/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let hair = new ListNode(0, head)
  let newHead = hair
  let p = head, q

  while (p && p.next) {
      q = p.next
      let next = q.next
      newHead.next = q
      q.next = p
      p.next = next
      newHead = p
      p = next
  }
  return hair.next
};
// @lc code=end

