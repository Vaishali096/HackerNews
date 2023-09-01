import { useEffect, useState } from "react";
import "./SearchResult.css";

// Search the specific topic otherwise shows all
function SearchBar({ setResults, setSpinner }) {
  const [value, setValue] = useState();

  async function searchEndpoint(value) {
    try {
      const fetchSearch = await fetch(
        `http://hn.algolia.com/api/v1/search?query=${value}`
      );
      const res = await fetchSearch.json();
      if (!fetchSearch.ok) {
        throw Error("data not fetched");
      }
      setResults(res.hits);
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  // Handle the changes and set value here
  const handleChange = (value) => {
    setSpinner(true);
    setValue(value);
    searchEndpoint(value);
  };

  //Used effect to show all items at first
  useEffect(() => {
    searchEndpoint(value);
  }, [value]);

  return (
    <>
      <form>
        <input
          className="input-container-searchbar"
          type="text"
          placeholder="Type to search..."
          value={value}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
      </form>
    </>
  );
}

export default SearchBar;
