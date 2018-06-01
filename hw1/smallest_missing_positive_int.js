//smallest missing positive integer in an array.

//input array [3,4,-1,1]
//output int 2

function smallestPosInt(a) {
  let n = a.length;
  for(let i = 0; i< n; i++) {
    while(a[i] > 0 && a[i] <=n && a[i] !== a[a[i]-1]){
      let temp = a[a[i]-1];
      a[a[i]-1] = a[i];
      a[i] = temp;
    }
    console.log(a);
  }
  //console.log(a);
  for(let i = 0; i < n; i++){
    if(a[i] != i+1){
      console.log(i+1);
      return i+1;
    }
  }
  return n+1;
}

smallestPosInt([3,4,-1,1]);
