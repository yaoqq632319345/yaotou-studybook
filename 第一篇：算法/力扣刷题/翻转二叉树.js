// https://leetcode-cn.com/problems/invert-binary-tree/submissions/
var invertTree = function(root) {
  if (!root) return root
  let left = root.left, right = root.right

  root.right = left
  root.left = right

  invertTree(left)
  invertTree(right)
  return root

};