
console.log("****** Rectangle Output ******");
const rectangle = {
  length: 6,
  width: 4
};

const rectangleEg = function(rectangle){
  if(rectangle.length === rectangle.width)
  {
    console.log('Square');
  }
  else {
    console.log('Rectangle');
    console.log(`area : ${rectangle.length*rectangle.width}`);
    console.log(`Perimeter : ${2*(rectangle.length*rectangle.width)}`);
  }
}

rectangleEg(rectangle);

console.log("******* Triangle ********");
const triangle = {
  sideA: 3,
  sideB: 5,
  sideC: 4
};

const triangleEg = function(triangle){
  let strPrint = "";
  const side1 = triangle.sideA;
  const side2 = triangle.sideB;
  const side3 = triangle.sideC;
  if(side1 == side2 && side2 == side3 && side1 == side3){
    strPrint = `isEquilateral ${side1*side2}`;
  }
  if(side1 == side2 || side2 == side3 || side1 == side3){
    strPrint = `isIsosceles ${side1*side2}`;
  }
  if(side1 != side2 && side2 != side3 && side2 != side3){
    strPrint = `isNotEqual ${side1*side2}`;
  }
  console.log(strPrint);
}

triangleEg(triangle);


console.log("******* Cash Register ********");

// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
// const
// cashRegister(cartForParty));

console.log("******* JavaScript Bank ********");

//It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts

const bank ={
  accounts : [
    {accName:'bagi', balance:600},
    {accName:'hong', balance:500},
    {accName:'brenden', balance:200}
  ],
  totalAccounts : function(){
    let totalBalance = 0;
    for(i=0; i< this.accounts.length; i++){
      totalBalance = totalBalance + this.accounts[i].balance;
    }
    console.log(`${totalBalance}`);
  },
  addAccount : function(accNameAdd,balanceAdd){
    this.accounts.push({accName:accNameAdd, balance:balanceAdd});
  },
  deposits : function(name, balance){
    for(j=0; j< this.accounts.length; j++){
      if(name==this.accounts[j].accName){
        this.accounts[j].balance = this.accounts[j].balance + balance;
        console.log(`${this.accounts[j].balance}`);
      }
    }
  },
  withdraw : function(name, amout){
    for(j=0; j< this.accounts.length; j++){
      if(name==this.accounts[j].accName){
        this.accounts[j].balance = this.accounts[j].balance - amout;
        console.log(`${this.accounts[j].balance}`);
      }
    }
  }
};

bank.totalAccounts();
bank.addAccount('nina',97897);
bank.deposits('hong',300);
bank.withdraw('hong',100);


console.log('********** Leap Year *********');

//year=2004
const leapYear = function (year){
  if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    return `${year} is a leap year`;
  }
  else return `${year} is not a leap year` ;
};
console.log(leapYear(1997));
console.log(leapYear(1996));
console.log(leapYear(1900));
console.log(leapYear(2000));
