// HOMEWORK is to create a Single Page App frontend (HTML/CSS/JS only, no Rails server) for the API of your choice
// Please have your frontend access at least two separate API endpoints (URLs), i.e. search results, and details/show page
// Avoid APIs which require OAuth!  No auth or API key at worst is all you should consider
// Remeber to use the jQuery `$.ajax()` or `$.getJSON()` methods to make your AJAX requests :+1:
// Make your frontend more visually compelling by making use of images or other multimedia resources provided by the API




$(document).ready(function(){

  $(document).on('click', 'img.imgResult', function(){

    getGiphyDetail($(this).data('giphyID'));

  });

  $('#searchForm').on('submit', function(){
    console.log('Submitted!');

    const searchQuery = $('#query').val();
    giphySearch(searchQuery);

    return false;
  });
});

const getGiphyDetail = function(id){
  const URL = `https://api.giphy.com/v1/gifs/${id}`;

  $('#results').empty();

  // $.getJSON(URL)
  $.ajax({
    url: URL,
    data: {
      api_key: 'Hub5Po7sLk5sbgDK6StCxdc6cvp41GLu',
      gif_id: id,
    },
    dataType: 'json',
    method: 'get'
  })
  .done(function(result){
    console.log(result);

    let $details = $('<div class="details">');

    $('<h2>').html(result.data.title).appendTo($details);

    $('<h4>').html(result.data.trending_datetime).appendTo($details);

    if('url' in result.data.images.original){
      $('<img class="imgResult">')
      .attr('src', result.data.images.original.url)
      .appendTo($details);
    }

    $('#results').append($details);


  })
  .fail(function(xhr){
    console.warn(xhr.responseText, xhr);
  });

};


const giphySearch = function(query){
  const URL =
  'https://api.giphy.com/v1/gifs/search';

  $('#details').empty();
  $('#results').html('Loading results now...');

  $.ajax({
    url: URL,
    data: {
      api_key: 'Hub5Po7sLk5sbgDK6StCxdc6cvp41GLu',
      q: query,
    },
    dataType: 'json',
    method: 'get'
  })
  .done(function(results){
    console.log('results: ', results);
    $('#results').empty();

    results.data.forEach(function(data){
      $result = $('<div class="results">');

      $('<h3>').html(data.title).appendTo($result);

      if('url' in data.images.original){
        $('<img class="imgResult">')
        .attr('src', data.images.original.url)
        .data('giphyID', data.id)
        .appendTo($result);
      }
      $('<hr>').appendTo($result);
      $('#results').append($result);
    });

  })
  .fail(function(xhr, err){
    console.error(xhr.responseText, xhr.status, err);
  });

};
