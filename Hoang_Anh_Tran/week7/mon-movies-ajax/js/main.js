// HOMEWORK: Create a Single Page App (frontend only, just HTML/CSS/JS) for the Movie Search site we built in Sinatra/Rails/HTTParty
// Your page should use AJAX to make requests to the themoviedb.org API to search for films by title.

// It should then show a result "page" (actually just a DIV on the same page) of posters for the search results.

// Clicking on one of the result posters should go to a new details "page" (again, just another DIV: hide the search results div and show the details div using jQuery). This page should make another request to a different endpoint (URL) of the same API, to fetch the more specific details for a movie

$(document).ready(function(){
  $('#searchMovie').on('click', getMovie);
  $('body').on('click','img', getDetail);
});

const whichMovie = function() {
  return $("#moviename").val()
}

// get movie details
const getDetail = function(){
  const mymovieid = $(this).attr('movieid');
  // hide div
  $('#movies').hide()
  const xhr = new XMLHttpRequest();
  xhr.onload = function(){

    const movie = JSON.parse(xhr.response);
    console.log(movie);
    let myhtml = "<strong>Movie Title: </strong>" + movie.original_title + ".";
    myhtml += "<br><strong>Description: </strong>" + movie.overview + ".";
    myhtml += "<br><strong>Release date: </strong>" + movie.release_date + ".";
    myhtml += "<br><strong>Popularity: </strong>" + movie.popularity + ".";
    myhtml += "<br><strong>Revennue: </strong>" + movie.revenue + ".";
    myhtml += "<br><strong>Run Time: </strong>" + movie.runtime + " minutes.";
    myhtml += "<br><strong>Tag Line: </strong>" + movie.tagline + ".";

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

    $('#movies').empty();
    //backticks
    for (let i = 0; i < movie.results.length; i++) {
      let myhtml = '<img movieid=' + movie.results[i].id + ' src="https://image.tmdb.org/t/p/w200' + movie.results[i].poster_path + '" alt="Oopz, something went wrong.">';
      $p = $('<p>').html(myhtml)
      $('#movies').append($p);
    }
  };


  xhr.open('GET', 'https://api.themoviedb.org/3/search/movie?api_key=APIkey&query=' + whichMovie());
  xhr.send();

};
