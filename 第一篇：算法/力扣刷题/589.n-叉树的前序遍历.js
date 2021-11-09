/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root, arr = []) {
    if (!root) return []
    arr.push(root.val);
    root.children && root.children.forEach(item => preorder(item, arr))
    return arr
};
// @lc code=end

