const spaceAge = function( seconds, singlePlanet ){

  const earthAge = ( seconds / 31557600 );
  console.log( earthAge );

  const planetOrbits = {
    Earth: 1,
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Mars: 1.8808158,
    Jupiter: 11.862615,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Neptune: 164.79132
  };

  if( singlePlanet !== undefined ){
    console.log(`If you were on ${singlePlanet} you would be ${planetOrbits[singlePlanet] * earthAge} years old`);
  } else {
    for( planet in planetOrbits ){
      console.log(`On ${planet} you would be ${earthAge / planetOrbits[planet]} years old\n`);
    }
  }

}
spaceAge(1000000000, 'Earth',3, 4, 5)
spaceAge(1000000000)
