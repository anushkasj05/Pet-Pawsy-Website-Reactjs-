import { useState } from "react";
import LoaderComp from "./LoaderComp";
const PayComplete = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <>
      <center>
        {isLoading ? (
          <>
            <LoaderComp />
          </>
        ) : (
          <>
            <h1> Thanks Your Payment Done!!!</h1>
          </>
        )}
      </center>
    </>
  );
};

export default PayComplete;
