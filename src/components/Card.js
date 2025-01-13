import React from "react";

const Card = ({ memeData }) => {
  const { url, author } = memeData;
  return (
    <div className="border border-black h-60 w-60 p-2 m-16">
      <h1 className="text-center font-bold text-sm">{author}</h1>
      <img className="object-cover w-full h-32" src={url} alt="cards" />
    </div>
  );
};

export default Card;
