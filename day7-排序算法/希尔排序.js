function shellSort(arr){
  let len = arr.length;
  let gap = Math.floor(len/2)
  while(gap>=1){
    for(let i = gap;i<len;i++){
       let j = i
       let temp = arr[i]
     while(temp<arr[j-gap] && j>=gap){
      arr[j] = arr[j-gap]
      j-=gap
     }
      arr[j] = temp
    }
    gap = Math.floor(gap/2)
  }
  return arr
}

let arr = [12,1,3,54,2,9,15,4]

console.log(shellSort(arr));