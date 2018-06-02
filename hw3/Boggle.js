Boggle (Find all possible words in a board of characters) | Set 1
Given a dictionary, a method to do lookup in dictionary and a M x N board where
every cell has one character. Find all possible words that can be formed by a
sequence of adjacent characters. Note that we can move to any of 8 adjacent
characters, but a word should not have multiple instances of same cell.

Example:

Input: dictionary[] = {"GEEKS", "FOR", "QUIZ", "GO"};
      boggle[][]   = {{'G','I','Z'},
                      {'U','E','K'},
                      {'Q','S','E'}};
     isWord(str): returns true if str is present in dictionary
                  else false.

Output:  Following words of dictionary are present
        GEEKS
        QUIZ

function isValidPos(i, j, m, n) {
    return i >= 0 && i <= m && j >= 0 && j <= n;
  };

function findWord(dictionary, boggle){
  let m = boggle.length;
  let n = boggle[0].length;
  var isValidPos = function(i, j) {
    return i >= 0 && i <= m && j >= 0 && j <= n;
  };

  let visited = [];
  let words = [];

  for (let i = 0; i < m; i++) {
    visited.push([])
    for (var j = 0; j < n; j++) {
      visited[i].push(false);
    }
  }
  //i,j,word
  for (var k = 0; k < dictionary.length; k++) {
    let word = dictionary[k];
    for (let i = 0; i < m; i++) {
      for (var j = 0; j < n; j++) {
        if (boggle[i][j] === word[0]) {
          visited[i][j] = true;
          let exist = doesWordExist(i, j, 1, word, boggle, visited);
          if(exist) {
            words.push(word);
          }
          visited[i][j] = false;
        }
      }
    }
  }
  console.log(words);
}


// i,j current position
// k: index of next letter to find in word
// word
// Boggle
// visited boolean matrix with same size as Boggle
function doesWordExist(i, j, k, word, boggle, visited) {
  if (k === word.length) {
    return true;
  }

  let letter = word[k];
  for (let x = i - 1; x <= i + 1; x++) {
    for (let y = j - 1; y <= j + 1; y++) {
      if (!isValidPos(x, y, boggle.length, boggle[0].length)) { // x or y less than 0 or
        continue;
      }

      if (visited[x][y]) {
        continue;
      }

      if (boggle[x][y] !== letter) {
        continue;
      }

      visited[x][y] = true;
      let exist = doesWordExist(x, y, k + 1, word, boggle, visited);
      visited[x][y] = false;
      if (!exist) {
        continue;
      }

      return true;
    }
  }

  return false;
}

dictionary = ["GEEKS", "FOR", "QUIZ", "GO"];
boggle = [['G','I','Z'],
          ['U','E','K'],
          ['Q','S','E']
        ];

findWord(dictionary, boggle);
