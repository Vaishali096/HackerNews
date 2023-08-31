import { useEffect, useState } from "react";

// Search the specific topic otherwise shows all
function SearchBar({ setResults }) {
  const [value, setValue] = useState();

  async function searchEndpoint(value) {
    const fetchSearch = await fetch(
      `http://hn.algolia.com/api/v1/search?query=${value}`
    );
    const res = await fetchSearch.json();
    setResults(res.hits);
  }

  // Handle the changes and set value here
  const handleChange = (value) => {
    setValue(value);
    searchEndpoint(value);
  };

  //Used effect to show all items at first
  useEffect(() => {
    searchEndpoint(value);
  }, []);

  return (
    <>
      <from>
        <input
          type="text"
          placeholder="Type to search..."
          value={value}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
      </from>
    </>
  );
}

export default SearchBar;
