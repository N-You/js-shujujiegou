 let Dictionary = function() {
   let items = {}

  //  检查是否存在某个键
   this.has = function(key){
     //return items.hasOwnProperty(key)
     return key in items
   }

  //  添加键
  this.set = function(key,value){
    items[key] = value
  }

  this.delete = function(key){
    if(this.has(key)){
      delete items[key]
      return ture
    }
    return false
  }

  this.get = function(key){
    if(this.has(key)){
      return item[key]
    }else{
      return false
    }
  }

  this.keys = function(){
    return Object.keys(items)
  }

  this.getItems = function(){
    return items
  }
 }