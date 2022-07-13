import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <div className="row">
          <div className="col-lg-4 col-md-4 footer-col-1 flex-style">
            <img
              src="https://sparklebox.school/img/sbs-final-logo.webp"
              alt=""
              width="75%"
              className=""
            />
          </div>
          <div className="col-lg-4 col-md-4 footer-col-2" data-sequence="500">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="https://sparklebox.school/img/contact.webp"
                alt=""
                style={{ width: "20%" }}
                className="bounceInUp1"
                data-id="1"
              />
              <p className="contact-number">+91-951-306-5436</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="https://sparklebox.school/img/location.webp"
                alt=""
                style={{ width: "20%" }}
                className="bounceInUp1"
                data-id="2"
              />
              <p className="contact-address">
                K12 Techno Services Pvt. Ltd., I & II Floor, No. 60/1, 1st Main
                Road, Industrial Suburb, 2nd Stage, Yashwanthpur, Laxmidevi
                Nagar, Bengaluru, Karnataka/560022.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-4 footer-col-3 text-center"
            data-sequence="500"
          >
            <p
              style={{ color: "white", fontWeight: "bold" }}
              className="connect-with-us"
            >
              Connect With Us
            </p>
            <div className="social-icons flex-style">
              <a href="https://www.facebook.com/SparkleBox.School">
                <img src="https://sparklebox.school/img/facebook.webp" alt="" />
              </a>
              <a href="https://www.instagram.com/sparklebox.school/">
                <img
                  src="https://sparklebox.school/img/instagram.webp"
                  alt=""
                />
              </a>
              <a href="https://twitter.com/SparkleBoxScho1">
                <img src="https://sparklebox.school/img/twitter.webp" alt="" />
              </a>
              <a href="https://www.youtube.com/channel/UCyRt3oeVqYMrP6Fy7pN638w">
                <img src="https://sparklebox.school/img/youtube.webp" alt="" />
              </a>
            </div>
          </div>
        </div>
        <hr className="footer-hr" />
        <div className="row">
          <p className="copyright text-center text-white m-0">
            @2021 K12 TECHNO SERVICES PVT. LTD. ALL RIGHTS RESERVED <br />
            <a href="https://sparklebox.school/privacy-policy/">
              PRIVACY POLICY
            </a>
            |
            <a href="https://sparklebox.school/shipping-policy/">
              SHIPPING POLICY
            </a>
            |
            <a href="https://sparklebox.school/terms-and-conditions/">
              TERMS & CONDITIONS
            </a>
            |
            <a href="https://sparklebox.school/cancellation-and-refund-policy/">
              CANCELLATION AND REFUND POLICY
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
