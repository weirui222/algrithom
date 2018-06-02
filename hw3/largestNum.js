//input positive integer arr
//output largest num- string
let arr = [2, 5, 78, 92, 111, 8, 53, 56];
function largestNum(arr){
  let newArr = [];
  let result ="";
  for(let i = 0; i < arr.length; i++){
    newArr.push(arr[i].toString());
  }

  newArr.sort((str1,str2) => {
    let i = 0;
    let j = 0;

    while(i < str1.length && j < str2.length){
      if(str1[i] > str2[j]){
        return true;
      } else if(str1[i] === str2[j]){
        i++;
        j++;
      } else{
        return false;
      }
    };
    if(i === str1.length && j=== str2.length){
      return true;
    } else if(i === str1.length) {
      if(str2[j] > str2[j-1]){
        return false;
      }
      return true;
    } else {
      if(str1[i] > str1[i-1]){
        return true;
      }
      return false;
    };
  });

  for (var i = newArr.length -1; i >= 0; i--) {
    result += newArr[i];
  }
  return result;
}
