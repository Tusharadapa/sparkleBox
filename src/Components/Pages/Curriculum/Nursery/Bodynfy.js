import React from "react";
import "./nfy.css";

const Bodynfy = () => {
  return (
    <>
      <h1 className="inl">Nursery Syllabus & Curriculum (full year)</h1>

      {/* 4 Containers */}
      <div className="container pre-nursery">
        <div className="row">
          <div className="col-lg-6 nursery-box">
            <div className="row">
              <div className="col-8 box-text-div">
                <h2 className="box-h1">Literacy</h2>
                <ul className="nursery-ul">
                  <li>Developing phonemic awareness</li>
                  <li>Integrating sounds and letters</li>
                  <li>Tracing uppercase letters</li>
                  <li>Enhancing vocabulary through stories and picture talk</li>
                  <li>Learning action rhymes</li>
                  <li>Learning about surroundings</li>
                </ul>
              </div>
              <div className="col-4 box-img-div">
                <img
                  src="https://sparklebox.school/img/literacy_1.png"
                  alt=""
                  className="box-img"
                  width="85%"
                  style={{ paddingTop: 3 }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 nursery-box">
            <div className="row">
              <div className="col-8 box-text-div">
                <h2 className="box-h1">Numeracy</h2>
                <ul className="nursery-ul">
                  <li>Understanding pre-number concepts</li>
                  <li>Recognizing colors</li>
                  <li>Learning shapes</li>
                  <li>Understanding basic measurements</li>
                  <li>Counting and writing number</li>
                  <li>Understanding basic position</li>
                </ul>
              </div>
              <div className="col-4 box-img-div">
                <img
                  src="https://sparklebox.school/img/numeracy_new.png"
                  alt=""
                  className="box-img"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 nursery-box">
            <div className="row">
              <div className="col-8 box-text-div">
                <h2 className="box-h1">Arts</h2>
                <ul className="nursery-ul">
                  <li>Identifying colours</li>
                  <li>Developing pincer grip and tactile learning</li>
                  <li>Learning to trace and colour in one direction</li>
                  <li>Learning basic paper craft</li>
                  <li>Developing skills to use basic art tools</li>
                  <li>Developing creativity and imagination</li>
                </ul>
              </div>
              <div className="col-4 box-img-div">
                <img
                  src="https://sparklebox.school/img/arts_new.png"
                  alt=""
                  className="box-img"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 nursery-box">
            <div className="row">
              <div className="col-8 box-text-div">
                <h2 className="box-h1">Dance</h2>
                <ul className="nursery-ul">
                  <li>Build memory and dig ideas</li>
                  <li>Explore and control body movements</li>
                  <li>Improve flexibility</li>
                  <li>Develop fitness and creativity</li>
                  <li>Enhancing imagination</li>
                  <li>Develop memory</li>
                </ul>
              </div>
              <div className="col-4 box-img-div">
                <img
                  src="https://sparklebox.school/img/skill-dev_new.png"
                  alt=""
                  className="box-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text Below the containers */}
      <div className="container pre-nur-txt">
        <h2 style={{ textAlign: "center" }}>
          Stop Stressing Over Your Kid's Nursery Syllabus!
        </h2>
        <p>
          How many times have you found yourself anxious when your child is
          bored and complaining about it? You are not alone. Many parents often
          feel their 3-year-old's boredom or frustration, which can lead them
          towards negative emotions such as anger towards the child for being so
          cranky all day long! It might seem like there isn't much we adults can
          do to help alleviate this problem - after all, who has the time in
          today’s world? Life has become so demanding that you barely get time
          for yourself, so covering the nursery syllabus of your child is
          another task in itself. You're constantly on the move, jumping between
          work and home to meet all of those responsibilities while also having
          to keep up with your child’s learning! Sometimes it feels like we only
          have a few minutes to accomplish what we need to achieve. And with all
          these activities, deadlines, and meetings popping up left, right, and
          centre - how are you supposed to find time for yourself and for
          completing your child’s nursery syllabus? Don't you need more time to
          play and spend quality time with your kids? Wouldn't it be great if
          you knew how to make the best of this scarce slice that's leftover on
          a busy day while covering the nursery syllabus for your toddler? Well,
          you're in luck because we have one absolute nursery curriculum to
          answer all these questions and apprehensions. So, what is stopping you
          from getting your hands on this amazing nursery curriculum covering
          the complete nursery class syllabus? Get back to us now, and we will
          tell you how this curriculum for nursery class works month wise!{" "}
        </p>
      </div>
      <div className="container pre-nur-txt1">
        <h2 style={{ textAlign: "center" }}>
          Need a Nursery Curriculum Program? Get the best one!
        </h2>
        <p>
          The goal of our learning program is not only to create an engaging and
          rewarding experience for the nursery syllabus. But, also to help
          children develop future skills that will set them apart from peers and
          friends in their academic career - which we know all too well isn’t
          easy without these kinds of resources available early on. Your child
          will be covering all of the essential nursery class syllabus skills
          for their future success! The ever-thrilling activities of our
          learning program for the nursery syllabus are designed by field
          experts that will assist in preparing your child from head to toe for
          a better and brighter tomorrow! You will be starting with some skills
          that are universal across the board. Later, you and your little champ
          will be dealing with more specific ones including advanced literacy
          along with learning numeracy, arts, and dance skills! Get started for
          this exciting journey of your toddler with this great curriculum for
          nursery class month wise.
        </p>
      </div>
    </>
  );
};

export default Bodynfy;
