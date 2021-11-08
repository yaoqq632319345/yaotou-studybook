// https://leetcode-cn.com/submissions/detail/236575438/
var reversePrint = function(head, arr = []) {
  if (!head) return arr
  reversePrint(head.next, arr)
  arr.push(head.val)
  return arr
};