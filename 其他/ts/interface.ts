interface Person {
  name: string;
  age: number;
  say(name: string):string;
  [p:string]: any
}

class Person implements Person {
  constructor (p: Person) {
    this.name = p.name
    this.age = p.age
    this.say = p.say

    this.aa ='aa'
  }
}

const p = new Person({
  name: '王大',
  age: 15,
  say (name) {
    return `heallo${name}`
  }
});

console.log(p.say('hi'))