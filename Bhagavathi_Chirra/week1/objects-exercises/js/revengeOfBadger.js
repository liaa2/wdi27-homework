const revengeOfBadger ={
  students: {
    Anastasia : 4,
    Nathan : 1,
    Brenden : 3,
    Bagi : 0,
    Scott : 6,
    Nina : 7,
    Hong : 2
  },
  shortList : [],
  getCandidates: function () {
    this.shortList = [];
    for(let key in this.students){
      console.log(this.students[key]);
      if(this.students[key]>2){
        this.shortList.push(key)
      }
    }
    return this.shortList.length;
  },

  draw : function(){
    let winner = "Badger";
    let numOfCandidates = this.getCandidates();
    if(numOfCandidates>0){
      let random = Math.floor(Math.random() * numOfCandidates);
      winner = this.shortList[random]
      console.log(random);
    }
    console.log(`${winner}`);
  }

};

revengeOfBadger.draw();
