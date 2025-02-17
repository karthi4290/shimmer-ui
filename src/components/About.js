import React from "react";
import { LANG } from "./Helper/constantsLang";

const About = ({ data }) => {
  return (
    <div className="text-center text-3xl ">
      <h1 className="font-extrabold mt-10">{LANG[data].TITLE}</h1>
      <p className="mt-2">{LANG[data].DESCRIPTION}</p>
      <h2 className="font-bold mt-10"> {LANG[data].TITLE2}</h2>
      <p className="mt-2">{LANG[data].DESCRIPTION2}</p>
    </div>
  );
};

export default About;
