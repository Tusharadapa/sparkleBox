import React from "react";
import "../../../../maincss.css";
import "./pnfy.css";

const Bodypnfy = () => {
  return (
    <>
      <h1 className="text-center prenur-head">
        Pre-Nursery Curriculum & Syllabus (full year)
      </h1>

      {/* 4 Containers */}
      <div className="container pre-nursery">
        <div className="row">
          <div className="col-lg-6 nursery-box">
            <div className="row">
              <div className="col-8 box-text-div">
                <h2 className="box-h1">Literacy</h2>
                <ul className="pre-ul">
                  <li>Developing phonemic awareness</li>
                  <li>Integrating sounds and letters</li>
                  <li>Vocabulary enrichment through stories</li>
                  <li>Picture recognition and Sensorial learning</li>
                </ul>
              </div>
              <div className="col-4 box-img-div">
                <img
                  src="https://sparklebox.school/img/literacy_1.png"
                  alt=""
                  className="box-img"
                  width="85%"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 nursery-box">
            <div className="row">
              <div className="col-8 box-text-div">
                <h2 className="box-h1">Numeracy</h2>
                <ul className="pre-ul">
                  <li>Understanding basic shapes</li>
                  <li>Familiarizing with numbers</li>
                  <li>Recognizing primary colors</li>
                  <li>Learning pre-number concepts</li>
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
                <h2 className="box-h1"> Visual Arts</h2>
                <ul className="pre-ul">
                  <li>Identifying colours and shapes</li>
                  <li>Developing pincer grip</li>
                  <li>
                    Learning to trace over lines,colouring and printing skills
                  </li>
                  <li>Developing creavitivity and imagination</li>
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
                <h2 className="box-h1">Skill Development</h2>
                <ul className="pre-ul">
                  <li>Interactive storytelling sessions</li>
                  <li>Learning action rhymes </li>
                  <li>Understanding words and instructions</li>
                  <li>Developing awareness of self and surroundings.</li>
                </ul>
              </div>
              <div className="col-4 box-img-div">
                <img
                  src="https://sparklebox.school/img/skill-dev_new.png"
                  alt="skill"
                  className="box-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text below the containers */}
      <div class="container pre-nur-txt">
        <h2 class="text-center">
          Pre-Nursery Syllabus by Sparklebox.School is joyful yet educational!
        </h2>
        <p>
          There is a lot of pressure on parents nowadays. As you continue to
          find an ever-intensifying battle at your workplace, the struggle to
          maintain a healthy work-life balance becomes ever-tougher. You might
          feel that, as parents, you do not have enough time and energy for your
          child. There are so many competitive pressures today that can make it
          hard to keep up with what kids need nowadays; especially when your
          child’s learning is at such an early stage of development. Firstly,
          you. Like all parents, do a lot for your kids, okay? The real question
          is, are you doing enough to help them lay a solid foundation for
          long-term success? The key is finding a balance between spending
          quality time and bonding with your little one while making sure that
          their academic and creative needs are tendered to effectively, which
          can be hard in today’s world. What if we told you that it is possible
          to have the best of both worlds? Parents are expected to spend quality
          time with their children while ensuring they get an excellent
          education. When you enroll your child with us, we guarantee that the
          second half of the above demand is completely taken care of. We have
          developed the perfect homeschooling program to comprehensively cover
          the syllabus for pre-nursery class! With our entire program striving
          continuously to find the perfect balance between fun and learning in
          your child’s daily routine, your child can find phenomenal
          development, that too at home!{" "}
        </p>
      </div>
      <div class="container pre-nur-txt1">
        <h2 class="text-center">
          Get ready for your child's Syllabus for Pre-Nursery Class with us!
        </h2>
        <p>
          Is your child’s preschool pre-nursery syllabus bothering you and your
          kid? Well, no reason to worry now because we are covering the monthly
          syllabus for pre-nursery class. Your child will be learning with
          expertly designed classes to efficiently cover the whole syllabus for
          pre-nursery class! Our learning curriculum includes every
          age-appropriate subject and pre-nursery syllabus that are needed to
          support your little one’s grasp as well as revision of the course. Not
          just your kids, but you are also going to love our literacy activities
          for pre-nursery toddlers! Our literacy classes from the complete
          pre-nursery syllabus guide will include integrating phonemic
          awareness, sounds and letters. Picture recognition is another core
          part of the course material. Research has shown that picture
          recognition, when started with at an early stage, has proven helpful
          in enhancing a child's memory and vocabulary skills! We'll also
          explore colors in depth by learning about primary shades! Creative
          toddlers now have a chance to express themselves with art. The
          prerecorded dance moves illustrated in this program teach kids how to
          use movement for expression which means they'll learn new skills while
          having fun! Don't let it go to waste! Sign up for our learning program
          and get a head start on your toddler's next adventure.
        </p>
      </div>
    </>
  );
};

export default Bodypnfy;
