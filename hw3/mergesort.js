Q3:
Union and Intersection of two sorted arrays
Given two sorted arrays, find their union and intersection.

Example:

Input : arr1[] = {1, 3, 4, 5, 7}
       arr2[] = {2, 3, 5, 6}
Output : Union : {1, 2, 3, 4, 5, 6, 7}
        Intersection : {3, 5}

Input : arr1[] = {2, 5, 6}
       arr2[] = {4, 6, 8, 10}
Output : Union : {2, 4, 5, 6, 8, 10}
        Intersection : {6}

function unionAndIntersection(arr1, arr2) {
  let union = [];
  let intersection = [];

  let i = 0;
  let j = 0;

  while ((i < arr1.length) && (j < arr2.length)) {
    if (arr1[i] < arr2[j]) {
      union.push(arr1[i]);
      i++;
    } else if (arr1[i] === arr2[j]){
      union.push(arr1[i]);
      intersection.push(arr1[i]);
      i++;
      j++;
    } else {
      union.push(arr2[j]);
      j++;
    }
  }

  if (i !== arr1.length) {
    for (; i < arr1.length; i++) {
      union.push(arr1[i]);
    }
  }

  if (j !== arr2.length) {
    for (; j < arr2.length; i++) {
      union.push(arr2[j]);
    }
  }

  console.log("union", union);
  console.log("intersection", intersection);
  return union;
}
