/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
/* var copyRandomList = function (head) {
  if (!head) return head;
  let p = head,
    q;
  // 第一轮循环 复制每个节点
  while (p) {
    q = new Node(p.val, p.next, p.random);
    p.next = q;
    p = q.next;
  }
  // 第二轮循环 修正复制节点的random指针
  p = head.next;
  while (p) {
    if (p.random) p.random = p.random.next;
    if (p.next) p = p.next.next;
  }
  p = head;
  let newHead = head.next;
  while (p) {
    q = p.next;
    p.next = q.next;
    if (p.next) q.next = p.next.next;
    p = p.next;
  }
  return newHead;
}; */

var copyRandomList = function (head, cachedNode = new Map()) {
  if (head === null) {
    return null;
  }
  if (!cachedNode.has(head)) {
    cachedNode.set(head, { val: head.val });
    Object.assign(cachedNode.get(head), {
      next: copyRandomList(head.next, cachedNode),
      random: copyRandomList(head.random, cachedNode),
    });
  }
  return cachedNode.get(head);
};
// @lc code=end
