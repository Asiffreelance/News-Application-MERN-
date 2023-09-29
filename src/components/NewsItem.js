import React from 'react';

const NewsItem =(props)=>  {
  
    const { title, description, imageUrl, url, author,  } =props;
    return (
      <div>
        <div className="card">
          <img src={!imageUrl ? "https://www.geosuper.tv/assets/uploads/updates/2023-08-24/27239_9018323_updates.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
            <p className="card-text">{author}</p>
            <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">READ MORE</a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
