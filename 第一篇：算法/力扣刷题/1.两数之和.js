/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function search (nums, ind, l ,r, target) {
  // console.log(target);
  while (l <= r) {
    let mid = (l + r) >> 1
    if (nums[ind[mid]] === target) return mid
    if (nums[ind[mid]] > target) r = mid - 1
    else l = mid + 1
  }
  return -1
}
var twoSum = function(nums, target) {
  let ind = []
  
  for (let i = 0; i < nums.length; i++) {
    ind.push(i)
  }

  ind = ind.sort((a, b) => {
    return nums[a] - nums[b]
  })
  // console.log(ind);

  for (let i = 0; i < ind.length; i++) {
    let j = search(nums, ind, i + 1, ind.length - 1, target - nums[ind[i]])
    // console.log(j,i);
    if (j != -1) {
      if (ind[j] > ind[i]) return [ind[i], ind[j]]
      else return [ind[j], ind[i]]
    }
  }
  return [-1, -1]
};
// @lc code=end

