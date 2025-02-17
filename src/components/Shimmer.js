import React from "react";

const Shimmer = () => {
  return Array(20)
    .fill(0)
    .map((n, i) => (
      <div key={i} className="border border-gray-200 h-60 w-60 p-2 m-16"></div>
    ));
};

export default Shimmer;
