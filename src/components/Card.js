import React from "react";

const Card = ({ data }) => {
  const { url, author } = data;
  return (
    <div className='m-5 p-5 border border-black rounded-lg'>
      <img className="h-60 w-52 " src={url} alt="meme" />
      <h2>{author}</h2>
    </div>
  );
};

export default Card;
