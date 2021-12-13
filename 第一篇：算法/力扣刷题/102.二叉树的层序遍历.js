/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 var levelOrder = function(root, lv = 0, arr = []) {
  if (!root) return arr

  if (!arr[lv]) arr[lv] = []

  arr[lv].push(root.val)

  levelOrder(root.left, lv + 1, arr)
  levelOrder(root.right, lv + 1, arr)
  return arr
};
// @lc code=end

