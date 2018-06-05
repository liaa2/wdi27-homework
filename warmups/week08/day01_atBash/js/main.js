const atbash = {

    alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

    encode: function( input ){

      let output = '';
      const str = input.toLowerCase().split('');
      // ['t', 'e', 's', 't']

      for( let i = 0; i < str.length; i++ ){
        const index = this.alphabet.indexOf( str[i] )
        // index of the current letter ('t' => 19)

        // console.log(this.alphabet.reverse()[index]);
        output += this.alphabet.reverse()[index];
      }
      return output;
    }
};
console.log(atbash.encode('TEST'));
console.log(atbash.encode('gvhg'));


// Brendan's version

const atBashBrendan = {
  alphabet: 'abcdefghijklmnopqrstuvwxyz',

  cipher: function ( argIn, direction ){
    const normal = this.alphabet.split('');
    const reverse = this.alphabet.split('').reverse();
    let fullList = [];

    switch ( direction ) {
      case 'code':
        fullList = normal.concat( reverse );
        break;
      case 'decode':
        fullList = reverse.concat( normal );
        break;
    };

    return argIn.split('').map(x => fullList[ fullList.indexOf( x ) + 26 ] ).join('');
  }
}

console.log('Loaded');
