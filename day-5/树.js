let Tree = function(){
  let Node = function(value){
    this.value = value
    this.left = null
    this.right = null
  }

  let root = null

  // 插入节点
  let insertNode = function(node,newNode){
    if(newNode.value > node.value){
      // 向右插入
      if(node.right === null){
        node.right = newNode
      }else{
        insertNode(node.right,newNode)
      }
      // 向左插入
    }else if(newNode.value < node.value){
      if(node.left === null){
        node.left = newNode
      }else{
        insertNode(node.left,newNode)
      }
    }
  }
  // 添加节点
  this.insert = function(value){
    let newNode = new Node(value)
    if(root === null){
      root = newNode
    }else{
      insertNode(root,newNode)
    }
  }

  
  let traverse = function(node,callback){
    if(node === null) return
      // callback(node.value) 8 2 3 9  前序遍历
      traverse(node.left,callback) 
      // callback(node.value) 2 3 8 9  中序遍历
      traverse(node.right,callback)
      callback(node.value) // 3 2 9 8  后续遍历  查文件最快的方式
  }

  // 遍历节点
  this.traverse = function(callback){
    traverse(root,callback)
  }


  let min = function(node){
    if(node == null) return null

    while(node && node.left){
      node = node.left
    }
    return node.value
  }
  // 最小节点
  this.min = function(){
    return min(root)
  }


  let max = function(node){
    if(node == null) return null

    while(node && node.right){
      node = node.right
    }
    return node.value
  }
  // 最大节点
  this.max = function(){
    return max(root)
  }

  // 找到右边最小的节点
  let findMinNode = function(node){
    while(node && node.left){
      node = node.left
    }
    return node
  }

  // 删除
  let removeNode = function(node,value){
    if(node === null) return null
    if(value > node.value){
      // 向右查找
     node.right = removeNode(node.right,value)
     return node
    }else if(value < node.value){
      // 向左查找
     node.left = removeNode(node.left,value)
     return node
    }else{
      // value === node.value
      // 删除节点
      if(node.left === null && node.right === null){       
        // 叶子节点条件
        node = null
        return node
      }

      // 只有一个子节点的条件
      if(node.left === null && node.right){
        node = node.right
        return node
      }else if(node.right === null && node.left){
        node = node.left
        return node
      }

      console.log("🚀 ~ file: 树.js ~ line 143 ~ removeNode ~ node", node);
      // 有两个子节点的条件
      let aux= findMinNode(node.right)
      node.value = aux.value
      node.right = removeNode(node.right,aux.value)
      return node
    }
  }
  // 删除节点
  this.remove = function(value){
    root = removeNode(root,value)
  }

  // 获取根节点
  this.getRoot = function(){
    return root
  }
}

let t = new Tree()
t.insert(12)
t.insert(8)
t.insert(4)
t.insert(10)
t.insert(3)
t.insert(5)
t.insert(9)
t.insert(11)

let callback = function(value){
// console.log("🚀 ~ file: 树.js ~ line 70 ~ callback ~ value", value)
}

t.traverse(callback)
