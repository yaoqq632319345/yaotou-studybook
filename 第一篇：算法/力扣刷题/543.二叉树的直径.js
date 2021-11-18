/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let max = 0
  function getDeep(root) {
    if (!root) return 0
    let left = getDeep(root.left)
    let right = getDeep(root.right)
    max = Math.max(max, left + right)
    return Math.max(left, right) + 1
  }

  getDeep(root)
  return max
};
// @lc code=end

