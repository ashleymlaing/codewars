// #Get the averages of these numbers
//
// Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.
//
// Example:
//
// Input:  [ 1, 3, 5, 1, -10]
// Output:  [ 2, 4, 3, -4.5]
// If the array has 0 or 1 values or is null or None, your method should return an empty array.

function averages(numbers) {
  let results = [];
  let emptyArray = [];
  let num = 0;
  if(numbers != null){
    for(let x = 0; x < numbers.length; x++){
      if(!(isNaN(numbers[x])) && !(isNaN(numbers[x +1]))) {
        num = (numbers[x] + numbers[x+1])/2;
        if(!(isNaN(num))) {
          results.push(num);
        }
      }
    }
  }
  if(results.length < 1){
    return emptyArray;
  } else {
    return results;
  }
}
