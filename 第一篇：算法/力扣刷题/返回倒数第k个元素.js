// https://leetcode-cn.com/submissions/detail/236576792/
var kthToLast = function(head, k) {
  let p = head, q = head
  let cnt = k
  while (cnt--) {
      q = q.next
  }
  while (q) {
      p = p.next
      q = q.next
  }
  return p.val
};