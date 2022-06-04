import React from "react";
import notfound from "../../assets/notFound/notfound.webp";

const NotFound = () => {
  return (
    <div className="mx-auto">
        <img className="w-screen h-screen" src={notfound} alt="" />
    </div>
  );
};

export default NotFound;
