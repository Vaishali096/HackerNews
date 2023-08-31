import React from "react";

// Showing the result with specific key and value
const SearchResult = ({ results }) => {
  return (
    <div>
      {results.map((res) => (
        <div key={res.title}>
          <h2>{res.title}</h2>
          <p>
            {res.points}by
            {res.author}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
