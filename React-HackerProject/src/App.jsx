import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Spinner from "./components/Spinner";

import SearchBar from "./components/Searchbar";
import SearchResult from "./components/SearchResult";
import NewsPage from "./components/NewsPage";

function App() {
  const [results, setResults] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const url =
    "https://gist.githubusercontent.com/MyElectricSheep/4f15c82c45409e06b220d4f7b67e1534/raw/106124f0632d8167001de62a12275dcbe660c2cd/hackernews.json";

  return (
    <>
      <SearchBar setResults={setResults} setSpinner={setSpinner} />
      <Spinner spinner={spinner} setSpinner={setSpinner} />
      <SearchResult results={results} setSpinner={setSpinner} />
      <NewsPage />
    </>
  );
}
export default App;
