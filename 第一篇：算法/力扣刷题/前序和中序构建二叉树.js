// https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
var buildTree = function(preorder, inorder) {
  if (!preorder.length) return null
  let rootIndex = 0
  let left_pre = [], right_pre = [], left_in = [], right_in = [];

  while(preorder[0] != inorder[rootIndex]) rootIndex++;

  for (let i = 0; i < preorder.length; i++) {
      if (i < rootIndex) {
          left_pre.push(preorder[i + 1])
          left_in.push(inorder[i])
      } else if (i > rootIndex) {
          right_pre.push(preorder[i])
          right_in.push(inorder[i])
      }
  }
  console.log(left_in, left_pre, right_in, right_pre)
  let root = new TreeNode(preorder[0], buildTree(left_pre, left_in), buildTree(right_pre, right_in))
  
  return root

  
};