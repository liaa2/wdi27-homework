
$(document).ready( () => {
    const api_key = "dd7b8a10120a376e04e7430d2fa912d8";
    const $queryField = $('#queryField');
    const searchMovie = () => {
        // pocket variable
        let lengthTracker = 0;
        return () => {
            let query = $queryField.val();
            let queryLength = query.length;
            if (queryLength >= lengthTracker){

                lengthTracker = queryLength;

                // remove all to reset page
                $('.link').remove();
                const xhr = new XMLHttpRequest();
                let searchResult;

                xhr.onload = () => {
                  
                    const searchResult = JSON.parse(xhr.response).results;
                    console.log(searchResult);
                    for (var i = 0; i < searchResult.length; i++) {

                        var setDisplay;
                        if (typeof searchResult[i]["poster_path"] === "string"){
                            setDisplay = `https://image.tmdb.org/t/p/w185${searchResult[i]["poster_path"]}`;
                        }
                        else {
                            setDisplay = "http://www.placecage.com/c/185/278"
                        }
                        var movieId = searchResult[i]["id"];
                        
                        var $movieResult = $("<img>", {
                            src: setDisplay,
                            id: movieId
                        }).addClass("link");


                        // click handler for fading non hovered movie
                        const displayDeets = function() {
                            $('.link').not(this).addClass('fade');

                            const getInfo = () => {
                                // xhr for tooltip information
                                const detailXhr = new XMLHttpRequest();
                                let deets;

                                detailXhr.onload = () => {

                                    deets = JSON.parse(detailXhr.response);

                                    var $movieDetail1 = $("<p>").text(`Movie title: ${deets["original_title"]}`).addClass("details");
                                    var $movieDetail2 = $("<p>").text(`Average rating: ${deets["vote_average"]}`).addClass("details");
                                    var $movieDetail3 = $("<p>").text(`Overview: ${deets["overview"]}`).addClass("details");
                                    var $movieDetail4 = $("<p>").text(`Release date: ${deets["release_date"]}`).addClass("details");

                                    $('#infobox').append($movieDetail1);
                                    $('#infobox').append($movieDetail2);
                                    $('#infobox').append($movieDetail3);
                                    $('#infobox').append($movieDetail4);
                                }
                                let currentMovieId = this.id
                                detailXhr.open("GET", `https://api.themoviedb.org/3/movie/${currentMovieId}?api_key=${api_key}`);
                                detailXhr.send();
                            }
                            getInfo();


                        }

                        const hideDeets = () => {

                            $('.link').removeClass('fade');

                            // destroy tooltip
                            $('.details').remove();
                        }

                        $movieResult.hover( displayDeets, hideDeets );

                        $('#resultContainer').append($movieResult);
                    }
                }
                xhr.open("GET", `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`);
                xhr.send();
            }
            else {
                lengthTracker = queryLength;                
                $('.link').remove();                
            }
        }
    }


    const closedSearchMovie = searchMovie();

    $queryField.on('keyup', closedSearchMovie);

});

