// - Track how many times each student in the class has clapped this week (just make up the numbers);
// - Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);
// - Pick a random student to deliver the solution to Friday's warmup.
// - If no one has clapped enough that week, the program should indicate that Badger has to do his own damned warmup.


const revengeOfBadger = {

  studentList: {
    'Luke': 4,
    'Grant': 10,
    'Joel': 1,
    'Theo': 5,
    'John': 6
  },

  shortList: [],

  getStudentList: function(){
    this.shortList = []
    for(let key in this.studentList){
      console.log(this.studentList[key]) //=> 4, 10, 1, 5, 6
      if(this.studentList[key] > 2){
        this.shortList.push(key) // => Luke, grant etc
      }// if
    }// for in

    return this.shortList.length;
  },

  draw: function(){
    let winner = "Badger"
    let numberOfCandidates = this.getStudentList();

    if(numberOfCandidates > 0){
      let random = Math.floor(Math.random() * numberOfCandidates)
      winner = this.shortList[random]
      console.log(random)
    }
    console.log(`${winner}`)

  }

}

revengeOfBadger.draw()
revengeOfBadger.draw()
revengeOfBadger.draw()
revengeOfBadger.draw()
