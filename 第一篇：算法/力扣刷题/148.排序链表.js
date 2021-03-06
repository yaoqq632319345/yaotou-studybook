/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function (head) {
  if (!head || !head.next) return head;

  let max = head.val,
    min = head.val,
    mid;

  let p = head;
  while (p) {
    max = Math.max(p.val, max);
    min = Math.min(p.val, min);
    p = p.next;
  }
  if (max == min) return head;
  mid = (max + min) >> 1;
  p = head;
  let newNodeMax = null;
  let newNodeMin = null;
  while (p) {
    let next = p.next;
    if (p.val <= mid) {
      p.next = newNodeMin;
      newNodeMin = p;
    } else {
      p.next = newNodeMax;
      newNodeMax = p;
    }
    p = next;
  }
  newNodeMax = sortList(newNodeMax);
  newNodeMin = sortList(newNodeMin);
  // console.log(newNodeMax)
  // console.log(newNodeMin)
  p = newNodeMin;
  while (p && p.next) {
    p = p.next;
  }
  p.next = newNodeMax;

  return newNodeMin;
};

/* var sortList = function(head) {
    if (!head || !head.next) return head
    let p = head, q = head.next.next
    while (q && q.next) {
        p = p.next
        q = q.next.next
    }

    q = p.next
    p.next = null
    // console.log(head, q)

    p = sortList(head)
    q = sortList(q)

    let hair = new ListNode(0)
    k = hair
    while (p || q) {
        if (!q || (p && p.val < q.val)) {
            k.next = p
            k = p
            p = p.next
        } else {
            k.next = q
            k = q
            q = q.next
        }
    }
    return hair.next
}; */
// @lc code=end
