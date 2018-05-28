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
  console.log('Base URL = ' + baseUrl);
  
}

const getImageURLs = function() {
  const configQuery = 'https://api.themoviedb.org/3/configuration?api_key=373ba99aa87c1ac696ca9fc120752b25';
  const xhr = new XMLHttpRequest();
  xhr.open( 'GET', configQuery );
  xhr.send();

  xhr.onreadystatechange = function() {
    if ( xhr.readyState !== 4 ){
      return;
    }
    const queryResponse = JSON.parse( xhr.response );
    console.log(queryResponse);
    baseURL = queryResponse.images.base_url;
  };
}

const getMovies = function( searchString ) {
  // Get first page
  const searchPrefix = 'https://api.themoviedb.org/3/search/movie?api_key=373ba99aa87c1ac696ca9fc120752b25';
  // const searchToRun = searchPrefix + '&query=' + searchString + '&page=' + pageNumber;

  let i = 0;
  let totalPages = 3;

  while ( i < totalPages ){
    i++;
    const searchToRun = searchPrefix + '&query=' + searchString + '&page=' + i;

    const xhr = new XMLHttpRequest();
    xhr.open( 'GET', searchToRun );
    xhr.send();

    xhr.onreadystatechange = function() {
      if ( xhr.readyState !== 4 ){
        return;
      }
      const queryResponse = JSON.parse( xhr.response );
      const totalResults = queryResponse.total_results;
      const moviesReturned = queryResponse.results;
      const totalPages = queryResponse.total_pages;
      $("#search-message").append("<h5>" + totalResults + " movies returned by your search </h5>");

      moviesReturned.forEach(movie => {
        let poster = movie.poster_path;
        let img;

        if( poster ){
          img = $("<div class='poster-image'><img src='" + baseUrl + "/w342" + movie.poster_path + "'></img><div class='centered-title'>" + movie.title + "</div></div>");
        } else {
          img = $("<div class='poster-image'><img src='https://www.fillmurray.com/342/513'></img><div class='centered-title'>" + movie.title + "</div>");
        }        
        $(".row").append( img );
      });
    } // end while
  }
}

$(function(){
  let urlPrefix = 'https://api.themoviedb.org/3/';
  let apiKey = '?api_key=373ba99aa87c1ac696ca9fc120752b25';

  // Get image Url
  let urlRequest = urlPrefix + 'configuration' + apiKey;
  console.log('>>>' + urlRequest + '<<<');
  
  makeAjaxCall( urlRequest, 'GET', getImgBaseUrl );

  // getImageURLs();

  $('#search-form').on('submit', function(){
    $("#search-message").empty();
    $(".row").empty();

    getMovies($('#search-field').val());
    return false;
  })
});