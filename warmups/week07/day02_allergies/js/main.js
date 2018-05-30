const allergens = {

  scorecard: {
    1: 'eggs',
    2: 'peanuts',
    4: 'shellfish',
    8: 'strawberries',
    16: 'tomatoes',
    32: 'chocolate',
    64: 'pollen',
    128: 'cats'
  },

  getKeys: function(){
    const allergyKeys = Object.keys(this.scorecard).map(Number).reverse();
    // console.log(Object.keys(this.scorecard).map(Number).reverse());

    return allergyKeys
  }, // getKeys

  getList: function(score){
    const keys = this.getKeys();
    // console.log(keys);
    let allergies = [];

    for( let i = 0; i < keys.length; i++ ){
      let key = keys[i]
      console.log(`key: ${key}, score: ${score}`);

      if( key <= score){

        allergies.push(this.scorecard[key])
        // console.log(this.scorecard[key]);

        score -= key
        console.log(score);

      };
    }; // for loop
    return allergies
  }, // getList

  diagnosis: function(score){

    let allergyList = this.getList(score);
    console.log(allergyList);

    if( allergyList.length > 0){
      console.log(`You are allergic to: ${allergyList.join(', ')}`);
    } else {
      console.log('You are impervious');
    }

  }
} // diagnosis

allergens.diagnosis(34)



// Nathan's solution
const allergies = function(num) {

  let types = ["Eggs", "Peanuts", "Shellfish", "Strawberries", "Tomatoes", "Chocolate", "Pollen", "Cats"]

  for (let i = 7; i >= 0; i--) {

    if (num >= 2**i || num === 1) {
      console.log(types[i])
      num -= 2**i
    }

  }
}
allergies(34)
