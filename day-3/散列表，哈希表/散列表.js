// 哈希表
let HashTable= function(){
  let items= []

  // 散列函数
  //key > number >items[number]
  //asci码转换
  //J74 o111 b98 s115
  // key => hashcode 散列值
  let loseloseHashCode = function(key){//Jobs
    let hash = 0
    for(let i = 0; i < key.length; i++){
      hash += key[i].charCodeAt()
    }
    return hash % 37
  }

// 添加
this.put = function(key,value){
  let position = loseloseHashCode(key)
  console.log(position + ' - ' + value)
  items[position] = value
}

// 移除
this.remove = function(key){
  items[loseloseHashCode(key)] = undefined
}

// 获取指定项
this.get = function(key){
  return items.loseloseHashCode(key)
}

this.getItems = function(){
  return items
}
}

var ht = new HashTable()
ht.put('Jobs','6666')
ht.put('Bob','5555')