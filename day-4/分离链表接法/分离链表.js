let LikedList = function(){
  // 链表头
  let head = null 
  // 链表长度
  let length = 0

  //辅助类：节点
  let Node = function(element){
    this.element = element
    this.next = null
  }

  // 添加节点
  this.append = function(element){
    var node = new Node(element)
    if(head === null){
      head = node
    }else{
      let current = head
      while(current.next){
        current = current.next
      }
      current.next = node
    }
    length++
  }

//链表某一位置添加元素
  this.insert = function(position,element){
    // 越界
    if(position > -1 && position < length){
      let node = new Node(element)
      if(position === 0){
        let current = head
        head = node
        head.newx = current
      }else{
        let index = 0
        let current = head
        let previous = null
        while(index < position){//index === position停止
          previous = current
          current = current.next
          index++
        }

        previous.next = node
        node.next = current
      }
      length++
    }
  } 

  // 用位置移除链表某一项
  this.removeAt = function(position){
    if(position > -1 && position < length){
      let current = head
      if(position === 0){
        head = current.next
      }else{
        let index = 0
        let previous = null
        while(index < position){
          previous = current
          current = current.next
          index++
        }
        previous.next = current.next
      }
      length--
      return current
    }
    return null
  }

  // 查找某一项位置
  this.indexOf = function(element){
    let index = 0
    let current = head
    while(current){
      if(current.element === element){
        return index
      }
      current = current.next
      index++
    }
    return -1
  }

  // 移除某一项
  this.remove = function(element){
    return this.removeAt(this.indexOf(element))
  }

// 检查链表是否为空
  this.isEmpty = function(){
    return length === 0
  }

  // 返回链表长度
  this.size = function(){
    return length
  }

  this.getHead = function(){
    return head
  }
}


let HashTable_L = function(){
  let table = []
  // let loseloseHashCode = function(key){
  //   let hash = 0
  //   for(let i = 0; i < key.length; i++){
  //     hash += key.charCodeAt(i)
  //   }
  //   return hash % 37
  // }

    // let Node = function(key,value){
  //   this.key = key
  //   this.value = value
  // }

  // this.put = function(key,value){
  //   let position = loseloseHashCode(key)
  //   if(table[position]){
  //     table[position].append(new Node(key,value))
  //   }else{
  //     let l = new LikedList()
  //     table[position] = l
  //     table[position].append(new Node(key,value))
  //   }
  // }

  // this.get = function(key){
  //   let position = loseloseHashCode(key)
  //   if(table[position]){
  //     // 链表线性查找
  //     let current = table[position].getHead()
  //     console.log("🚀 ~ file: 分离链表.js ~ line 142 ~ current", current)
  //     while(current){
  //       if(current.element.key === key){
  //         return current.element.value
  //       }
  //       current = current.next
  //     }
  //   }else{
  //     return undefined
  //   }
  // }

  // this.remove = function(key){
  //   let position = loseloseHashCode(key)
  //   if(table[position]){
  //     // 删除
  //     // remove(element)
  //     let current = table[position].getHead()
  //     while(current){
  //       if(current.element.key === key){
  //         table[position].remove(current.element)
  //         if(table[position].isEmpty()){
  //           table[position] = undefined
  //         }
  //         return true
  //       }
  //       current = current.next
  //     }
  //   }else{
  //     return false
  //   }
  // }

  // this.getItems = function(){
  //   return table
  // }

  let djb2HashCode = function(key){
    let hash = 5381
    for(let i = 0;i<key.length;i++){
      hash = hash * 33 + key[i].charCodeAt()
    }
    return hash % 1013
  }

  this.put = function(key,value){
    let position = djb2HashCode(key)
    table[position] = value
  }

  this.get = function(key){
   return table[djb2HashCode(key)]
  }

  this.remove = function(key){
    table[djb2HashCode(key)] = undefined
  }

  this.getItems = function(){
    return table
  }
}

let hl = new HashTable_L()
hl.put('Donnie','zhangsan')
hl.put('Ana','lisi')
