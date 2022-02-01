import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
      let {title, description, imageUrl, newsUrl,author,date} = this.props;
    return (
      <div className="my-3"> 
        <div className="card">
          <img src={ !imageUrl ?  "https://i.ytimg.com/vi/0qqTuPdZHsk/maxresdefault.jpg":imageUrl } className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+</span> </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark"> Read More </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
