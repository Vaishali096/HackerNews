import { useEffect, useState } from "react";

function SearchBar({ setResults }) {
  // const [data, setData] = useState([]);
  const [value, setValue] = useState();
  // const [result, setResult] = useState();

  async function searchEndpoint(value) {
    const fetchSearch = await fetch(
      "http://hn.algolia.com/api/v1/search?query=..."
    );
    const res = await fetchSearch.json();
    const filterdRes = res.hits.filter((user) => {
      return value && user.title.toLowerCase().includes(value);
    });
    setResults(filterdRes);
  }

  const handleChange = (value) => {
    setValue(value);
    searchEndpoint(value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Type to search..."
        value={value}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />

      <button
        onClick={() => {
          console.log("value", value);
        }}
      >
        Search
      </button>
    </>
  );
}

export default SearchBar;
