import React, { Fragment, useState } from "react";
import axios from "axios";
import "../styles/Search.css";

export default function Search(props) {
  const [name, setName] = useState("");

  const inputhandler = (event) => {
    setName(event.target.value);
    axios.get(`https://api.github.com/users/${name}`).then((res) => {
      const datablock = res.data;
      props.setData(datablock);
    });
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
