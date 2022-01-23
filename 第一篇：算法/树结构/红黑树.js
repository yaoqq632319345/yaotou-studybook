class TreeNode {
  constructor (key = 0, color = 0, l = null, r = null) {
    this.key = key
    this.color = color // 0 红色 1 黑色
    this.l = l
    this.r = r
  }
}

class RBTree {
  constructor () {
    this.root = null
  }
  has_red_child (root) {
    return (root.l && root.l.color == 0) || (root.r && root.r.color == 0)
  }

  left_rotate (root) {
    let temp = root.r
    root.r = temp.l
    temp.l = root
    return temp
  }
  right_rotate (root) {
    let temp = root.l
    root.l = temp.r
    temp.r = root
    return temp
  }
  insert_maintain (root) {
    if (root.l === null || root.r === null) {
      return root
    }
    let flag = 0
    if (root.l.color == 0 && this.has_red_child(root.l)) {
      flag = 1
    }
    if (root.r.color == 0 && this.has_red_child(root.r)) {
      // console.log(1);
      flag = 2
    }

    if (root.l.color == 0 && root.r.color == 0) {
      root.color = 0
      root.l.color = root.r.color = 1
      return root
    }
    console.log(flag);
    if (flag == 1) {
      if (root.l.r && root.l.r.color == 0) {
        root.l = this.left_rotate(root.l)
      }
      root = this.right_rotate(root)
    } else if (flag == 2) {
      if (root.r.l && root.r.l.color == 0) {
        root.r = this.right_rotate(root.r)
        // console.log(root.r);
      }
      // console.log(root);
      root = this.left_rotate(root)
    }

    root.color = 0
    // console.log(root.l, root.r);
    if(root.l) root.l.color = 1
    if(root.r) root.r.color = 1
    return root
  }
  __insert (root, key) {
    if (!root) return new TreeNode(key)
    // let node = new TreeNode(key)

    if (key < root.key) {
      root.l = this.__insert(root.l, key)
    } else {
      root.r = this.__insert(root.r, key)
    }
    return this.insert_maintain(root)


  }
  insert (key) {
    if (!this.root) this.root = new TreeNode(key)
    else this.__insert(this.root, key)
    this.root.color = 1
    return this.root
  }
}

let a = new RBTree()

a.insert(5)
a.insert(2)
a.insert(9)
a.insert(3)
a.insert(4)
a.insert(6)
a.insert(7)
a.insert(8)
a.insert(1)
console.log(JSON.stringify(a, null, 2));