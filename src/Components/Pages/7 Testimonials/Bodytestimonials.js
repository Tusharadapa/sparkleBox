import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./testimonial.css";
import "../../../maincss.css";

const options = {
  id: "services-slider",
  items: 3,
  margin: 16,
  autoplay: true,
  loop: true,
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

const Bodytestimonials = () => {
  return (
    <>
      <section>
        <div className="section-title">
          <h1 className="text-center">What Parents Say About</h1>
        </div>
        <div className="container" style={{ overflow: "hidden" }}>
          <div className="row row-cols-1 row-cols md-3 g-4">
            <div className="col">
              <OwlCarousel {...options}>
                {/* 1st Review */}
                <div className="card h-100">
                  <i className="fas fa-quote-right icon card-img-top"></i>
                  <p>
                    <i>
                      My corporate job keeps me entangled in so many meetings.
                      One after the other. And as much as I want to spend some
                      real quality time with my son, I realise learning for him
                      is as much important. He’s 5 years old. SparkleBox.School
                      has been such a game-changer for me! I spend some quality
                      time with my son playing and learning both. It makes me
                      feel better and also gives me contentment that yes, my
                      child is learning.
                    </i>
                  </p>

                  <img
                    src="https://sparklebox.school/img/pp.jpg"
                    className="card-img-top"
                    alt="img"
                    style={{
                      borderRadius: "100%",
                      width: "150px",
                      height: "150px",
                    }}
                  />

                  <h3>Sonakshi Tiwari</h3>
                  <h5>Software Engineer</h5>
                </div>

                {/* 2nd Review */}

                <div className="card h-100">
                  <i className="fas fa-quote-right icon card-img-top"></i>
                  <p>
                    <i>
                      My daughter, Nehal, was always an Usain Bolt when it came
                      to studying. Running after her with books and what not,
                      was surely not my cup of tea. But now, things are the
                      other way around. With SparkleBox.School, she chases me to
                      play and learn with her. And she’s the one who explains
                      things to me. I just love it!
                    </i>
                  </p>
                  <img
                    src="https://sparklebox.school/img/Radha%20narayana.jpg"
                    className="card-img-top"
                    alt="img"
                    style={{
                      borderRadius: "100%",
                      width: "150px",
                      height: "150px",
                    }}
                  />
                  <h3>Radha Narayanan</h3>
                  <h5>Homemaker</h5>
                </div>

                {/* 3rd Review */}

                <div className="card h-100">
                  <i className="fas fa-quote-right icon card-img-top"></i>
                  <p>
                    <i>
                      My daughter is 4.5 years old and I cannot think about
                      giving her any average learning experience. My day is
                      mostly spent doing my office work and so for my wife too.
                      I acknowledge that nurturing a child is both our
                      responsibility, and when it comes to education, I ensure
                      only the best for our daughter. SparkleBox.School has been
                      that element in our family that gives us a great bonding
                      time. I can keep going on about it, but I think it’s only
                      best when parents experience it for themselves. I 100%
                      recommend it!
                    </i>
                  </p>
                  <img
                    src="https://sparklebox.school/img/Sahil.jpg"
                    className="card-img-top"
                    alt="img"
                    style={{
                      borderRadius: "100%",
                      width: "150px",
                      height: "150px",
                    }}
                  />
                  <h3>Sahil Surana</h3>
                  <h5>Entrepreneur</h5>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bodytestimonials;
