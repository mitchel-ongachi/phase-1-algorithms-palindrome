function isPalindrome(word) {
  let lowerCaseWord = word.toLowerCase();
  let left = 0;
  let right = lowerCaseWord.length - 1;
  
  while (left < right) {
    if (lowerCaseWord[left] !== lowerCaseWord[right]) { 
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}


/* 
  Add your pseudocode here
  Function isPalindrome(word):
    Convert word to lowercase
    
    Set left to 0
    Set right to length of lowerCaseWord - 1
    
    While left < right:
        If character at position left is not equal to character at position right:
            Return false
        
        Increment left by 1
        Decrement right by 1
    
    Return true

*/

/*
  Add written explanation of your solution here
  the function takes in a string and converts it to lowercase 
  the initialised pointers;the left  starts from the 0 index of the string while the right starts from the end 
  the left<right condition ensures the loop runs as long as the left pointer is to the left of the right one
  if the character to the left isnt equal to the one on the right then it returns a false value
  the left++ moves the ointer to the right while the right-- does the opposite 
  once the loop finishes and doesnt find  characters that dont match it  returns a true value
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
