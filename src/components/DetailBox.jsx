import React from "react";
import './DetailBox.css';

const DetailBox = (props) => {
  return (
    <div className="row" style={{marginBottom:'50px'}}>
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12" align="center">
        <div className="pinkbox">
            <h1 className="detailheader">Size</h1>
            <h2 className="detailinfo">{props.Size}</h2>
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12" align="center">
        <div className="orangebox">
            <h1 className="detailheader">View</h1>
            <h2 className="detailinfo">{props.View}</h2>
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12" align="center">
        <div className="greenbox">
            <h1 className="detailheader">Room Decoration</h1>
            <h2 className="detailinfo">{props.RoomDecoration}</h2>
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12" align="center">
        <div className="bluebox">
            <h1 className="detailheader">Price</h1>
            <h2 className="detailinfo">{props.Price}</h2>
        </div>
      </div>
    </div>
  );
};

export default DetailBox;
