
const state = {
  page: 1
};

$(document).ready(() => {
  $('#searchForm').on('submit', () => {

    $('#images').html('loading....')
    console.log('submitted');
    const query = $('#query').val();
    console.log(query);
    searchFlickr(query)

    return false;
  });
  $('#query').focus();


  // id does not work with arrow functions
  $(document).on('click', "img", function(){
    var id = $(this).data("id");
       // console.log(id);
       getDetails(id);

  });

});

$(window).on('scroll', () => {
  // console.log({
  //   scrollTop: $(window).scrollTop(),
  //   docHeight: $(document).height(),
  //   windowHeight: $(window).height()
  // });

  const scrollBottom = $(document).height() - ( $(window).scrollTop() + $(window).height() );
  // console.log(scrollBottom);

  if(scrollBottom > 5){
    return;
  }
  console.log('near bottom of page...');
  searchFlickr($('#query').val());
  _.throttle(searchFlickr, 30000);
});

const searchFlickr = searchQuery => {
  console.log({searchQuery});
  $('#imgDetails').empty();
  const URL ="https://api.flickr.com/services/rest/";

  // $('<hr>').appendTo('#images');

  $.getJSON(URL,{
    api_key: "2f5ac274ecfac5a455f38745704ad084",
    method: 'flickr.photos.search',
    text: searchQuery,
    format: 'json',
    nojsoncallback: 1,
    page: state.page++
  })
  .done(showImages)
  .fail(errorHandler);
};

const errorHandler = xhr => {
  console.warn('Error with search request: ', xhr.responseText, xhr);
};

const showImages = data => {
  console.log(data);
  _.each(data.photos.photo, photo => {
     // console.log(photo.id);
    const imageURL = generateImageURL( photo );

    var $img = $('<img />', {
      src: imageURL,
      style: "cursor: pointer",
    });
    $img.data('id', photo.id);

    $img.appendTo('#images');
    // $('<img>', {src: imageURL, id: photo.id}).appendTo('#images');
  });
};

const generateImageURL = p => {
  return `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`;
};

const generateLrgImageURL = p => {
  return `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}_z.jpg`;
};


const getDetails = id => {
  // console.log(id);
  const URL = "https://api.flickr.com/services/rest/";
  $.getJSON(URL,{
    api_key: "2f5ac274ecfac5a455f38745704ad084",
    method: 'flickr.photos.getInfo',
    photo_id: id,
    format: 'json',
    nojsoncallback: 1
  })
  .done(showDetails)
  .fail(errorHandler);
};


const showDetails = data => {
  // console.log(data);
  $('#images').empty();
  $('#imgDetails').empty();

  const imageURL = generateLrgImageURL( data.photo);
  $('<img>', {src: imageURL, click: false}).appendTo('#imgDetails');

  var detailsContent = `<strong>Posted By:</strong>${data.photo.owner.username}<br><strong>Description:</strong>${data.photo.desdescription}<br><strong>No.Of Views:</strong>${data.photo.views}`;

  $p = $('<p>').html(detailsContent);

  $p.appendTo('#imgDetails');

};


// Waits for 5 sec before loading next page of images
// var throttled = _.throttle(searchFlickr, 5000);
// $(window).scroll(throttled);


// flickr.photos.getInfo
