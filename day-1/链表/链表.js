
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

  // 查找某一项
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

let l = new LikedList()
l.append(1)
l.append(2)
l.append(3)

l.insert(1,4)