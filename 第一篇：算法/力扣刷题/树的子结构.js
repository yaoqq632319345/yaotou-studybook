// https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/submissions/

// 是否匹配方法
function isMath(a,b) {
  // 当b没有子节点时，a包含b，当a没有子节点时，a不包含b
  if (!b) return true
  if (!a) return false
  return a.val === b.val && isMath(a.left, b.left) && isMath(a.right, b.right)
}
var isSubStructure = function(A, B) {
  if (!A || !B) return false

  if (A.val === B.val && isMath(A, B)) {
      return true
  }
  return isSubStructure(A.left, B) || isSubStructure(A.right, B)
};