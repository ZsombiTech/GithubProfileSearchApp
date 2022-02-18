import React, { Fragment } from "react";
import "../styles/Search.css";

export default function Search() {
  return (
    <Fragment>
      <div className="fullsbar">
        <input type="text" id="search" placeholder="Username" />
        <button>Search</button>
      </div>
    </Fragment>
  );
}
