//Find all permutations of a string where the string can contain duplicates.

function allPermutation(str){
  if(str.length < 2) return [str];

  var strarr = [];

  for (var i = 0; i < str.length; i++) {
    let char = str[i];

    if (str.indexOf(char) != i) // if char was used already
            continue;

    let remindStr = str.slice(0, i) + str.slice(i+1, str.length);
    for(var subPermutation of allPermutation(remindStr)) {
      strarr.push(char + subPermutation);
    }
  }
  return strarr;
}

allPermutation("1112");
