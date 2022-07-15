import React from "react";
import "./pricing.css";

const Bodypricing = () => {
  return (
    <>
      <div className="pricing">
        <div className="container">
          <div className="row pricing-img owl-carousel owl-theme">
            <div className="pricing-enclose ">
              <div className="pricing-column">
                <div className="ribbon">
                  <img
                    src="https://sparklebox.school/pricing/images/3-month.png"
                    alt=""
                  />
                </div>
                <div className="offer">
                  <img
                    src="https://sparklebox.school/pricing/images/inaugural-offer.png"
                    alt=""
                  />
                </div>
                <div className="duration-div">
                  <h3 className="course-heading">
                    3 months <br />
                    course <br />
                    fee
                  </h3>
                  <img src="../img/sbs-logo.png" alt="" className="logo-img" />
                </div>
                <div className="save">
                  <img
                    src="https://sparklebox.school/pricing/images/yellow-offer.png"
                    alt=""
                  />
                </div>
                <div className="price-div-1">
                  <div className="inner-price">
                    {/* <h4><span style="font-weight:bold;font-size:20px;line-height: 1.2; font-family: 'Nunito Sans', sans-serif;">YOU PAY</span><br><span>&#8377</span><span style="text-decoration-thickness:0px !important;text-decoration: line-through; text-decoration-color:#FF4A51;font-family: 'Nunito Sans', sans-serif;">10,714</span><span style="font-family: 'Nunito Sans', sans-serif;">&nbsp;7,500</span></h4>*/}
                    <h4>
                      <span
                        style={{
                          fontWeight: "bold",
                          fontSize: 20,
                          lineHeight: "1.2",
                          fontFamily: '"Nunito Sans", sans-serif',
                        }}
                      >
                        YOU PAY
                      </span>
                      <br />
                      <span>₹</span>
                      <span
                        style={{
                          textDecorationThickness: "0px !important",
                          textDecoration: "line-through",
                          textDecorationColor: "#FF4A51",
                          fontFamily: '"Nunito Sans", sans-serif',
                        }}
                      >
                        10,714
                      </span>
                      <span style={{ fontFamily: '"Nunito Sans", sans-serif' }}>
                        &nbsp;7,500
                      </span>
                    </h4>
                    {/*<hr style="margin: 0.5rem 4rem">
                      <h6 style="margin-top: 0; margin-bottom: .5rem;font-weight: bold;line-height: 1.2;font-family: 'Nunito Sans', sans-serif;font-size:1.1rem !important;">&#8377 2,500/- PER MONTH</h6>*/}
                  </div>
                  <a
                    href="#"
                    className="btn btn-lg btn-info"
                    data-toggle="modal"
                    data-target="#threeMonthsModal"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
            <div className="pricing-enclose ">
              <div className="pricing-column">
                <div className="ribbon">
                  <img
                    src="https://sparklebox.school/pricing/images/6-month.png"
                    alt=""
                  />
                </div>
                <div className="duration-div">
                  <h3 className="course-heading">
                    6 months <br />
                    course <br />
                    fee
                  </h3>
                  <img
                    src="https://sparklebox.school/pricing/img/sbs-logo.png"
                    alt=""
                    className="logo-img"
                  />
                </div>
                <div className="save">
                  <img
                    src="https://sparklebox.school/pricing/images/blue-offer.png"
                    alt=""
                  />
                </div>
                <div className="price-div-2">
                  <div className="inner-price">
                    <h4>
                      <span
                        style={{
                          fontWeight: "bold",
                          fontSize: 20,
                          lineHeight: "1.2",
                          fontFamily: '"Nunito Sans", sans-serif',
                        }}
                      >
                        YOU PAY
                      </span>
                      <br />₹
                      <span
                        style={{
                          textDecorationThickness: "0px !important",
                          textDecoration: "line-through",
                          textDecorationColor: "#FF4A51",
                          fontFamily: '"Nunito Sans", sans-serif',
                        }}
                      >
                        20,536
                      </span>
                      <span style={{ fontFamily: '"Nunito Sans", sans-serif' }}>
                        &nbsp;14,375{" "}
                      </span>
                    </h4>
                    {/* <hr style="margin: 0.5rem 4rem">
                      <h6 style="margin-top: 0; margin-bottom: .5rem;font-weight: bold;line-height: 1.2;font-family: 'Nunito Sans', sans-serif;font-size:1.1rem !important;">&#8377 2,396/- PER MONTH</h6>*/}
                  </div>
                  <a
                    href="#"
                    className="btn btn-lg btn-info"
                    data-toggle="modal"
                    data-target="#sixMonthsModal"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
            <div className="pricing-enclose ">
              <div className="pricing-column">
                <div className="ribbon">
                  <img
                    src="https://sparklebox.school/pricing/images/9-month.png"
                    alt=""
                  />
                </div>
                <div className="duration-div">
                  <h3 className="course-heading">
                    9 months <br />
                    course <br />
                    fee
                  </h3>
                  <img
                    src="https://sparklebox.school/pricing/img/sbs-logo.png"
                    alt=""
                    className="logo-img"
                  />
                </div>
                <div className="save">
                  <img
                    src="https://sparklebox.school/pricing/images/red-offer.png"
                    alt=""
                  />
                </div>
                <div className="price-div-3">
                  <div className="inner-price">
                    <h4>
                      <span
                        style={{
                          fontWeight: "bold",
                          fontSize: 20,
                          lineHeight: "1.2",
                          fontFamily: '"Nunito Sans", sans-serif',
                        }}
                      >
                        YOU PAY
                      </span>
                      <br />₹
                      <span
                        style={{
                          textDecorationThickness: "0px !important",
                          textDecoration: "line-through",
                          textDecorationColor: "#FF4A51",
                          fontFamily: '"Nunito Sans", sans-serif',
                        }}
                      >
                        27,143
                      </span>
                      <span style={{ fontFamily: '"Nunito Sans", sans-serif' }}>
                        &nbsp;19,000
                      </span>
                    </h4>
                    {/* <hr style="margin: 0.5rem 4rem">
                      <h6 style="margin-top: 0; margin-bottom: .5rem;font-weight: bold;line-height: 1.2;font-family: 'Nunito Sans', sans-serif;font-size:1.1rem !important;">&#8377 2,111/- PER MONTH</h6>*/}
                  </div>
                  <a
                    href="#"
                    className="btn btn-lg btn-info"
                    data-toggle="modal"
                    data-target="#nineMonthsModal"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bodypricing;
