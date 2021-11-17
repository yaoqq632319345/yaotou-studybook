/*
 * @lc app=leetcode.cn id=1721 lang=javascript
 *
 * [1721] 交换链表中的节点
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
var swapNodes = function(head, k) {
  let p = head
        , q = head

    while (--k) {
        p = p.next
    }
    let n = p.next

    while (n) {
        n = n.next
        q = q.next
    }
    console.log(p.val, q.val)

    let temp = p.val
    p.val = q.val
    q.val = temp

    return head
};
// @lc code=end

