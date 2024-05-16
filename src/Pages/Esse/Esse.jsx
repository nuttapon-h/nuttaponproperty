import React from "react";
import ImageCard from "../../components/ImageCard";
import EsseData from "./EsseData";
import DetailBox from "../../components/DetailBox";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TextInfoBox from '../../components/TextInfoBox';

const Esse = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };

  return (
    <div className="bg">
      <h1 className="header">The Esse at Singha Complex - 2 Bed</h1>
      <div className="container" >
        <DetailBox
          Size="73 sqm."
          View="North"
          RoomDecoration="Full Furnished"
          Price="70,000 / Month"
        />
        <div className="borderContainer description">
          <h2 className="description-head">Detail</h2>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" align="center">
              <TextInfoBox info="Floor : 32" backgroundColor="#705D56" />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6" align="center">
              <TextInfoBox info="Bedrooms : 2" backgroundColor="#705D56"/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6" align="center">
              <TextInfoBox info="Bathrooms : 2" backgroundColor="#705D56"/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6" align="center">
              <TextInfoBox info="Living Room : 1" backgroundColor="#705D56"/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6" align="center">
              <TextInfoBox info="Kitchen : 1" backgroundColor="#705D56"/>
            </div>
          </div> 
        </div>

        <div className="borderContainer" style={{backgroundColor:'#EAE2B7'}}>
          <h2 className="description-head">Photos</h2>
          <Slider {...settings}>
            {EsseData.map((PhotoItem) => (
              <div>
                  <ImageCard key={PhotoItem.id} img={PhotoItem.img} />
              </div>
            ))}
          </Slider>
        </div>

        <div className="borderContainer description" style={{backgroundColor:'#F2CC8F'}}>
          <h2 className="description-head">Included</h2>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6" align="center">
              <TextInfoBox info="TV : 2" backgroundColor="#567568"/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6" align="center">
              <TextInfoBox info="Fridge : 1" backgroundColor="#567568"/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6" align="center">
              <TextInfoBox info="Washing Machine : 1" backgroundColor="#567568"/>
            </div>
          </div>
        </div>

        <div className="borderContainer description" style={{backgroundColor:'#EAE2B7'}}>
          <h2 className="description-head">Facilities</h2>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6" align="center">
              <TextInfoBox info="Fitness" backgroundColor="#754043"/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6" align="center">
              <TextInfoBox info="Swimming pool" backgroundColor="#754043"/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6" align="center">
              <TextInfoBox info="Library" backgroundColor="#754043"/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6" align="center">
              <TextInfoBox info="Sky Social Lounge" backgroundColor="#754043"/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6" align="center">
              <TextInfoBox info="Onsen" backgroundColor="#754043"/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6" align="center">
              <TextInfoBox info="Steam Room" backgroundColor="#754043"/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6" align="center">
              <TextInfoBox info="Private spa" backgroundColor="#754043"/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6" align="center">
              <TextInfoBox info="salon" backgroundColor="#754043"/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6" align="center">
              <TextInfoBox info="Private Theatre" backgroundColor="#754043"/>
            </div>
          </div>
          <p align="center" style={{marginTop:'20px'}}>-It’s connected directly with the MRT station, while the ARL and boat taxi stops are both within walking distance.</p> 
        </div>
      </div>
    </div>
  );
};

export default Esse;
