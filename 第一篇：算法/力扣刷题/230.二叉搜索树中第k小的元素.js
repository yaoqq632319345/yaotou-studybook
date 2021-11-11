/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
function getCount(root) {
  if (!root) return 0
  return getCount(root.left) + getCount(root.right) + 1
}
var kthSmallest = function(root, k) {
  if (!root) return false
  let leftCount = getCount(root.left)

  if (k <= leftCount) return kthSmallest(root.left, k)
  if (k == leftCount + 1) return root.val
  return kthSmallest(root.right, k - leftCount - 1) // 这里错了一次，需要刨去已经遍历过的leftCount + 1 位
};
// @lc code=end

