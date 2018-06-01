Q1: Given a string containing digits from 2-9 inclusive,
return all possible letter combinations that the number could represent.
Note, first solve the problem assuming distinct number combination and then consider duplicates.
Eg: 234, 224 are both possible. Your solution should NOT be dependent on the number of digits.

let map = new Map();
map.set("2", ["A","B","C"])
   .set("3", ["D","E", "F"])
   .set("4", ["G","H", "I"])
   .set("5", ["J","K","L"])
   .set("6", ["M","N", "O"])
   .set("7", ["P","Q", "R", "S"])
   .set("8", ["T","U","V"])
   .set("9", ["W","X", "Y", "Z"]);


function findComb(str) {
  if(str.length === 0) return [''];
  let char = str[0];
  let list = map.get(char);
  let result = [];
  for (let i = 0; i < list.length; i++) {
    let remindStr = str.slice(1);
    console.log("remindStr", remindStr);
    for (var subPermutation of findComb(remindStr)) {
      console.log("list[i]", list[i], "subPermutation", subPermutation);
      result.push(list[i] + subPermutation);
    }
  }
  return result;
}

findComb("23");
