console.clear();
window.onload = function () {
    const form = document.querySelector('form');
    console.log(form);
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(form.elements.query.value);
        giphySearch(form.elements.query.value);
        $('#results').show();
    });
    $(document).on('click', 'img.imgDetails', function () {

    
        getDetails($(this).data('imgID')); 
    });
};
    const getDetails = (id)=>{
        const URL = `https://api.giphy.com/v1/gifs/${id}?api_key=rRMOgCrkMXlWfvbFvQHaYoZ2XKvF8mk7`
        $('#results').empty();
        $.getJSON(URL)

            .done(function(result){
                console.log(result);
                let $details = $('<div class="details">');
                $('<h2>').html(result.data.type).appendTo($details);
                $('<img>').attr('src', result.data.images.downsized.url).appendTo($details)
                $('#details').append($details);
            })

    
    }

    const giphySearch = (query) => {

        const URL = `https://api.giphy.com/v1/gifs/search?api_key=rRMOgCrkMXlWfvbFvQHaYoZ2XKvF8mk7&limit=25&offset=0&rating=G&lang=en`;

        $('#details').empty();
        $('#results').html('Loading results...');
        
        
        $.ajax({
            url: URL,
            data: {
                q: query,  
            },
            dataType: 'json',
            method: 'get'
        })
            .done(function (results) {

                console.log('results:', results);
                $('#results').empty();

                    // const i = each(results.data, (k, v) => {
                    //     $p1 = $('<p>').html(results.data[v].slug);
                    //     $('#results').append($p1);
                    //     $p2 = $('<img>').attr('src', results.data[v].images.downsized_medium.url);
                    //     $('#results').append($p2);
                        // console.log(`key: ${k} val: ${v}`);
                results.data.forEach(function(data){
                    $result = $('<div class="result">');
                    $('<h3>').html(data.slug).appendTo($result)
                    $('<img class="imgDetails">').attr('src', data.images.downsized_medium.url).data('imgID',data.id).appendTo($result);
                    $('<hr>').appendTo($result);
                    $('#results').append($result);
                });
     })
    

        


    };

    // const each = (collection, callback) => {
    //     if (collection instanceof Array) {
    //         for (let i = 0; i < collection.length; i++) {

    //             callback(collection[i], i);
    //         }
    //     } else {

    //         const keys = Object.keys(collection);
    //         for (let i = 0; i < keys.length; i++) {
    //             const key = keys[i];

    //             callback(key, collection[key]);
    //         }
    //     }
    // };