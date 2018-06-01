console.log("loaded");

const state = {
  page: 1
}

$(document).ready(()=>{

  $("#searchForm").on("submit", () => {
    // console.log("form submitted");
    // $("#images").html("Loading results....")
    $("#images").empty();

    const query = $('#query').val()
    searchFlickr(query)
    return false;
  })

  $("#query").focus();
  // const throttled = _.throttle(searchFlickr, 5000);
})


$(window).on('scroll', () => {
  // console.log({
  //   scrollTop: $(window).scrollTop(),
  //   docHeight: $(document).height(),
  //   windowHeight: $(window).height()
  // });

  const scrollBottom = $(document).height() - ($(window).scrollTop() + $(window).height());
  // console.log({scrollBottom});

  if (scrollBottom > 5) {
    return;
  }

  console.log("Near buttom of page...");
  // throttled();
  searchFlickr($('#query').val());
});




const searchFlickr = searchQuery => {
  console.log({searchQuery});
  // https://api.flickr.com/services/rest/?method=flickr.test.echo&name=value
  const URL = "https://api.flickr.com/services/rest/"

  // $("<hr>").appendTo("#images");

  $.getJSON(URL, {
    api_key: "2f5ac274ecfac5a455f38745704ad084",
    method: 'flickr.photos.search',
    text: searchQuery,
    format: 'json',
    nojsoncallback: 1,
    // page: 2
    page: state.page++
  })
  .done(showImages)
  .fail(errorHandler);

};

let throttled = _.throttle(searchFlickr, 5000);
$(window).scroll(throttled);



$(document).on('click', "#images,img", function(){
  console.log($(this).data("imageID"));
  let id = $(this).data("imageID")
  $("#images").empty();
  getImageDetails(id);
})



const errorHandler = xhr => {
  console.warn("Error with search request: ", xhr.responseText, xhr);
}

const showImages = data => {
  console.log(data);

  // $("#images").empty();
  _.each(data.photos.photo, photo => {
    // console.log(photo.id);
    const imageURL = generateImageURL(photo);
    // console.log(imageURL);
    const imageID = photo.id
    // console.log({imageID});
    $('<img>', {src: imageURL})
    .data("imageID", imageID)
    .appendTo("#images");
  })

}


const generateImageURL = p => {
  // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
  // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg

  return `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`

}

const getImageDetails = id => {
  // console.log({id});
  $("#images").empty();
  const URL = "https://api.flickr.com/services/rest/"
  $.getJSON(URL, {
    api_key: "2f5ac274ecfac5a455f38745704ad084",
    method: 'flickr.photos.getInfo',
    photo_id: id,
    format: 'json',
    nojsoncallback: 1,
  })
  .done(imageInfo)
  .fail(errorHandler)
}

const imageInfo = data => {
  console.log(data);
  if (data.stat == "ok") {
    let username = data.photo.owner.username;
    // console.log(p.photo.owner.username);
    let views = data.photo.views
    // console.log(views);
    let comments = data.photo.comments._content;
    // console.log(comments);
    // let description = p.photo.description._content
    // console.log(description);
    let photoStaticURL = "https://farm" + data.photo.farm + ".staticflickr.com/" +  data.photo.server + "/" + data.photo.id + "_" + data.photo.secret + "_b.jpg";
    // console.log($image);
    $("<div>").html("User name: " + username).appendTo("#images");
    $("<div>").html("views: " + views).appendTo("#images");
    $("<div>").html("comments: " + comments).appendTo("#images");
    $("<img>", {src: photoStaticURL}).appendTo("#images");
  }
}
