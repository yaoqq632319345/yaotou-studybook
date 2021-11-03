// 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
let arr1 = [1,2,3]
let arr2 = []
let list1 = array2list(arr1)
let list2 = array2list(arr2)
merge(list1, list2)
function merge (l1, l2) {
  let newHead = new NodeList(0, null), p = newHead
  let h1 = l1, h2 = l2
  while(h1 || h2) {
    let val1 = h1 ? h1.val : Number.MAX_SAFE_INTEGER
    let val2 = h2 ? h2.val : Number.MAX_SAFE_INTEGER
    if (val1 < val2) {
      p.next = h1
      h1 = h1.next
    } else {
      p.next = h2
      h2 = h2.next
    }
    p = p.next
  }
  
  console.log(list2array(newHead.next))
}

function NodeList(val, next) {
  this.val = val
  this.next = next || null
}

function array2list(arr) {
  let head = new NodeList(0),
  p = head
  for (let i = 0; i < arr.length; i++) {
    p.next = new NodeList(arr[i])
    p = p.next
  }
  return head.next
}

function list2array(list) {
  let p = list
  let arr = []
  while (p && p.val) {
    arr.push(p.val)
    p = p.next
  }
  return arr
}