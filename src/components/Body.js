import React, { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Shimmer from "./Shimmer";
const Body = () => {
  const [memes, setMemes] = useState([]);
  const [isShimmer, setShimmer] = useState(true);
  
  const fetchMeme = async () => {
    setShimmer(true);
    const response = await fetch("https://meme-api.com/gimme/20");
    const data = await response.json();
    setShimmer(false);
    setMemes((memes) => [...memes, ...data.memes]);
  };
  const handleScroll = useCallback(() => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchMeme();
    }
  },[]);

  useEffect(() => {
    fetchMeme();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="flex flex-wrap">
      {memes.map((meme) => (
        <Card key={uuidv4()} memeData={meme} />
      ))}
      {isShimmer && <Shimmer key={uuidv4()} />}
    </div>
  );
};

export default Body;
