/*
 * @lc app=leetcode.cn id=725 lang=javascript
 *
 * [725] 分隔链表
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
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  let p = head,
    cnt = 0;
  while (p) {
    p = p.next;
    cnt++;
  }
  let num = Math.floor(cnt / k);
  let numPre = cnt % k;
  let res = new Array(k).fill(0).map((x) => new ListNode());
  // console.log(res)
  p = head;
  for (let i = 0; i < k; i++) {
    if (!p) {
      continue;
    }
    let hair = res[i];
    let n = num;
    while (n-- > 0 && p) {
      let next = p.next;
      p.next = null;
      hair.next = p;
      hair = p;
      p = next;
    }
    // console.log(p, i)
    if (numPre && p) {
      // console.log(numPre)
      let next = p.next;
      p.next = null;
      // console.log(p.val)
      hair.next = p;
      hair = p;
      p = next;
      numPre--;
    }
  }
  // console.log(res)
  return res.map((x) => x.next);
};
// @lc code=end
