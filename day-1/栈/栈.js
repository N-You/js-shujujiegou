// 函数：函数，构造器
// this指的是要创建的对象
var Stack = function(){
  var item = []
  // this.item = []
  // push 入栈
  this.push = function(element){
    item.push(element)
  }

  // pop 出栈(拿出栈顶元素)
  this.pop = function(){
    return item.pop()
  }

  // 查看栈顶
  this.peek = function(){
    return item[item.length - 1]
  }

  // 检查栈 是否为空
  this.isEmpty = function(){
    return item.length === 0
  }

  // 栈的大小
  this.size = function(){
    return item.length
  }

  // 清空栈
  this.clear = function(){
    item = []
  }

  this.getItem = function(){
    return item
  }
}


// 10转2
var divBy2 = function(number){
  var stack = new Stack()
  var yushu
  var string2 = ''

  while(number > 0){
    yushu = number % 2
    stack.push(yushu)
    number = Math.floor(number / 2)
  }

  while(!stack.isEmpty()){
   string2 += stack.pop()
  }

  return string2
}

var fun1 = function(){
  return console.log('fun1 finish')
}

var fun2 = function(){
  fun1()
  return console.log('fun2 finish')
}
