/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
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
 var widthOfBinaryTree = function(root) {
  if (!root) return 0
  let arr = [[root, 0]]

  let res = 1
  while (arr.length) {
      let temp = []
      for (let i = 0; i < arr.length; i++) {
          let index = arr[i][1] - arr[0][1]

          if (arr[i][0].left) {
              temp.push([arr[i][0].left, index * 2])
          }
          if (arr[i][0].right) {
              temp.push([arr[i][0].right, index * 2 + 1])
          }
      }
      arr = temp

      if (arr.length) {
          let w = arr[arr.length - 1][1] - arr[0][1] +1

          res = Math.max(w, res)
      }
  }
  return res
};
// @lc code=end

