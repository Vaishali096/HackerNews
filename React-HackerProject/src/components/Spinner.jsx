import { useState,useEffect } from 'react'
import { ThreeDots } from "react-loader-spinner";
import Spinnerarticle from './Spinnerarticle';
function Spinner(){
  const [isLoading, setIsLoading] = useState(true);
  const mockData = [
    {
      id: 1,
      title: "react is cool",
      website: "something.com",
      points: 6790,
      author: "asicsp",
      created_at: 67234807800,
    },
    {
      id: 2,
      title: "angular",
      website: "something.com",
      points: 32,
      author: "other guy",
      created_at: 67234807800,
    },
    {
      id: 3,
      title: "elden ring",
      website: "something.com",
      points: 654,
      author: "yet another guy",
      created_at: 67234807800,
    },
    {
      id: 4,
      title: "gaming",
      website: "something.com",
      points: 3,
      author: "someone else",
      created_at: 67234807800,
    },
  ];

useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    console.log(isLoading);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
       {isLoading ? (
        <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#4fa94d" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
        loading={isLoading}
         />
       ) : (
      mockData.map((post) => <Spinnerarticle post={post} key={post.id} />)
       )}
      </>
      );
      }

      export default Spinner;

               {/* ):(
          articles.map((article) => (
            <NewsCard article = {article} key = {article.objectID} 
          ))
         )} */}