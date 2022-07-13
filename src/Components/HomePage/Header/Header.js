import React from "react";
import "./header.css";

const Header = () => {
  return (
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
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://sparklebox.school/why-sparklebox-school/"
              >
                Why Us?
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="https://sparklebox.school/about-us/"
              >
                About Us
              </a>
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
                  <a
                    className="dropdown-item"
                    href="https://sparklebox.school/curriculum/pre-nursery-syllabus/"
                  >
                    Pre - Nursery
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://sparklebox.school/curriculum/nursery-syllabus/"
                  >
                    Nursery
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://sparklebox.school/curriculum/kindergarten-1-syllabus/"
                  >
                    K1
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://sparklebox.school/curriculum/kindergarten-2-syllabus/"
                  >
                    K2
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://sparklebox.school/faq/">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://sparklebox.school/pricing/">
                Pricing
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="https://sparklebox.school/testimonials/"
              >
                Testimonials
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="https://sparklebox.school/SBS+/">
                SBS+
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="https://sparklebox.school/blog/">
                Blog
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="https://sparklebox.school/news/">
                News
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="https://sparklebox.school/contact-us/"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
