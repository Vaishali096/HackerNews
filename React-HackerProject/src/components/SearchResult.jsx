import React from "react";
import Spinner from "./Spinner";
import "./SearchResult.css";
// Showing the result with specific key and value
const SearchResult = ({ results, setSpinner }) => {
  // if (results[0].author === "robertwt7") {
  //   console.log(results[0].url);
  // }

  return (
    <div>
      {results.map((res) => (
        <div key={res.title}>
          <div className="container-title-points">
            <a className="link-url" href={res.url}>
              <h3>{res.title}</h3>
            </a>
            <div className="container-info">
              {res.title !== null && res.title !== "" ? (
                <>
                  <p className="points-autor-p">{res.points}</p>
                  <p className="points-autor-p">points</p>
                  <p className="points-autor-p">by</p>
                  <p className="points-autor-p">{res.author}</p>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      ))}
      {/* {setSpinner(false)} */}
    </div>
  );
};

export default SearchResult;
