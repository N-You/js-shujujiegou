import { swap } from "./util.js"
function bobbleSort(arr){
  for(let i = arr.length-1;i>=0;i--){
    for(let j = 0;j<i;j++){
    if(arr[j]>arr[j+1]){
      swap(arr,j,j+1)
    }
  }
  }
  return arr
}

let arr = [12,1,3,54,2,9,15]

console.log(bobbleSort(arr));