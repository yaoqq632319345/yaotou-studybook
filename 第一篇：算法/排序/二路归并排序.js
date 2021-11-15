function split(arr) {
  if (arr.length < 2) return arr
  let mid = arr.length >> 1
  // console.log(arr);
  return sort(split(arr.slice(0, mid)), split(arr.slice(mid)))
}


function sort(arr1, arr2) {
  console.log(arr1, arr2);
  let i = 0, j = 0
  let res = []
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i])
      i++
    } else {
      res.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    res.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    res.push(arr2[j])
    j++
  }
  console.log(res);
  return res

}

const arr = [9,8,1,7,0,2,4,3,6,5]
console.log(split(arr));