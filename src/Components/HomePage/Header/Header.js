import React from "react";
import "./header.css";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="https://sparklebox.school/img/sbs-final-logo.webp"
              className="logo-default"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page" href="#">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/whyus"
                  className="nav-link"
                  href="https://sparklebox.school/why-sparklebox-school/"
                >
                  Why Us?
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/aboutus"
                  className="nav-link"
                  href="https://sparklebox.school/about-us/"
                >
                  About Us
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Curriculum
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      to="/pnfy"
                      className="dropdown-item"
                      href="https://sparklebox.school/curriculum/pre-nursery-syllabus/"
                    >
                      Pre - Nursery
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/nfy"
                      className="dropdown-item"
                      href="https://sparklebox.school/curriculum/nursery-syllabus/"
                    >
                      Nursery
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/k1fy"
                      className="dropdown-item"
                      href="https://sparklebox.school/curriculum/kindergarten-1-syllabus/"
                    >
                      K1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/k2fy"
                      className="dropdown-item"
                      href="https://sparklebox.school/curriculum/kindergarten-2-syllabus/"
                    >
                      K2
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  to="/faq"
                  className="nav-link"
                  href="https://sparklebox.school/faq/"
                >
                  FAQ
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/pricing"
                  className="nav-link"
                  href="https://sparklebox.school/pricing/"
                >
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/testimonials"
                  className="nav-link"
                  href="https://sparklebox.school/testimonials/"
                >
                  Testimonials
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/sbs"
                  className="nav-link"
                  href="https://sparklebox.school/SBS+/"
                >
                  SBS+
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/blog"
                  className="nav-link"
                  href="https://sparklebox.school/blog/"
                >
                  Blog
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/news"
                  className="nav-link"
                  href="https://sparklebox.school/news/"
                >
                  News
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/contactus"
                  className="nav-link"
                  href="https://sparklebox.school/contact-us/"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
