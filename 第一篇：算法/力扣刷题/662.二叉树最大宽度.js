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
  let arr = []
  arr.push({
    node: root,
    index: 0
  })
  let res = 1
  let temp
  do {
    temp = []
    for (let i = 0; i < arr.length; i ++) {
      const index = arr[i].index - arr[0].index // 数据太大，做处理
      if (arr[i].node.left) temp.push({
        node: arr[i].node.left,
        index: index * 2 // 数据太大
      })
      if (arr[i].node.right) temp.push({
        node: arr[i].node.right,
        index: index * 2 + 1 // 数据太大
      })
    }
    arr = temp
    
    if (arr.length) {
      let curr = arr[arr.length - 1].index - arr[0].index + 1 
      console.log(curr);
      res = res > curr ? res : curr
    }
  } while (arr.length)

  return res
};
// @lc code=end

