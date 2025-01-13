import { useState, useEffect } from "react";
import React from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setIsMemes] = useState(null);

  useEffect(() => {
    fetchMeme();
  }, []);
  const fetchMeme = async () => {
    const data = await fetch("");
    const json = await data.json();
    setIsMemes(json.memes);
  };

  return (
    <div className="flex flex-wrap">
      {!memes ? (
        <Shimmer />
      ) : (
        memes.map((meme, i) => <Card key={i} data={meme} />)
      )}
    </div>
  );
};

export default Body;
