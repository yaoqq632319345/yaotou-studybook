// 二叉树 

// const tree = convertBinaryTree(readline().split(','))
const tree = convertBinaryTree([1,2,3,4,5])
console.log(consoleLog(tree).join(','))
function consoleLog(tree) {
  let arr = []
  if (tree === null) return []
  arr.push(tree.val)
  arr = arr.concat(consoleLog(tree.left))
  arr = arr.concat(consoleLog(tree.right))
  
  return arr
}


function convertBinaryTree (arr) {
  let root;

  let insertNode = function name(pNode, cNode) {
    if (!cNode || cNode.val == '') return
    if (cNode.val < pNode.val) {
      console.log(cNode.val);
      if (pNode.left === null) pNode.left = cNode
      else insertNode(pNode.left, cNode)
    } else {
      if (pNode.right === null) pNode.right = cNode
      else insertNode(pNode.right, cNode)
    }
  }

  arr.forEach(val => {
    let node = {
      val: val,
      left: null,
      right: null
    }
    if (root) insertNode(root, node)
    else root = node
  });
  return root
}