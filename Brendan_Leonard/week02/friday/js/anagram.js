const anagramDetector = {
  detect: function ( word, listOfPossibles ) {
    let possibleAnagram = '';
    let wordSorted = word.toLowerCase().split('').sort().join('');
    let anagramList = [];

    for ( let i = 0; i < listOfPossibles.length; i++ ){
      possibleAnagram = listOfPossibles[i].toLowerCase().split('').sort().join('');
      
      if ( possibleAnagram === wordSorted ) {
        anagramList.push( listOfPossibles[i] ); 
      }
    }
  
    if( anagramList.length === 0 ) { 
      console.log(`No anagrams of [${word}] were found in [${listOfPossibles}]`);
      return anagramList;
    }

    return anagramList;
  }
}