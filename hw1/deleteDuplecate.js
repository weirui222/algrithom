delete duplecate items in an  array
? integer in array.
? duplecate delete or leave 1
? keep order
? extra space? complex- constance is OK
? return Arrays

function deleteDuplecate(arr){
  let n = arr.length;
  for(let i = 0; i< n; i++) {
    for(let j = 0; j < i; j++){
      if(arr[i] === arr[j]) {
        for(let k=i; k< n-1; k++){
           arr[k] = arr[k+1];
        }
        n--;
        console.log("i",i, "j",j,arr);
        i--;
      }
    }
  }
  console.log(arr);
}
deleteDuplecate([3,1,2,2,2,3,4])



function findNext(arr, w, r){
  while(r < arr.length && arr[w] === arr[r]) {
    r++;
  }
  return r;
}

function deleteDup(arr){
  let write = 0;
  let read = 1;
  while(read < arr.length){
    read = findNext(arr, write, read);
    if (read >= arr.length) {
      break;
    }
    write++;
    arr[write] = arr[read];
    read++;
    console.log(read,arr[read], arr);
  }
  //console.log(read);
  return arr;
}

function deleteDup2(arr) {
  let write = 0;
  let read = 1;
  while (read < arr.length) {
    if (arr[read] != arr[write]) {
      write++;
      arr[write] = arr[read];
    }
    read++;
  }
  console.log(read, write);
  return arr;
}

deleteDup2([1,2,2,2,3,3,3,4,5,5,5,5])
//deleteDup([1,2,2]);
