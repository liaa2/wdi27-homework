console.clear();

window.onload = function () {
  const form = document.querySelector('form');
  console.log(form);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(form.elements.query.value);
    getBook(form.elements.query.value);
    $('#results').show();
  });
};


const getBook = function (query) {
  let book;
  const xhr = new XMLHttpRequest();

  xhr.onload = function () {
    const book = JSON.parse(xhr.response);
    console.log('book: ', book);


    const i = each(book.items, (k, v) => {
      $p1 = $('<p>').html(book.items[v].volumeInfo.authors);
      $('#results').append($p1);
      $p2 = $('<img>').attr('src',book.items[v].volumeInfo.imageLinks.thumbnail);
      $('#results').append($p2);
      console.log(`key: ${k} val: ${v}`);
    });
  };


  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${query}`);
  xhr.send();
};

const each = function (collection, callback) {
  if (collection instanceof Array) {
    for (let i = 0; i < collection.length; i++) {
      
      callback(collection[i], i);
    }
  } else {
   
    const keys = Object.keys(collection);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      
      callback(key, collection[key]);
    }
  }
};
