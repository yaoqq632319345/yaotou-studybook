https://leetcode-cn.com/problems/WGki4K/solution/

var singleNumber = function(nums) {
  let map = new Map()

  for (let num of nums) {
      map.set(num, (map.get(num) || 0) + 1)
  }

  let res 
  for (let [key, val] of map.entries()) {
      // console.log(key)
      if (val === 1) {
          res = key
          break
      }
  }
  return res
};