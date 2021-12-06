class Heap {
  /**
   * 
   * @param {*} arr 
   * @param {*} fun (子节点， 父节点) { 返回子节点是否比父节点优先 }
   */
  constructor (arr, fun) {
    this.fn = fun
    this.arr = []
    for (let i = 0; i < arr.length; i++) {
      this.push(arr[i])
    }
  }

  pop () {
    if (this.size() == 0) return null
    let res = this.arr[0]

    this.arr[0] = this.arr.pop()
    
    this.down(0)

    return res
  }
  push (val) {
    this.arr.push(val)

    this.up(this.arr.length - 1)
  }

  /** 交换 */
  swap (i, j) {
    let temp = this.arr[i]
    this.arr[i] = this.arr[j]
    this.arr[j] = temp
  }
  up (idx) {
    let parent = Math.floor((idx - 1) / 2)

    if (this.fn(this.arr[idx], this.arr[parent])) {
      this.swap(idx, parent)

      this.up(parent)
    }
  }

  size () {
    return this.arr.length
  }
  down (idx) {
    let left = 2 * idx + 1
    let right = 2 * idx + 2

    if (left < this.size()) { // 如果有左子节点
      if (this.fn(this.arr[left], this.arr[idx])) {
        this.swap(left, idx)

        this.down(left)
      }

      if (right < this.size()) {
        if (this.fn(this.arr[right], this.arr[idx])) {
          this.swap(right, idx)

          this.down(right)
        }
      }
    }
  }
}

var topKFrequent = function(nums, k) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
      map[nums[i]] = (map[nums[i]] || 0) + 1
  }
  // console.log(map);
  let heap = new Heap(Object.keys(map), function (child, parent) {
      if (map[child] > map[parent]) {
          return true
      }
  })
  // console.log(heap)
  let res = []
  while (k--) {
      res.push(heap.pop())
  }
  return res
};

const res = topKFrequent([5,1,-1,-8,-7,8,-5,0,1,10,8,0,-4,3,-1,-1,4,-5,4,-3,0,2,2,2,4,-2,-4,8,-7,-7,2,-8,0,-8,10,8,-8,-2,-9,4,-7,6,6,-1,4,2,8,-3,5,-9,-3,6,-8,-5,5,10,2,-5,-1,-5,1,-3,7,0,8,-2,-3,-1,-5,4,7,-9,0,2,10,4,4,-4,-1,-1,6,-8,-9,-1,9,-9,3,5,1,6,-1,-2,4,2,4,-6,4,4,5,-5], 7)

console.log(res);