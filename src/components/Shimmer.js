import React from "react";

const Shimmer = () => {
  return Array(20)
    .fill(0)
    .map((n, i) => (
      <div key={i} className="m-5 p-5 rounded-lg ">
        <div className="h-60 w-52  border border-gray"></div>
      </div>
    ));
};

export default Shimmer;
