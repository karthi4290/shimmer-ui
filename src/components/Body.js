import React, { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState(null);

  const fetchMeme = async () => {
    const response = await fetch("https://meme-api.com/gimme/20");
    const data = await response.json();
    setMemes(data.memes);
  };
  useEffect(() => {
    fetchMeme();
  }, []);

  return (
    <div className="flex flex-wrap">
      {!memes ? (
        <Shimmer />
      ) : (
        memes.map((meme, i) => <Card key={i} memeData={meme} />)
      )}
    </div>
  );
};

export default Body;
