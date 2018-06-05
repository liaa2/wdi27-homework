console.log("Loaded!");

$(document).ready(function(){

  $(document).on('click', "#getBook", getBooks);

  $(document).on('click', "img", function () {
    // get ID from clicked image this.id
    let bookId = this.id
    // console.log(id);
    getBook(bookId);
  })

})

const getBooks = function(){

  const xhr = new XMLHttpRequest();

  xhr.onload = function(){


    const books = JSON.parse(xhr.response);
    // console.log(books.items);
    //clear the previous search
    $("#results").empty();

    let list = books.items
    $.each(list, function (key, value){
      // console.log(value);
      // console.log(value.volumeInfo.title);
      let title = value.volumeInfo.title
      // console.log(value.volumeInfo.imageLinks.thumbnail);
      let image = value.volumeInfo.imageLinks.thumbnail
      // console.log(value.id);
      // let id = value.id
      // let imageUrl = `https://www.googleapis.com/books/v1/volumes/${id}`
      $p = $('<p>').html(title);
      $img = $('<img>').attr("src", image).attr("id", value.id);
      // $a = $('<a>').attr("href", link)
      // $($img).wrap(`<a href=${$a}>`);
      // $('img').wrap($('<a>',{
      //  href: `${imageUrl}`
      // }));
      $("#results").append($p).append($img);
    })
  };

 let input = $('#books').val()
 let url = `https://www.googleapis.com/books/v1/volumes?q=${input}&key=[YOUR API KEY]`

  xhr.open('GET', url)
  xhr.send();


  console.log("Finished request");

}



const getBook = function( bookId ){

  const xhr = new XMLHttpRequest();

  xhr.onload = function(){


    const book = JSON.parse(xhr.response);
    $("#results").hide()
    console.log(book);

    let title = book.volumeInfo.title
    let subTitle = book.volumeInfo.subtitle
    let author = book.volumeInfo.authors[0]
    let rating = book.volumeInfo.averageRating
    let description = book.volumeInfo.description
    let image = book.volumeInfo.imageLinks.small
    $img = $("<img>").attr("src", image)
    // console.log(author);
    // console.log(rating);
   $("#details").append(`<h1>Title: ${title}</h1><br>`)
   .append(`<h2>Sub Title: ${subTitle}</h2><br>`)
   .append(`<h3>Author: ${author}</h3><br>`)
   .append(`Rating: ${rating}<br>`)
   .append(`<p>${description}</p><br>`)
   .append($img)


  };

  let url = `https://www.googleapis.com/books/v1/volumes/${ bookId }`

  xhr.open('GET', url)
  xhr.send();


  console.log("Finished request");

}
