import React from "react";
import "./TextInfoBox.css";

const TextInfoBox = (props) => {
  return (
    <div className="textInfoBox"  style={{backgroundColor:props.backgroundColor}}>
      <p>{props.info}</p>
    </div>
  );
};

export default TextInfoBox;
