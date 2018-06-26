import React, {Component} from 'react';
// import SearchForm from './SearchForm';
import {Link, Route} from "react-router-dom";
import jsonp from 'jsonp-es6';
import ImageDetails from './ImageDetails'
import Gallery from './Gallery'

const flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';


class SearchResults extends Component {

  constructor(props){
    super(props);

    this.state = {
      images: [],
      selectedImage: null
    };

    // this.fetchImages = this.fetchImages.bind( this );

    this.fetchImages( this.props.match.params.query );
    this.onImageClicked = this.onImageClicked.bind(this);
  }

  fetchImages( query ){
    console.log('fetchImages(): ', query);


    const flickrParams = {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      text: query,
      format: 'json'
    };

    jsonp( flickrURL, flickrParams, {callback: 'jsoncallback'} )
    .then(data => {
      console.log('AJAX response:', data);

      // const urls = data.photos.photo.map( generateURL );
      this.setState({ images: data.photos.photo });
    });
  }

  onImageClicked(id){
    console.log(id);
    this.setState({selectedImage: id})
  }

  render(){
    return (
      <div>
        <h2>Search Results</h2>
        <Link to={`/image/${this.state.images.photo.id}`}><Gallery images={ this.state.images } history={ this.props.history } onClicked={this.onImageClicked}/></Link>
        {this.state.selectedImage !==null && <ImageDetails photo={this.state.images.photos[this.state.selectedImage]}/>}
      </div>
    );
  }
}

export default SearchResults;
