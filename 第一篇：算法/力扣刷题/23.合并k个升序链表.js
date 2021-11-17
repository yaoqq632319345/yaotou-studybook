/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
  let hair = new ListNode(), p = hair
  while (lists.length) {
      let min = Infinity, minI = -1
      for (let i = 0; i < lists.length; i++) {
          if (!lists[i]) {
              lists.splice(i, 1)
              i--
              continue
          }
          if (lists[i].val < min) {
              min = lists[i].val
              minI = i
          }
      }
      if (minI >= 0) {

          p.next = lists[minI]
          lists[minI] = lists[minI].next
          p = p.next
      }
      console.log(lists)
  }
  return hair.next
};
// @lc code=end

