import React, { Fragment, useState } from "react";
import "../styles/Search.css";

export default function Search() {
  const [name, setName] = useState("");

  const inputhandler = (event) => {
    setName(event.target.value);
  };

  return (
    <Fragment>
      <div className="fullsbar">
        <input
          type="text"
          id="search"
          placeholder="Username"
          onChange={inputhandler}
          value={name}
        />
      </div>
    </Fragment>
  );
}
