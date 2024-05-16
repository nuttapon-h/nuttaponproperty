import React from 'react';
import "./Footer.css";

const Footer = () =>{
    return(
        <div className="Footer" id="footer">
            <div className="container">
                <h1 className="font-footer">Contact</h1>
                <div className="row"> 
                    <div className="col-xl-4 col-lg-4 col-md-6" align="center">
                        <h1 className="textColorMobile">Mobile : 081-420-7975</h1>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6" align="center">
                        <h1 className="textColorLine">Line : suwathan</h1>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6" align="center" style={{marginLeft: 'auto',marginRight: 'auto'}}>
                        <h1 className="textColorFB">FB : Nuttapon Hankamolsiri</h1>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Footer;