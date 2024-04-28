import React from "react";
import { hatch } from "ldrs";


const Loader = () => {
  hatch.register()
  return (
    <div className="flex-center h-screen w-full">
      <l-hatch
        size="28"
        stroke="4"
        speed="3.5"
        color="white"
      ></l-hatch>
    </div>
  );
};

export default Loader;
