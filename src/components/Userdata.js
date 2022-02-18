import React, { Fragment } from "react";
import "../styles/Userdata.css";

export default function Userdata(props) {
  console.log(props.data);

  return (
    <Fragment>
      {props.data.length > 0 ? (
        <div className="card">
          <div className="border">
            {" "}
            <p className="cardthree">
              {props.data[0].login} who lives in{" "}
              {props.data[0].location
                ? props.data[0].location
                : " unknown place"}
            </p>
            <p className="cardthree">
              {props.data[0].bio ? props.data[0].bio : "unknown bio"}
            </p>
            <p className="cardthree">
              Official Name:{" "}
              {props.data[0].name ? props.data[0].name : "unknown fullname"}
            </p>
            <p className="cardthree">
              Number of public repos:{" "}
              {props.data[0].public_repos
                ? props.data[0].public_repos
                : "unknown number"}
            </p>
          </div>
          <a href={`https://github.com/${props.data[0].login}`} target="_blank">
            <img
              src={props.data[0].avatar_url}
              alt="profilepicture"
              className="picturegithub"
            />
          </a>
        </div>
      ) : (
        <p className="cardthree">No results</p>
      )}
    </Fragment>
  );
}
