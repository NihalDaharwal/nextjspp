import React from "react";
import Herosection from "./components/Herosection";

const page = () => {
  return (
    <>
      {/* <h1>hello next js</h1> */}
      <Herosection
        title={"LET'S WATCH MOVIES TOGETHER"}
        imageUrl={"/logo.png"}
      />
    </>
  );
};

export default page;
