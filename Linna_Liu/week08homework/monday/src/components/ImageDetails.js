import React from "react"

class ImageDetails extends React.Component {

  // fullscreenURL(p){
  //   return `https://farm${ p.farm }.staticflickr.com/${ p.server }/${ p.id }_${ p.secret }_b.jpg`;
  // }

  render(){
    const {photo: {farm, server, id, owner, title, secret, dates}} = this.props;
    return (
      <div>
        <p>Username: { owner.username }</p>
        <p>Title: { title._content }</p>
        <p>Photo Taken: { dates.taken }</p>
        <img src= {`https://farm${ farm }.staticflickr.com/${ server }/${ id }_${ secret }_b.jpg`} />
      </div>
    )
  }
}

export default ImageDetails
