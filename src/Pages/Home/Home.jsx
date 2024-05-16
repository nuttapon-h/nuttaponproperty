import React from "react";
import Card from "./Card";

const Home = () => {
  return (
    <div className="bgHome">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6" align="center">
            <Card
              name="Noble Ploenchit"
              bedroom="2 Bedrooms"
              backgroundBedroom="#363946"
              backgroundColor="orange"
              image="1DmjGKz-rK1Ls9PqDnDadz3aFcjQKPLhR"
              link="/Noble"
              status="unavailable"
              contractEndDate="5 February 2025"
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6" align="center">
            <Card
              name="Laviq Sukhumvit 57"
              bedroom="2 Bedrooms"
              backgroundBedroom="#363946"
              backgroundColor="#ED6A5A"
              image="16RK8jSZiH_QLozkdlwiOmJfFt0rDHjxJ"
              link="/Laviq"
              status="unavailable"
              contractEndDate="3 April 2025"
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6" align="center">
            <Card
              name="The Esse at Singha Complex"
              bedroom="2 Bedrooms"
              backgroundBedroom="#363946"
              backgroundColor="#36C9C6"
              image="1TzmC0-UMKPlskodggF3XsyVxXx93wbHN"
              link="/Esse"
              status="unavailable"
              contractEndDate="8 May 2025"
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6" align="center">
            <Card
              name="The Address Siam Ratchathewi"
              bedroom="2 Bedrooms"
              backgroundBedroom="#363946"
              backgroundColor="#d38ed5"
              image="1FOgwwrnTx6z0gCfIGFwgoq7AnA3b13Zd"
              link="/Address"
              status="unavailable"
              contractEndDate="11 May 2025"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
