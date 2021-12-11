function merge_sort (arr, l, r) {
  l = l || 0
  r = r === undefined ? arr.length - 1 : r
  if (l >= r) return
  let mid = (l + r) >> 1
  merge_sort(arr, l, mid)
  merge_sort(arr, mid + 1, r)
  let temp = [], p1 = l, p2 = mid + 1
  while (p1 <= mid || p2 <= r) {
    if (p2 > r || (p1 <= mid && arr[p1] < arr[p2])) {
      temp.push(arr[p1++])
    } else {
      temp.push(arr[p2++])
    }
  }
  for (let i = l; i <= r; i++) arr[i] = temp[i - l]
}

let arr = [5,4,8,7,9,2,1,3,6]
merge_sort(arr)
console.log(arr);