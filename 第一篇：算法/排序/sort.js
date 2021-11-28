// 1.选择排序
// 思路：在未排序中找到最小元素，存放在起始位置
// let d = [3,2,1,4,2,10,12]

/* function sort(arr) {
  let min , minIndex
  for (let i = 0; i < arr.length; i++) {
    min = arr[i], minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j]
        minIndex = j
      }
    }

    if (minIndex != i) {
      arr[minIndex] = arr[i]
      arr[i] = min
    }
  }
  return arr
} */

// 2.插入排序
// 插牌的原理
/* function sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i]
    let j = i - 1
    while (j >= 0 && curr < arr[j]) {
      arr[j+1] = arr[j]
      j--;
    }
    arr[j+1] = curr
  }
  return arr
} */
// let d = [4,3]
let d = [3, 2, 1, 4, 2, 10, 12];

// 3.快速排序
// 找到基准，递归排序
/* function sort(arr, left, right) {
  var left = left || 0;
  var right = right === undefined ? arr.length - 1 : right
  
  if (left < right) {
    let mid = find(arr, left, right)
    sort(arr, left, mid - 1)
    sort(arr, mid + 1, right)
  }
  return arr
}

function find(arr, left, right) {
  let num = arr[left]
  let numI = left
  for (let i = left + 1; i <= right; i++) {
    if (arr[i] < num) { // 如果比基准小，就放在基准的右侧， [num, 小, 小, 小, 大, 大]
      // arr[i] 与 arr[numI] 右侧 + 1位置互换
      let temp = arr[i]
      arr[i] = arr[numI + 1]
      arr[numI + 1] = temp

      numI++ // 记录实际num位置
    }
  }

  // [小, 小, 小, num, 大, 大]
  // 遍历完成实际numI位置还没有完成互换
  arr[left] = arr[numI]
  arr[numI] = num
  return numI
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
function sort(arr) {
  let gap = arr.length >> 1
  // console.log(gap);
  // return arr
  for (; gap > 0; gap = gap >> 1) {
    for (let j = gap; j < arr.length; j += gap) {
      let temp = arr[j]
      let k = j - gap;

      while (k >= 0 && arr[k] > temp) {
        arr[k+gap] = arr[k]
        k -= gap
      }
      arr[k+gap] = temp
    }
  }
  return arr
}

// 快速排序借助数组实现
/* function sort(arr) {
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
} */

console.log(sort(d));
