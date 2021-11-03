// let s = JSON.parse(readline())
// console.log(sort(s).join(','))
function sort(d) {
	let arr = []
    
    for (let i = 0; i < d.length; i++) {
		arr[d[i]] = arr[d[i]] ? arr[d[i]] + 1 : 1
    }
  	let res = []
  	for (let i = 0; i < arr.length; i++) {
		if (arr[i]) {
          for (let j = 0; j < arr[i]; j++) {
			res.push(i)
          }
        }
    }
  return res
}