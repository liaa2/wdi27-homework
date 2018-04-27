const catWalk = function () {
  catImg.style.top = _top + 'px';
  catImg.style.left = _left + 'px';

  if( _topOperator === 'add' ) {
    _top += _topInc;
  } else if ( _topOperator === 'minus' ) {
    _top -= _topInc;
  }

  if( _leftOperator === 'add' ) {
    _left += _leftInc;
  } else if ( _leftOperator === 'minus' ) {
    _left -= _leftInc;
  }
  
  // Test if we're at the bottom edge
  if( _top >= _height ) {
    _topOperator = 'minus';
    _topInc = 5;
    _bounces ++;
  }

  // Test if we're at the right edge
  if ( _left >= _width ) {
    _leftOperator = 'minus';
    _leftInc = 10;
    _bounces ++;
  }

  // Test if we're at the top edge of screen
  if( _top <= -45 ) {
    _topOperator = 'add';
    _topInc = 10;
    _bounces ++;
  }

  // Test if we're at the left edge of screen
  if ( _left <= -45 ) {
    _leftOperator = 'add';
    _leftInc = 10;
    _bounces ++;
  }

  if ( _bounces >= _maxBounces ) {
    window.clearInterval(_timer);
  }
}

let catImg = document.getElementById('walkingCat'),
  _topOperator = 'add',
  _leftOperator = 'add',
  _topInc = 10,
  _leftInc = 10,
  _height,
  _width,
  _top = 0,
  _left = 0,
  _maxBounces = 20,
  _bounces = 0,
  _tmaxLmer;

catImg.style.top ='0px';
catImg.style.left = '0px'

_height = window.innerHeight - (catImg.height - 45);
_width = window.innerWidth - (catImg.width - 45);
_timer = window.setInterval(catWalk, 50);