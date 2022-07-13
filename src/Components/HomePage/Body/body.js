import React from "react";
import "./bodycss.css";

const Body = () => {
  return (
    <>
      {/* Main Banner and the Form */}
      <div className="container-fluid home-banner">
        <div className="container form-container">
          <div className="row form-row">
            <div className="col-lg-6 non-form-col"></div>

            <div className="col-lg-6 form-col form-back-pattern1">
              <h3 className="form-heading pt-4 mb-0">
                Get pre-school delivered At your doorstep!
              </h3>
              <form
                className="modal-form"
                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSexnLS8astObW1fnJu8KtwzfepSZlbuE2P7J7rOTH_Qw2RQMA/formResponse"
                role="form"
                target="hidden_iframe"
                onSubmit="submitted=true;"
              >
                <script type="text/javascript">var submitted = false;</script>
                <iframe
                  name="hidden_iframe"
                  id="hidden_iframe"
                  style={{ display: "none" }}
                ></iframe>
                <label id="errormsg" className="text-danger"></label>
                <div className="form-group">
                  <input
                    placeholder="Name*"
                    required=""
                    type="text"
                    className="form-control"
                    id="name_lead"
                    name="entry.1649742070"
                    value=""
                    data-type="text"
                    aria-required="true"
                    aria-labelledby="fld_8768091Label"
                  />
                </div>
                <div className="form-group">
                  <div
                    className="phone-wrapper"
                    style={{ width: "100%", display: "flex" }}
                  >
                    <div className="country-code" style={{ width: "25%" }}>
                      <select
                        className="form-control"
                        style={{ paddingLeft: "11px" }}
                        id="ddlcountrycode"
                        name="entry.1061222319"
                      >
                        <option value="91" selected="" id="india">
                          (+91)
                        </option>
                        <option value="65" id="Singapore">
                          (+65)
                        </option>
                        <option value="971" id="UAE">
                          (+971)
                        </option>
                        <option value="44" id="UK">
                          (+44)
                        </option>
                        <option value="1" id="USA">
                          (+1)
                        </option>
                        <option value="84" id="Vietnam">
                          (+84)
                        </option>
                        <option value="49" id="Germany">
                          (+49)
                        </option>
                        <option value="60" id="Malaysia">
                          (+60)
                        </option>
                        <option value="7" id="others">
                          Others
                        </option>
                      </select>
                    </div>
                    <div className="phone-num" style={{ width: "75%" }}>
                      <input
                        placeholder="Phone Number*"
                        maxLength="10"
                        required=""
                        type="tel"
                        // onInput="numberOnly('phone_lead');"
                        className="form-control"
                        id="phone_lead"
                        name="entry.735495910"
                        value=""
                        data-type="text"
                        aria-required="true"
                        aria-labelledby="fld_8768091Label"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <input
                    placeholder="Email ID*"
                    type="email"
                    className="form-control"
                    id="emailid"
                    name="entry.1958421729"
                    value=""
                    data-type="text"
                    required=""
                  />
                </div>

                <div className="form-group">
                  <input
                    placeholder="Select City"
                    type="text"
                    className="form-control"
                    id="city"
                    name="entry.1028506557"
                    value=""
                    data-type="text"
                    required
                  />
                </div>

                <div className="form-group">
                  <select
                    className="form-control form-select"
                    id="grade_lead"
                    name="entry.1659070775"
                  >
                    <option value="Select Grade">Select Grade</option>
                    <option value="pre nursery">Pre Nursery</option>
                    <option value="nursery">Nursery</option>
                    <option value="k1">K1</option>
                    <option value="k2">K2</option>
                  </select>
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-block btn-warning modal-submit-btn"
                    id="k12-form"
                    value="submit"
                  >
                    Book A Free Demo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Banner and a slideshow */}
      <div className="extra-white"></div>
      <div className="container-fluid learn-journey">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7 p-0 learn-empty"></div>
            <div
              className="col-lg-5 col-md-5 p-0"
              style={{ overflow: "hidden" }}
            >
              <div className="owl-one owl-carousel owl-theme">
                <div className="learn-content item">
                  <div id="learn-slide-1">
                    <h3 className="blue01">
                      Welcome to <br />
                      <span className="black01">sparklebox.school</span> <br />a
                      place to build
                    </h3>
                    <h5 className="blue02">strong foundations for a</h5>
                    <h1 className="blue03">
                      brighter <br />
                      <span className="blue04">future</span>
                    </h1>
                  </div>
                </div>
                {/* <div className="learn-content item">
                  <div id="learn-slide-2">
                    <h2 className="boy-heading-1">
                      Come, begin your little one’s play and learn journey with
                      us!
                    </h2>

                    <p className="boy-para">
                      Are you worried about finding the right preschool for your
                      children? Tired of searching “best preschools near me”
                      which leads nowhere? Well, the search is finally over!
                      <br />
                      We present to you, SparkleBox.School, an all-in-one
                      homeschooling kit that is perfect for learning and
                      development in your child’s formative years. The ideal
                      combination of academics and extracurricular activities,
                      it is a child’s best tutor and a parent’s delight!
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Orange Backgroud and Span pics */}
      <div
        className="container-fluid home-banner1"
        style={{ backgroundColor: "#fbb03b" }}
      >
        <div className="container form-container">
          <div className="row form-row">
            <div className="col-lg-6 non-form-col banner-yellow-bg">
              <img
                class="img-responsive imgclass"
                src="https://sparklebox.school/img/Banner-yellow-bg.webp"
                alt="What Exactly is Sparklebox School"
                width="auto"
                height="auto"
              />
            </div>

            <div className="col-lg-6 non-form-col what-exactly-is-school">
              <div id="what-slide">
                <h2 className="toy-heading">
                  What exactly is
                  <br />
                  SparkleBox.School?
                </h2>

                <p className="toy-para">
                  SparkleBox.School is a carefully curated Learning Program for
                  pre-primary pupils, ranging from age 2 to 6. Packed with
                  workbooks, learning tools and do-it-yourselfers, the
                  curriculum promotes early fundamental learning by engaging
                  your child in play-based education. Delivered directly to your
                  doorstep, the programme also includes added features like
                  progress tracking, expert support, and instructional videos to
                  keep you involved in your child’s growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Span youTube videos */}
      <div className="container about-video">
        <div className="row">
          <div className="col-lg-6">
            <iframe
              width="100%"
              height="220"
              src="https://www.youtube.com/embed/eCKwanZ0EWw"
              title="Sakshi spills Ziva's secrets |SparkleBox.School - Best at-home preschool"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className="py-3 px-2">
              <p>
                Choosing a preschool is an important step in parenthood. Get all
                essential requirements for your toddler aged 2-6yr old, wrapped
                in a box! What's more? Designed by IIT & IIM Alumnus and Early
                Education Experts to ensure your child learns while having fun.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <iframe
              width="100%"
              height="220"
              src="https://www.youtube.com/embed/8KAshHi29Yo"
              title="Introduction : Sparklebox School "
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className="py-3 px-2">
              <p>
                SparkleBox.School is a mindfully chalked out hands-on,
                activity-based learning Program tailor-made for pre-primary
                students, from ages 2 to 6. The program delivers strong
                foundational learning in Literacy, Numeracy, Gross and fine
                motor skills and in social and emotional development of your
                child.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Button like div */}
      <div className="container icon-container">
        <h2 className="icon-btn-heading">HOW DOES IT WORKS?</h2>

        <div className="row">
          <div className="col-6 col-lg-4">
            <img
              src="https://sparklebox.school/img/1.webp"
              alt=""
              className="step-img hvr-float"
            />
            <h5 className="step-id">STEP 1:</h5>
            <p className="step-text">
              Register <br />
              with a 3, 6, 9 month/ <br />1 year plan
            </p>
          </div>

          <div className="col-6 col-lg-4">
            <img
              src="https://sparklebox.school/img/2.webp"
              alt=""
              className="step-img hvr-float"
            />
            <h5 className="step-id">STEP 2:</h5>
            <p className="step-text">
              Receive the <br />
              SparkleBox.School <br />
              at your doorstep
            </p>
          </div>

          <div className="col-6 col-lg-4">
            <img
              src="https://sparklebox.school/img/3.webp"
              alt=""
              className="step-img hvr-float"
            />
            <h5 className="step-id">STEP 3:</h5>
            <p className="step-text">
              Unbox week-wise <br />
              learning kits
            </p>
          </div>
          <div className="col-6 col-lg-4">
            <img
              src="https://sparklebox.school/img/4.webp"
              alt=""
              className="step-img hvr-float"
            />
            <h5 className="step-id">STEP 4:</h5>
            <p className="step-text">
              Explore and learn <br />
              from various activities <br />
              in the box
            </p>
          </div>
          <div className="col-6 col-lg-4">
            <img
              src="https://sparklebox.school/img/5.webp"
              alt=""
              className="step-img hvr-float"
            />
            <h5 className="step-id">STEP 5:</h5>
            <p className="step-text">
              Mark your child’s progress <br />
              on the development <br />
              checklist
            </p>
          </div>
          <div className="col-6 col-lg-4">
            <img
              src="https://sparklebox.school/img/6.webp"
              alt=""
              className="step-img hvr-float"
            />
            <h5 className="step-id">STEP 6:</h5>
            <p className="step-text">
              Talk to our expert <br />
              for any guidance
            </p>
          </div>
        </div>
      </div>

      {/* Parents Testamonials */}
      <div className="container testimonial-container">
        <h2 className="testimonial-heading">Parent's Testimonials</h2>
        <div className="row testimonial-row">
          <div className="col-lg-4 col-md-4 col-xs-12">
            <iframe
              width="100%"
              height="220"
              src="https://www.youtube.com/embed/a8wZBcv4yTY"
              title="Parent's Testimonial | How SparkleBox School Brings Fun & Learning Together"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-lg-4 col-md-4 col-xs-12">
            <iframe
              width="100%"
              height="220"
              src="https://www.youtube.com/embed/NUyueXNKuQs"
              title="Parent's Testimonial | Early Learning With SparkleBox School"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            {/* <video controls="controls"  class="parent-video zoom" poster="images/thumbnails/thumbnail-img-2.jpg">
			<source src="videos/parent-video-2.mp4" type="video/mp4">
			Your browser does not support the HTML5 Video element.
		</video> */}
          </div>
          <div className="col-lg-4 col-md-4 col-xs-12">
            <iframe
              width="100%"
              height="220"
              src="https://www.youtube.com/embed/6sp040npE0Y"
              title="Parent's Testimonial | Learning While Playing With SparkleBox School"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            {/* <video controls="controls" class="parent-video zoom" poster="images/thumbnails/thumbnail-img-3.jpeg">
			<source src="videos/parent-video-3.mp4" type="video/mp4">
			Your browser does not support the HTML5 Video element.
		</video> */}
          </div>
        </div>
      </div>

      {/* Text below parent's Testamonials */}
      <div className="container text-center">
        <div className="row">
          <h4>
            Preschool At Home - Take the First Step to School with
            Sparklebox.School
          </h4>
          <p className="fadeout-para">
            Top pre-school learning at home. A child’s starting years in school
            is always challenging. Even inside brightly-coloured classrooms your
            children will face multiple obstacles. But unfortunately, you will
            find yourself unable to protect your little ones under such
            circumstances. This is one of the main reasons why homeschooling is
            better than traditional schooling. With Sparklebox.School you can
            train your child to face their obstacles head-on.
          </p>
          <h4>
            Preschool Learning - Best Start for Your Kid’s School
            <span id="dots"></span>
          </h4>
          <div id="fadeoutId" className=""></div>

          <span id="more">
            <p>
              The importance of academics in a child’s life can no longer be
              ignored. Something as rudimentary as preschool learning can change
              the course of a young student’s life. Prenursery equips children
              with the attitude and education one needs to flourish in life.
              Homeschooling a child before they confront the difficulties and
              challenges of regular school life strengthens their foundation.
              Sparklebox's at-home play preschool curriculum uses the specially
              designed learning principles and patterns to achieve this. Our
              preschool programme is created after a thorough examination of a
              child's developing mind and body. Our nursery learning kit packed
              with fun activities helps your little ones put their intelligence
              to use and thus helps strengthen and nurture their intellectual
              capacity.
            </p>

            <h4>
              Did You Know Well-Organized Homeschooling Affects A Child's
              Efficiency?
            </h4>
            <p>
              It is said that "home is a child's first classroom," because it is
              here that a youngster learns to play, read, behave, and comprehend
              facts and knowledge. A good home preschool strengthens that
              foundation even more. Sparklebox School's activity-based preschool
              curriculum makes learning easier and more enjoyable for children.
              We believe in preparing a kid for future challenges, so our
              at-home preschool focuses on interactions that illustrate a
              relationship between activities and concepts. Furthermore, this is
              a critical age for a child, and a well-run preschool at home helps
              to develop the raw and impressionable minds of children. You can
              trust Sparklebox School to tick all the right boxes.
            </p>
          </span>
          <button
            onclick="myFunction()"
            id="myBtn"
            className="btn btn-lg btn-dark read-more-btn"
          >
            Read more
          </button>
        </div>
      </div>
    </>
  );
};

export default Body;
