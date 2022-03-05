import { swap } from "./util.js"

function selectSort(arr){
  for(let j =0;j<arr.length-1;j++){
  let min = j
  for(let i=min+1;i<arr.length;i++){
    if(arr[min]>arr[i]){
      min = i
    }
  }  
  swap(arr,min,j)
  }
  return arr
}

let arr = [12,1,3,54,2,9,15]

console.log(selectSort(arr));