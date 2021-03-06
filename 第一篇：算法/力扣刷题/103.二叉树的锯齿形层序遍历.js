/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root, lv = 0, arr = []) {
  if (!root) return arr
  if (!arr[lv]) arr[lv] = []
  if (lv % 2) arr[lv].unshift(root.val)
  else arr[lv].push(root.val)
  zigzagLevelOrder(root.left, lv + 1, arr)
  zigzagLevelOrder(root.right, lv + 1, arr)
  return arr
};
// @lc code=end

