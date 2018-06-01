// [Recurrion]  -- Towers of Hanoii
// Write code to solve the https://en.wikipedia.org/wiki/Tower_of_Hanoi problem.
// Your code should print detailed steps one should take to solve it for N discs

function hanoiTower(n, start, end, middle) {
  if(n===0) return;
  hanoiTower(n-1, start, middle, end);
  console.log('Move disc '+ n +' from '+start+' to '+end);
  hanoiTower(n-1, middle, end, start);
}

hanoiTower(3, 'start', 'end', "middle")
