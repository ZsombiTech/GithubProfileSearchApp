import React, { Fragment } from "react";
import "../styles/Userdata.css";

export default function Userdata(props) {
  console.log(props.data);

  return (
    <Fragment>
      {props.data.length > 0 ? (
        <p>
          {props.data[0].login} who lives in{" "}
          {props.data[0].location ? props.data[0].location : "unknown place"}
        </p>
      ) : (
        <p>No results</p>
      )}
    </Fragment>
  );
}
