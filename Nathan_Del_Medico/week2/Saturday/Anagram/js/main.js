const anagram = {
  test: function (word, list) {
    for (let i = 0; i < list.length; i++) {
      this.tempList = list[i].split("");
      for (let j = 0; j < word.length; j++) {
        if (this.tempList.includes(word[j])) {
          this.index = this.tempList.indexOf(word[j]);
          this.tempList.splice(this.index,1);
          this.counter += 1;
          if (this.counter === word.length && this.tempList.length === 0) {
            this.anagramWords.push(list[i]);
          }
        }
      }
      this.counter = 0;
    }
    return this.anagramWords;
  },
  anagramWords: [],
  tempList: [],
  index: 0,
  counter: 0
}
// const anagram1 = function (word, list) {
//   let counter = 0;
//   anagramWords = [];
//   for (let i = 0; i < list.length; i++) {
//     tempList = list[i].split("");
//     for (let j = 0; j < word.length; j++) {
//       if (tempList.includes(word[j])) {
//         let index = tempList.indexOf(word[j]);
//         tempList.splice(index, 1);
//         counter += 1;
//         if (counter === word.length && tempList.length === 0) {
//           anagramWords.push(list[i]);
//         }
//       }
//     }
//     counter = 0;
//   }
//   return anagramWords;
// }
