import React from "react";
import "../styles/Headtitle.css";

export default function Headtitle(props) {
  return (
    <div>
      <h1 className="maintitle">{props.title}</h1>
    </div>
  );
}
