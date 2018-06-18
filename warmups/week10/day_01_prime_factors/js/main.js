/*
Figure out what a prime number is
  - number divisible by 1 and itself

  - find all primeNumbers within a certain range (max will be the input number i.e. 60)

  (1) generate my range of numbers 1 - 60
  (2) test all numbers within th rnage (from (1)) to find the prime numbers

  - check input i.e. 60 % primeNumber === 0
  => prime factors
  */


  const prime = {

    // all the numbers within the range 1 - 60
    range: [],

    // all the prime numbers within range
    primeRange: [],

    // the prime numbers that are also factors of the input
    primeFactorRange: [],

    getRange: function(num){
      this.range = [];

      // start at 2, get all numbers between 2 and the given number
      for( let i = 2; i <= num; i++ ){
        this.range.push(i);
      };

      console.log('getRange(this.range): ', this.range);
      // [2..60]
      return this.range;
    },

    getPrimeRange: function(arr){
      this.primeRange = [];

      for( let i = 0; i < arr.length; i++ ){

        // flag to identify if num is a prime number
        let isPrime = true;

        // each number iterated over in the array
        let potentialPrime = arr[i];

        // test potentialPrime to see if it is divisble by any number other than 1 and itself
        for( let j = 2; j < potentialPrime; j++ ){

          if( potentialPrime % j === 0 ){
            isPrime = false
          }// if
        } // for

        if ( isPrime === true ){
          this.primeRange.push(potentialPrime);
        }// if
      }
      // console.log('primeRange: ', this.primeRange);
      // [2,3,5...]
      return this.primeRange;
    }, // getPrimeRange

    // we have the prime numbers, check if they're prime factors
    getPrimeFactors: function(num){

      this.primeFactorRange = [];

      let numPrimes = this.getPrimeRange(this.getRange(num));
      // console.log('numPrimes: ', numPrimes);

      for( let i = 0; i < numPrimes.length; i++ ){

        while( num % numPrimes[i] === 0 ){
          this.primeFactorRange.push(numPrimes[i]);
          num /= numPrimes[i];
        } // while
      }// for

      console.log('getPrimeFactors(this.primeFactorRange): ', this.primeFactorRange);
      return this.primeFactorRange;
    }

  }// prime obj

  console.log( prime.getPrimeFactors( 60 ));


  const primeNumbers = function(num){
    let primeFactors = [];

    for( let i = 2; i <= num; i++ ){
      while( num % i === 0 ){
        primeFactors.push(i);
        num /= i
      }
    }
    return primeFactors;
  }
  console.log( primeNumbers(9983475) );
