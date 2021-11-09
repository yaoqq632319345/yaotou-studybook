/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
var getArr = function(root, lv = 0, arr = []) {
  if (!root) return arr
  if (!arr[lv]) arr[lv] = []
  arr[lv].push(root.val)
  getArr(root.left, lv + 1, arr)
  getArr(root.right, lv + 1, arr)
  return arr
};
var levelOrderBottom = function (root) {
  let arr = getArr(root)
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr
}
// @lc code=end

