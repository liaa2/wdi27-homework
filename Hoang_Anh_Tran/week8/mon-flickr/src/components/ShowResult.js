import React, {Component} from 'react';
import jsonp from 'jsonp-es6';


class ShowResult extends Component {

  constructor(props){
    super(props);

    this.state = {
      photoData: []
    };

    this.fetchInfo();

  }

  fetchInfo(){

    const flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

    const flickrParams = {
      method: 'flickr.photos.getInfo',
      api_key: 'api key',
      photo_id: this.props.match.params.id,
      format: 'json'
    };

    jsonp( flickrURL, flickrParams, {callback: 'jsoncallback'} )
    .then(data => {
      console.log('ShowResult AJAX response:', data);

      this.setState({photoData: data.photo});

    });

  }



  render(){


    return (
      <div align="center">
      <h2>The image id in PROPS is: # { this.props.match.params.id }</h2> <br />
      <h2>The image id in STATE is: # { this.state.photoData.id }</h2> <br />
      <h2>The date uploaded is: # { this.state.photoData.dateuploaded }</h2> <br />

      </div>
    );
  }

}


export default ShowResult;

// nested json keys inaccessible?
// <h2>The username: # { this.state.photoData.owner.username }</h2> <br />
// https://api.flickr.com/services/rest?api_key=api key&method=flickr.photos.getInfo&photo_id=27580434587&format=json
