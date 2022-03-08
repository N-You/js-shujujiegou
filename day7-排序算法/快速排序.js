import { swap } from "./util.js";

// function quickSort(arr){
//   if(arr.length<=1) return arr;
//   let mid = Math.floor(arr.length/2);
//   let pivot = arr.splice(mid,1)[0];
//   let left = []
//   let right = []
//   for(let i=0;i<arr.length;i++){
//     if(i!=mid){
//       if(arr[i]<pivot){
//         left.push(arr[i])
//       }else{
//         right.push(arr[i])
//       }
//     }
//   }
//   return quickSort(left).concat([pivot],quickSort(right))
// }

function media(arr,left,right){
let center = Math.floor((left+right)/2);
if(arr[left] > arr[center]){
  swap(arr,left,center)
}else if(arr[left] > arr[right]){
  swap(arr,left,right)
}else if(arr[center] > arr[right]){
  swap(arr,center,right)
}
swap(arr,center,right-1)
return arr[right-1]
}

function quickSort(arr){
  if(arr.length<=1) return arr;
  let left = 0;
  let right = arr.length-1;
  let pivot = media(arr,left,right);
  while(left<right){
    while(arr[left]<pivot){
      left++
    }
    while(arr[right]>pivot){
      right--
    }
    if(left<right){
      swap(arr,left,right)
    }
  }
  return quickSort(arr.slice(0,left)).concat([pivot],quickSort(arr.slice(left+1)))
}

let arr = [12,1,3,54,2,9,15,4]

console.log(quickSort(arr))