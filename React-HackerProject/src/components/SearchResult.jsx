import React from "react";

const SearchResult = ({ results }) => {
  return (
    <div>
      {results.map((res) => (
        <div key={res.author}>
          <h2>{res.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
