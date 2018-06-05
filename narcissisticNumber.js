// A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits.
//
// For example, take 153 (3 digits):
//
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1634 (4 digits):
//
//     1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
// The Challenge:
//
// Your code must return true or false depending upon whether the given number is a Narcissistic number.
//
// Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.

function narcissistic( value ) {
 	// Code me
	value = value.toString();
	let valueArray = Array.from(value);
	let power = valueArray.length;
	let newValues = [];
	for(let number of valueArray){
		number = Number(number);
        number = Math.pow(number, power)
		newValues.push(number)
	}
	console.log(newValues);
	let total = 0;
	newValues.forEach(value => {
		total += value;
	});
	console.log(total)

  value = Number(value)
  if(total == value){
    return true
  } else {

  }

}
