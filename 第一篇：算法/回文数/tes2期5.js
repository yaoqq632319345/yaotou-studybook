let s = 122

function check(s) {
  let i = 0, j = s.length - 1
  
  while(i <= j && s[i] != s[j]) {
    return false
    break
  }
  return true
}