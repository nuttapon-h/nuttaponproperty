import React from "react";
import ImageCard from "../../components/ImageCard";
import AddressData from "./AddressData";
import DetailBox from "../../components/DetailBox";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TextInfoBox from '../../components/TextInfoBox';

const Address = () => {
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
      <h1 className="header">The Address Siam Ratchathewi - 2 Bed</h1>
      <div className="container" >
        <DetailBox
          Size="66 sqm."
          View="East & South"
          RoomDecoration="Full Furnished"
          Price="55,000 / Month"
        />
        <div className="borderContainer description">
          <h2 className="description-head">Detail</h2>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" align="center">
              <TextInfoBox info="Floor : 23" backgroundColor="#705D56" />
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
            {AddressData.map((PhotoItem) => (
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
              <TextInfoBox info="The Cloud Fitness" backgroundColor="#754043"/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6" align="center">
              <TextInfoBox info="Sky Pool" backgroundColor="#754043"/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6" align="center">
              <TextInfoBox info="Library" backgroundColor="#754043"/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6" align="center">
              <TextInfoBox info="Sky Social Lounge" backgroundColor="#754043"/>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6" align="center">
              <TextInfoBox info="Sauna" backgroundColor="#754043"/>
            </div>
          </div>
          <p align="center" style={{marginTop:'20px'}}>-150 meters to BTS Ratchathewi Station</p> 
        </div>
      </div>
    </div>
  );
};

export default Address;
