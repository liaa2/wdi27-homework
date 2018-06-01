console.log("loaded!");

$(document).ready(function(){

  $(document).on("click", "img.imgResult", function(){
    console.log($(this).data("gifID"));
    getGifDetail($(this).data("gifID"));
  })

  $("#searchForm").on("submit", function(){
    console.log("submitted!");

    const searchQuery = $('#query').val();
    gifSearch(searchQuery);
    return false;
  })
})

// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });

const getGifDetail = function(id){
  const URL = `http://api.giphy.com/v1/gifs/${id}?api_key=mGVdrmycKkSjc1Mglppb5cWULxne4p1w`
  $("#results").empty();
  $.getJSON(URL)
  .done(function(result){
    console.log(result);
    $details = $('<div class="details">');
    $("<h2>").html(result.data.title).appendTo($details);
    $("<img class='imgResult'>")
    .attr("src", result.data.images.downsized.url)
    .appendTo($details);
    $("#details").append($details)
  })
  .fail(function(xhr){
    console.log(xhr.responseText, xhr);
  })
}



const gifSearch = function(query){
  const URL = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=mGVdrmycKkSjc1Mglppb5cWULxne4p1w`
  $("#details").empty();
  // $("#results").html("Loading results...")

  $.getJSON(URL)
  .done(function(results){
    console.log("results: ", results);
    $("#results").empty();
    results.data.forEach(function(data){
      $result = $('<div class="results">');
      // console.log(data.title);
      $("<h3>").html(data.title).appendTo($result);

      console.log(data.id);
      $('<img class="imgResult">')
      .attr("src",data.images.fixed_width_small_still.url)
      .data("gifID", data.id)
      .appendTo($result)
      $("<hr>").appendTo($result);
      $("#results").append($result)
    })
  })
  .fail(function(xhr, err){
    console.error(xhr.responseText, xhr.status.err);
  })
  .always(function(xhr){
    console.log(xhr);
  })
}
