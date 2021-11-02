// 1.选择排序
// 思路：在未排序中找到最小元素，存放在起始位置
// let d = [3,2,1,4,2,10,12]

/* function sort (arr) {
  for (let i = 0; i < arr.length - 1; i++) { // 外层循环，每次可以找到一个最小值放置i处
    let miniIndex = i  // 初始最小值下标
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[miniIndex]) {
        miniIndex = j // 找到最小值下标
      }
    }
    if (i !== miniIndex) { // 最小值需与下标为i的位置交换
      let temp = arr[i]
      arr[i] = arr[miniIndex]
      arr[miniIndex] = temp
    }
  }
  return arr
} */

// 2.插入排序
// 插牌的原理
/* function sort(arr) {
  const len = arr.length
  let preIndex, curr
  for (let i = 1; i < len; i++) {
    preIndex = i - 1
    curr = arr[i]
    while (preIndex >= 0 && arr[preIndex] > curr) {
      arr[preIndex + 1] = arr[preIndex]
      // arr[preIndex] = curr // 我的代码
      preIndex--
    }
    arr[preIndex + 1] = curr
  }
  return arr
} */
// let d = [4,3]
let d = [3,2,1,4,2,10,12]

// 3.快速排序
// 找到基准，递归排序
/* function sort(arr, left, right) {
  let len = arr.length
  var left = left || 0
  var right = right === undefined ? len - 1 : right // 原先 right || len - 1 有问题，当right为0时又会赋值len - 1导致死循环
  if (left < right) {
    let index = find(arr, left, right) // 找到基准
    sort(arr, left, index - 1) // 左侧继续递归
    sort(arr, index + 1, right) // 右侧继续递归
  }
  return arr
}

function find(arr, left, right) {
  let curr = arr[left] // 选取第一个元素作为基准
  let index = left
  for (let i = left + 1; i <= right; i++) { // 从第二个元素开始遍历
    if (arr[i] < curr) {
      if (i != index + 1) {
        let temp = arr[i]
        arr[i] = arr[index + 1]
        arr[index + 1] = temp
      }
      index++
    }
    
  }

  arr[left] = arr[index]
  arr[index] = curr
  return index
} */


// 4.冒泡排序
/* function sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
} */

// 5.希尔排序
// 分组插入排序
// 1）插入排序稳定，希尔不稳定，因为相同数据会因为分组而产生交换
// 2）插入排序对顺序趋近有序的数组效率高
// 3）希尔排序比较次数和移动次数都少，数组长度越大效率越明显
// 4）gap最后须为1
// 5）直接插入适合链式结构，希尔排序不适合

/* function sort(arr) {
  let gap = Math.floor(arr.length/2)

  for (;gap > 0; gap = Math.floor(gap/2)) {
    console.log(gap);
    let preIndex
    for (let i = gap; i < arr.length; i++) {

      preIndex = i - gap
      let temp = arr[i]
      while (preIndex >= 0 && arr[preIndex] > temp) {
        arr[preIndex + gap] = arr[preIndex] // 右移
        preIndex -= gap // 记录temp的位置
      }
      arr[preIndex + gap] = temp
    }
  }
  return arr
} */

// 快速排序借助数组实现
function sort(arr) {
  if (arr.length <= 1) return arr
  let leftArr = []
  let rightArr = []
  let curr = arr[0]
  let middleIndex = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < curr) {
      leftArr.push(arr[i])
      middleIndex++
    } else {
      rightArr.push(arr[i])
    }
  }
  return sort(leftArr).concat([curr]).concat(sort(rightArr))
}

console.log(sort(d));