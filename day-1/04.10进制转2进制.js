// class Stack{
//   constructor(){
//     this.items = []
//   }
//   push(elemnent){
//     this.items.push(elemnent)
//   }
//   pop(){
//     return this.items.pop()
//   }
//   isEmpty(){
//     return this.size() === 0
//   }
//   size(){
//     return this.items.length
//   }
// }

// function decimalToBinary(decNumber){
//   const remStack = new Stack()
//   let number = decNumber
//   let rem 
//   let binaryString = ''

//   while(number > 0){
//     rem = Math.floor(number % 2)
//     remStack.push(rem)
//     number = Math.floor(number / 2)
//   }

//   while(!remStack.isEmpty()){
//     binaryString += remStack.pop().toString()
//   }

//   return binaryString
// }

// console.log(decimalToBinary(233));

function get(data){
  while(data > 2){
  console.log(111);
   data -= 1
  }
}



console.log(get(4));

