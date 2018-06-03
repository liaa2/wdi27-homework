const state = {
    page: 1
};

$(document).ready( () => {

    $('#searchForm').on('submit', () => {

        const query = $('#query').val();
        searchFlickr( query );
        // returning false on submit prevents page reload
        return false

    });

    $('#query').focus();

});


$(window).on('scroll', () => {

    const scrollBottom = $(document).height() - ($(window).scrollTop() + $(window).height() );
    console.log( scrollBottom );

    if (scrollBottom > 5){
        return;
    }

    console.log( 'Bottom reached' );
    searchFlickr( $('#query').val() );

})

const searchFlickrPre = searchQuery => {
    console.log( {searchQuery} );
    
    const URL = "https://api.flickr.com/services/rest/";
    
    $('<hr>').appendTo('#results');
    
    $.getJSON(URL, {
        api_key: luke_api_key,
        method: 'flickr.photos.search',
        text: searchQuery,
        format: 'json',
        nojsoncallback: 1,
        page: state.page++
    })
    .done(showImages)
    .fail(errorHandler);
};
const searchFlickr = _.throttle(searchFlickrPre, 5000);

const errorHandler = xhr => {
    console.warn( 'Error: ', xhr.responseText, xhr );
}

const showImages = data => {
    console.log( data );

    _.each(data.photos.photo, photo => {
        const imageURL = generateImageUrl( photo );
        $('<img>', {src: imageURL}).appendTo('#results');

    });
}

const generateImageUrl = p => {
    return `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`;    
}