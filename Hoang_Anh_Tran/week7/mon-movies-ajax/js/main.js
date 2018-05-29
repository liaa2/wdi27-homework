// HOMEWORK: Create a Single Page App (frontend only, just HTML/CSS/JS) for the Movie Search site we built in Sinatra/Rails/HTTParty
// Your page should use AJAX to make requests to the themoviedb.org API to search for films by title.

// It should then show a result "page" (actually just a DIV on the same page) of posters for the search results.

// Clicking on one of the result posters should go to a new details "page" (again, just another DIV: hide the search results div and show the details div using jQuery). This page should make another request to a different endpoint (URL) of the same API, to fetch the more specific details for a movie

$(document).ready(function(){
  $('#searchMovie').on('click', getMovie);
  $('body').on('click','img',getDetail);
});

const whichMovie = function() {
  return $("#moviename").val()
}

const getDetail = function(){
  const mymovieid = $(this).attr('movieid');
  // hide div
  $('#movies').hide()
  const xhr = new XMLHttpRequest();
  xhr.onload = function(){

    const movie = JSON.parse(xhr.response);
    console.log(movie);
    myhtml = "Movie title " + movie.original_title;
    myhtml += "<br>Description: " + movie.overview;
    $p = $('<p>').html(myhtml)
    $('#moviedetails').append($p);
  };

  xhr.open('GET', 'https://api.themoviedb.org/3/movie/' + mymovieid + '?api_key=51cff66a16924159a839ae909faba532');
  xhr.send();

};

const getMovie = function(){

  const xhr = new XMLHttpRequest();

  xhr.onload = function(){

    const movie = JSON.parse(xhr.response);

    for (let i = 0; i < movie.results.length; i++) {
      // result = this.results[i];

      console.log(movie.results[i].title);
      // endpoint for details
      myhtml = '<img movieid=' + movie.results[i].id + ' src=https://image.tmdb.org/t/p/w200' + movie.results[i].poster_path + ' alt="Oopz, something went wrong.">';
      $p = $('<p>').html(myhtml)
      $('#movies').append($p);
    }
    // console.log(movie.results.length);
  };


  xhr.open('GET', 'https://api.themoviedb.org/3/search/movie?api_key=APIhere&query=' + whichMovie());
  xhr.send();

};
