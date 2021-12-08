/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length) return null
  let left_pre = [], right_pre = [], left_in = [], right_in = [];
  let root = preorder[0], rootIndex = 0;
  for (let i = 1; i < preorder.length; i++) {
      if (inorder[i] == root) {
          rootIndex = i
      }
  }

  for (let i = 0; i < preorder.length; i++) {
      if (i < rootIndex) {
          left_pre.push(preorder[i + 1])
          left_in.push(inorder[i])
      } else if (i > rootIndex) {
          right_pre.push(preorder[i])
          right_in.push(inorder[i])
      }
  }
  return new TreeNode(root, buildTree(left_pre, left_in), buildTree(right_pre, right_in))
};
// @lc code=end

