https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci/submissions/
var getIntersectionNode = function(headA, headB) {
  // 思路：长的链表先走差值步，然后再一起走
  let l1 = headA, l2 = headB
  let len1 = 0, len2 = 0
  while (l1) {
      len1++
      l1 = l1.next
  }
  while (l2) {
      len2++
      l2 = l2.next
  }
  l1 = headA, l2 = headB
  if (len1 > len2) {
      let num = len1 - len2
      while (num > 0) {
          l1 = l1.next
          num--
      }
  } else {
      let num = len2 - len1
      while (num > 0) {
          l2 = l2.next
          num--
      }
  }
  while (l1 != l2) {
      l1 = l1.next
      l2 = l2.next
  }
  return l1
};

// 参考他人思路
// l1 从 headA开始走，走完A之后走B，
// l2 从 headB开始走，走完B之后走A，
/**
 * A
 *   \
 *     \
 *       \
 *         D - - - E
 *       /
 *     /
 *   B
 */

// 如果相交于D点，则 
// l1 的路径 === l2 的路径
// AD + DE + BD === BD + DE + AD
var getIntersectionNode = function(headA, headB) {
  let l1 = headA, l2 = headB
  while (l1 != l2) {
      l1 = l1 ? l1.next : headB
      l2 = l2 ? l2.next : headA
  }
  return l1
}
