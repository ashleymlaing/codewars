// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
//
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (bandB)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
  //...
  let repeats = 0;
  let stringReturn = "";
  let alreadyDone = [];
  for( let i = 0; i < text.length; i ++){
    for( let x = i+1; x < text.length; x++){
      let letter1 = text[i].toLowerCase();
      let letter2 = text[x].toLowerCase();
      if(letter1 == letter2 && !(alreadyDone.includes(letter1))){
        repeats++;
        alreadyDone.push(letter1);
      }
    }
  }
  console.log(text, repeats, alreadyDone);
  return repeats;
  //if(stringReturn != ""){
    //return stringReturn;
  //}
}


// Test.assertEquals(duplicateCount(""), 0);
// Test.assertEquals(duplicateCount("abcde"), 0);
// Test.assertEquals(duplicateCount("aabbcde"), 2);
// Test.assertEquals(duplicateCount("aabBcde"), 2,"should ignore case");
// Test.assertEquals(duplicateCount("Indivisibility"), 1)
// Test.assertEquals(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
