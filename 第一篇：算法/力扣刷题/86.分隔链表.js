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
  if (!head) return head
    let hairMin = new ListNode(0), newHeadMin = hairMin;
    let hairMax = new ListNode(0), newHeadMax = hairMax;
    let p = head;

    while (p) {
        let next = p.next;
        p.next = null
        if (p.val < x) {
            newHeadMin.next = p;
        console.log(newHeadMin)
            newHeadMin = p;
        } else {
            newHeadMax.next = p;
            newHeadMax = p;
        }
        p = next;
    }
    newHeadMin.next = hairMax.next;
    return hairMin.next
};
// @lc code=end

