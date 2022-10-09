import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="">
      <h1>Page does not exist</h1>
      <h1>
        Get back to{" "}
        <Link to={"/"} className="back">
          main page
        </Link>
        ?
      </h1>
    </div>
  );
}

export default Error;
