function insertSort(arr){
  for(let i = 1;i<arr.length;i++){
    let j = i
    let temp = arr[i]
    while(j>0 && arr[j-1]>temp){
      // 将大于temp的数往后移动一位
      arr[j] = arr[j-1]
      j--
    }
    // 将temp插入到j的位置，j的位置之前的元素都是比temp小的
    arr[j] = temp
  }
  return arr
}

let arr = [12,1,3,54,2,9,15]

console.log(insertSort(arr));