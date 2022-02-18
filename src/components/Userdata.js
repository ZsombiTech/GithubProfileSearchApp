import React, { Fragment } from "react";
import "../styles/Userdata.css";

export default function Userdata(props) {
  console.log(props.data);

  return (
    <Fragment>
      {props.data.length > 0 ? (
        <div>
          <p>
            {props.data[0].login} who lives in
            {props.data[0].location ? props.data[0].location : "unknown place"}
          </p>
          <p>{props.data[0].bio ? props.data[0].bio : "unknown place"}</p>
        </div>
      ) : (
        <p>No results</p>
      )}
    </Fragment>
  );
}
