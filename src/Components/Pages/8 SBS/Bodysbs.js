import React from "react";
import "./sbs.css";
import "../../../maincss.css";

const Bodysbs = () => {
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

      {/* About US */}
      <section className="about-us">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <h2 className="text-center bg-white about-div">About Us</h2>
            </div>
            <div className="col-lg-12 about-text">
              <p className="text-center">
                We are an activity-based learning program that helps kids learn
                new concepts and ideas, by engaging them in a range of fun
                activities. Our methodically devised models, guides and
                instruments facilitate learning through a visual and
                learn-by-doing approach.
              </p>
              <br />
              <p className="text-center">
                {" "}
                SBS+ is a complete resource kit formulated for students aged 2
                to 6. Packed with an activity-based curriculum, instructive
                videos, and daily guided lessons in diverse non-academic
                subjects, SBS+ offers the benefits of Preschools from the
                convenience of your Home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="plans">
        <div className="container">
          <div className="row justify-content-center">
            <div>
              <h2 className="text-center text-white plan-head">PLANS</h2>
            </div>
            <div className="plan-table">
              <div className="tableheading">
                <h2 className="th-head">Deliverables</h2>
                <h2 className="th-head">SBS</h2>
                <h2 className="th-head">SBS+</h2>
              </div>
              <div
                className="col-lg-12 "
                style={{
                  display: "flex",
                  paddingLeft: "unset",
                  paddingRight: "unset",
                }}
              >
                <div className="table-responsive">
                  <center>
                    <table className="table table-new">
                      <tbody>
                        <tr>
                          <td>Learning Kit</td>
                          <td rowSpan={8}>
                            <div className="vl" />
                          </td>
                          <td>
                            <i
                              className="fa fa-check fa-lg check-mark-blue"
                              aria-hidden="true"
                            />
                          </td>
                          <td rowSpan={8}>
                            <div className="vl" />
                          </td>
                          <td>
                            <i
                              className="fa fa-check fa-lg check-mark-blue"
                              aria-hidden="true"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td width="60%">Videos Library</td>
                          <td>
                            <i
                              className="fa fa-check fa-lg check-mark-blue"
                              aria-hidden="true"
                            />
                          </td>
                          <td>
                            <i
                              className="fa fa-check fa-lg check-mark-blue"
                              aria-hidden="true"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Induction Session</td>
                          <td>
                            <i
                              className="fa fa-check fa-lg check-mark-blue"
                              aria-hidden="true"
                            />
                          </td>
                          <td>
                            <i
                              className="fa fa-check fa-lg check-mark-blue"
                              aria-hidden="true"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Weekly Progress Reports</td>
                          <td>
                            <i
                              className="fa fa-check fa-lg check-mark-blue"
                              aria-hidden="true"
                            />
                          </td>
                          <td>
                            <i
                              className="fa fa-check fa-lg check-mark-blue"
                              aria-hidden="true"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Counselor Access</td>
                          <td>
                            <i
                              className="fa fa-check fa-lg check-mark-blue"
                              aria-hidden="true"
                            />
                          </td>
                          <td>
                            <i
                              className="fa fa-check fa-lg check-mark-blue"
                              aria-hidden="true"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Live Sessions</td>
                          <td className="text-white">Every Saturday</td>
                          <td className="text-white">5 days a Week</td>
                        </tr>
                        <tr>
                          <td>Parent Session</td>
                          <td className="text-white">Once a Month</td>
                          <td className="text-white">Every Week</td>
                        </tr>
                        <tr>
                          <td>Parent Dashboard</td>
                          <td>
                            <i
                              className="fa fa-check fa-lg check-mark-blue"
                              aria-hidden="true"
                            />
                          </td>
                          <td>
                            <i
                              className="fa fa-check fa-lg check-mark-blue"
                              aria-hidden="true"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </center>
                </div>
              </div>
            </div>
            <div
              className="col-lg-12 plans-table"
              style={{ display: "flex", margin: 20 }}
            >
              <div className="col-lg-6  text-center">
                <h2 className="th-head">Deliverables</h2>
                {/* <hr class="text-white"> */}
                <ol>
                  <li>
                    <p className="text-left mt-3">
                      {" "}
                      learning kit for all grades based on the subscription plan
                    </p>
                  </li>
                  <li>
                    <p
                      className="text-left mt-4"
                      style={{
                        marginTop: "35px !important",
                        marginBottom: "-20px !important",
                      }}
                    >
                      {" "}
                      Videos : access to our vast library of instructive videos
                    </p>
                  </li>
                  <li>
                    <p className="text-left mt-5"> Formal Induction session</p>
                  </li>
                  <li>
                    <p className="text-left mt-4">
                      Track the progress of your child with our weekly progress
                      reports
                    </p>
                  </li>
                  <li>
                    <p
                      className="text-left mt-4"
                      style={{
                        marginTop: "35px !important",
                        marginBottom: "-20px !important",
                      }}
                    >
                      {" "}
                      Connect with our counselors and subject-matter experts to
                      aid your child's development
                    </p>
                  </li>
                  <li>
                    <p className="text-left mt-5">Access to live sessions</p>
                  </li>
                  <li>
                    <p className="text-left mt-4">Parent Session</p>
                  </li>
                  <li>
                    <p className="text-left mt-3">
                      {" "}
                      Access to our parent portal containing sessions, activity
                      videos and progress <br /> reports of your child
                    </p>
                  </li>
                </ol>
              </div>
              <div className="bordering"></div>
              <div className="col-lg-3 text-center" style={{ display: "grid" }}>
                <h2 className="th-head">SBS</h2>
                {/* <hr class="text-white sbs"> */}
                <p className="mt-2">
                  <img
                    className="tick first-tick"
                    src="https://sparklebox.school/img/Tick-Icon.png"
                    alt="tick icon"
                  />
                </p>
                <p className="mt-2">
                  <img
                    className="tick"
                    src="https://sparklebox.school/img/Tick-Icon.png"
                    alt="tick icon"
                  />
                </p>
                <p className="mt-2">
                  {" "}
                  <img
                    className="tick"
                    src="https://sparklebox.school/img/Tick-Icon.png"
                    alt="tick icon"
                  />
                </p>
                <p className="mt-2">
                  <img
                    className="tick"
                    src="https://sparklebox.school/img/Tick-Icon.png"
                    alt="tick icon"
                  />
                </p>
                <p className="mt-2">
                  <img
                    className="tick"
                    src="https://sparklebox.school/img/Tick-Icon.png"
                    alt="tick icon"
                  />
                </p>
                <p className="text-white mt-3">Every Saturday</p>
                <p className="text-white mt-1">Once a Month</p>
                <p className="mt-2">
                  <img
                    className="tick"
                    src="https://sparklebox.school/img/Tick-Icon.png"
                    alt="tick icon"
                  />
                </p>
              </div>
              <div className="bordering"></div>
              <div className="col-lg-3 text-center" style={{ display: "grid" }}>
                <h2 className="th-head">SBS+</h2>
                {/* <hr class="text-white sbsp"> */}
                <p className="mt-2">
                  <img
                    className="tick first-tick"
                    src="https://sparklebox.school/img/Tick-Icon.png"
                    alt="tick icon"
                  />
                </p>
                <p className="mt-2">
                  <img
                    className="tick"
                    src="https://sparklebox.school/img/Tick-Icon.png"
                    alt="tick icon"
                  />
                </p>
                <p className="mt-2">
                  <img
                    className="tick"
                    src="https://sparklebox.school/img/Tick-Icon.png"
                    alt="tick icon"
                  />
                </p>
                <p className="mt-2">
                  <img
                    className="tick"
                    src="https://sparklebox.school/img/Tick-Icon.png"
                    alt="tick icon"
                  />
                </p>
                <p className="mt-2">
                  <img
                    className="tick"
                    src="https://sparklebox.school/img/Tick-Icon.png"
                    alt="tick icon"
                  />
                </p>
                <p className="text-white mt-2" style={{ marginTop: 29 }}>
                  5 days a Week
                </p>
                <p className="text-white mt-1">Every Week</p>
                <p className="mt-2">
                  <img
                    className="tick"
                    src="https://sparklebox.school/img/Tick-Icon.png"
                    alt="tick icon"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Ooutcomes */}
      <section className="learningoutcomes">
        <div className="container">
          <div className="row">
            <div className="bottom35">
              <h2 className="text-center learn-txt">LEARNING OUTCOMES:</h2>
            </div>
            <div className="col-lg-5 slidesout">
              <div
                className=" bg-white col-lg-12  bottom20 outcometxt outcomeleft wow  wow fadeInLeft"
                data-wow-duration="4s"
              >
                <p>
                  The learning kit will strengthen your child's basics without
                  requiring them to step outside in these deadly pandemic times.
                </p>
              </div>
              <div
                className=" bg-white col-lg-12 bottom20 outcometxt outcomeright wow  wow fadeInRight"
                data-wow-duration="4s"
              >
                <p>
                  Our learning kits aid in the development of motor skills in
                  children, including pincer grasp, bilateral coordination, and
                  oral motor abilities.
                </p>
              </div>
              <div
                className="bg-white col-lg-12 bottom20 outcometxt  outcomeleft wow fadeInLeft"
                data-wow-delay="200ms"
              >
                <p>
                  The programme covers both non academic
                  <br />
                  and academic courses for all around <br />
                  development of your child.
                </p>
              </div>
              <div
                className="bg-white col-lg-12 bottom20 outcometxt outcomeright wow fadeInRight"
                data-wow-delay="200ms"
              >
                <p>
                  Through activites that promote critical thinking and problem
                  solving, the curriculum aids in the development of cognitive
                  skills.
                </p>
              </div>
            </div>
            <div className="col-lg-4" />
            <div className="col-lg-4" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Bodysbs;
