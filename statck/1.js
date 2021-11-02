// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
let s = "()[]{}"
console.log(valid(s))
function Zhan () {
  let items = []

  this.push = (i) => {
    items.push(i)
  }

  this.pop = () => {
    return items.pop()
  }
  this.isEmpty = () => {
    return items.length === 0
  }
}

function valid (s) {
  let zhan = new Zhan()
	for (let i = 0; i < s.length; i++) {
    if (['(', '{', '['].indexOf(s[i]) > -1) {
      zhan.push(s[i])
    } else {
      let left = zhan.pop()
      if (['()', '{}', '[]'].indexOf(left + s[i]) < 0) {
        return false
        break
      }
    }
  }
  if (zhan.isEmpty()) return true
  return false
}