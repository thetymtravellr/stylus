import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {

  const { img, title, author, article } = news;
  return (
    <div className="card w-full max-w-sm mx-auto bg-base-100 shadow-xl">
     <Link to='/blog'>
     <figure>
        <img
        className="w-full h-60 object-cover"
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm">{article.slice(0,180)}</p>
        <div className="mt-2 card-actions justify-end">
          <p>author: {author}</p>
        </div>
      </div>
     </Link>
    </div>
  );
};

export default NewsCard;
