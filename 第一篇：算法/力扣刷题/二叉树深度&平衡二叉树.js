// https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/submissions/
var maxDepth = function(root) {
  if (!root) return 0 // 极端情况
  function getLen (root, lv) {
      let leftLen = root.left ? getLen(root.left, lv + 1) : lv  // 查看左侧深度
      let rightLen = root.right ? getLen(root.right, lv + 1) : lv // 查看右侧深度

      return leftLen > rightLen ? leftLen : rightLen
  }

  return getLen(root, 1) // 如果只有根，则为1
  
};
// 看题解之后优化
var maxDepth = function(root) {
  if (!root) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};


// https://leetcode-cn.com/problems/balanced-binary-tree/submissions/
// 上题延伸
var isBalanced = function(root) {
  if (!root) return true
  let res = true
  function getLen (root, lv) {
      if (!res) return
      let leftLen = root.left ? getLen(root.left, lv + 1) : lv
      let rightLen = root.right ? getLen(root.right, lv + 1) : lv 
      if (Math.abs(leftLen - rightLen) > 1) {
          res = false
          return
      }
      return leftLen > rightLen ? leftLen : rightLen
  }
  getLen(root, 1)

  return res
};

// 看完二叉树深度题解
var isBalanced = function(root) {
  if (!root) return true
  let res = true
  var maxDepth = function(root) {
    if (!root || !res) return 0
    let leftLen = maxDepth(root.left)
    let rightLen = maxDepth(root.right)
    if (Math.abs(leftLen - rightLen) > 1) {
      res = false
      return
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
  };

  maxDepth(root)
  return res
};

