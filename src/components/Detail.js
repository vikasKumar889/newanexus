import React from "react";
import { useLocation } from "react-router-dom";
import "./Detail.css";

const DetailScreen = () => {
  const location = useLocation();
  const { article } = location.state;

  console.log(article.content)

  return (
    <div className="detail_main_container">
      <div className="detail_sub_container">
        <span className="detail_header">{article.title || 'Trending News and Popular Article'}</span>
        <div className="detail_auther">
          <div>
            <img
              src={article.author ? `https://ui-avatars.com/api/?name=${article.author}` : 'https://via.placeholder.com/150'}
              className="detail_profile_img"
              alt="Author"
            />
          </div>
          <div className="detail_profile_detail">
            <span className="detail_profile_name">{article.author || 'Unknown Author'}</span>
            <span className="detail_profile_email">{article.source.name}</span>
          </div>
        </div>
        <div>
          <hr/>
        </div>
        <span className="detail_date">{new Date(article.publishedAt).toLocaleString() || 'Unknown Date'}</span>
        <div className="detail_tags_container">
          {article.tags && article.tags.map((tag, index) => (
            <span key={index} className="detail_tag">{`#${tag}`}</span>
          ))}
        </div>
        <div>
          <img
            src={article.urlToImage || 'https://via.placeholder.com/600'}
            className="detail_img"
            alt={article.title || 'Default Title'}
          />
        </div>
        <span className="detail_detail">
          {article.content || 'No detailed content available for this article.'}
        </span>
      </div>
    </div>
  );
};

export default DetailScreen;
