Q2: Given an array A of n integers, are there elements a, b, c, and d in A such
that a + b + c + d = Sum (S)? Find all unique quadruplets in the array which add up to S.

Note:
The solution set must not contain duplicate quadruplets.
Example:
Given array S = {1, 0, -1, 0, -2, 2}, and target = 0
A solution set is:
   (-2, -1, 1, 2)
   (-2,  0, 0, 2)
   (-1,  0, 0, 1)

Think of various solutions trading time and space complexity and write one with
constant space and write one with best possible time complexity

function quadruplets(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  for (var i = 0; i < sortedArr.length; i++) {
    let result = - sortedArr[i];
    for (var j = i + 1; j < sortedArr.length - 2; j++) {
      let k = j+1;
      let l = sortedArr.length - 1;
      while (k < l) {
        if (sortedArr[j] + sortedArr[k] + sortedArr[l] === result) {
          console.console.log(sortedArr[i], sortedArr[j], sortedArr[k], sortedArr[l]);
          k++;
          l--;
        } else if((sortedArr[j] + sortedArr[k] + sortedArr[l]) > result){
          l--;
        } else {
          k++;
        }
      }
    }
  }
}
