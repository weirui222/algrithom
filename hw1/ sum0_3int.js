// public static  void findTriplets(int arr[], int n){
//         Arrays.sort(arr);
//         for(int i=0;i<n-2;i++)
//         {
//             int j=i+1;
//             int k=n-1;
//             while(k>j)
//             {
//                 if(arr[i]+arr[j]+arr[k]==0)
//                 {
//                     j++;
//                     k--;
//                 }
//                 else if(arr[i]+arr[j]+arr[k]>0){
//                     k--;
//                 }
//                 else {
//                     j++;
//                 }
//             }
//
//
//         }
//
//     }


function sum3(a){
  a.sort();
  let length =  a.length;
  for(let i = 0; i < length -2; i++){
    let j = i+1;
    let k = length -1;
    while (j < k) {
      if (a[i] + a[j] + a[k] === 0) {
        console.log(a[i], a[j], a[k]);
        j++;
        k--;
      } else if(a[i] + a[j] + a[k] > 0){
        k--;
      } else {
        j++;
      }
    }
  }
}

sum3([-6,3,2,4,0,5,1])
