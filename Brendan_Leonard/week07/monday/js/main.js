let baseUrl;

const makeAjaxCall = function( url, methodType, callbackFunc ){
  const xhr = new XMLHttpRequest();
  xhr.open( methodType, url, true );
  xhr.send();

  xhr.onreadystatechange = function() {
    if ( xhr.readyState === 4 ){
      if ( xhr.status === 200 ) {
        let resp = xhr.responseText;
        let respJson = JSON.parse( resp );
        callbackFunc( respJson );
      } else {
        console.log("XHR for [" + url + "] failed");
      }
    } else {
      console.log("XHR request still running for [" + url + "]");
    }
  }
  console.log("XHR request sent successfully");
}

const getImgBaseUrl = function( apiRespJson ) {
  baseUrl = apiRespJson.images.base_url;
}

const showMovies = function ( apiRespJson ) {
  const totalResults = apiRespJson.total_results;
  const moviesReturned = apiRespJson.results;
  const totalPages = apiRespJson.total_pages;

  // Display number returned field
  $("#search-message").append("<h5>" + totalResults + " movies returned by your search </h5>");

  // Display individual image posters
  moviesReturned.forEach(movie => {
    let poster = movie.poster_path;
    let img = '';

    if( poster ){
      img = $("<div class='poster-image'><img src='" + baseUrl + "/w342" + movie.poster_path + "'></img><div class='centered-title'>" + movie.title + "</div></div>");
    } else {
      img = $("<div class='poster-image'><img src='https://www.fillmurray.com/342/513'></img><div class='centered-title'>" + movie.title + "</div>");
    }        
    $(".row").append( img );
  }) // end forEach
}

$(function(){
  let urlPrefix = 'https://api.themoviedb.org/3/';
  let apiKey = '?api_key=373ba99aa87c1ac696ca9fc120752b25';

  // Get image Url
  let urlRequest = urlPrefix + 'configuration' + apiKey;  
  makeAjaxCall( urlRequest, 'GET', getImgBaseUrl );

  $('#search-form').on('submit', function(){
    $("#search-message").empty();
    $(".row").empty();

    // Get movies
    let searchString = $('#search-field').val().trim();
    if( searchString.length > 0 ){
      let urlRequest = urlPrefix + 'search/movie' + apiKey + '&query=' + searchString;
      makeAjaxCall( urlRequest, 'GET', showMovies );
    }
    // getMovies($('#search-field').val());
    return false;
  })
});