import React from "react";
import Spinner from "./Spinner";
// Showing the result with specific key and value
const SearchResult = ({ results, setSpinner }) => {
  const removeNull = () => {
    results.map((re) => {
      return re.title;
    });
  };

  return (
    <div>
      {results.map((res) => (
        <div key={res.title}>
          <h2>{res.title}</h2>

          <div>
            {res.title !== null && res.title !== "" ? (
              <p>
                {res.points}by
                {res.author}
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>
      ))}
      {/* {setSpinner(false)} */}
    </div>
  );
};

export default SearchResult;
