/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let res = [];

  let p = l1,
    q = l2;
  let len1 = 0,
    len2 = 0;
  while (p || q) {
    if (p) {
      len1++;
      p = p.next;
    }
    if (q) {
      len2++;
      q = q.next;
    }
  }
  p = l1;
  q = l2;
  while (p && q) {
    while (len1 != len2) {
      if (len1 > len2) {
        res.push(p.val);
        p = p.next;
        len1--;
      } else {
        res.push(q.val);
        q = q.next;
        len2--;
      }
    }
    res.push(p.val + q.val);
    p = p.next;
    q = q.next;
  }

  let pre = 0;
  for (let i = res.length - 1; i >= 0; i--) {
    res[i] += pre;
    if (res[i] > 9) {
      res[i] = res[i] - 10;
      pre = 1;
    } else {
      pre = 0;
    }
  }
  if (pre) res.unshift(1);
  let hair = new ListNode(0);
  p = hair;
  for (let i = 0; i < res.length; i++) {
    p.next = new ListNode(res[i]);
    p = p.next;
  }
  return hair.next;
};
// @lc code=end
