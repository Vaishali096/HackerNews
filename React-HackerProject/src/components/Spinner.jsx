import { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
// import Spinnerarticle from "./Spinnerarticle";

function Spinner({ spinner, setSpinner }) {
  useEffect(() => {
    console.log("use effect", spinner);
    const timer = setTimeout(() => {
      setSpinner(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [spinner]);

  return (
    <>
      {spinner ? (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
          loading={spinner}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default Spinner;
