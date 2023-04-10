function isPalindrome(word) {
   // Convert the word to lowercase
   const lowerCaseWord = word.toLowerCase();
   // Get the reverse of the word
   const reversedWord = lowerCaseWord.split("").reverse().join("");
   // Check if the reversed word is the same as the original word
   return lowerCaseWord === reversedWord;
}



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting:true");
  console.log("=>", isPalindrome("mom"));

  console.log("Expecting:true");
  console.log("=>", isPalindrome("wow"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

