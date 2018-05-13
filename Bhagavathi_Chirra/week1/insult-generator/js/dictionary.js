const dict ={
  definitions: {
    method: 'fun',
    variadic:'variadic',
    scope:'scope',
  },

  lookupWord: function(word){
    if(word in this.definitions){

      //return `${word}: ${this.definitions[word]}`;
      return {word:word, definition: this.definitions[word]};
    }else {
      return `doesn't exists`;
    }
  },
  getTerms: function(){
    return Object.keys(this.definitions);
  },
  addDefinition: function(word, definition){
    if(word in this.definitions){

      return `${word} is already defines as: ${this.definitions[word]}`;
    }else {
      this.definitions[word] = definition;
      return `Added ${word}:${definition}.`;
    }
  },
  printAllDefinitions: function(){
    let totalDef = 0;
    for(let key in this.definitions){
      console.log(`${key}: ${this.definitions[key]}`);
      totalDef ++;
    }
    console.log(`Total entries: ${totalDef}`);
  }
};
