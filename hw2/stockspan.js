
// Stacks:: Stock -- Max Span
// The stock span problem is a financial problem where we have a series of n daily price quotes for a stock and we need to calculate the max span of stock’s price for all n days.
// The span Si of the stock’s price on a given day i is defined as the maximum number of consecutive days just before the given day, for which the price of the stock on the current day is less than or equal to its price on the given day.
// For example, if an array of 7 days prices is given as {100, 80, 60, 70, 60, 75, 85}, then the span values for corresponding 7 days are {1, 1, 1, 2, 1, 4, 6}
//input Input:
// 100 80 50 70 60 75 85
//  1  1  1  2  1  4  6
//Output:  1  1  1  2  1  4  6

function longestIncrease(arr) {
  if(arr.length === 0){
    return [];
  }
  let span = [1];
  for(let i = 1; i < arr.length; i++){
    if(arr[i] < arr[i-1]){
      span.push(1);
    } else{
      let index = i -1;
      let si = 1 + span[index];
      while(arr[index - span[index]] < arr[i]){
        index -= span[index];
        si += span[index];
      }
      span.push(si);
    }
  }
  console.log(span);
  return span;
}

function longestIncrease2(arr) {
  if(arr.length === 0){
    return [];
  }
  let span = [1];
  for(let i = 1; i < arr.length; i++){
    let index = i;
    span.push(1);
    while(arr[index - span[index]] < arr[i]){
      index -= span[index];
      span[i] += span[index];
    }
  }
  console.log(span);
  return span;
}

longestIncrease2([100,80,50,70,60,75,85]);
