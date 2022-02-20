var Queuq = function(){
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

// 传花
let chuanhua = function(names,number){
  let q = new Queuq()
  for(let i = 0;i < names.length;i++){
    q.enqueue(names[i])
  }
  let taotai
  while(q.size() > 1){
    for(let i = 0;i < number -1 ;i++){//前2个放后面，拿走第三个
      q.enqueue(q.dequeue())
    }
    taotai = q.dequeue()
    console.log(`淘汰的玩家是${taotai}`);
  }
  return console.log(`最后剩下的玩家是${q.front()}`)
}

let names = ['a','b','c','d','e','f']
// 游戏规则
let number = 3



// 优先队列
var PriorityQueue = function(){
  let items = []
  // 辅助类
  let QueueItem = function(element,priority){
    this.element = element
    this.priority = priority
  }
  this.enqueue = function(element,priority){
    let queueItem = new QueueItem(element,priority)

    let added = false

    for(let i = 0;i<items.length;i++){
      if(queueItem.priority > items[i].priority){
        items.splice(i,0,queueItem)
        added = true
        break
      }
    }
    if(!added){
      items.push(queueItem)
    }
  }

  this.getItems = function(){
    return items
  }
}

var pq = new PriorityQueue()
pq.enqueue('a',1)
pq.enqueue('b',2)
