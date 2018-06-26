import React, {Component} from 'react'


class Gallery extends Component {
  constructor(props){
    super(props);
    this.imageClicked = this.imageClicked.bind(this)
  }

  generateURL( p ){
    return `https://farm${ p.farm }.staticflickr.com/${ p.server }/${ p.id }_${ p.secret }_q.jpg`;
  }

  // gotoImage( id ){
  //   console.log( 'photo ID:', id );
  // }

  imageClicked(){
    this.props.history.push(`/image/${ this.props.images.photos.photo.id }`)
    const {onClicked, index} = this.props;
    console.log("index: ", index);
    onClicked(index)
  }

  render(){
    const {photo, onClicked} = this.props;
    return (
      <div className="results">
        {
          this.props.images.map( (photo, index) => <img src={this.generateURL(photo)} key={photo.id} onClick={this.imageClicked} index={index}/> )
        }
      </div>
    );
  }
};

export default Gallery
