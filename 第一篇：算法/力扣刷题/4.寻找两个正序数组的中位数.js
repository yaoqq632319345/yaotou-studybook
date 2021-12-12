/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 function findK (nums1, nums2, l1, l2, target) {
  if (l1 >= nums1.length) return nums2[l2 + target - 1]
  if (l2 >= nums2.length) return nums1[l1 + target - 1]
  if (target == 1) return Math.min(nums1[l1], nums2[l2])
  let a = Math.min(target >> 1, nums1.length - l1)
  let b = Math.min(target - a, nums2.length - l2)
  a = target - b

  // console.log(a, b)
  if (nums1[l1 + a - 1] < nums2[l2 + b - 1]) {
      return findK(nums1, nums2, l1 + a, l2, target - a)
  }
  return findK(nums1, nums2, l1, l2 + b, target - b)
}
var findMedianSortedArrays = function(nums1, nums2) {
  let m = nums1.length, n = nums2.length

  let mid = (m + n) >> 1
  let a = findK(nums1, nums2, 0, 0, mid)
  // console.log(mid)

  if ((m + n) % 2) return a
  let b = findK(nums1, nums2, 0, 0, mid + 1)
  // console.log(a, b)

  return (a + b) / 2
};
// @lc code=end

