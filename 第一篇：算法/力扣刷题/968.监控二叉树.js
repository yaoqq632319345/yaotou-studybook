/*
 * @lc app=leetcode.cn id=968 lang=javascript
 *
 * [968] 监控二叉树
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
 function getDp (root, dp) {
  if (!root) {
      dp[0][0] = 0
      dp[1][0] = 0
      dp[1][1] = 10000
      dp[0][1] = 10000
      return
  }
  if (!root.left && !root.right) {
      dp[0][1] = 1
      dp[0][0] = 10000
      dp[1][1] = 1
      dp[1][0] = 0
  }
  let ldp = [[], []], rdp = [[], []]
  getDp(root.left, ldp)
  getDp(root.right, rdp)

  dp[0][0] = Math.min(ldp[0][1] + rdp[0][1], ldp[0][0] + rdp[0][1], ldp[0][1] + rdp[0][0])
  dp[0][1] = Math.min(ldp[1][0] + rdp[1][0], ldp[1][1] + rdp[1][0], ldp[1][0] + rdp[1][1], ldp[1][1] + rdp[1][1]) + 1
  dp[1][0] = Math.min(dp[0][0], ldp[0][0] + rdp[0][0])
  dp[1][1] = dp[0][1]
  return
}
var minCameraCover = function(root) {
  let dp = [[], []]
  getDp(root, dp)
  return Math.min(dp[0][0], dp[0][1])
};
// @lc code=end

