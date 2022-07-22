import React from "react";
import "./contactus.css";

function Bodycontactus() {
  return (
    <>
      {/* Contact Details */}
      <section className="padding" id="our-apps">
        <div className="container">
          <div className="section-title">
            <h1 className="text-center">Contact Us</h1>
          </div>
          <div id="rs-contact" className="rs-contact inner pt-100 md-pt-80">
            <div className="container">
              <div className="content-info-part mb-60">
                <div className="row gutter-16">
                  <div className="col-lg-4 md-mb-30">
                    <div className="info-item">
                      <div className="icon-part">
                        <i className="fa fa-at" />
                      </div>
                      <div className="content-part">
                        <h4 className="title">Phone Number</h4>
                        <a href="tel:+919513065436">+91 951-306-5436</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 md-mb-30">
                    <div className="info-item">
                      <div className="icon-part">
                        <i className="fa fa-envelope-o" />
                      </div>
                      <div className="content-part">
                        <h4 className="title">Email Address</h4>
                        <a href="/cdn-cgi/l/email-protection#a9c0c7cfc6e9dad9c8dbc2c5cccbc6d187dacac1c6c6c5">
                          info@sparklebox.school
                          <span
                            className="__cf_email__"
                            data-cfemail="3f565159507f4c4f5e4d54535a5d5047114c5c57505053"
                          >
                            {/* [email&nbsp;protected] */}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="info-item">
                      <div className="icon-part">
                        <i className="fa fa-map-o" />
                      </div>
                      <div className="content-part">
                        <h4 className="title">Office Address</h4>
                        <p>
                          I and II Floor, No. 60/1 1st Main Road Industrial
                          Suburb, 2nd Stage Yeshwanthpur, Laxmidevinagar,
                          Bengaluru, Karnataka 560022
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-form-part">
                <div className="row md-col-padding">
                  <div className="col-md-5 custom1 pr-0">
                    <div className="img-part" />
                  </div>
                  <div className="col-md-7 custom2 pl-0">
                    <form
                      id="contact-form"
                      name="sentMessage"
                      noValidate="novalidate"
                      method="post"
                      action="https://sparklebox.school/contact-us/contactmail.php"
                    >
                      <div className="sec-title mb-53 md-mb-42">
                        <div className="sub-title white-color">Let's Talk</div>
                        <h2 className="title white-color mb-0">Get In Touch</h2>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            required=""
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="Phone Number"
                            required=""
                          />
                        </div>
                        <div className="col-md-12">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="E-mail Address"
                            required=""
                          />
                        </div>
                        <div className="col-md-12">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Your Message Here"
                            required=""
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-md-12">
                          <input
                            id="botcheck"
                            name="botcheck"
                            type="hidden"
                            defaultValue=""
                          />
                          <button
                            id="sendMessageButton"
                            type="submit"
                            className="readon modify"
                            name="submit"
                          >
                            Submit Now
                          </button>
                          <br />
                          <br />
                          <div id="form-messages" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-title">
              <h2 className="text-center locate">Locate Us</h2>
            </div>
            <div className="g-map mt-100 md-mt-80">
              <iframe
                width="100%"
                height={450}
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=k12%20techno%20services&t=&z=11&ie=UTF8&iwloc=&output=embed"
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Form */}
    </>
  );
}

export default Bodycontactus;
