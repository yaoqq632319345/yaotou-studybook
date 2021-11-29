/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let has = {
    [5]: 0,
    [10]: 0,
    [20]: 0
}

for (let i = 0; i < bills.length; i++) {
    let ret = bills[i] - 5

    if (ret === 15) {
        if (has[10]) {
            has[10]--
            has[5]--
        } else {
            has[5]-=3
        }
    }
    if (ret === 5) {
        has[ret]--
    }

    if (has[5] < 0 || has[10] < 0) return false
    has[bills[i]]++

}
return true
};
// @lc code=end

