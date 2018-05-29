// Generic function to make an Ajax call to the Zomato API
const makeAjaxCall = function( urlQuery, methodType, callbackFunc ){
  const urlPrefix = 'https://developers.zomato.com/api/v2.1/';
  const userKey = '7e48c5f3d6a00d8b23bf53f1cfdbbdff';
  let url = urlPrefix + urlQuery;

  $.ajax({
    url: url,
    method: methodType,
    dataType: 'json',
    beforeSend: function( xhr ){ xhr.setRequestHeader( 'user-key', userKey ) }
  })
  .done( callbackFunc )
  .fail(function( xhr ){
    console.warn( xhr.responseText, xhr );
  })
}

const setSearchMessage = function ( searchMessage ) {
  if ( searchMessage === undefined ){
    $('#search-message').empty();
  } else {
    $('#search-message').html(`<h6>${ searchMessage }</h6>`);
  }
}

const buildCuisineSelect = function ( cuisineListJson ) {
  // Remove 'Loading ...' search message
  setSearchMessage();

  for (let i = 0; i < cuisineListJson.cuisines.length; i++) {
    let cuisine_id = cuisineListJson.cuisines[i].cuisine.cuisine_id;
    let cuisine_name = cuisineListJson.cuisines[i].cuisine.cuisine_name;
    $(`<option value=${ cuisine_id }>${ cuisine_name }</option>`).appendTo( '#search-select' );
  }
}

const displayRestaurants = function ( restaurantListJson ){
  // Clear the message area
  setSearchMessage();

  // Remove any existing restaurant listings
  $('.row').empty();

  const totalFound = restaurantListJson.results_found;
  const numberShown = restaurantListJson.results_shown;
  const startingAt = restaurantListJson.results_start;
  const endingAt = ( startingAt - 1) + numberShown;

  // Display numbers displayed message
  setSearchMessage(`Displaying ${ startingAt } to ${ endingAt } of ${ totalFound } matching restaurants`)

  for (let i = 0; i < restaurantListJson.restaurants.length; i++) {
    currentRestaurant = restaurantListJson.restaurants[i].restaurant;
    restaurantId = currentRestaurant.R.res_id;
    restaurantName = currentRestaurant.name;
    restaurantAddress = currentRestaurant.location.address;
    restaurantRating = currentRestaurant.user_rating.aggregate_rating;
    restaurantVotes = currentRestaurant.user_rating.votes;
    restaurantCostFor2 = currentRestaurant.average_cost_for_two;

    $result = '<div class="col-md-3">';
    $result += '<div class="box box-warning box-solid">';
    $result += '<div class="box-header with-border">';
    $result += `<h3 class="box-title">${ restaurantName }</h3>`;
    $result += '</div>';
    $result += '<div class="box-body">';
    $result += restaurantAddress;
    if ( restaurantVotes === "0" ) {
      $result += `<div class="info first"><span class="info info-label">Rating: </span>No Votes</div>`;
    } else {
      $result += `<div class="info first"><span class="info info-label">Rating: </span>${ restaurantRating } / 5 (${ restaurantVotes } votes)</div>`;
    }
    $result += `<div class="info"><span class="info info-label">Avg cost for 2: </span>$${ restaurantCostFor2 }</div>`;

    // Add more info link with data tag
    $result += `<div class="info info-link"><a href="#" id="${ restaurantId }" >More Info</a></div>`;
  
    $result += '</div>';
    $result += '</div>';
    $result += '</div>';

    $('.row').append( $result );
  }
}

const displayRestaurantDetail = function ( restaurantDetailJson ) {
  // Set search message to blank
  setSearchMessage();

  // Remove search results
  $('.row').empty();
  
  // Now add the detail in
  $result = '<div class="col-md-12">';
  $result += '<div class="box box-warning box-solid">';
  $result += '<div class="box-header with-border">';
  $result += `<h3 class="box-title">${ restaurantDetailJson.name }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${ restaurantDetailJson.user_rating.aggregate_rating } / 5 (from ${ restaurantDetailJson.user_rating.votes } votes)</h3>`;
  $result += '</div>';
  $result += '<div class="box-body">';
  // $result += `<img src="${ restaurantDetailJson.thumb }" class="thumbnail">`;
  $result += `<div class="detail-info"><img src="${ restaurantDetailJson.thumb }" class="thumbnail"><div class="review-address">${ restaurantDetailJson.location.address }</div>`;
  $result += '</div>';
  $result += '</div>';
  $result += '</div>';

  // Add detail to the DOM
  $('.row').append( $result );

  // Get latest 5 reviews
  let urlRequest = `reviews?res_id=${ restaurantDetailJson.R.res_id }`
  makeAjaxCall( urlRequest, 'GET', function( result ){
    $('.detail-info')
    .append('<div class="review-heading"><h4 class="box-title">Latest Reviews</h4></div>');

    let reviewArray = result.user_reviews
    for (let i = 0; i < reviewArray.length; i++) {
      const review = reviewArray[i].review;
      // $('.detail-info')
      // .append(`<li class="review"><b>RATED</b> <span class="rating">${ review.rating }</span> by <span class="username">${ review.user.name }</span> <span class="text-muted pull-right">${ review.review_time_friendly }</span> : ${ review.rating_text }<br>${ review.review_text }</li>`);

      $('.detail-info')
      .append(`<div class="review-block review clearfix"><b>RATED</b> <span class="rating">${ review.rating }</span> by <span class="username">${ review.user.name }</span> <span class="text-muted pull-right">${ review.review_time_friendly }</span> : ${ review.rating_text }<br>${ review.review_text }</div>`);
    }
  })
}

// Document and JQuery On Ready handler below
$(function(){
  // Establish click handler for form
  $('#search-form').on('click', function() {
    setSearchMessage('Finding matching restaurants ...');

    let selectedCuisine = $( '#search-select' ).val();
    let urlRequest = `search?entity_id=260&entity_type=city&start=1&count=20&cuisines=${ selectedCuisine }&sort=rating`
    makeAjaxCall( urlRequest, 'GET', displayRestaurants )

    return false;
  });

  // Establish click handler for individual restaurant detail
  $(document).on('click', '.info-link', function(){
    setSearchMessage();
    setSearchMessage('Getting restaurant details ...');

    // Get restaurant details
    let restaurantId = event.target.id;
    let urlRequest = `restaurant?res_id=${ restaurantId }`
    makeAjaxCall( urlRequest, 'GET', displayRestaurantDetail );
  });

  // Set search message on the form
  setSearchMessage('Loading list of cuisines ...');

  // Get list of cuisines via an Zomato API call
  let urlRequest = 'cuisines?city_id=260';  
  makeAjaxCall( urlRequest, 'GET', buildCuisineSelect );
});