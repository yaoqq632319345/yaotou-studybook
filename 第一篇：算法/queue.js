class Queue {
  arr = []

  constructor (check) {
    this.check = check
  }
  // 入队
  push (val) {
    this.arr.push(val)
    
    this.up(this.arr.length - 1)
  }
  up (idx) {
      let parent = Math.floor((idx - 1) / 2) // 获取父节点下标
      
      if (this.check(this.arr[idx] , this.arr[parent])) {
        this.swap(idx, parent)
        this.up(parent) // 继续上浮
      }
  }
  // 交换方法
  swap (i, j) {
      let temp = this.arr[i]
      this.arr[i] = this.arr[j]
      this.arr[j] = temp
  }
  // 出队
  pop () {
    if (this.size() == 0) return null
    let res = this.arr[0] // 缓存优先级最高的元素，作为结果返回

    this.arr[0] = this.arr.pop() // 将最后一个元素弹出放置到0位置
    this.down(0) // 调整位置
    
    return res
  }

  down (idx) {
      let left = 2 * idx + 1  // 左子节点
      let right = 2 * idx + 2 // 右子节点

      if (left < this.size()) { // 如果有左子节点
          if (this.check(this.arr[left] , this.arr[idx])) {
              this.swap(left, idx)
              this.down(left)
          }

          if (right < this.size()) { // 如果有右子节点
              if (this.check(this.arr[right] , this.arr[idx])) {
                  this.swap(right, idx)
                  this.down(right)
              }
          }
      }
  }
  // 队列长度
  size () {
      return this.arr.length
  }
}

let que = new Queue((a, b) => a < b)
que.push(1)
que.push(3)
que.push(2)
que.push(-1)
console.log(que);