// LIFO
// 1.基于数组的栈
class ArrayStack{
  constructor(){
    this.items = []
  }
  //向栈中添加元素
  push(element){
    this.items.push(element)
  }
  // 从栈中移除元素
  pop(){
    return this.items.pop()
  }
  // 查看栈顶的元素
  peek(){
    return this.items[this.items.length - 1]
  }
  // 检查栈是否为空
  isEmpty(){
    return this.size() === 0                
  }
  size(){
    return this.items.length
  }
  // 清空栈元素
  clear(){
    this.items = []
  }
}

// const stack = new ArrayStack()
// console.log(stack.isEmpty());

// stack.push(5)
// stack.push(8)
// console.log(stack.peek())

// stack.push(11)
// console.log(stack.size())
// console.log(stack.isEmpty())

// stack.push(15)
// stack.pop()
// stack.pop()
// console.log(stack.size());

// 基于js对象的stack类
class ObjeckStack{
  constructor(){
    this.count = 0
    this.items = {}
  }
  // 向栈中插入元素
  push(element){
    this.items[this.count] = element
    this.count++
  }
  // 验证一个栈是否为空和它的大小
  size(){
    return this.count
  }
  isEmpty(){
    return this.count === 0
  }
  // 从栈中弹出元素
  pop(){
    if(this.isEmpty){
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result 
  }
  // 查看栈顶的值并经栈清空
  peek(){
    if(this.isEmpty){
      return undefined
    }
    return this.items[this.count - 1]
  }

  clear(){
    // this.items = {}
    // this.count = 0 
    while(!this.isEmpty()){
      this.pop()
    }
  }

  // 创建toString方法
  toString(){
    if(this.isEmpty()){
      return ''
  }
    let objString = `${this.items[0]}`
    for(let i = 1;i<this.count;i++){
      objString = `${objString}，${this.items[i]}`
    }
    return objString
  }
}

const stack = new ObjeckStack()
stack.push(5)
stack.push(8)

console.log(stack.items,stack.count)

