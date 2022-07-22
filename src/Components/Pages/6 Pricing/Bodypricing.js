import React from "react";
import "./pricing.css";
import "./newPricing.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  id: "services-slider",
  items: 3,
  autoplay: false,
  loop: false,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
};
const Bodypricing = () => {
  return (
    <>
      {/* New Pricing */}
      <section className="price">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <OwlCarousel {...options}>
                {/* 3 Months */}
                <div className="pricing-enclose">
                  <div className="pricing-column">
                    <div className="ribbon">
                      <img
                        src="https://sparklebox.school/pricing/images/3-month.png"
                        alt="ribbon"
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
                      <img
                        src="https://sparklebox.school/img/sbs-logo.png"
                        alt="logo"
                        className="logo-img"
                      />
                    </div>
                    <div className="save">
                      <img
                        src="https://sparklebox.school/pricing/images/yellow-offer.png"
                        alt="offer"
                      />
                    </div>
                    <div className="price-div-1">
                      <div className="inner-price">
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
                        <span
                          style={{ fontFamily: '"Nunito Sans", sans-serif' }}
                        >
                          &nbsp;7,500
                        </span>
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

                {/* 6 Months */}
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
                        src="https://sparklebox.school/img/sbs-logo.png"
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
                          <span
                            style={{ fontFamily: '"Nunito Sans", sans-serif' }}
                          >
                            &nbsp;14,375{" "}
                          </span>
                        </h4>
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

                {/* 9 Months */}
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
                        src="https://sparklebox.school/img/sbs-logo.png"
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
                          <span
                            style={{ fontFamily: '"Nunito Sans", sans-serif' }}
                          >
                            &nbsp;19,000
                          </span>
                        </h4>
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
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bodypricing;
