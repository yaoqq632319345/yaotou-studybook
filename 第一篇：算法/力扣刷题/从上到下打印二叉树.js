https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/submissions/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root, lv = 0, arr = []) {
  if (!root) return arr;
  if (!arr[lv]) arr[lv] = [];
  
  arr[lv].push(root.val);
  levelOrder(root.left, lv + 1, arr);
  levelOrder(root.right, lv + 1, arr);
  return arr;
};