let a = new Set()
a.add(1)
a.add(2)
a.add(3)

a.forEach((value,values,set)=>{
  console.log(value);
  console.log(values);
  console.log(set);
})

// 获取迭代器
let interator = a.entries()
console.log(interator);
console.log(interator.next());
console.log(interator.next().value)
console.log(interator.next().value)
console.log(interator.next().value)
console.log(interator.next().value)

let arr = ['a','b','c']
arr.forEach((item,index)=>{
  console.log(item,index);
})9


let b = new Set([1,2,3])
let c = new Set([4,3,2])

let union = new Set([...a,...b])
let intersect = new Set([...b].filter(x=>c.has(x)))
let different = new Set([...b].filter(x=>!c.has(x)))
