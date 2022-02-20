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

var Queue = function(){
  var items = []

  // 入队
  this.enqueue = function(element){
    items.push(element)
  }


  // 出队
  this.dequeue = function(){
    return items.shift()
  }

  // 查看队首
  this.front = function(){
    return items[0]
  }

  // 检查队列是否为空
  this.isEmpty = function(){
    return items.length === 0
  }

  // 查看队列长度
  this.size = function(){
    return items.length
  }
}


let Graph = function(){
  // 存储顶点
  let vertices = []
  // 存储边
  let adjList = {}

  // 添加顶点
  this.addVertex = function(v){
    vertices.push(v)
    adjList[v] = []
  } 

  // 添加边
  this.addEdge = function(a, b){
    adjList[a].push(b)
    adjList[b].push(a)
  }

  this.print = function(){
    let s = '\n'
    for(var i =0;i<vertices.length;i++){
      let dingdian = vertices[i]
      s += dingdian + ' -> '
      let bian = adjList[dingdian]
      for(var j = 0;j<bian.length;j++){
        s += bian[j]
      }
      s += '\n'
    }
    console.log(s)
  }

  // white 未发现
  // gray 发现
  //black 已探索
  let initColor = function(){
    let color = {}
    for(let i = 0;i<vertices.length;i++){
      color[vertices[i]] = 'white'
    }
    return color
  }
  // 广度优先算法
  // 广度优先算法是一种深度优先算法的变种，它在深度优先算法的基础上，每次只探索一个顶点，而不是探索整个图。
  // 广度优先算法的基本思想是：每次探索一个顶点，并将其相邻的顶点探索出来。
  // 广度优先算法的基本步骤是：
  // 1. 初始化所有顶点的颜色为white；
  // 2. 将源顶点放入队列中，并将其颜色设置为gray；
  // 3. 当队列不为空时，从队列中取出一个顶点，并将其颜色设置为gray；
  // 4. 将取出的顶点的所有相邻顶点放入队列中，并将其颜色设置为gray；
  // 5. 将取出的顶点的颜色设置为black；
  // 6. 重复步骤3-5，直到队列为空。
  // 广度优先算法的时间复杂度为O(V+E)，其中V为顶点数，E为边数。
  // 广度优先算法的空间复杂度为O(V)。
  // 广度优先算法的算法复杂度为O(V+E)。
  // d 距离
  //pred 回溯点

  this.BFS = function(v,callback){
    let color = initColor()
    /* 
    color = {
      A:'white
      B:'white'
      ...
    }
    */

   let queue = new Queue()
   queue.enqueue(v)

   let d = {}
   let pred = {}
   
   for(let i = 0;i < vertices.length;i++){
     d[vertices[i]] = 0
     pred[vertices[i]] = null
   }

   while(!queue.isEmpty()){
     let now = queue.dequeue()
     let bian = adjList[now]
     for(let i = 0 ; i < bian.length;i++){
       let w = bian[i]
       if(color[w] === 'white'){
        //  未发现的全部入队列，设置颜色为gray
         color[w] = 'gray'

        //  设置回溯点
        pred[w] = now
        d[w] = d[now] + 1

         queue.enqueue(w)
       }
     }
     color[now] = 'black'
     if(callback){
      callback(now)
     }
   }
   return {
     pred:pred,
     d:d
   }
  }

  // 深度优先算法
  let dfsVisite = function(v,color,callback){
    color[v] = 'gray'
    var n = adjList[v]
    for(let i = 0;i < n.length;i++){
      let w= n[i]
      if(color[w] == 'white'){
        dfsVisite(w,color,callback)
      }
    }

    color[v] = 'black'
    if(callback){
      callback(v)
    }
  }

  this.bfs = function(v,callback){
    let color = initColor()
    dfsVisite(v,color,callback)
  }
}

let g = new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("A", "D")
g.addEdge("B", "E")
g.addEdge("B", "F")
g.addEdge("C", "D")

// 广度优先算法查找最短距离
let s = g.BFS('A')
console.log(s);
let shortlang = function(from,to){
  let v = to
  let path = new Stack()
  while(v !== from){
    path.push(v)
    v = s.pred[v]
  }
  path.push(v)

  let str = ''
  while(!path.isEmpty()){
    str += path.pop() + '->'
  }
  str = str.slice(0,str.length-2)
  console.log(str);
}

shortlang('A','E')