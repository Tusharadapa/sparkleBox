import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./whyus.css";

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

const BodyWhyUs = () => {
  return (
    <>
      <section
        id="whybanner"
        className="flex-column justify-content-center align-items-center"
      ></section>

      <div className="svg-slider-bottom-holder">
        <div className="svg-slider-bottom"></div>
      </div>

      <section id="about" className="single-feature padding">
        <div className="container text-center">
          <p className="para1-why">
            SparkleBox School is the brainchild of highly skilled educators who
            have had more than 10 years of experience in the education sector.
            We are the pioneers of revolutionizing homeschooling with innovative
            brands like AOL School - a complete CBSE online school bringing the
            physical school experience to screens, and SparkleBox educational
            kits - an innovative activity-based learning method that makes
            learning as fun as playing.
          </p>
          <br />
          <p className="para1-why para-why">
            The first ingredient of our thought-through educational kits is -
            Play! Nothing entices a growing child as much as a toy that
            challenges them to do something. Their minds are curious and hungry
            to learn. That’s exactly why we have crafted kits and toys that
            encourage their learning, with play! All the activities in the box
            stimulate their thinking for possible outcomes that in the process
            make them learn various concepts. And just like that, Literacy,
            Numeracy, Art, Dance and many more subjects become ‘handy’ to your
            child’s learning.
          </p>
          <br />
          <p className="para2-why">
            <a href="#">So don't really get them studying,Get Them Playing!</a>
          </p>
        </div>
      </section>

      <section className="carou">
        <div className="container pt-5" style={{ overflow: "hidden" }}>
          <div className="row">
            <div className="col-md-12">
              <OwlCarousel {...options}>
                <div
                  className="sameheight"
                  style={{ backgroundColor: "#026cb8" }}
                >
                  <img
                    src="https://sparklebox.school/img/Icons-02.png"
                    alt="CL"
                  ></img>
                  <h5 style={{ margin: "20px", color: "white" }}>
                    Creative Learning
                  </h5>
                  <p style={{ margin: "20px", color: "white" }}>
                    Your Child has numerous ways to learn, the gamified way!
                  </p>
                </div>

                <div
                  className="sameheight"
                  style={{ backgroundColor: "#ffb902" }}
                >
                  <img
                    style={{ width: "150px", height: "151px" }}
                    src="https://sparklebox.school/img/Icons-01.png"
                    alt="CD"
                  ></img>
                  <h5 style={{ margin: "20px", color: "white" }}>
                    Cognitive Development
                  </h5>
                  <p style={{ margin: "20px", color: "white" }}>
                    Boost your Child's cognitive development with several
                    hands-on activities
                  </p>
                </div>

                <div
                  className="sameheight"
                  style={{ backgroundColor: "#ff4a51" }}
                >
                  <img
                    style={{ width: "150px", height: "151px" }}
                    src="https://sparklebox.school/img/Icons-03.png"
                    alt="VA"
                  ></img>
                  <h5 style={{ margin: "20px", color: "white" }}>
                    Various Activities
                  </h5>
                  <p style={{ margin: "20px", color: "white" }}>
                    Several diverse activities in a box to explore!
                  </p>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BodyWhyUs;
