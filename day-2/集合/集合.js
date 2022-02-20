let Set2 = function(){
  let items = {}
  // let length = 0

  // 检查元素是否存在
  this.has = function(value){
    return items.hasOwnProperty(value)
  }

  // add添加元素，不能是重复的
  this.add = function(value){
    if(!this.has(value)){
      items[value] = value
      return true
      // length++
    }
    return false
  }

  // remove删除元素
  this.remove = function(value){
    if(this.has(value)){
      delete items[value]
      return true
      // length--
    }else{
      return false
    }
  }

  // 清空集合
  this.clear = function(){
    items = {}
    // length = 0
  }

  // 返回集合的大小
  this.size = function(){
    // return length

    // 遍历集合
    // let count = 0
    // for(let i in item){
    //   if(items.hasOwnProperty(i)){
    //     count++
    //   }
    // }
    //   count++
    // }
    // return count

    return Object.keys(items).length
  }

  this.values = function(){
    let values = []
    for(var i in items){
      if(items.hasOwnProperty(i)){
        values.push(items[i])
      }
    }
    return values
  }

  // 并集
  this.union = function(otherSet){
    let resultSet = new Set2()

    let arr = this.value()
    for(let i = 0;i<arr.length;i++){
      resultSet.add(arr[i])
    }

    arr = otherSet.value()
    for(let i = 0;i<arr.length;i++){
      resultSet.add(arr[i])
    }
    return resultSet
  }

  // 并集
this.intersection = function(otherSet){
  let resultSet = new Set2()

  let arr = this.value()
  for(let i = 0;i < arr.length; i++){
    if(otherSet.has(arr[i])){
    resultSet.add(arr[i])
  }
}
return resultSet
}

// 差集
this.difference = function(otherSet){
  let resultSet = new Set2()
  let arr = this.value()
  for(let i=0;i<arr.length;i++){
    if(!otherSet.has(arr[i])){
      resultSet.add(arr[i])
    }
  }
  return resultSet
}

  this.getItems = function(){
    return items
  }
}



let s = new Set2()
s.add(1)
s.add(2)
s.add(3)

let s2 = new Set2()
s2.add(2)
s2.add(3)
s2.add(4)