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
var getArr = function (root, lv = 0, arr = []) {
  if (!root) return arr
  if (!arr[lv]) arr[lv] = []
  arr[lv].push(root.val)
  getArr(root.left, lv + 1, arr)
  getArr(root.right, lv + 1, arr)
  return arr
}
var zigzagLevelOrder = function(root) {
  let arr = getArr(root)
  for (let i = 1; i < arr.length; i += 2) {
    arr[i] = arr[i].reverse()
  }
  return arr
};
// @lc code=end

