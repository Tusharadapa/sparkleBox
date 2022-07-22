import React from "react";
import "./header1.css";
import $ from "jquery";

const Header1 = () => {
  $(function($) {
    "use strict";

    $(function() {
      var header = $(".start-style");
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
          header.removeClass("start-style").addClass("scroll-on");
        } else {
          header.removeClass("scroll-on").addClass("start-style");
        }
      });
    });

    //Menu On Hover

    $("body").on("mouseenter mouseleave", ".nav-item", function(e) {
      if ($(window).width() > 750) {
        var _d = $(e.target).closest(".nav-item");
        _d.addClass("show");
        setTimeout(function() {
          _d[_d.is(":hover") ? "addClass" : "removeClass"]("show");
        }, 1);
      }
    });
  });
  return (
    <>
      <div className="navigation-wrap bg-light start-header start-style">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-md navbar-light">
              <div className="row">
                <div className="col-md-2">
                  <a className="navbar-brand" href="#" target="_blank">
                    <img
                      src="https://sparklebox.school/img/sbs-final-logo.webp"
                      classname="logo-default"
                      alt=""
                    />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                </div>
                <div className="col-md-10">
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto py-4 py-md-0">
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a className="nav-link" href="#">
                          Home
                        </a>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a className="nav-link" href="#">
                          Why Us?
                        </a>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a className="nav-link" href="#">
                          About Us
                        </a>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                        <a
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Curriculum
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Pre-Nursery
                          </a>
                          <a className="dropdown-item" href="#">
                            Nursery
                          </a>
                          <a className="dropdown-item" href="#">
                            K1
                          </a>
                          <a className="dropdown-item" href="#">
                            K2
                          </a>
                        </div>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a className="nav-link" href="#">
                          Pricing
                        </a>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a className="nav-link" href="#">
                          SBS+
                        </a>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a className="nav-link" href="#">
                          Contact Us
                        </a>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                        <a
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          More
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Blog
                          </a>
                          <a className="dropdown-item" href="#">
                            News
                          </a>
                          <a className="dropdown-item" href="#">
                            Testimonials
                          </a>
                          <a className="dropdown-item" href="#">
                            FAQ
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header1;
