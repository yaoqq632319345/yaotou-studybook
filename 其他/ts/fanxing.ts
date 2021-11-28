function join<WWW, WW> (first : WWW, second: WW) {
  return `${first}${second}`
}

console.log(join<string, string>('www', 'baidu'));


function fun <a> (params: a[]) {
  return params.join(',')
}

console.log(fun<string>(['1', '2']));

interface NAME {
  name: string
}

class S<T extends NAME> {
  constructor (private name: T[]) {}
  getname (index: number) : T {
    return this.name[index]
  }
}

