/*
Approach

Create an object that will hold the logic

Within the object, create a method that will convert the word into a list of alphabeticised letters

Create another method which calls the first method and compares the input word against the array of potential matches

*/
const anagramChecker = {

  // empty array that will store the results
  anagrams: [],

  // method that takes the word as an argument and converts the word into a list of alphabeticised letters
  customSort: function(word){
    /*
    split('') - will convert the string into an array ['l', 'i', 's', 't', 'e', 'n']
    sort() - will sort the array alphabetically
    join('') - convert the array back to a string
    */
    return word.split('').sort().join('');
    // console.log(word.split('').sort().join(''));
  },

  // second method that will call customSort() and compare the input word against the array of potential matches
  checkForAnagram: function(word, candidateWords){
    // store into a variable the word that was returned by the customSort() method
    const inputWord = this.customSort(word);

    for( let i = 0; i < candidateWords.length; i++ ){
      let candidate = this.customSort(candidateWords[i]);
      // compare the candidate word and the input word
      if( inputWord === candidate ){
        this.anagrams.push(candidateWords[i])
      }; // if
    }// for loop

    return `The anagrams of ${word} are: ${this.anagrams}`

  }// checkForAnagram

}// anagramChecker

console.log('Expecting anagrams: ["inlets", "netsil"]');
console.log(anagramChecker.checkForAnagram('listen', ["enlists", "google", "inlets", "banana", 'netsil']));
