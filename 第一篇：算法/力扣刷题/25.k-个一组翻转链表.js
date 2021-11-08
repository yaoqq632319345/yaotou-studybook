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
  function reverse(head, tail) {
    let prev = tail.next
    let p = head
    while (prev != tail) {
      let next = p.next
      p.next = prev
      prev = p
      p = next
    }
    return [tail, head]
  }

  let hair = new ListNode(0)
  hair.next = head
  let pre = hair

  while (head) {
    let tail = pre
    let i = k
    while (i--) {
      tail = tail.next
      if (!tail) {
        return hair.next
      }
    }

    let next = tail.next; // 缓存下次的头节点 (不写分号，花了半天时间找bug)
    [head, tail] = reverse(head, tail)
    pre.next = head // 链接翻转之后的头节点

    tail.next = next // 新的尾节点链接下次的头节点
    pre = tail // 这次的尾节点是下次的头节点之前
    head = next // 下一次的头节点赋值
  }
  return hair.next
};
// @lc code=end

