
$(document).ready(function(){
  $('#getBooks').on('click',getBooks);
  $(document).on('click', "img", function(){
    getDetails(this.id);
  });
});

const getBooks = function(){
  const xhr = new XMLHttpRequest();
  xhr.onload = function(){
    const booksToDisplay = JSON.parse(xhr.response);
    $('#books').empty();
    $('#bookDetails').hide();
    $('#books').show();
    for(i=0; i<booksToDisplay.items.length; i++){
      var $img = $('<img />', {
        id: booksToDisplay.items[i].id,
        src: booksToDisplay.items[i].volumeInfo.imageLinks.thumbnail,
        style: "cursor: pointer",
      });
      $img.appendTo($('#books'));
      // $p = $('<p>').html(booksToDisplay.items[i].volumeInfo.title);
      // $('#books').append($p);
    }
  };
  var searchFor = $('#txtSearch').val();
  var urlString = "https://www.googleapis.com/books/v1/volumes?q="+searchFor+'+&key=AIzaSyAJ0a73hhDIswEV4mTLGjmLIx4oHHFUelM';
  xhr.open('GET',urlString);
  xhr.send();
};

const getDetails = function(id){
  const xhr = new XMLHttpRequest();
  xhr.onload = function(){
    const bookDetails = JSON.parse(xhr.response);
    $('#bookDetails').empty();
    $('#books').hide();
    $('#bookDetails').show();
    var $img = $('<img />', {
      src: bookDetails.volumeInfo.imageLinks.small,
      click: false,
    });
    $img.appendTo($('#bookDetails'));

    var detailsContent = "<strong>Title:</strong>"+bookDetails.volumeInfo.title+"<br><strong>Sub Title:</strong>"+bookDetails.volumeInfo.subtitle+"<br><strong>Author:</strong>"+bookDetails.volumeInfo.authors[0];

    $p = $('<p>').html(detailsContent);
    $('#bookDetails').append($p);
  };
  var urlString = "https://www.googleapis.com/books/v1/volumes/"+id;
  xhr.open('GET', urlString);
  xhr.send();
};
