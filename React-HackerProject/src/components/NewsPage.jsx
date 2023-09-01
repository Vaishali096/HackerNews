import { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import ReactPaginate from "react-paginate";
const NewsPage = ()=>{
const [currentPage, setCurrentPages] = useState(0);
const [articles, setArticles] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [totalPages, setTotalPages] = useState(0);

const handlePageChange = (e)=>{
console.log(e);
setCurrentPages(e.selected);
}

useEffect(()=>{
setIsLoading(true);
const fetchData = async () =>{
try {
const {data} = await axios.get("https://hn.algolia.com/api/v1/search?");
const {hits, nbPages} = data;
setArticles(hits);
setTotalPages(nbPages);
} 
catch(err) {
 console.log(err)

}
finally {
 setIsLoading(false);

}
 };
fetchData();
 },[])

return(
 <div className="container">
<h1>HackerNews</h1>
<div className="news-container">
{isLoading? (
 <p>Loading...</p>
 ): ( 
 articles.map((article) => (
 <NewsCard article={article} key={article.objectID} />
 ))
 )}
 </div>
 {/* <div className="Pagecontainer"> */}
 <ReactPaginate 
 nextLabel=">>"
 previousLabel="<<"
 breakLabel="..."
 forcePage={currentPage}
 pageCount={totalPages}
 renderOnZeroPageCount = {null}
 onPageChange = {handlePageChange}
 className="pagination"
 activeClassName="active-page"
 previousClassName="previous-page"
 nextClassName="next-page"
 />
 {/* </div> */}
</div>
 );
};
export default NewsPage;
