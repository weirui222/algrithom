//input array, num
//output index

function binarySearch(arr, num) {
  if(arr.length < 1) return -1;
  let left = 0;
  let right = arr.length -1;
  while (left < right) {
    let mid = left + (right -left)/2;

    if (num === arr[mid]) {
      return mid;
    } else if(num > arr[mid]){
      left = mid+1;
    } else if(right !== mid){
      right = mid-1;
    }
  }

  return -1;
}


binarySearch([1,2,3,4,5], 6)

mid     2  3  3
left    0  2  3
right   4  4  4
