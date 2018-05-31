console.log('EGGS');

const state = {
  page: 1

};

$(document).ready(() => {
  $(document).on('click', 'img.imgResult', function(){
    getFlickrDetail($(this).attr('photoid'));
  });

  $('#searchForm').on('submit', () => {

    $('#images').empty();
    $('#images').html('Loading results...');
    const query = $('#query').val();
    searchFlickr(query);

    return false;

  });

  $('#query').focus();
});

$(window).on('scroll', _.throttle(function(){
  // console.log({
  //  scrollTop: $(window).scrollTop(),
  //  docHeight: $(document).height(),
  //  windowHeight: $(window).height()
  // });

  const scrollBottom = $(document).height() - ($(window).scrollTop() + $(window).height());
  console.log({scrollBottom});

  if(scrollBottom > 5){
    return;
  }
  console.log('Near bottom of the page...');
  searchFlickr($('#query').val());
},5000));  // 5000ms = 5 seconds!


const searchFlickr = searchQuery => {

  $('#images').empty();
  $('#details').empty();

  console.log({searchQuery});
  const URL = 'https://api.flickr.com/services/rest';


  $.getJSON(URL, {
    api_key: 'API key',
    method: 'flickr.photos.search',
    text: searchQuery,
    format: 'json',
    nojsoncallback: 1,
    page: state.page++

  })
  .done(showImages)
  .fail(errorHandler);
};

const getFlickrDetail = function(photoid){
  $('#images').empty();
  $('#details').empty();

  console.log("BEARHOUSE :" + photoid);
  const URL = 'https://api.flickr.com/services/rest';

  $.getJSON(URL, {
    api_key: 'API key',
    method: 'flickr.photos.getInfo',
    photo_id: photoid,
    format: 'json',
    nojsoncallback: 1,
    page: state.page++
  })

  .done(getImage)
  .fail(errorHandler);
};


const errorHandler = xhr => {
  console.warn('ERROR with search request: ', xhr.responseText, xhr);
};

const getImage = data => {
  console.log(data);
  // let myhtml = "Greatstuff image id : " + JSON.stringify(data, undefined, '<br>');
  let imageURL = generateImageURL(data.photo, 'b');

  let myhtml = `Title: ${data.photo.title._content} <br>`;
  myhtml += `Username is: ${data.photo.owner.username} <br>`;
  myhtml += `Photo was taken: ${data.photo.dates.taken} <br>`;
  $p = $('<p>').html(myhtml);
  $('#details').append($p);
  $('<img>', {src: imageURL}).attr('photoid', data.photo.id).addClass("imgResult").appendTo('#details');
}

const showImages = data => {
  console.log(data);

  // $('#images').empty();

  _.each(data.photos.photo, photo => {
    // console.log(photo.id)
    const imageURL = generateImageURL(photo, 'q');

    $('<img>', {src: imageURL}).attr('photoid', photo.id).addClass("imgResult").appendTo('#images');

  });
};

const generateImageURL = (p, size) => {
  return `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}_${size}.jpg`;
};
