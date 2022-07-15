import React from "react";
import "./whyus.css";
import "../../../maincss.css";

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

      <section>
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-12">
              <div id="services-slider" className="owl-carousel">
                <div className="item">
                  <div className="service-box bg-orange">
                    <span className="bottom25">
                      <img
                        src="https://sparklebox.school/img/Icons-01.png"
                        alt="icons"
                      />
                    </span>
                    <h4 className="bottom10 text-nowrap">
                      <a href="javascript:void(0)" className="font-22">
                        Cognitive Development{" "}
                      </a>
                    </h4>
                    <p>
                      {" "}
                      Boost your child’s cognitive development with several
                      hands-on activities.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="service-box bg-red">
                    <span className="bottom25">
                      <img
                        src="https://sparklebox.school/img/Icons-03.png"
                        alt="icons"
                      />
                    </span>
                    <h4 className="bottom10">
                      <a href="javascript:void(0)" className="font-22">
                        Various Activities
                      </a>
                    </h4>
                    <p>Several diverse activities in a box to explore!</p>
                  </div>
                </div>
                <div className="item">
                  <div className="service-box bg-blue">
                    <span className="bottom25">
                      <img
                        src="https://sparklebox.school/img/Icons-02.png"
                        alt="icons"
                      />
                    </span>
                    <h4 className="bottom10">
                      <a href="javascript:void(0)" className="font-22">
                        Creative Learning
                      </a>
                    </h4>
                    <p>
                      Your child has numerous ways to learn,the gamified way!.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BodyWhyUs;
