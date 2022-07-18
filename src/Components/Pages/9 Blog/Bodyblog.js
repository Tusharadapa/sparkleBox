import React from "react";
import "./blog.css";
import "../../../maincss.css";

const Bodyblog = () => {
  return (
    <>
      <section className="">
        <div className="container">
          <div className="header-buttons">
            <br />
            <br />
            <a
              type="button"
              className="btn btn-danger"
              href="https://sparklebox.school/blog"
            >
              All
            </a>
            <a
              type="button"
              className="btn btn-light"
              href="https://sparklebox.school/blog/category/learning-and-reading"
            >
              Learning and Reading
            </a>
            <a
              type="button"
              className="btn btn-light"
              href="https://sparklebox.school/blog/category/parenting-solutions"
            >
              Parenting Solutions
            </a>
            <a
              type="button"
              className="btn btn-light"
              href="https://sparklebox.school/blog/category/health-and-nutrition"
            >
              Health And Nutrition
            </a>
            <a
              type="button"
              className="btn btn-light"
              href="https://sparklebox.school/blog/category/social-skills-blogs"
            >
              Social Skills Blogs
            </a>
            <a
              type="button"
              className="btn btn-light"
              href="https://sparklebox.school/blog/category/preschool-and-nursery"
            >
              Preschool and Nursery
            </a>
            <a
              type="button"
              className="btn btn-light"
              href="https://sparklebox.school/blog/category/creativity-blogs"
            >
              Creativity Blogs
            </a>
            <br />
            <br />
          </div>
          <div className="row pagination active" data-page={1}>
            {" "}
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/nrznlgrowthmindbanner.png"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-build-a-growth-mindset-in-your-kids"
                    className="card-text text-center m_title"
                  >
                    <b> How to build a growth mindset in your kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Jul 16/2022
                  </p>
                  <p className="card-text text-center">
                    For a child's success in life, it is important to have a
                    growth mindset. Here's how you, as a parent, can help
                    encourage a growth mindset in your kids.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-build-a-growth-mindset-in-your-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/woszzgrowthmindbanner.png"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/evolution-of-language-curious-questions-with-answers"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Evolution of language - Curious questions with answers
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Jul 15/2022
                  </p>
                  <p className="card-text text-center">
                    Have you ever wondered how language evolved? In this
                    article, we explore the history of language and how it has
                    changed over time.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/evolution-of-language-curious-questions-with-answers"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/aslpsthalassemiabanner.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/health-and-nutrition"
                    className="btn
      btn-primary            "
                  >
                    Health And Nutrition
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/thalassemia-in-kids-symptoms-and-care"
                    className="card-text text-center m_title"
                  >
                    <b> Thalassemia in kids | Symptoms, and care</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Jul 11/2022
                  </p>
                  <p className="card-text text-center">
                    Thalassemia is a blood disorder passed down from parents to
                    their children. This blog discusses Thalassemia in kids, its
                    symptoms, and care.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/thalassemia-in-kids-symptoms-and-care"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/rxcwfscreentimebanner.png"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/the-side-effects-of-excessive-screen-time-in-kids-sparkleboxschool"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      The side effects of excessive screen time in kids |
                      Sparklebox.school
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Jul 06/2022
                  </p>
                  <p className="card-text text-center">
                    Do you feel your child is spending too much time in front of
                    a screen. You need to know about the side effects of screen
                    time in kids.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/the-side-effects-of-excessive-screen-time-in-kids-sparkleboxschool"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/phpnehelicopterparentingbanner.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/helicopter-parenting-sparkleboxschool"
                    className="card-text text-center m_title"
                  >
                    <b> Helicopter parenting | Sparklebox.School</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Jul 01/2022
                  </p>
                  <p className="card-text text-center">
                    Do you ever feel that you are hovering over your child like
                    a helicopter? This article will explain what is helicopter
                    parenting and provide you with an insight into the effects
                    of it on your child.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/helicopter-parenting-sparkleboxschool"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/mbijgrainbanner.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/what-causes-rain-facts-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b> What causes rain | Facts for kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Jun 27/2022
                  </p>
                  <p className="card-text text-center">
                    Learn about the cause of rain and how it plays an important
                    role in the water cycle. This blog post explores the science
                    behind rainfall and how it benefits the environment.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/what-causes-rain-facts-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/tobpmsolarsystembanner.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-primary            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/exploring-the-solar-system-with-sparkle-box"
                    className="card-text text-center m_title"
                  >
                    <b> Exploring the solar system with sparkle box</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Jun 15/2022
                  </p>
                  <p className="card-text text-center">
                    Want to teach your child about the solar system? This blog
                    post will show you why the solar system is so important for
                    kids to learn about and how you can teach them.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/exploring-the-solar-system-with-sparkle-box"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/fvucusummervationactivitesbanner.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/creativity-blogs"
                    className="btn
      btn-success            "
                  >
                    Creativity Blogs
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/15-summer-activities-to-keep-kids-brain-active-in-vacation"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      15 Summer Activities To Keep Kids' Brain Active in
                      vacation
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Jun 13/2022
                  </p>
                  <p className="card-text text-center">
                    Just because school is out for the summer, it doesn't mean
                    that learning has to stop. Summer can be the perfect time to
                    reinforce what your kids have already learned or introduce
                    them to new concepts and skills.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/15-summer-activities-to-keep-kids-brain-active-in-vacation"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/ruouclifeskillsbanner.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-primary            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/life-skills-to-teach-your-kid-by-age-of-10"
                    className="card-text text-center m_title"
                  >
                    <b> Life skills to teach your kid by age of 10</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Jun 06/2022
                  </p>
                  <p className="card-text text-center">
                    It is never too early to teach your kids important life
                    skills. By age 10, your child should know how to budget,
                    cook, do laundry, and more.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/life-skills-to-teach-your-kid-by-age-of-10"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/uplreextra-curricularactivitiesbanner.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-success            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/extra-curricular-activities-for-preschooler"
                    className="card-text text-center m_title"
                  >
                    <b> Extra curricular activities for preschooler</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    May 31/2022
                  </p>
                  <p className="card-text text-center">
                    Extracurricular activity is a great way to keep kids engaged
                    and help them learn new skills. Check out our list of
                    activities for both educational and fun preschoolers!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/extra-curricular-activities-for-preschooler"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/mjphxnumericallearningbanner.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-primary            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/fun-number-learning-activities-to-try-with-your-kid-this-summer"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Fun number learning activities to try with your kid this
                      summer
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    May 25/2022
                  </p>
                  <p className="card-text text-center">
                    Get some great ideas about learning activities to try with
                    your kids this summer that is not only fun but also enhance
                    your kid’s numerical skill.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/fun-number-learning-activities-to-try-with-your-kid-this-summer"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/lzmsfholisticdevelopmentbanner.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-can-you-support-the-holistic-development-of-children"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      How can you support the holistic development of children
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    May 24/2022
                  </p>
                  <p className="card-text text-center">
                    The overall development of intellectual, mental, emotional,
                    and social well-being is very crucial for your child. The
                    holistic development of your child is an important milestone
                    in the developmental process of the child.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-can-you-support-the-holistic-development-of-children"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pagination" data-page={2}>
            {" "}
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/uadtaworld-earth-day.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-primary            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-teach-the-significance-of-world-earth-day-to-the-child"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      How to teach the significance of world Earth day to the
                      child
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Apr 22/2022
                  </p>
                  <p className="card-text text-center">
                    On this Earth Day let us educate our children about the
                    significance of World Earth Day. Here's how you can teach
                    the importance of this day.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-teach-the-significance-of-world-earth-day-to-the-child"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/uggxelessons-good-friday.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-success            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/lessons-children-can-learn-from-good-friday"
                    className="card-text text-center m_title"
                  >
                    <b> Lessons children can learn from Good Friday</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Apr 18/2022
                  </p>
                  <p className="card-text text-center">
                    Good Friday teaches children various things such as empathy,
                    compassion, sacrificial love, and forgiveness. These lessons
                    will help us make the world a better place.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/lessons-children-can-learn-from-good-friday"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/ldszc10-signs-abuse.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/10-signs-to-identify-psychological-abuse-in-children"
                    className="card-text text-center m_title"
                  >
                    <b> 10 signs to identify Psychological abuse in children</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Apr 18/2022
                  </p>
                  <p className="card-text text-center">
                    Psychological abuse has a long-term impact on a child’s
                    development and can cause significant emotional and
                    psychological damage.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/10-signs-to-identify-psychological-abuse-in-children"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/stwxnADHD.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/health-and-nutrition"
                    className="btn
      btn-success            "
                  >
                    Health And Nutrition
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-deal-with-attention-deficit-hyperactivity-disorder-adhd-in-preschool-kids"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      How to deal with Attention Deficit Hyperactivity Disorder
                      (ADHD) in preschool kids
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Apr 12/2022
                  </p>
                  <p className="card-text text-center">
                    It's natural to feel unsure about how to manage your child's
                    ADHD symptoms. But don't worry - we have got you covered!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-deal-with-attention-deficit-hyperactivity-disorder-adhd-in-preschool-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/lxjpqhomeschool.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-primary            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-plan-a-homeschool-curriculum-for-your-child"
                    className="card-text text-center m_title"
                  >
                    <b> How to plan a homeschool curriculum for your child</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Apr 11/2022
                  </p>
                  <p className="card-text text-center">
                    Wondering how to start homeschooling for your kid? There is
                    no single answer to this question. However, some general
                    tips can help you get started.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-plan-a-homeschool-curriculum-for-your-child"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/rytwdcreative-activities.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/5-creative-activities-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b> 5 Creative Activities for Kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Apr 07/2022
                  </p>
                  <p className="card-text text-center">
                    Creativity helps your little energetic kid engage in fun
                    activities that are an important part of a child's
                    development.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/5-creative-activities-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/wbjunsix-healthy-ways.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-primary            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/6-healthy-ways-to-discipline-children"
                    className="card-text text-center m_title"
                  >
                    <b> 6 Healthy ways to discipline children</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Apr 05/2022
                  </p>
                  <p className="card-text text-center">
                    Every one of us wants our child to be disciplined and well
                    behaved right? Here are some effective ways to instill
                    discipline in your little ones.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/6-healthy-ways-to-discipline-children"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/jajznbad-parenting.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-success            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/bad-parenting-signs-and-how-can-it-affect-your-child"
                    className="card-text text-center m_title"
                  >
                    <b> Bad parenting signs and how can it affect your child</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Apr 04/2022
                  </p>
                  <p className="card-text text-center">
                    Bad Parenting is an important subject to be discussed as it
                    can affect the kids emotionally. Bad parenting includes
                    neglecting certain aspects of your child's life, which is
                    why you must always pay attention to what he or she needs
                    developmentally.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/bad-parenting-signs-and-how-can-it-affect-your-child"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/ptuxkthanksgiving.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/10-ways-to-teach-your-kids-gratitude-and-thanksgiving"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      10 ways to teach your kids gratitude and thanksgiving
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Mar 30/2022
                  </p>
                  <p className="card-text text-center">
                    A child is more likely to be successful in their life when
                    they know how to express gratitude. In addition, expressing
                    gratitude can help a child to focus on the good things in
                    their lives and prevent them from feeling negative or down.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/10-ways-to-teach-your-kids-gratitude-and-thanksgiving"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/yypewimaginary-friend.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/an-imaginary-friend-and-your-child-how-to-deal-with-it"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      An imaginary friend and your child- How to deal with it?
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Mar 29/2022
                  </p>
                  <p className="card-text text-center">
                    Imaginary friends are nothing but a product of your child’s
                    imagination. Read on to learn more about your child’s
                    pretend bestie.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/an-imaginary-friend-and-your-child-how-to-deal-with-it"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/zmqjjhousehold-chores.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-primary            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/9-reasons-why-you-should-assign-household-chores-to-your-kids"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      9 reasons why you should assign household chores to your
                      kids
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Mar 28/2022
                  </p>
                  <p className="card-text text-center">
                    You know that assigning household chores to kids is
                    important for them to develop a sense of responsibility and
                    good habits.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/9-reasons-why-you-should-assign-household-chores-to-your-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/drnbqtongue-twister.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-success            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/10-best-tongue-twister-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b> 10 Best tongue twister for kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Mar 23/2022
                  </p>
                  <p className="card-text text-center">
                    Help your kids with language development and improve their
                    speaking skills in a fun-loving way with these tongue
                    twisters. This wordplay helps your kids to pronounce
                    difficult phrases and syllables easily.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/10-best-tongue-twister-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pagination" data-page={3}>
            {" "}
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/lpstegood-bad-touch.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/educate-your-child-about-good-touch-and-bad-touch"
                    className="card-text text-center m_title"
                  >
                    <b> Educate your child about good touch and bad touch</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Mar 22/2022
                  </p>
                  <p className="card-text text-center">
                    Constant vigilance is crucial when raising your little ones.
                    The common sexual predators are not always some stranger,
                    but often someone familiar to you or your child.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/educate-your-child-about-good-touch-and-bad-touch"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/qdydf10-cons-single-child.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/10-cons-of-being-a-single-child"
                    className="card-text text-center m_title"
                  >
                    <b> 10 cons of being a single child</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Mar 21/2022
                  </p>
                  <p className="card-text text-center">
                    Being a single child often comes with its set of
                    disadvantages. Parents can however take notes of the cons of
                    being a single child and can help their single children to
                    be more involved in family life.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/10-cons-of-being-a-single-child"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/alxcbholi.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/10-tips-to-play-safe-holi-with-your-child"
                    className="card-text text-center m_title"
                  >
                    <b> 10 tips to play safe holi with your child</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Mar 18/2022
                  </p>
                  <p className="card-text text-center">
                    Holi can be a fun time if you include a safety plan to play
                    holi with your child. You need to take care of various
                    things from the safe ingredients of colors to safe places
                    for playing holi.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/10-tips-to-play-safe-holi-with-your-child"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/wkshsvacation.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/importance-of-vacation-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b> Importance of vacation for kids:</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Mar 17/2022
                  </p>
                  <p className="card-text text-center">
                    Vacations give us all a short escape or a temporary break
                    from our daily stress. Adults and kids, all are overburdened
                    by stress. It puts everyone in a different kind of mind
                    space and focus.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/importance-of-vacation-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/mdmluhealthy-lunch.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/health-and-nutrition"
                    className="btn
      btn-primary            "
                  >
                    Health And Nutrition
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/healthy-lunch-ideas-for-school"
                    className="card-text text-center m_title"
                  >
                    <b> Healthy Lunch Ideas For School</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Mar 16/2022
                  </p>
                  <p className="card-text text-center">
                    As parents, we are always concerned about our children’s
                    nutrition. We have mentioned some healthy lunch ideas that
                    your kids will love in this blog.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/healthy-lunch-ideas-for-school"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/sfsxthealthy-lifestyle.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/health-and-nutrition"
                    className="btn
      btn-success            "
                  >
                    Health And Nutrition
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/10-ways-to-promote-healthy-lifestyle-in-child"
                    className="card-text text-center m_title"
                  >
                    <b> 10 ways to promote healthy lifestyle in child</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Mar 15/2022
                  </p>
                  <p className="card-text text-center">
                    Encouraging your child to follow healthy eating habits and
                    following the same yourself, we can maintain a healthy
                    lifestyle. It has a profound effect on your child’s sense of
                    mental, physical and emotional well being.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/10-ways-to-promote-healthy-lifestyle-in-child"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/zueavwriting-skills.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/creativity-blogs"
                    className="btn
      btn-primary            "
                  >
                    Creativity Blogs
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/fun-activities-to-promote-writing-skills-in-child"
                    className="card-text text-center m_title"
                  >
                    <b> Fun activities to promote writing skills in child</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Mar 14/2022
                  </p>
                  <p className="card-text text-center">
                    It is important to promote writing skills in your child from
                    an early age as it will help them in writing throughout
                    their lives.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/fun-activities-to-promote-writing-skills-in-child"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/mgxygmoral-values.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/moral-values-to-teach-your-kids-to-make-them-a-better-person"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Moral values to teach your kids to make them a better
                      person
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Mar 09/2022
                  </p>
                  <p className="card-text text-center">
                    Parents must ensure and provide moral education to their
                    children as early as possible. You are their role model.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/moral-values-to-teach-your-kids-to-make-them-a-better-person"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/tcsjwchild-safety.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-primary            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/ensure-your-childs-safety-at-home"
                    className="card-text text-center m_title"
                  >
                    <b> Ensure your child’s safety at home</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Mar 08/2022
                  </p>
                  <p className="card-text text-center">
                    As a parent one is always concerned about their child's
                    safety at home.The home is one of the most common places for
                    young children to get injured.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/ensure-your-childs-safety-at-home"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/ycvntwomens-day.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/creativity-blogs"
                    className="btn
      btn-success            "
                  >
                    Creativity Blogs
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/10-activities-to-do-with-your-kids-on-womens-day"
                    className="card-text text-center m_title"
                  >
                    <b> 10 activities to do with your kids on women’s day</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Mar 07/2022
                  </p>
                  <p className="card-text text-center">
                    How are you planning to celebrate Women’s day with your kids
                    this year? There are many activities you can plan with your
                    child.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/10-activities-to-do-with-your-kids-on-womens-day"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/nrfnuparenting-and-job.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-juggle-between-parenting-and-your-job"
                    className="card-text text-center m_title"
                  >
                    <b> How to juggle between parenting and your job</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Mar 02/2022
                  </p>
                  <p className="card-text text-center">
                    It is never easy trying to juggle a full-time job with a
                    toddler. To maintain a balance between your work and
                    parenting is a tough job.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-juggle-between-parenting-and-your-job"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/evxrshobbies.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/importance-of-hobbies-in-child-development"
                    className="card-text text-center m_title"
                  >
                    <b> Importance of hobbies in child development:</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Feb 28/2022
                  </p>
                  <p className="card-text text-center">
                    For a child’s overall development, it is very important for
                    them to have some hobbies as it allows your child to remain
                    mentally productive .
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/importance-of-hobbies-in-child-development"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pagination" data-page={4}>
            {" "}
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/zbeeaanxiety.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/tips-to-overcome-separation-anxiety-on-the-first-day-of-preschool"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Tips to overcome separation anxiety on the first day of
                      preschool
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Feb 25/2022
                  </p>
                  <p className="card-text text-center">
                    1st day of school is super exciting. Some kids need more
                    attention on their 1st day of school. Your kid may have a
                    host of feelings about this transition phase.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/tips-to-overcome-separation-anxiety-on-the-first-day-of-preschool"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/ddmysrivalry.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-deal-with-sibling-rivalry"
                    className="card-text text-center m_title"
                  >
                    <b> How to deal with sibling rivalry?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Feb 24/2022
                  </p>
                  <p className="card-text text-center">
                    You often feel your child is not connecting well together.
                    Sibling rivalry is a big concern and here are some ways you
                    can tackle it.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-deal-with-sibling-rivalry"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/xpsucbragging.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-bragging-about-your-child-can-have-a-negative-impact-on-their-personality"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      How bragging about your child can have a negative impact
                      on their personality?
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Feb 23/2022
                  </p>
                  <p className="card-text text-center">
                    No one likes showoff if others do it, but everyone likes to
                    show off. It can be hard to teach your child to stop
                    bragging. Teach your child the negative effect of bragging
                    and how to express the accomplishments in a better way.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-bragging-about-your-child-can-have-a-negative-impact-on-their-personality"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/cebkcfinance-saving.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-introduce-your-child-with-the-concept-of-finance-and-saving"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      How to introduce your child with the concept of finance
                      and saving
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Feb 22/2022
                  </p>
                  <p className="card-text text-center">
                    When you’re teaching your kids about money and finance, it’s
                    important for you to teach your child where it comes from.
                    Make them understand that money does not come from their
                    parent's wallets. Demystify the relationship between work
                    and money you earn.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-introduce-your-child-with-the-concept-of-finance-and-saving"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/udttqtravel-essentials.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/must-have-child-travel-essentials"
                    className="card-text text-center m_title"
                  >
                    <b> Must-have child travel essentials</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Feb 21/2022
                  </p>
                  <p className="card-text text-center">
                    With the holiday season around the corner you must have been
                    planning trips with your child. In this blog we have
                    recommended all the child travel essentials you must include
                    in your travel gear.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/must-have-child-travel-essentials"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/pamqzstay-fit.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/activities-to-help-your-child-stay-fit"
                    className="card-text text-center m_title"
                  >
                    <b> Activities to help your child stay fit</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Feb 19/2022
                  </p>
                  <p className="card-text text-center">
                    To ensure your child stays physically fit there are few
                    things you need to know. There are many activities that you
                    can encourage your child to do at home to make them healthy
                    at home.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/activities-to-help-your-child-stay-fit"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/yvohfholistic.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/social-skills-blogs"
                    className="btn
      btn-primary            "
                  >
                    Social Skills Blogs
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/holistic-development-of-child-during-preschool"
                    className="card-text text-center m_title"
                  >
                    <b> Holistic development of child during preschool</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Feb 18/2022
                  </p>
                  <p className="card-text text-center">
                    Holistic approach of learning through creative and
                    comprehensive techniques from the early stage of a child’s
                    life plays an important part in overall development. In this
                    blog, we will discuss the various aspects of holistic
                    development and how we can impart technique in our kids.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/holistic-development-of-child-during-preschool"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/noqeubudget.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-teach-your-kids-the-concept-of-budget"
                    className="card-text text-center m_title"
                  >
                    <b> How to teach your kids the concept of budget</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Feb 17/2022
                  </p>
                  <p className="card-text text-center">
                    It is important for your child to learn the concept of
                    budgeting from their early age. In this blog, we will
                    discuss how beneficial it is to teach the concept of
                    budgeting from early childhood.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-teach-your-kids-the-concept-of-budget"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/xpwzppsychological.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/understand-the-stages-of-psychological-development-in-children"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Understand the stages of Psychological Development in
                      Children
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Feb 16/2022
                  </p>
                  <p className="card-text text-center">
                    Why do kids behave in certain ways or particular patterns?
                    Is their behavior related to their age, relationship with
                    family members, or temperaments? In sparklebox school, we
                    strive to answer such questions as well as to understand,
                    predict and explain behaviors that occur in childhood.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/understand-the-stages-of-psychological-development-in-children"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/ekwvtbully.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/stop-bullying-in-schools-what-to-do-if-your-own-child-is-a-bully"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Stop Bullying in Schools: What to Do If Your Own Child is
                      a Bully?
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Feb 15/2022
                  </p>
                  <p className="card-text text-center">
                    As a parent it is important to take bullying seriously. Make
                    sure that your child understands that you will tolerate it
                    at all. Ensure that your kids are aware of the impact of
                    bullying in their life.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/stop-bullying-in-schools-what-to-do-if-your-own-child-is-a-bully"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/ucndhpublic.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/why-it-is-important-to-teach-your-child-the-art-of-public-speaking"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Why it is important to teach your child the art of public
                      speaking
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Feb 14/2022
                  </p>
                  <p className="card-text text-center">
                    Nowadays public speaking is one of the most important
                    skills. In this article we are going to tell you the ways to
                    teach your kids these skills.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/why-it-is-important-to-teach-your-child-the-art-of-public-speaking"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/pcwlgcognitive-skills.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-improve-your-kids-cognitive-skills"
                    className="card-text text-center m_title"
                  >
                    <b> How to improve your kid’s cognitive skills?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Feb 11/2022
                  </p>
                  <p className="card-text text-center">
                    Cognitive skills play an important role in the intellectual
                    and mental development of every individual.. It is crucial
                    to ensure the proper development of cognitive skills in your
                    little one from the very beginning. In this blog, we will
                    discuss the ways to improve these skills.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-improve-your-kids-cognitive-skills"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pagination" data-page={5}>
            {" "}
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/wveelangry-kid.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/9-ways-to-calm-an-angry-kid"
                    className="card-text text-center m_title"
                  >
                    <b> 9 Ways To Calm an Angry Kid</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Feb 10/2022
                  </p>
                  <p className="card-text text-center">
                    Angry kids often end up worsening their day if they’re not
                    calmed down soon. Here are some tips that will help you.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/9-ways-to-calm-an-angry-kid"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/xkzzfgummy-bear.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/science-for-kids-gummy-bear-osmosis-experiment"
                    className="card-text text-center m_title"
                  >
                    <b> Science For Kids: Gummy Bear Osmosis Experiment</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Feb 09/2022
                  </p>
                  <p className="card-text text-center">
                    Every kid loves eating gummy bears. Why not take a few and
                    do an osmosis experiment? Read the article to know how to do
                    it!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/science-for-kids-gummy-bear-osmosis-experiment"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/dfbveemotionally-involved.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-make-your-child-feel-emotionally-involved"
                    className="card-text text-center m_title"
                  >
                    <b> How to make your child feel emotionally involved</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Feb 08/2022
                  </p>
                  <p className="card-text text-center">
                    To make sure your child always feels involved, here are some
                    tips you can follow and ensure that your child never feels
                    left out. Following the tips mentioned below , you can also
                    strengthen bonds with your child.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-make-your-child-feel-emotionally-involved"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/vfigzmilestone.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-celebrate-your-childs-milestone"
                    className="card-text text-center m_title"
                  >
                    <b> How to celebrate your child's milestone</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Feb 07/2022
                  </p>
                  <p className="card-text text-center">
                    We always feel a sense of achievement whenever our child
                    achieves any milestone. But how do we celebrate it? Keep
                    reading to know more!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-celebrate-your-childs-milestone"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/sjdxmamid-lockdown.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/social-skills-blogs"
                    className="btn
      btn-primary            "
                  >
                    Social Skills Blogs
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/ways-to-develop-your-kids-social-skills-amid-lockdown"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Ways to develop your kid’s social skills amid lockdown
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Feb 05/2022
                  </p>
                  <p className="card-text text-center">
                    The pandemic is harming the health, social and material
                    well-being of children worldwide. Confined to the homes,
                    kids are not able explore the developmental stage of their
                    growth.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/ways-to-develop-your-kids-social-skills-amid-lockdown"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/fhywudepression.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-treat-depression-in-kids"
                    className="card-text text-center m_title"
                  >
                    <b> How to Treat Depression in kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Feb 04/2022
                  </p>
                  <p className="card-text text-center">
                    If your child seems persistently sad or hopeless and it is
                    affecting relationships, they may suffer from childhood
                    depression. Follow these tips to treat depression in kids.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-treat-depression-in-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/dguvuchild-creativity.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-enhance-childs-creativity"
                    className="card-text text-center m_title"
                  >
                    <b> How to enhance child’s creativity</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Feb 03/2022
                  </p>
                  <p className="card-text text-center">
                    Nowadays focusing on a child's creativity is essential for
                    their overall growth. With these activities you can make
                    sure that your child’s creativity
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-enhance-childs-creativity"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/iwlcwhomework.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-get-your-child-do-their-homework"
                    className="card-text text-center m_title"
                  >
                    <b> How To Get Your Child Do Their Homework</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Feb 01/2022
                  </p>
                  <p className="card-text text-center">
                    To ensure that your child completes their homework, here are
                    a few tips you need to know. Keep reading, and do not forget
                    to take notes.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-get-your-child-do-their-homework"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/apyuvfoster.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-foster-your-childs-self-esteem"
                    className="card-text text-center m_title"
                  >
                    <b> How to foster your child's self-esteem</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Feb 01/2022
                  </p>
                  <p className="card-text text-center">
                    Self-esteem in children is a foundation of lifelong positive
                    mental health. To foster, here are some tips to start with.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-foster-your-childs-self-esteem"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/tlpgj5-senses.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/5-activities-to-explore-the-5-senses-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b> 5 Activities To Explore The 5 Senses For Kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Jan 11/2022
                  </p>
                  <p className="card-text text-center">
                    This blog is for all the parents who want to make their
                    children aware of all the 5 senses. Keep reading to know the
                    activities.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/5-activities-to-explore-the-5-senses-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/adrarbrain-exercise.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/amazing-brain-exercise-for-your-child"
                    className="card-text text-center m_title"
                  >
                    <b> Amazing Brain Exercise For Your Child</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Jan 11/2022
                  </p>
                  <p className="card-text text-center">
                    You often need to find enough activities to enhance your
                    child’s excellence. Here we are presenting excellent brain
                    exercises for kids. Read on!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/amazing-brain-exercise-for-your-child"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/lkkptpositive-parenting.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/what-are-some-best-tips-for-positive-parenting"
                    className="card-text text-center m_title"
                  >
                    <b> What Are Some Best Tips for Positive Parenting?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Nov 26/2021
                  </p>
                  <p className="card-text text-center">
                    Positive parenting is about teaching your kids good behavior
                    whenever possible. These positive parenting strategies will
                    help you become a better parent.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/what-are-some-best-tips-for-positive-parenting"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pagination" data-page={6}>
            {" "}
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/hasgsSBSchool-template-WT-final(2)(149).jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/10-amazing-tips-to-get-your-kids-sleep-through-the-night"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      10 Amazing Tips to get your kids sleep through the night
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 12/2021
                  </p>
                  <p className="card-text text-center">
                    A good night's sleep has been shown to improve attention,
                    behaviour, learning, memory, and general mental and physical
                    health. Here are some tips.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/10-amazing-tips-to-get-your-kids-sleep-through-the-night"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/sgqmxSBSchool-template-WT-final(2)(150).jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/do-you-know-how-to-care-for-kidsheres-everything-to-cover"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Do you know how to care for kids?Here's everything to
                      cover
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 12/2021
                  </p>
                  <p className="card-text text-center">
                    Taking care of kids is not at all an easy job. Get some idea
                    on hope to care for kids from this blog
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/do-you-know-how-to-care-for-kidsheres-everything-to-cover"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/2497e35243f7336fb446d8c7f8a9c50d.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-help-your-child-be-more-assertive"
                    className="card-text text-center m_title"
                  >
                    <b> How to help your child be more assertive</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 12/2021
                  </p>
                  <p className="card-text text-center">
                    If you want to make your child more assertive, this blog is
                    right here to help you out.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-help-your-child-be-more-assertive"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/783227853e85962efbc0518c47509ad3.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/its-time-to-learn-new-ways-to-stop-a-baby-crying"
                    className="card-text text-center m_title"
                  >
                    <b> Its time to learn new ways to stop a baby crying</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 12/2021
                  </p>
                  <p className="card-text text-center">
                    In this blog post we will discuss ways to stop a baby crying
                    so you can get back to living your life!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/its-time-to-learn-new-ways-to-stop-a-baby-crying"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/abd9ce840b8d608eba3c2eafe0460938.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/list-of-the-most-important-life-lessons-for-your-child"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      List of the most Important Life Lessons for your Child
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 12/2021
                  </p>
                  <p className="card-text text-center">
                    if you want to make your child to succeed in life, here are
                    some important life lessons to teach them
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/list-of-the-most-important-life-lessons-for-your-child"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/905a94dfe4f0faf45228e86e34bf670a.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-help-your-child-learn-through-play"
                    className="card-text text-center m_title"
                  >
                    <b> How to help your child learn through play!</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 11/2021
                  </p>
                  <p className="card-text text-center">
                    If you want to be a more supportive parent, make an effort
                    to encourage kids playing! Here are 9 benefits of kids
                    playing.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-help-your-child-learn-through-play"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/9140a22d8b3bf5dce0986bf6968f46f0.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/your-guide-to-child-development-milestones-in-toddlers"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Your Guide to Child Development Milestones in Toddlers
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 11/2021
                  </p>
                  <p className="card-text text-center">
                    Child development milestones are about the physical, mental
                    and cognitive development of kids. Here are 7 such
                    milestones to track their progress.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/your-guide-to-child-development-milestones-in-toddlers"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/a4231e12307f15f9cc3d26b8b9fdf4d7.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/interesting-facts-about-how-toddlers-learn-walking"
                    className="card-text text-center m_title"
                  >
                    <b> Interesting Facts About How Toddlers Learn Walking</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 11/2021
                  </p>
                  <p className="card-text text-center">
                    Everything you need to know about your baby's first steps
                    and other important walking milestones and activities for
                    teaching a baby to walk.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/interesting-facts-about-how-toddlers-learn-walking"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/0e15418079d19b510ec818c28930ed93.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/19-ways-to-improve-the-speaking-skills-of-a-toddler"
                    className="card-text text-center m_title"
                  >
                    <b> 19 ways to improve the speaking skills of a toddler</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 11/2021
                  </p>
                  <p className="card-text text-center">
                    Effective communication is the key attribute that every
                    person must have. Read below tips to improve the speaking
                    skills of your kids.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/19-ways-to-improve-the-speaking-skills-of-a-toddler"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/95b67af916887f1f44e731de5f4af7a9.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/parenting-tips-for-understanding-toddler-and-baby-language"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Parenting tips for understanding toddler and baby language
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 11/2021
                  </p>
                  <p className="card-text text-center">
                    Babies learn by experiencing (and listening to) the world
                    around them, so the more language they are exposed to the
                    better.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/parenting-tips-for-understanding-toddler-and-baby-language"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/16baa5f16c0fa0a0ae0bbd812bd80915.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-a-kids-brain-development-is-different-from-an-adults"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      How a kid's brain development is different from an
                      adult’s?
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 11/2021
                  </p>
                  <p className="card-text text-center">
                    According to the studies, children under the age of 12 have
                    a distinctive brain development than adults.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-a-kids-brain-development-is-different-from-an-adults"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/4f60d8e3c940f0febed9e3a78c8d818c.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/meaningful-quotes-and-fun-facts-for-kids-you-should-not-miss-out"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Meaningful quotes and fun facts for kids you should not
                      miss out!
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 08/2021
                  </p>
                  <p className="card-text text-center">
                    if you want to make your child to know more quotes and fun
                    fact for kids, this is the list for you
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/meaningful-quotes-and-fun-facts-for-kids-you-should-not-miss-out"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pagination" data-page={7}>
            {" "}
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/ece1074beda3772a93fa6ae3182a2104.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/6-easy-kids-brain-games-to-stimulate-their-mind"
                    className="card-text text-center m_title"
                  >
                    <b> 6 Easy kids brain games to Stimulate their Mind</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 08/2021
                  </p>
                  <p className="card-text text-center">
                    From games to puzzles, there are a lot of options out there
                    for kids’ brain games. In this blog post, we'll go over easy
                    ways that you can stimulate your child's mind!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/6-easy-kids-brain-games-to-stimulate-their-mind"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/585640921dac93234d28eabba86e08f1.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/9-great-things-to-do-in-the-summer"
                    className="card-text text-center m_title"
                  >
                    <b> 9 great things to do in the summer</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 08/2021
                  </p>
                  <p className="card-text text-center">
                    If you want to make summer a fun time for your child, here
                    is a list of activities you and your child can do
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/9-great-things-to-do-in-the-summer"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/bf046e25639fc52e9e186bf6a955dc67.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/dont-miss-out-the-best-plan-for-a-childs-future"
                    className="card-text text-center m_title"
                  >
                    <b> Don’t miss out the best plan for a Child's Future</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 08/2021
                  </p>
                  <p className="card-text text-center">
                    Making the best plan for a child is not an easy task for
                    any. Get some ideas from this blog to start with your
                    child’s future planning.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/dont-miss-out-the-best-plan-for-a-childs-future"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/82d4228940c405f0bd479049bd3a16fa.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/six-easy-exercises-for-children-you-should-know"
                    className="card-text text-center m_title"
                  >
                    <b> Six Easy Exercises for Children you should know</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 08/2021
                  </p>
                  <p className="card-text text-center">
                    To increase coordination and physical strength, children
                    should do exercises like running, leaping, skipping, etc,
                    for roughly an hour each day.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/six-easy-exercises-for-children-you-should-know"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/2e3ca7f4ede6ac7ea8b30bc3f252ac7a.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-help-children-develop-good-handwriting"
                    className="card-text text-center m_title"
                  >
                    <b> How to help children develop good handwriting!</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 08/2021
                  </p>
                  <p className="card-text text-center">
                    Good handwriting is an essential skill for success in
                    school. Here are 7 tips on how to improve kids handwriting
                    effectively at home!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-help-children-develop-good-handwriting"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/8221cdc16bf1783a835035e90f5dd923.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-teach-your-toddler-the-english-alphabet"
                    className="card-text text-center m_title"
                  >
                    <b> How to Teach Your Toddler the English Alphabet?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 07/2021
                  </p>
                  <p className="card-text text-center">
                    Here are 11 ways to try at home if you want your child to
                    feel at ease in kindergarten and learn the English alphabet
                    ahead of time.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-teach-your-toddler-the-english-alphabet"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/tfyigcognitive-motor-skills.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/social-skills-blogs"
                    className="btn
      btn-primary            "
                  >
                    Social Skills Blogs
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/benefits-of-playing-group-games-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b> Benefits of Playing Group Games for Kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 07/2021
                  </p>
                  <p className="card-text text-center">
                    Group activities or games are often fun-filled, enjoyable
                    and helps develop various skills. Explore how group games
                    for kids aid their development.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/benefits-of-playing-group-games-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/4c0d1a3bdd23bfb8466311753c647fbf.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/phonics-common-english-sounds-for-toddlers"
                    className="card-text text-center m_title"
                  >
                    <b> Phonics: Common English Sounds for Toddlers</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 07/2021
                  </p>
                  <p className="card-text text-center">
                    Phonics includes matching the language sounds with each
                    letter or set of letters. phonics. For example, the sound k
                    can spell c, k, ck, or ch.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/phonics-common-english-sounds-for-toddlers"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/ca02b8b7cce670ce9ed827b94503e2c0.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-get-your-baby-started-with-vegetables"
                    className="card-text text-center m_title"
                  >
                    <b> How to get your baby started with vegetables?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 07/2021
                  </p>
                  <p className="card-text text-center">
                    In their growth years, babies require a range of nutrients
                    and veggies are the best source. Here are some tips to get
                    your child to eat vegetables.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-get-your-baby-started-with-vegetables"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/d5ddeec3004f5f699ad5281f0412ce50.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-success            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-choose-the-perfect-daycare-for-your-child"
                    className="card-text text-center m_title"
                  >
                    <b> How to choose the perfect daycare for your child</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 07/2021
                  </p>
                  <p className="card-text text-center">
                    Choosing the proper daycare may be a difficult decision that
                    just adds to your concern over being away from your kid!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-choose-the-perfect-daycare-for-your-child"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/138ec454daf481f6ee9f0dc7f62b06ad.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-raise-successful-kids-in-preschool"
                    className="card-text text-center m_title"
                  >
                    <b> How to raise successful kids in preschool</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 07/2021
                  </p>
                  <p className="card-text text-center">
                    Every parent wants their children to be successful kids in
                    preschool. If you also want the same then follow the below
                    tips.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-raise-successful-kids-in-preschool"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/34daea8b22340c4d80dd71867f6f4bd6.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/reasons-your-kid-is-struggling-with-mathematics"
                    className="card-text text-center m_title"
                  >
                    <b> Reasons your kid is struggling with Mathematics</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 05/2021
                  </p>
                  <p className="card-text text-center">
                    Mathematics may be difficult, which is why many parents are
                    concerned when their children appear to be distracted from
                    math. Here are some tips!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/reasons-your-kid-is-struggling-with-mathematics"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pagination" data-page={8}>
            {" "}
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/9b2607686055f36e084fb5dddd202ab5.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/why-is-your-child-crying-top-reasons-for-toddler-crying"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Why is your child crying - Top reasons for toddler crying
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 05/2021
                  </p>
                  <p className="card-text text-center">
                    When your baby is crying, she is conveying her wants and
                    requesting your attention and care and maybe some other
                    reasons.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/why-is-your-child-crying-top-reasons-for-toddler-crying"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/0ad992f415e7513dd26df1176b4dd9c0.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/abcs-of-accelerated-preschool-learning-activities-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      ABC's of Accelerated Preschool Learning Activities for
                      Kids
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 05/2021
                  </p>
                  <p className="card-text text-center">
                    Toddlerhood is a time of learning essential foundational
                    skills. These preschool learning activities are perfect for
                    your little one to get started!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/abcs-of-accelerated-preschool-learning-activities-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/afa24225b23b2c39e38250a35578f9b9.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/6-tips-on-homeschooling-your-preschoolers"
                    className="card-text text-center m_title"
                  >
                    <b> 6 Tips On Homeschooling Your Preschoolers</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 05/2021
                  </p>
                  <p className="card-text text-center">
                    Homeschooling for preschoolers: learn what exactly it is,
                    how you should go about it and some activities that are
                    perfect for homeschooling your child.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/6-tips-on-homeschooling-your-preschoolers"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/48df97dea3856e267208fcbdb3b6d6fa.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/7-things-a-children-need-from-parents"
                    className="card-text text-center m_title"
                  >
                    <b> 7 Things A Children Need From Parents</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 05/2021
                  </p>
                  <p className="card-text text-center">
                    Parenting involves striking a balance between loving,
                    fulfilling what children need, and allowing our children to
                    undergo self-discovery.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/7-things-a-children-need-from-parents"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/e29a6c5bd956edb213064371a13eda33.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-travel-with-toddlers"
                    className="card-text text-center m_title"
                  >
                    <b> How to travel with toddlers</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 05/2021
                  </p>
                  <p className="card-text text-center">
                    While travelling with the toddlers, parents have to take
                    care of many things. Here we have provided some tips to
                    travel with kids.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-travel-with-toddlers"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/3c108f53b8be4e699a79f7a95cc96a63.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/8-most-important-things-every-parent-must-know-about-child-development"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      8 Most Important Things Every Parent Must Know About Child
                      Development
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 04/2021
                  </p>
                  <p className="card-text text-center">
                    Although parents mostly know everything about child
                    development, there are still some small things that they
                    tend to miss. Read them below in our blog.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/8-most-important-things-every-parent-must-know-about-child-development"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/a9ce88b4a732dfa343d057c4dbf9be25.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-primary            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/the-benefits-of-nursery-schools-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b> The Benefits of Nursery Schools for Kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 04/2021
                  </p>
                  <p className="card-text text-center">
                    Is it important to send kids to nursery? Here are nine
                    reasons why parents should choose a nursery school for their
                    children for all round development.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/the-benefits-of-nursery-schools-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/bmkolspice-up.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-spice-up-a-childs-school-lunch"
                    className="card-text text-center m_title"
                  >
                    <b> How to Spice up a Child's School Lunch?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 04/2021
                  </p>
                  <p className="card-text text-center">
                    School lunch is essential for children. Here are all the
                    lunch ideas that will keep your child's lunchbox overflowing
                    with tasty treats.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-spice-up-a-childs-school-lunch"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/pyqepkids-socialize.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-help-your-toddler-socialize-with-other-toddlers"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      How to help your toddler socialize with other toddlers
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 04/2021
                  </p>
                  <p className="card-text text-center">
                    It is tough to teach your toddlers to be social but it is
                    not impossible. Follow the below tips to improve socialising
                    skills of your toddlers.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-help-your-toddler-socialize-with-other-toddlers"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/yzqgnstudent-tips.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/tips-for-students-on-how-to-study-effectively"
                    className="card-text text-center m_title"
                  >
                    <b> Tips For Students On How To Study Effectively</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 04/2021
                  </p>
                  <p className="card-text text-center">
                    Do you want to make sure your child knows how to study
                    effectively? Here are some tips on how successful students
                    stay focused on their studies.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/tips-for-students-on-how-to-study-effectively"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/ntvcebackyard.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/things-to-do-with-kids-in-the-backyard"
                    className="card-text text-center m_title"
                  >
                    <b> Things to do with kids in the backyard</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 04/2021
                  </p>
                  <p className="card-text text-center">
                    Outdoor activities are always fun for both the parents and
                    kids. Take a look at some outdoor activities for kids listed
                    here.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/things-to-do-with-kids-in-the-backyard"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/nrtmsbeach-activities.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/11-beach-activities-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b> 11 beach activities for kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 01/2021
                  </p>
                  <p className="card-text text-center">
                    Beach is always the lovable destination for all the kids.
                    Read some beach activities for kids given here.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/11-beach-activities-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pagination" data-page={9}>
            {" "}
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/57c2f1062cae0ea0cb109c7832ca739d.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/teaching-toddlers-the-importance-of-preserving-the-environment"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Teaching toddlers the importance of preserving the
                      environment
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 01/2021
                  </p>
                  <p className="card-text text-center">
                    We often say that the environment is our mother nature.
                    Follow some tips given below to teach kids to conserve the
                    environment.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/teaching-toddlers-the-importance-of-preserving-the-environment"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/868338fbbbca24e2493ead153199f8c9.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/guide-to-childrens-age-appropriate-educational-toys"
                    className="card-text text-center m_title"
                  >
                    <b> Guide to Children’s Age-Appropriate Educational Toys</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 01/2021
                  </p>
                  <p className="card-text text-center">
                    Your child needs the best educational toys for their growth
                    and development. Here is how to provide the right toys for
                    your child according to their age.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/guide-to-childrens-age-appropriate-educational-toys"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/3fe20239cc31742868d7156f15a9f0ef.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-can-parents-reduce-a-childs-use-of-mobile-devices"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      How Can Parents Reduce A Child's Use Of Mobile Devices?
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 01/2021
                  </p>
                  <p className="card-text text-center">
                    Children need to stay away from mobile devices for the
                    healthy development of concentration and focus. Here is how
                    you can reduce a kid's smartphone use.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-can-parents-reduce-a-childs-use-of-mobile-devices"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/adf62b22408ce8fcb31d276a8dde639b.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/8-ways-to-increase-bonding-with-family"
                    className="card-text text-center m_title"
                  >
                    <b> 8 Ways to Increase Bonding with Family</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 01/2021
                  </p>
                  <p className="card-text text-center">
                    Being with family is like heaven. But If you don't have a
                    lot of time to spend with your kids, take a look at some of
                    these tips for bonding with family.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/8-ways-to-increase-bonding-with-family"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/4ec79f9aef834a13013b7487767599dd.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/quick-and-effective-common-cold-remedies-for-children"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Quick and Effective Common Cold Remedies for Children
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Oct 01/2021
                  </p>
                  <p className="card-text text-center">
                    Colds and coughs are common in kids. Yet as parents, we
                    can't help but worry. Here are some at-home cold remedies
                    for kids that are easy to execute.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/quick-and-effective-common-cold-remedies-for-children"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/6160b14f45c3cbb886eb8dc0c24b0e16.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/what-can-a-parent-do-to-boost-their-childs-success-in-school"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      What Can a Parent Do to Boost Their Child's Success in
                      School?
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 30/2021
                  </p>
                  <p className="card-text text-center">
                    Your child’s success depends upon various factors, but the
                    most important is your involvement. Here are some tips to
                    boost a child's success in school.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/what-can-a-parent-do-to-boost-their-childs-success-in-school"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/d071daa857ad8a2c21f1b8a1cc01461c.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-help-your-child-express-feelings"
                    className="card-text text-center m_title"
                  >
                    <b> How to Help Your Child Express Feelings?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 30/2021
                  </p>
                  <p className="card-text text-center">
                    Children need to express themselves freely in order to build
                    confidence and be successful. Here are some ways you can
                    help your child express feelings.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-help-your-child-express-feelings"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/47c7bc8e5528dfd26f9de4183fe7c641.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/7-ways-you-and-your-child-can-master-the-english-language"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      7 Ways You and Your Child Can Master the English Language
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 30/2021
                  </p>
                  <p className="card-text text-center">
                    Knowing the English language can make life much easier for
                    you and your child. Here are some ways to master the English
                    language quickly and efficiently.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/7-ways-you-and-your-child-can-master-the-english-language"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/eqbmecreative-activities.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/creativity-blogs"
                    className="btn
      btn-primary            "
                  >
                    Creativity Blogs
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/5-creative-activities-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b> 5 Creative Activities for Kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 30/2021
                  </p>
                  <p className="card-text text-center">
                    Creativity is an important part of a child's development.
                    With these creative activities for kids, children can have
                    fun while developing creativity!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/5-creative-activities-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/e4b4ddf9ad6e74dabd734c8b09089106.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/lets-talk-about-kids-daily-routine"
                    className="card-text text-center m_title"
                  >
                    <b> Let's Talk About Kids' Daily Routine</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 30/2021
                  </p>
                  <p className="card-text text-center">
                    Planning kids’ daily routine might be challenging but it has
                    immense benefits. Here are some reasons why a daily routine
                    helps your child.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/lets-talk-about-kids-daily-routine"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/a38c8550a9677cffe3cf42f169357292.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/exploring-the-benefits-of-board-games-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b> Exploring the Benefits of Board Games for Kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 30/2021
                  </p>
                  <p className="card-text text-center">
                    Board games for kids improve cognition, social skills, and
                    more. Read more to find about its benefits!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/exploring-the-benefits-of-board-games-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/5a1f5959070f4bcb471de931f6f47d37.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/top-13-winter-activities-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b> Top 13 Winter Activities for Kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 29/2021
                  </p>
                  <p className="card-text text-center">
                    Finding the best activities for kids especially during
                    winter might be challenging. To help you out, we’ve got the
                    best list of activities!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/top-13-winter-activities-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pagination" data-page={10}>
            {" "}
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/c741399bf6fdc298e5e5c9348298041b.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/9-child-safety-tips-that-every-parent-must-know"
                    className="card-text text-center m_title"
                  >
                    <b> 9 Child Safety Tips That Every parent Must Know</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 29/2021
                  </p>
                  <p className="card-text text-center">
                    Child safety is very important as children are prone to
                    dangers. Here are some tips that will help you.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/9-child-safety-tips-that-every-parent-must-know"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/a5176c817f941f5560e155ae6fc721e4.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/the-importance-of-a-childs-first-teachers"
                    className="card-text text-center m_title"
                  >
                    <b> The Importance Of A Child's First Teachers</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 29/2021
                  </p>
                  <p className="card-text text-center">
                    Your child’s first teacher is you. It is important that
                    parents take the time to become well-informed about how
                    children learn. Take these tips!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/the-importance-of-a-childs-first-teachers"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/80c0129474d435aacaa943e9c8ffe34c.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-control-mood-swings-of-toddlers"
                    className="card-text text-center m_title"
                  >
                    <b> How to control mood swings of toddlers</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 29/2021
                  </p>
                  <p className="card-text text-center">
                    Mood swings are common in toddlers. If you need some tips on
                    how to control mood swings then read the blog below.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-control-mood-swings-of-toddlers"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/64b21c9f52f3adb9798d3e4f988825a0.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/start-by-these-tips-to-teach-alphabet-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b> Start by these tips to teach alphabet for kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 29/2021
                  </p>
                  <p className="card-text text-center">
                    Learning the alphabet for kids is one of the most important
                    things. Here are some tips to help them learn by heart
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/start-by-these-tips-to-teach-alphabet-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/4d09aeda533eac554f1bbe12d9616315.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/tips-for-child-care-when-they-are-sick"
                    className="card-text text-center m_title"
                  >
                    <b> Tips for child care when they are sick</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 29/2021
                  </p>
                  <p className="card-text text-center">
                    These days, the health of all of us is at risk due to
                    pandemics, especially of kids. For that, read some tips on
                    child care in the below blog.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/tips-for-child-care-when-they-are-sick"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/055cbcfdeb59383e94f1c682ecb0ea1d.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/best-numbers-activity-list-for-kindergarten-students"
                    className="card-text text-center m_title"
                  >
                    <b> Best Numbers Activity List for Kindergarten Students</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 28/2021
                  </p>
                  <p className="card-text text-center">
                    It is never too early to teach numbers and counting to
                    toddlers.Take the help of this list of 9 numbers activity
                    for kids to develop their math skills.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/best-numbers-activity-list-for-kindergarten-students"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/b97515a7ab22f114518cd8fa3d8a19b6.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/12-ways-to-encourage-physical-activity-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b> 12 ways to encourage physical activity for kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 28/2021
                  </p>
                  <p className="card-text text-center">
                    Physical development is very important for children. If you
                    as a parent struggle to encourage physical activity for kids
                    then read below the blog.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/12-ways-to-encourage-physical-activity-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/7eae2049acf5b004d79eb3ea7c5050ae.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/baby-talk-milestones-tips-and-facts"
                    className="card-text text-center m_title"
                  >
                    <b> Baby Talk: Milestones, Tips, and Facts</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 28/2021
                  </p>
                  <p className="card-text text-center">
                    Children begin baby talk at the age of six months and speak
                    their first words between the ages of ten and fifteen
                    months. Here are some tips!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/baby-talk-milestones-tips-and-facts"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/1817633a010b33b29065861df0aefee9.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/few-travelling-tips-you-need-to-know-when-with-kids"
                    className="card-text text-center m_title"
                  >
                    <b> Few travelling tips you need to know when with kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 28/2021
                  </p>
                  <p className="card-text text-center">
                    Who doesn't like to travel? Right from kids to elders, we
                    all love to travel. So, take a look at some travelling tips
                    given in the blog below.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/few-travelling-tips-you-need-to-know-when-with-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/3f61bef2a478a1fcf684e3fcc9748986.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/7-fun-activities-for-kids-at-home"
                    className="card-text text-center m_title"
                  >
                    <b> 7 Fun Activities For Kids At Home</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 28/2021
                  </p>
                  <p className="card-text text-center">
                    There are plenty of activities for kids at home that teach
                    them skills and also entertain them. Here are some of them!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/7-fun-activities-for-kids-at-home"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/30342b92883091f2834c303984c64aff.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/easy-kids-snacks-that-are-healthy-and-delicious"
                    className="card-text text-center m_title"
                  >
                    <b> Easy Kids’ Snacks That Are Healthy and Delicious</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 28/2021
                  </p>
                  <p className="card-text text-center">
                    There are plenty of easy kids’ snacks that you can make for
                    your child! Here are 8 of the best ones we believe will help
                    you!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/easy-kids-snacks-that-are-healthy-and-delicious"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/1841b0c7f7bb791600d2f71cbd801cd8.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/top-bedtime-stories-for-kids-how-to-make-them-fun"
                    className="card-text text-center m_title"
                  >
                    <b> Top Bedtime Stories for Kids: How To Make Them Fun?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 27/2021
                  </p>
                  <p className="card-text text-center">
                    Bedtime stories for kids play a major role in their
                    development as the story’s morals enhance them. Here are
                    some top storybooks.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/top-bedtime-stories-for-kids-how-to-make-them-fun"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pagination" data-page={11}>
            {" "}
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/ce6102a39a745ec41fff7567423fd004.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/top-10-kids-food-recipes"
                    className="card-text text-center m_title"
                  >
                    <b> Top 10 Kids' Food Recipes</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 27/2021
                  </p>
                  <p className="card-text text-center">
                    Kids’ food recipes must be focussed as they provide kids
                    with nutrition! Here are the top 10 recipes that will be
                    gob-smacking!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/top-10-kids-food-recipes"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/d7ca6e0dce8ebb4c6e44ebbb5922826d.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/fun-learning-activities-for-2-year-olds"
                    className="card-text text-center m_title"
                  >
                    <b> Fun Learning Activities for 2 Year Olds</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 27/2021
                  </p>
                  <p className="card-text text-center">
                    Toddlers are always looking for something fun! Try out these
                    learning activities for 2 year olds to teach them skills
                    while having lots of fun.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/fun-learning-activities-for-2-year-olds"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/2287c33f049c993a0d61eaa16bb965c4.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-can-you-make-sure-your-child-has-fun-learning"
                    className="card-text text-center m_title"
                  >
                    <b> How Can You Make Sure Your Child Has Fun Learning?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 27/2021
                  </p>
                  <p className="card-text text-center">
                    Playing games and having fun learning in the classroom is
                    beneficial to a child's health and development. Learn how
                    can you make studying fun for kids.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-can-you-make-sure-your-child-has-fun-learning"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/c0508505c3eeb0016a705a045a26dfbb.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-teach-your-kids-discipline"
                    className="card-text text-center m_title"
                  >
                    <b> How to Teach Your Kids Discipline?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 27/2021
                  </p>
                  <p className="card-text text-center">
                    Discipline is not about putting a stop to all the fun for
                    the kids but rather channelizing their energies in the right
                    direction. here are some strategies.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-teach-your-kids-discipline"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/827e253ce99a848ed568428165406a03.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/12-tips-to-get-your-child-more-interested-in-school"
                    className="card-text text-center m_title"
                  >
                    <b> 12 Tips To Get Your Child More Interested In School.</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 27/2021
                  </p>
                  <p className="card-text text-center">
                    Children need to be more interested in school so they can
                    have active learning. This blog is for parents who want
                    their kids to be interested in studying.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/12-tips-to-get-your-child-more-interested-in-school"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/e063e311811ddf47be921bd88dd18751.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/8-facts-about-how-babies-learn-to-walk"
                    className="card-text text-center m_title"
                  >
                    <b> 8 Facts About How Babies Learn To Walk!</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 24/2021
                  </p>
                  <p className="card-text text-center">
                    It's amazing that a baby can take its first baby steps, let
                    alone accomplish something so difficult. Read these 8
                    thrilling fun facts!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/8-facts-about-how-babies-learn-to-walk"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/d6aba3035fa21be322a9edbd07f3410a.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/what-and-how-can-i-teach-my-toddler-skills-at-home"
                    className="card-text text-center m_title"
                  >
                    <b> What And How Can I Teach My Toddler Skills At Home?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 24/2021
                  </p>
                  <p className="card-text text-center">
                    Teaching your toddler at home can be fun and engaging. But
                    the real question is, how to teach kids at home? Here are 10
                    brilliant tips!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/what-and-how-can-i-teach-my-toddler-skills-at-home"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/6b84837d24a6d3a536eaa93a675828fc.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/understanding-child-behaviour"
                    className="card-text text-center m_title"
                  >
                    <b> Understanding child behaviour</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 24/2021
                  </p>
                  <p className="card-text text-center">
                    Child behaviour is very complicated sometimes even parents
                    don't understand. For this, we have given some tips in the
                    blog below.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/understanding-child-behaviour"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/a4b768639d641685b6eb9a35d4704eff.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-develop-a-toddlers-motor-skills"
                    className="card-text text-center m_title"
                  >
                    <b> How to develop a toddlers' motor skills</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 24/2021
                  </p>
                  <p className="card-text text-center">
                    Toddlers are very sensible and proactive in their
                    expressions. To enhance this parents can follow the below
                    tips to develop motor skills in toddlers.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-develop-a-toddlers-motor-skills"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/05b4765e28b838942c4dc19075100b6f.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-encourage-your-childs-growth-and-development"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      How to Encourage Your Child's Growth and Development?
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 24/2021
                  </p>
                  <p className="card-text text-center">
                    For parents, their child's physical and mental development
                    is very important. Explore some ways you can encourage your
                    child's growth and development.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-encourage-your-childs-growth-and-development"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/88143e7e158549704af677d0f494bdc5.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-primary            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/everything-about-language-courses-development-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Everything about Language courses development for kids
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 23/2021
                  </p>
                  <p className="card-text text-center">
                    Development of Language courses for kids is one of the
                    phases in child development. Read below the benefits of
                    language courses for kids.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/everything-about-language-courses-development-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/13b9c1bc68e34cf0f8712d33002ead85.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-spend-time-with-family-and-kids"
                    className="card-text text-center m_title"
                  >
                    <b> How to spend time with family and kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 23/2021
                  </p>
                  <p className="card-text text-center">
                    Are you unable to spend time with your family and kids? Read
                    this blog and get some idea of how to spend time with
                    family.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-spend-time-with-family-and-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pagination" data-page={12}>
            {" "}
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/48bbe636de26932ced787f8fb54ee1f9.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/8-must-have-toys-for-1-year-olds"
                    className="card-text text-center m_title"
                  >
                    <b> 8 Must Have Toys for 1-Year-Olds</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 23/2021
                  </p>
                  <p className="card-text text-center">
                    Buying toys for 1-year-olds might seem difficult because
                    they might break them. But with our list, you’ll surely make
                    your purchase worth it.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/8-must-have-toys-for-1-year-olds"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/jcxuevitamin-d.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/health-and-nutrition"
                    className="btn
      btn-success            "
                  >
                    Health And Nutrition
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/why-is-vitamin-d-important-for-toddlers"
                    className="card-text text-center m_title"
                  >
                    <b> Why is Vitamin D Important for Toddlers?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 23/2021
                  </p>
                  <p className="card-text text-center">
                    Vitamin D is a nutrient that helps the body take in calcium
                    from the foods that we eat. Learn about the sources of
                    vitamin D and its importance for kids.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/why-is-vitamin-d-important-for-toddlers"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/c492c20e924be8ab0b627d5ec677d4fe.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-primary            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/9-amazing-ways-to-teach-numbers-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b> 9 Amazing Ways To Teach Numbers For Kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 23/2021
                  </p>
                  <p className="card-text text-center">
                    Teaching numbers for kids has immense benefits. Here are
                    some cool methods to make it possible.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/9-amazing-ways-to-teach-numbers-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/77029bfbb75b984cb38fde6cfa406c57.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-success            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/why-teaching-kids-to-say-please-and-thank-you-is-important"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Why Teaching Kids to Say Please and Thank You Is Important
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 22/2021
                  </p>
                  <p className="card-text text-center">
                    Teaching kids good manners is equal to shaping their future.
                    Here are some reasons why saying thank you and please will
                    benefit your child.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/why-teaching-kids-to-say-please-and-thank-you-is-important"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/656f915b088d2756a56d59650cc5385a.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/health-and-nutrition"
                    className="btn
      btn-primary            "
                  >
                    Health And Nutrition
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/10-tips-for-raising-healthy-toddlers"
                    className="card-text text-center m_title"
                  >
                    <b> 10 tips for raising healthy toddlers</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 22/2021
                  </p>
                  <p className="card-text text-center">
                    Health is wealth then it may be of kids or adults. Parents
                    can follow some tips here to improve their child's health.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/10-tips-for-raising-healthy-toddlers"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/d7450459e68039da8519e215dbebda7b.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/tips-to-use-cell-phones-and-tablets-safely-with-your-kids"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Tips to use cell phones and tablets safely with your kids
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 22/2021
                  </p>
                  <p className="card-text text-center">
                    With the growing scope of technologies, parents' tension is
                    at its peak due to excessive use of phones by kids. Here are
                    some tips to use tablets for kids.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/tips-to-use-cell-phones-and-tablets-safely-with-your-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/fd3ca8abba4dd29dcb188c4b6abc0530.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-primary            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/8-awesome-benefits-of-reading-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b> 8 Awesome Benefits of Reading for Kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 22/2021
                  </p>
                  <p className="card-text text-center">
                    Reading for kids is not only entertaining but also
                    beneficial as well. Here are 8 benefits that you must be
                    aware of.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/8-awesome-benefits-of-reading-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/764482ad6f79209579766602f16825e2.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/8-parenting-tips-for-newborns-surviving-the-first-12-months"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      8 Parenting Tips for Newborns: Surviving the First 12
                      Months
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 22/2021
                  </p>
                  <p className="card-text text-center">
                    Every new parent goes through a hard phase when it comes to
                    newborns. To help you out, we have 8 excellent parenting
                    tips.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/8-parenting-tips-for-newborns-surviving-the-first-12-months"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/234cad7e1ed277db1e0fdde9faddf92d.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/11-benefits-of-music-for-kids-you-should-not-miss-out"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      11 Benefits of Music for Kids you should not miss out
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 21/2021
                  </p>
                  <p className="card-text text-center">
                    If you’re thinking about whether music for kids is
                    essential, we want to let you know that the answer is yes.
                    Here are 11 benefits that will prove to you!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/11-benefits-of-music-for-kids-you-should-not-miss-out"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/cfd9294c1c6ac1e7df244fd8807ff006.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/top-11-most-common-early-childhood-education-mistakes"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Top 11 most common early childhood education mistakes
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 21/2021
                  </p>
                  <p className="card-text text-center">
                    Childhood education is very crucial and it is the pillar of
                    early age development. So, to make it fruitful, avoid some
                    mistakes listed here.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/top-11-most-common-early-childhood-education-mistakes"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/41f71feeeb7b59029086d7567d83493b.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/9-ways-to-calm-down-angry-kids"
                    className="card-text text-center m_title"
                  >
                    <b> 9 Ways To Calm Down Angry Kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 21/2021
                  </p>
                  <p className="card-text text-center">
                    Angry kids often end up worsening their day if they’re not
                    calmed down soon. Here are some tips that will help you.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/9-ways-to-calm-down-angry-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/1fd84d39cb0db738bc80d31bb7cc812d.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/childs-cognitive-skills-importance-and-ways-of-improving-them"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Child's Cognitive Skills: Importance and Ways of Improving
                      Them
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 21/2021
                  </p>
                  <p className="card-text text-center">
                    Cognitive skills are essential for life and it is a must for
                    everyone to improve them. Here are some tips with which you
                    can aid your child’s cognizance.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/childs-cognitive-skills-importance-and-ways-of-improving-them"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pagination" data-page={13}>
            {" "}
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/646522d2ddf2c9b12fc8c9c4fe1dbf24.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-primary            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/importance-of-understanding-milestones-of-toddlers"
                    className="card-text text-center m_title"
                  >
                    <b> Importance of understanding milestones of toddlers</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 21/2021
                  </p>
                  <p className="card-text text-center">
                    For parents, their child's development is very crucial. Read
                    the below blog to know the benefits of understanding child
                    development milestones.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/importance-of-understanding-milestones-of-toddlers"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/ae3a745c1e4ef576b3b55b7af04a0b33.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/13-reasons-to-create-a-solid-weekend-schedule-with-busy-toddlers"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      13 reasons to create a solid weekend schedule with busy
                      toddlers
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 20/2021
                  </p>
                  <p className="card-text text-center">
                    Usually kids spend their weekends either watching TV or
                    laying down on the bed. Read the following reasons to make a
                    weekend timetable for kids.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/13-reasons-to-create-a-solid-weekend-schedule-with-busy-toddlers"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/6208b66a2a95a9e5ebc69cba0b7511f3.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-primary            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/9-reasons-coloring-activities-for-kids-are-important"
                    className="card-text text-center m_title"
                  >
                    <b> 9 Reasons Coloring Activities For Kids Are Important</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 20/2021
                  </p>
                  <p className="card-text text-center">
                    Color activities for kids are important because they
                    increase their memory power and entertain. Here are other 9
                    reasons why coloring is important.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/9-reasons-coloring-activities-for-kids-are-important"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/712086736e15b93707ed1cd17d5a430f.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/the-best-9-educational-toys-for-toddlers-is-here"
                    className="card-text text-center m_title"
                  >
                    <b> The best 9 Educational Toys for Toddlers is here</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 20/2021
                  </p>
                  <p className="card-text text-center">
                    Toys for toddlers must be carefully chosen because they
                    should both entertain and educate children. Here are our top
                    9 picks to save your time.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/the-best-9-educational-toys-for-toddlers-is-here"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/a561811d542d8c1ef3706c2dd616b660.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-primary            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/6-reasons-why-homeschooling-is-better-for-your-child"
                    className="card-text text-center m_title"
                  >
                    <b> 6 Reasons Why Homeschooling Is Better For Your Child</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 20/2021
                  </p>
                  <p className="card-text text-center">
                    There has been a recent rise om the phenomenon of
                    homeschooling kids. Here are some reasons why homeschooling
                    might actually be better for your child.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/6-reasons-why-homeschooling-is-better-for-your-child"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/88c354cf4c5962caad1ece848c58e52e.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/top-11-toys-for-3-year-olds"
                    className="card-text text-center m_title"
                  >
                    <b> Top 11 Toys for 3-Year-Olds</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 20/2021
                  </p>
                  <p className="card-text text-center">
                    When parents think about toys for 3-year-olds, it will be
                    hard because of various reasons. To save you from tension,
                    we have the best list of toys.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/top-11-toys-for-3-year-olds"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/668c7f7be6c0a1a14a230d36606133d6.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-primary            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/9-popular-nursery-rhymes-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b> 9 Popular Nursery Rhymes For Kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 18/2021
                  </p>
                  <p className="card-text text-center">
                    Nursery rhymes help children to learn vocabulary and also
                    morals. Here are the top 9 nursery songs for your child!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/9-popular-nursery-rhymes-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/ba515e2f69d5a0c418400bbce1fd737a.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/7-tips-to-improve-childrens-learning-skills"
                    className="card-text text-center m_title"
                  >
                    <b> 7 Tips to Improve Children's Learning Skills</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 18/2021
                  </p>
                  <p className="card-text text-center">
                    Learning skills are very important and especially for a
                    child. The following tips will help you to aid your child.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/7-tips-to-improve-childrens-learning-skills"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/0c95bb0409d50e085b9a72f58f7b6b60.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/8-essential-life-skills-for-your-children"
                    className="card-text text-center m_title"
                  >
                    <b> 8 Essential Life Skills for Your Children</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 18/2021
                  </p>
                  <p className="card-text text-center">
                    Certain skills are for lifetime benefit and parents must
                    know that every child must start learning those. To get
                    started with, here are 8 life skills.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/8-essential-life-skills-for-your-children"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/6b0b4a90c601bede8a60aa18d66d6814.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-improve-your-childs-balance-coordination"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      How to improve your child's balance &amp; coordination
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 18/2021
                  </p>
                  <p className="card-text text-center">
                    Balance and coordination help kids to participate in sports
                    and physical activities. Here are some activities to develop
                    balancing skills.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-improve-your-childs-balance-coordination"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/97d05fb4c2c4f1929b334e6c5c4d74a1.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/creativity-blogs"
                    className="btn
      btn-primary            "
                  >
                    Creativity Blogs
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-capture-your-childs-imagination-and-creativity"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      How to capture your child’s imagination and creativity?
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 18/2021
                  </p>
                  <p className="card-text text-center">
                    Children with a strong imagination are capable of good
                    decision-making. Here are some activities to develop
                    imagination and creativity in kids.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-capture-your-childs-imagination-and-creativity"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/e852b18ddecd9746670b927488855d49.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/make-learning-english-for-kids-easier-through-these-13-activities"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Make Learning English for Kids Easier Through These 13
                      Activities
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 18/2021
                  </p>
                  <p className="card-text text-center">
                    Do You Want to Make Learning English for Kids Easier? This
                    Blog Post Will Give You Activities That Will Help Your
                    Toddler Improve Their English Skills.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/make-learning-english-for-kids-easier-through-these-13-activities"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pagination" data-page={14}>
            {" "}
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/d846151cb752952faee2274187e38bae.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/7-ways-to-ensure-child-safety-at-home"
                    className="card-text text-center m_title"
                  >
                    <b> 7 ways to ensure child safety at home</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 18/2021
                  </p>
                  <p className="card-text text-center">
                    Child safety needs to be prioritized for every parent out
                    there. Here are 7 ways in which parents can ensure their
                    home is safe for kids!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/7-ways-to-ensure-child-safety-at-home"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/3c56b51604622e269dcc634d5b6fb046.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-learn-a-new-language-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b> How to Learn a New Language for Kids?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 18/2021
                  </p>
                  <p className="card-text text-center">
                    Knowing how to learn a new language will be helpful and so
                    we present 5 tips that will help you.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-learn-a-new-language-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/d60c818753765ebed79f21a18144b8cb.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-can-you-raise-the-confidence-level-of-a-child"
                    className="card-text text-center m_title"
                  >
                    <b> How Can You Raise The Confidence Level Of A Child?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 18/2021
                  </p>
                  <p className="card-text text-center">
                    Confidence in children is necessary for success in school
                    and careers. These tips are the answer to how to increase
                    the confidence level of your children.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-can-you-raise-the-confidence-level-of-a-child"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/b52233964ef170e942e27800b4b82287.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/7-tips-to-deal-with-toddler-tantrums"
                    className="card-text text-center m_title"
                  >
                    <b> 7 Tips to Deal with Toddler Tantrums</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 17/2021
                  </p>
                  <p className="card-text text-center">
                    Toddler tantrums are very common but parents often get too
                    worried about them. Here are some methods that will help you
                    to stop temper tantrums.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/7-tips-to-deal-with-toddler-tantrums"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/f2ce771bf00eb59a610c726293f6a52e.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/ten-moral-values-for-kids-ethical-development"
                    className="card-text text-center m_title"
                  >
                    <b> Ten Moral Values For Kids: Ethical Development</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 17/2021
                  </p>
                  <p className="card-text text-center">
                    Every parent must know why moral values for kids are
                    important. To help all of them out, here are our top 10
                    values that everyone should be aware of.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/ten-moral-values-for-kids-ethical-development"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/d525f94494cf8f76ee6bffe9c20e6a02.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/benefits-of-using-pictures-to-teach-toddlers"
                    className="card-text text-center m_title"
                  >
                    <b> Benefits of using pictures to teach toddlers</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 17/2021
                  </p>
                  <p className="card-text text-center">
                    Visual interpretation is very important especially when it
                    comes to kids' education. Here are some benefits of pictures
                    for kids to teach them.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/benefits-of-using-pictures-to-teach-toddlers"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/105b141aa7da7777676c6e013329e5f8.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/parenting-tips-for-the-first-two-years-of-a-child"
                    className="card-text text-center m_title"
                  >
                    <b> Parenting tips for the first two years of a child</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 17/2021
                  </p>
                  <p className="card-text text-center">
                    If you as a parent don't know how to raise your toddlers
                    then follow below parenting tips for toddlers.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/parenting-tips-for-the-first-two-years-of-a-child"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/84688d9006787788c5955959bcadf3a7.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/improve-your-childs-sleep-cycle-with-these-10-tips"
                    className="card-text text-center m_title"
                  >
                    <b> Improve Your Child's Sleep Cycle with These 10 Tips!</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 17/2021
                  </p>
                  <p className="card-text text-center">
                    In the current world of constant television, phones and
                    computers, many children suffer from a disrupted sleep
                    cycle. Here are some tips for deep sleep.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/improve-your-childs-sleep-cycle-with-these-10-tips"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/9331c04ddb037be0e0491d4b9ec7c252.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/8-tips-that-teach-your-children-how-to-manage-money"
                    className="card-text text-center m_title"
                  >
                    <b> 8 Tips That Teach Your Children How to Manage Money</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 17/2021
                  </p>
                  <p className="card-text text-center">
                    Money is a fundamental component of our society. Parents
                    should teach kids the importance of proper money management
                    at an easy age. Here are some tips.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/8-tips-that-teach-your-children-how-to-manage-money"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/3476cb86c7a543030ed29ba1655b14b3.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/7-ways-to-make-your-child-more-independent"
                    className="card-text text-center m_title"
                  >
                    <b> 7 Ways to Make your Child More Independent</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 17/2021
                  </p>
                  <p className="card-text text-center">
                    With a little help from your end, you can encourage children
                    to become independent with these 7 easy activities everyday.
                    Read on to find out.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/7-ways-to-make-your-child-more-independent"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/04ac78123dd5ccad2d238a53dd839fe4.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/why-does-your-child-need-a-routine"
                    className="card-text text-center m_title"
                  >
                    <b> Why Does Your Child Need a Routine?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 17/2021
                  </p>
                  <p className="card-text text-center">
                    Routines are not just to inculcate discipline in kids. It
                    teaches them important life skills like time management. Tap
                    to know its other benefits.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/why-does-your-child-need-a-routine"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/021fc796f9cb09e0c0a97d2a379eceb2.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/what-is-the-best-way-to-get-the-child-ready-for-school"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      What is the best way to get the child ready for school
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 17/2021
                  </p>
                  <p className="card-text text-center">
                    Morning hour is very busy for parents as they have lots of
                    chores. Follow the 10 tips given here to make your child
                    getting ready for school.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/what-is-the-best-way-to-get-the-child-ready-for-school"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pagination" data-page={15}>
            {" "}
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/d69e18c8429aae3a9ac13503c41ae5ce.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-primary            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/why-are-extracurricular-activities-important-for-preschoolers"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Why are extracurricular activities important for
                      preschoolers
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 15/2021
                  </p>
                  <p className="card-text text-center">
                    Extracurricular activities for preschoolers have
                    extraordinary importance. Explore some reasons why these
                    activities are important here in the below blog.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/why-are-extracurricular-activities-important-for-preschoolers"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/bc4e10cd5e397be069a9828a7f153fb5.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/parenting-toddlers-vs-teens-what-are-the-differences"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Parenting toddlers vs. teens: What are the differences?
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 15/2021
                  </p>
                  <p className="card-text text-center">
                    Parenting a toddler and a teenager is very different as they
                    have so many major differences in their behavior.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/parenting-toddlers-vs-teens-what-are-the-differences"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/6dcbcf8fb887957808a127eaf072c6d2.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/tips-to-instill-in-kids-the-importance-of-discipline"
                    className="card-text text-center m_title"
                  >
                    <b> Tips to Instill in kids the importance of Discipline</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 15/2021
                  </p>
                  <p className="card-text text-center">
                    This blog post discusses tips on how to instill discipline
                    in kids. It's crucial for any parents to make their child
                    realise the importance of discipline.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/tips-to-instill-in-kids-the-importance-of-discipline"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/73969c4a0a90508dfbff59907b66c7c0.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-improve-concentration-in-your-kids"
                    className="card-text text-center m_title"
                  >
                    <b> How to improve concentration in your kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 15/2021
                  </p>
                  <p className="card-text text-center">
                    Concentration is an integral part of establishing a solid
                    foundation for learning both in and out of the classroom.
                    Here are the tips for you!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-improve-concentration-in-your-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/8f5e0397dae9d3825a59d0da9fae0f40.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-primary            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/inculcate-habit-of-reading-in-kids"
                    className="card-text text-center m_title"
                  >
                    <b> Inculcate Habit of Reading in Kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 15/2021
                  </p>
                  <p className="card-text text-center">
                    Reading seems like a boring task to many kids. But we know
                    it’s not! These 5 ways can help your kids develop reading
                    habits easily.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/inculcate-habit-of-reading-in-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/7a48f9f91f2c081e9c92aa81f75e5962.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-help-in-creative-activities-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b> How to help in creative activities for kids?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 15/2021
                  </p>
                  <p className="card-text text-center">
                    Creativity is not just limited to skills but it is also good
                    for mental &amp; physical development. Here we have given
                    some creative activities for kids.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-help-in-creative-activities-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/fbuphleadership-skills.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/social-skills-blogs"
                    className="btn
      btn-primary            "
                  >
                    Social Skills Blogs
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/help-your-child-hone-their-leadership-skills"
                    className="card-text text-center m_title"
                  >
                    <b> Help Your Child Hone Their Leadership Skills</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 14/2021
                  </p>
                  <p className="card-text text-center">
                    Kids always taking the lead? Help them gain leadership
                    skills in the right ways in these 12 ways and learn the
                    qualities of a leader.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/help-your-child-hone-their-leadership-skills"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/0a012158867f7f4c4612c4875b0eac72.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-prepare-your-child-for-a-preschool-interview"
                    className="card-text text-center m_title"
                  >
                    <b> How to Prepare your Child for a Preschool Interview?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 14/2021
                  </p>
                  <p className="card-text text-center">
                    Looking for admission forms but is your child ready to give
                    preschool interview? Prepare them right with these 10 easy
                    techniques everyday!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-prepare-your-child-for-a-preschool-interview"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/caffd2effde1f73df8e4ad8646f2759e.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-primary            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/fun-learning-activities-for-kids-you-can-do-at-home"
                    className="card-text text-center m_title"
                  >
                    <b> Fun Learning Activities for Kids You Can Do at Home</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 14/2021
                  </p>
                  <p className="card-text text-center">
                    Mundane lockdown days have got children all bored and dull.
                    Add some spark to their daily routine with these 8 learning
                    activities to do at home!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/fun-learning-activities-for-kids-you-can-do-at-home"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/20fbcf82f2b2917cb14d673a80633df1.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/ways-to-work-on-toddlers-behaviour"
                    className="card-text text-center m_title"
                  >
                    <b> Ways to work on toddler's behaviour</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 14/2021
                  </p>
                  <p className="card-text text-center">
                    Children are very unpredictable. Even parents sometimes have
                    a tough time controlling their kid’s behaviour. Here are
                    some tips to improve child behaviour.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/ways-to-work-on-toddlers-behaviour"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/ccae734fed4a421db2da944a30a7abbb.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-help-kids-apply-kindness-in-their-daily-lives"
                    className="card-text text-center m_title"
                  >
                    <b> How to help kids apply kindness in their daily lives</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 14/2021
                  </p>
                  <p className="card-text text-center">
                    Being kind is an act of humanity. Every parent should teach
                    their kids how to be kind. For that here are some tips on
                    teaching kindness to kids.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-help-kids-apply-kindness-in-their-daily-lives"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/d2bf11b2c1e3fa349bd8d3e5559630f7.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/top-8-activities-that-will-prepare-your-child-for-preschool"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Top 8 Activities That Will Prepare Your Child for
                      Preschool
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 14/2021
                  </p>
                  <p className="card-text text-center">
                    Preschool is one of the most significant of all toddler
                    milestones. Here are some fun instructional activities to
                    help your child prepare for preschool.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/top-8-activities-that-will-prepare-your-child-for-preschool"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pagination" data-page={16}>
            {" "}
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/022bb44a1107a6bbe1d90afcdd7b2ab6.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-primary            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/play-math-numbers-activities-for-preschoolers"
                    className="card-text text-center m_title"
                  >
                    <b> Play Math &amp; Numbers Activities for Preschoolers</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 10/2021
                  </p>
                  <p className="card-text text-center">
                    Are your kids ready to learn numbers now? This blog post
                    will review fun numbers activities for preschoolers that
                    will help them learn numbers better.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/play-math-numbers-activities-for-preschoolers"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/651b5a6fe5f314a79e150687e4405db4.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/ways-to-teach-kids-about-prevalent-myths-about-english"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Ways to Teach Kids about Prevalent Myths About English
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 10/2021
                  </p>
                  <p className="card-text text-center">
                    Looking for ways to teach kids the myths of english? In this
                    blog post, we will discuss some myths that teachers often
                    tell their students as they are learning English.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/ways-to-teach-kids-about-prevalent-myths-about-english"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/zrngfgood-leader-ever.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/social-skills-blogs"
                    className="btn
      btn-primary            "
                  >
                    Social Skills Blogs
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-be-a-leader-and-not-a-follower"
                    className="card-text text-center m_title"
                  >
                    <b> How to be a leader and not a follower</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 10/2021
                  </p>
                  <p className="card-text text-center">
                    Leadership is not at all bossing. Leadership is the essence
                    of togetherness. Explore the top 08 qualities of a good
                    leader given here in this blog.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-be-a-leader-and-not-a-follower"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/73b3e338b89b589e5fb34c03c26e5c60.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/10-myths-english-teachers-tell-while-teaching-kids"
                    className="card-text text-center m_title"
                  >
                    <b> 10 Myths English Teachers Tell While Teaching Kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 10/2021
                  </p>
                  <p className="card-text text-center">
                    While teaching kids, teachers must ensure that they’re
                    teaching the right information. Here are some myths about
                    English that teachers should never tell.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/10-myths-english-teachers-tell-while-teaching-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/d5c50cfb8b7bc0803cdf913d94ee38c1.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-strengthen-communication-with-child"
                    className="card-text text-center m_title"
                  >
                    <b> How To Strengthen communication with child</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 10/2021
                  </p>
                  <p className="card-text text-center">
                    This blog post will provide some tips to improve
                    communication between the two of you to spend more time
                    bonding together.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-strengthen-communication-with-child"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/48ce6538b9b80c124323103261f612bd.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/reasons-to-continue-your-childs-early-education-even-during-a-pandemic"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Reasons To Continue Your Child’s Early Education - Even
                      During A Pandemic
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 10/2021
                  </p>
                  <p className="card-text text-center">
                    Coronavirus has hindered the early education of many
                    children. It is a challenge for parents to continue their
                    kid’s education from home. Know the reason.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/reasons-to-continue-your-childs-early-education-even-during-a-pandemic"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/b9bd29739704d0498a8894d63a561aef.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-get-kids-involved-in-school-activities-like-sports-art-and-design"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      How to Get Kids Involved in School Activities Like Sports,
                      Art, and Design?
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 09/2021
                  </p>
                  <p className="card-text text-center">
                    Academics is not the only important aspect of a school. Find
                    out how you can get your kids involved in school activities
                    like sports, art, and design.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-get-kids-involved-in-school-activities-like-sports-art-and-design"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/3882bd8be33af17f6f5a56c62b7808bb.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-success            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/10-ways-preschools-encourage-your-childs-development"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      10 Ways Preschools Encourage Your Child's Development
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 09/2021
                  </p>
                  <p className="card-text text-center">
                    Preschool is very important for early childhood development
                    and education in your child’s life. Here are the benefits of
                    sending your child to preschool.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/10-ways-preschools-encourage-your-childs-development"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/f1f9d7f0531b55dc883ae9c59ff7bed0.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/at-home-activities-for-preschoolers"
                    className="card-text text-center m_title"
                  >
                    <b> At-Home Activities for Preschoolers</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 09/2021
                  </p>
                  <p className="card-text text-center">
                    Toddlers are very active and always eager to learn and play.
                    These activities for preschoolers will help them learn and
                    play simultaneously at home!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/at-home-activities-for-preschoolers"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/3f0e2a555e52f2401357d25db2083a25.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/essential-and-important-life-lessons-to-teach-your-child"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Essential and Important Life Lessons To Teach Your Child
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 09/2021
                  </p>
                  <p className="card-text text-center">
                    Parents often wonder what important life lessons they should
                    teach their children. Here are five lessons every child
                    should learn before they turn 18!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/essential-and-important-life-lessons-to-teach-your-child"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/496966d3428739525551f76c88f5db0d.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-primary            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/can-books-for-a-kid-help-him-become-a-genius"
                    className="card-text text-center m_title"
                  >
                    <b> Can books for a kid help him become a genius?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 09/2021
                  </p>
                  <p className="card-text text-center">
                    In this blog post, we will give you some books for kids that
                    will make your child the smartest kid in the world!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/can-books-for-a-kid-help-him-become-a-genius"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/ff0e0c0986cff4e78240687c6324a4ae.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-can-you-help-in-your-childs-personality-development"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      How can you help in your child’s personality development?
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 09/2021
                  </p>
                  <p className="card-text text-center">
                    Parenting is a tough job when it comes to raising kids
                    mentally &amp; physically. To make it simple we have given
                    some child’s personality development tips.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-can-you-help-in-your-childs-personality-development"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pagination" data-page={17}>
            {" "}
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/0da1a60781100ed447cd8b87fb2c59a8.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-primary            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/fun-learning-for-kids-why-is-it-important"
                    className="card-text text-center m_title"
                  >
                    <b> Fun Learning For Kids: Why Is It Important?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 08/2021
                  </p>
                  <p className="card-text text-center">
                    There are many reasons why fun learning could change a
                    child’s life. Here are some reasons that stress its
                    importance.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/fun-learning-for-kids-why-is-it-important"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/801109c3587af0ff925c286c4aa09e95.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/health-and-nutrition"
                    className="btn
      btn-success            "
                  >
                    Health And Nutrition
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/12-healthy-tips-for-kids-to-promote-their-healthy-lifestyle"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      12 healthy tips for kids to promote their healthy
                      lifestyle
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 08/2021
                  </p>
                  <p className="card-text text-center">
                    Health is wealth! This quote is indeed meaningful. So, if
                    you think your child should lead a healthy lifestyle then go
                    through health tips for kids here.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/12-healthy-tips-for-kids-to-promote-their-healthy-lifestyle"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/e4cd65831ff3cc53472494a1989557dc.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-raise-kids-who-are-passionate-about-their-career-goals"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      How to raise kids who are passionate about their career
                      goals
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 08/2021
                  </p>
                  <p className="card-text text-center">
                    Career goals are the key goals about which everyone is
                    passionate, even your kids too. Read some tips to raise a
                    career-oriented child that is given here.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-raise-kids-who-are-passionate-about-their-career-goals"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/f903262f433c460af05cb20c05869e2c.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-be-a-strict-parent-without-being-too-grumpy"
                    className="card-text text-center m_title"
                  >
                    <b> How to Be a Strict Parent Without Being Too Grumpy</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 08/2021
                  </p>
                  <p className="card-text text-center">
                    Being a strict parent has immense benefits but if done
                    wrong, it can traumatize a child. Here are 8 tips that will
                    help you.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-be-a-strict-parent-without-being-too-grumpy"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/6ad8e17fecf206bdaf5c5c959c4ef161.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/top-9-life-skills-for-children"
                    className="card-text text-center m_title"
                  >
                    <b> Top 9 Life Skills for Children</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 08/2021
                  </p>
                  <p className="card-text text-center">
                    Life skills for children are a crucial part of parenting.
                    Here are 9 important life skills that you should teach your
                    children.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/top-9-life-skills-for-children"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/aee5ef456d7bbd6208555fa40d9fbb0d.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/5-easy-ways-to-enable-early-numeracy"
                    className="card-text text-center m_title"
                  >
                    <b> 5 Easy Ways To Enable Early Numeracy</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 08/2021
                  </p>
                  <p className="card-text text-center">
                    Here are 5 fun, exciting, and interesting activities that
                    will help your children in improving their early numeracy
                    skills and abilities.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/5-easy-ways-to-enable-early-numeracy"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/6135034bcb5b0b0c6bb8bc791069b1c5.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-primary            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-does-technology-affect-your-childs-education"
                    className="card-text text-center m_title"
                  >
                    <b> How Does Technology Affect Your Child's Education?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 07/2021
                  </p>
                  <p className="card-text text-center">
                    Technology encourages kids to be actively involved in
                    learning and receive customized education. Here are 5 major
                    ways technology is used in education.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-does-technology-affect-your-childs-education"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/960410b01f2e57cd1863e9d4bb21e8c3.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-success            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/9-tips-on-teaching-your-kids-basic-maths"
                    className="card-text text-center m_title"
                  >
                    <b> 9 Tips on Teaching Your Kids Basic Maths</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 07/2021
                  </p>
                  <p className="card-text text-center">
                    Math skills come in handy not only in school but also in day
                    to day life. Here are 9 tips with which you can build your
                    child’s skills in basic maths.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/9-tips-on-teaching-your-kids-basic-maths"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/c3451379c50c4b6d051945179e842fce.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-primary            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/excellent-summer-activities-for-kids-this-year"
                    className="card-text text-center m_title"
                  >
                    <b> Excellent summer activities for kids this year</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 07/2021
                  </p>
                  <p className="card-text text-center">
                    This summer are you wondering what are the cool summer
                    activities for kids? We’ve got you! Here are the best summer
                    activities you shouldn’t miss out on.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/excellent-summer-activities-for-kids-this-year"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/fae612623b5b19e680ae2d19cb2c3101.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/the-recipe-for-being-a-successful-and-good-parent"
                    className="card-text text-center m_title"
                  >
                    <b> The Recipe for Being a Successful and Good Parent</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 07/2021
                  </p>
                  <p className="card-text text-center">
                    In this blog post, we will explore what makes you a good
                    parent by looking at few common traits among those who have
                    been successful in the endeavour.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/the-recipe-for-being-a-successful-and-good-parent"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/53b8695e36ad928d757e022fac1df06b.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-find-the-best-teacher-for-your-child"
                    className="card-text text-center m_title"
                  >
                    <b> How to Find the Best Teacher for Your Child?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 07/2021
                  </p>
                  <p className="card-text text-center">
                    Teachers are not only second parents for kids but also a
                    rich asset if we choose them wisely. Here are some tips to
                    choose the best teacher for kids.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-find-the-best-teacher-for-your-child"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/7e451621477b9042c9a986ac1fab114b.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/10-ways-to-boost-your-childs-working-memory"
                    className="card-text text-center m_title"
                  >
                    <b> 10 Ways to Boost your Child's Working Memory</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 07/2021
                  </p>
                  <p className="card-text text-center">
                    Working memory is an integral part of establishing a solid
                    foundation for learning both in and out of the classroom.
                    Here’s how you can boost it.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/10-ways-to-boost-your-childs-working-memory"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pagination" data-page={18}>
            {" "}
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/532677eeae3118f81f31b3ddd6807d90.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/10-brilliant-ways-to-teach-kids-how-to-be-honest"
                    className="card-text text-center m_title"
                  >
                    <b> 10 Brilliant Ways to teach kids how to be honest</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 06/2021
                  </p>
                  <p className="card-text text-center">
                    We often say that Honesty is the best policy but it is very
                    hard to inculcate in our kids. Here are some tips to teach
                    kids how to be honest.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/10-brilliant-ways-to-teach-kids-how-to-be-honest"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/cbb204b0b9fe7e9317a72d6611ece877.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/8-study-motivation-tips-for-all-students"
                    className="card-text text-center m_title"
                  >
                    <b> 8 Study Motivation Tips For All Students</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 06/2021
                  </p>
                  <p className="card-text text-center">
                    When students find it hard to study without distractions,
                    these top 8 study motivation tips will give them a way out!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/8-study-motivation-tips-for-all-students"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/64d89461511a3be907a0bac014c0b939.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-primary            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/promoting-a-better-childhood-effective-parenting-tips"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Promoting a Better Childhood - Effective Parenting Tips
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 06/2021
                  </p>
                  <p className="card-text text-center">
                    If you’re a new parent, we understand that parenting might
                    sound tough. But with these 11 parenting tips, you’ll ace
                    your child’s development.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/promoting-a-better-childhood-effective-parenting-tips"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/3a2fb1916fd34dd3b40e67d477657aa7.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/10-easy-ways-to-teach-spellings-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b> 10 Easy Ways to Teach Spellings for Kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 06/2021
                  </p>
                  <p className="card-text text-center">
                    Spelling is the foundation of written language and is very
                    crucial for children to learn. Here are some ways to learn
                    spellings for kids.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/10-easy-ways-to-teach-spellings-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/3e70ba49e0be8c8002c4cf339c14e007.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-teach-kids-to-deal-with-bully-in-school"
                    className="card-text text-center m_title"
                  >
                    <b> How to teach kids to deal with bully in school</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 06/2021
                  </p>
                  <p className="card-text text-center">
                    Suffering a bully in school can be a terrifying experience
                    for everyone involved.This blog post is here to cover how
                    kids can deal with bullying.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-teach-kids-to-deal-with-bully-in-school"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/3a660658d35d6a8c0ac87cf1113ab124.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/is-your-child-self-dependent-if-not-you-are-at-the-right-place"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Is your child self dependent? If not, you are at the right
                      place.
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 06/2021
                  </p>
                  <p className="card-text text-center">
                    Being self-dependent is a major trait enabling your child to
                    deal with difficulties. The blog post will discuss ways to
                    make your child more self-reliant!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/is-your-child-self-dependent-if-not-you-are-at-the-right-place"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/jxeavpreschool-different-ways.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-primary            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/different-ways-to-make-learning-more-interesting-for-preschoolers"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Different ways to make learning more interesting for
                      preschoolers
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 02/2021
                  </p>
                  <p className="card-text text-center">
                    These days preschooling has extraordinary importance for
                    kids. To make it more interesting we have given some ideas
                    for preschool learning activities.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/different-ways-to-make-learning-more-interesting-for-preschoolers"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/9bb832aef35f1fcf026a8150c4726179.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-teach-empathy-to-kids"
                    className="card-text text-center m_title"
                  >
                    <b> How to Teach Empathy to Kids?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 02/2021
                  </p>
                  <p className="card-text text-center">
                    What is empathy, how would kids know about it? It’s your
                    duty as parents them this. Being empathetic is one of the
                    best traits one can have as a person.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-teach-empathy-to-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/qyobxinstil-good-habits.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/top-11-good-habits-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b> Top 11 Good Habits for Kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 02/2021
                  </p>
                  <p className="card-text text-center">
                    Good habits for kids are an essential part of child
                    development. Here are 11 of the habits that are crucial for
                    daily life.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/top-11-good-habits-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/c1f97b45c3e8a4d54d60248cf19496c6.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-discipline-kids-top-six-tips"
                    className="card-text text-center m_title"
                  >
                    <b> How to Discipline Kids: Top Six Tips</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 02/2021
                  </p>
                  <p className="card-text text-center">
                    How to discipline kids if they are naughty? Well, we have 6
                    tips that will help you and make your task get completed
                    sooner!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-discipline-kids-top-six-tips"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/4f7232e15a51c97424bf12f45a45c124.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/stop-bullying-in-schools-what-to-do-if-you-own-child-bully"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Stop Bullying in Schools: What to Do If You Own Child
                      Bully
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 02/2021
                  </p>
                  <p className="card-text text-center">
                    Bullying in schools is dangerous, and it's worse if your
                    child is the bully. Here are some tips if your child is
                    responsible for bullying in schools.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/stop-bullying-in-schools-what-to-do-if-you-own-child-bully"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/a466de632940b301ab81d1fec06c13be.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/creativity-blogs"
                    className="btn
      btn-success            "
                  >
                    Creativity Blogs
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/creative-activities-for-kids-the-secret-to-develop-creativity-in-kids"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Creative Activities for Kids - The secret to Develop
                      Creativity in Kids
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 02/2021
                  </p>
                  <p className="card-text text-center">
                    Creativity is an important part of a child's development.
                    With these creative activities for kids, children can have
                    fun while developing their skills.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/creative-activities-for-kids-the-secret-to-develop-creativity-in-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pagination" data-page={19}>
            {" "}
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/bb96e8242c27fabd69d6020406af18df.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-be-a-responsible-parent"
                    className="card-text text-center m_title"
                  >
                    <b> How to be a responsible parent</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 02/2021
                  </p>
                  <p className="card-text text-center">
                    When it comes to parenting, it is a very patient and soulful
                    job that every parent has to do. For that, here are some
                    tips for responsible parenting.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-be-a-responsible-parent"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/tqnjnpreread-activity.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/seven-activities-to-encourage-pre-reading-and-early-literacy-in-kids"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Seven Activities to Encourage Pre-Reading and Early
                      Literacy in Kids
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 02/2021
                  </p>
                  <p className="card-text text-center">
                    Wondering how to inculcate pre-reading activities for your
                    kids and encourage reading and literacy skills in them? This
                    blog is right here to help you out.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/seven-activities-to-encourage-pre-reading-and-early-literacy-in-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/cd628ac981fa684049fdd864d53c0960.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/creativity-blogs"
                    className="btn
      btn-primary            "
                  >
                    Creativity Blogs
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/diy-techniques-to-make-gifts-for-kids-more-creative"
                    className="card-text text-center m_title"
                  >
                    <b> DIY Techniques to Make Gifts for Kids More Creative</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 01/2021
                  </p>
                  <p className="card-text text-center">
                    Got your kid’s favourite gift but don't know how to make it
                    look great? Try these 9 DIY techniques to make your gifts
                    for kids look creative and bright!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/diy-techniques-to-make-gifts-for-kids-more-creative"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/tdzoxgood-leader.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-success            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/12-qualities-of-a-good-leader"
                    className="card-text text-center m_title"
                  >
                    <b> 12 Qualities of a Good Leader</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 01/2021
                  </p>
                  <p className="card-text text-center">
                    The qualities of a good leader inspire other people to be
                    good leaders as well. Here are 12 qualities that every good
                    leader must possess.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/12-qualities-of-a-good-leader"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/61a653ff8acf554e68d854057aa04c51.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/the-importance-of-education-for-raising-a-child"
                    className="card-text text-center m_title"
                  >
                    <b> The Importance of Education for Raising a Child</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 01/2021
                  </p>
                  <p className="card-text text-center">
                    The importance of education is a crucial topic if you’re a
                    new parent, especially. Here are 9 benefits that will help
                    you figure it out.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/the-importance-of-education-for-raising-a-child"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/8787c769c7ef7f570173ec5281166e37.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-success            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/9-ways-to-ensure-happy-students-in-school"
                    className="card-text text-center m_title"
                  >
                    <b> 9 Ways to Ensure Happy Students in School</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 01/2021
                  </p>
                  <p className="card-text text-center">
                    Happy students are the main key to an amazing school! Here
                    are 9 ways with which you can ensure that your students are
                    engaged.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/9-ways-to-ensure-happy-students-in-school"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/jvbszgardening.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-primary            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/8-reasons-why-gardening-is-absolutely-brilliant-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      8 reasons why gardening is absolutely brilliant for kids!
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 01/2021
                  </p>
                  <p className="card-text text-center">
                    Gardening is the best way to connect with nature and boost
                    creativity. Read to know more about the benefits of
                    gardening.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/8-reasons-why-gardening-is-absolutely-brilliant-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/c202bd1110116389cfb6c846be08b72f.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/creativity-blogs"
                    className="btn
      btn-success            "
                  >
                    Creativity Blogs
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-design-a-kids-room-that-spurs-creativity-and-learning"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      How to design a kid's room that spurs creativity and
                      learning
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 01/2021
                  </p>
                  <p className="card-text text-center">
                    Creative development starts at home and a kid’s room is the
                    best place to start. Here are the best tips for you!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-design-a-kids-room-that-spurs-creativity-and-learning"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/8f549b9ac1e05265ebe65c6a87da6df8.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/10-tips-to-reduce-phone-addiction-in-kids"
                    className="card-text text-center m_title"
                  >
                    <b> 10 Tips to Reduce Phone Addiction in Kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 01/2021
                  </p>
                  <p className="card-text text-center">
                    Phone addiction is common among modern kids and parents
                    around the world are worried. Here are 10 ways you can
                    control the phone usage of your kid!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/10-tips-to-reduce-phone-addiction-in-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/cff6bbb6d091004126db3a7a5e702b8f.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-improve-self-confidence-in-kids-your-9-tips"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      How to improve self-confidence in kids - your 9 tips!
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 01/2021
                  </p>
                  <p className="card-text text-center">
                    As parents, everyone must know how to improve
                    self-confidence in their children. Here are 9 tips to get
                    started with.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-improve-self-confidence-in-kids-your-9-tips"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/46d4e5bd46d7f786dc664c3b1dacef47.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-choose-the-best-school-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b> How to Choose the Best School for Kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 01/2021
                  </p>
                  <p className="card-text text-center">
                    A school is a second home for kids. Choosing the best school
                    for kids might sound difficult but no worries! We’ve got 10
                    exclusive tips to soothe your burden.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-choose-the-best-school-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/080e1333101a5992ce69da4bd9024692.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/the-abcs-for-your-kids-ways-to-make-them-learn-english-alphabet"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      The ABCs for Your Kids: Ways To Make Them Learn English
                      Alphabet
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Sep 01/2021
                  </p>
                  <p className="card-text text-center">
                    Are you having a hard time making your child learn the
                    English alphabet? Try out these easy and fun activities for
                    preschool. They will definitely help you.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/the-abcs-for-your-kids-ways-to-make-them-learn-english-alphabet"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pagination" data-page={20}>
            {" "}
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/4139a7b79dbf5fedf7769853a463e3ff.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/8-effective-ways-you-can-stop-procrastination-in-kids"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      8 Effective Ways You Can Stop Procrastination in Kids
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 31/2021
                  </p>
                  <p className="card-text text-center">
                    Procrastination is a common problem that stops kids from
                    getting things done and excelling academically. Here is how
                    you can stop procrastination in kids.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/8-effective-ways-you-can-stop-procrastination-in-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/0f0c06686d87340f2a3f208d948cb86f.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/10-things-parents-should-be-teaching-kindergarten-kids"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      10 Things Parents Should Be Teaching Kindergarten Kids
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 31/2021
                  </p>
                  <p className="card-text text-center">
                    Kindergarten is the ideal time to teach valuable lessons
                    that help kids succeed in future. Here are 10 skills you
                    should be teaching kindergarten kids
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/10-things-parents-should-be-teaching-kindergarten-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/7c98afa82a5bec768906930913a5948b.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-primary            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/5-ways-to-make-the-most-of-preschool-activities"
                    className="card-text text-center m_title"
                  >
                    <b> 5 Ways To Make The Most Of Preschool Activities</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 31/2021
                  </p>
                  <p className="card-text text-center">
                    If you truly want to make the most out of your child's
                    preschool years, these preschool activities are sure to do
                    it. Try these five activities!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/5-ways-to-make-the-most-of-preschool-activities"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/6910b000fe27dbf6be55e594c233fb32.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/16-effective-tips-on-how-to-increase-concentration-in-your-kids"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      16 Effective Tips On How To Increase Concentration In Your
                      Kids
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 31/2021
                  </p>
                  <p className="card-text text-center">
                    Many kids struggle with how to increase concentration, which
                    leads to anxiety and depression. Find tips that will help
                    your child concentrate better!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/16-effective-tips-on-how-to-increase-concentration-in-your-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/5eb1aeac3477cfe82531227201a60c67.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/follow-these-tips-for-potty-training-your-kids-in-just-7-days"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Follow these tips for potty training your kids in just 7
                      days
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 31/2021
                  </p>
                  <p className="card-text text-center">
                    Wondering how to give potty training to kids? This blog has
                    got you covered.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/follow-these-tips-for-potty-training-your-kids-in-just-7-days"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/e8c4a7f7a450a6264832acd85db3e12f.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-encourage-love-for-reading-in-kids"
                    className="card-text text-center m_title"
                  >
                    <b> How to encourage love for reading in kids?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 31/2021
                  </p>
                  <p className="card-text text-center">
                    Reading is an essential habit. But sometimes parents have a
                    tough time engaging their kids to read books. Don’t worry!
                    Here are some tips.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-encourage-love-for-reading-in-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/e097be1b6da0a575eae40711f8db3500.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/9-fun-activities-for-kids-you-can-play-in-the-backyard"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      9 fun activities for kids you can play in the backyard
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 31/2021
                  </p>
                  <p className="card-text text-center">
                    Backyard is the safest place to have a lot of fun activities
                    for kids. Take a look at some fun activities given here.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/9-fun-activities-for-kids-you-can-play-in-the-backyard"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/378aa43868d0f98f2b71fc97ea541055.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/parenting-tips-how-to-make-your-kids-do-chores"
                    className="card-text text-center m_title"
                  >
                    <b> Parenting tips: How to make your kids do chores</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 31/2021
                  </p>
                  <p className="card-text text-center">
                    Household chores are the tasks through which kids can learn
                    etiquette, manners, and ethics. Here are some parenting tips
                    to involve kids in chores.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/parenting-tips-how-to-make-your-kids-do-chores"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/5241ff77d7eb2c13d7e09522787dc33e.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/7-things-not-to-say-if-you-want-to-groom-discipline-kids"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      7 Things Not To Say If You Want To Groom Discipline Kids
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 31/2021
                  </p>
                  <p className="card-text text-center">
                    Discipline kids witness a good future ahead. If you want to
                    discipline your child, remember to not use these 7 phrases.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/7-things-not-to-say-if-you-want-to-groom-discipline-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/0e17f511426c690168a7142b0886c2f5.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/9-ways-to-teach-good-manners-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b> 9 Ways to Teach Good Manners for Kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 31/2021
                  </p>
                  <p className="card-text text-center">
                    Good manners for kids is a buzzing topic because it helps
                    child development. Here are 9 tips if you’re a parent and
                    wondering how to start.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/9-ways-to-teach-good-manners-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/361424119a1e94b03906a28aa6e4457b.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/set-up-preschool-at-home-with-these-7-easy-steps"
                    className="card-text text-center m_title"
                  >
                    <b> Set Up Preschool at Home with These 7 Easy Steps</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 28/2021
                  </p>
                  <p className="card-text text-center">
                    Setting up a preschool at home will allow parents to devote
                    their time and energy to their child’s education. Here are 7
                    ways to make the set-up easy!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/set-up-preschool-at-home-with-these-7-easy-steps"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/b780827606f3013d473f6b7536c02e7a.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/10-entertainment-for-kids-at-home"
                    className="card-text text-center m_title"
                  >
                    <b> 10 Entertainment For Kids At Home</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 28/2021
                  </p>
                  <p className="card-text text-center">
                    As parents, entertainment for kids especially at home might
                    sound difficult. That is why we present you with 10 ideas to
                    ease your trouble.As parents, entertainment for kids
                    especially at home might sound difficult. That is why we
                    present you with 10 ideas to ease your trouble.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/10-entertainment-for-kids-at-home"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pagination" data-page={21}>
            {" "}
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/0acac1637d71c9e75ade2b8f23cdb00f.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-sleep-early-9-tips-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b> How To Sleep Early: 9 Tips For Kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 28/2021
                  </p>
                  <p className="card-text text-center">
                    One of the most browsed topics on the internet is, “how to
                    sleep early?”. If you’re wondering how to get your kids to
                    sleep better, here are our 9 tips!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-sleep-early-9-tips-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/4d1a4593e31669da590ae1322a303765.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/creativity-blogs"
                    className="btn
      btn-success            "
                  >
                    Creativity Blogs
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/art-for-kids-help-them-learn-life-lessons-through-art"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Art For Kids: Help Them Learn Life Lessons Through Art
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 28/2021
                  </p>
                  <p className="card-text text-center">
                    Art For Kids: Help Them Learn Life Lessons Through Art
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/art-for-kids-help-them-learn-life-lessons-through-art"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/fe7aef5cd07c02b8daf0bbda6b29b3ac.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/make-your-child-courageous-teach-them-how-to-overcome-fear"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Make your child courageous: Teach them how to overcome
                      fear
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 28/2021
                  </p>
                  <p className="card-text text-center">
                    This blog post is here to brief you about how in different
                    ways parents can help their children learn how to overcome
                    fear and be brave!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/make-your-child-courageous-teach-them-how-to-overcome-fear"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/5e3dae175af8a730d65dc7377964c193.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/parenting-guidancethese-things-ruin-your-childs-productivity"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Parenting Guidance:These things Ruin Your Child’s
                      Productivity
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 28/2021
                  </p>
                  <p className="card-text text-center">
                    We know some of you are looking for some parenting guidance
                    against children! Know everything in this blog
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/parenting-guidancethese-things-ruin-your-childs-productivity"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/7d7eb1a3cbf34bb39f8c09cd2a100a1f.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-primary            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/tips-to-select-perfect-preschools-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b> Tips to select perfect preschools for kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 28/2021
                  </p>
                  <p className="card-text text-center">
                    Preschools for kids have extraordinary importance for their
                    overall growth. Here are some tips that will help you select
                    the best preschools for kids.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/tips-to-select-perfect-preschools-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/a4ffe38569be8853f9b2c33da3f60053.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/practical-steps-to-teaching-kids-moral-values"
                    className="card-text text-center m_title"
                  >
                    <b> Practical Steps to Teaching Kids Moral Values</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 28/2021
                  </p>
                  <p className="card-text text-center">
                    Moral values are the basic attributes that every person
                    should have. Parents can teach their kids about moral values
                    by using the 10 steps given here.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/practical-steps-to-teaching-kids-moral-values"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/e973145187dd40da17fffe5add67a1eb.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-primary            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/12-fun-and-preschool-activities-at-home-for-kids-that-you-should-not-miss"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      12 Fun and preschool activities at home for kids that you
                      should not miss
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 27/2021
                  </p>
                  <p className="card-text text-center">
                    Here are 12 fun preschool activities at home that you can
                    perform with your kids to help make the day go by more
                    smoothly.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/12-fun-and-preschool-activities-at-home-for-kids-that-you-should-not-miss"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/vfytt4-year-intelligent.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/activities-for-4-year-olds-to-make-them-more-intelligent-13-tips"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Activities for 4 Year Olds to Make Them More Intelligent:
                      13 Tips
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 27/2021
                  </p>
                  <p className="card-text text-center">
                    In this blog post, we will review 13 activities for
                    4-years-old that have been proven to help increase
                    intelligence in young kids.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/activities-for-4-year-olds-to-make-them-more-intelligent-13-tips"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/d5ac0bdb67dd93448ffdbaf511b7644e.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/design-your-own-preschool-curriculum-tips-to-get-started"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Design Your Own Preschool Curriculum: Tips to Get Started
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 27/2021
                  </p>
                  <p className="card-text text-center">
                    In this blog post, we will explore some tips for designing
                    your own preschool curriculum!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/design-your-own-preschool-curriculum-tips-to-get-started"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/0164b2bd31ad41a122e3199dcc8eb4cb.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/9-reasons-why-swimming-for-kids-is-a-big-yes"
                    className="card-text text-center m_title"
                  >
                    <b> 9 Reasons Why Swimming for Kids is a Big Yes!</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 27/2021
                  </p>
                  <p className="card-text text-center">
                    Swimming is a healthy exercise and everyone including kids
                    should do it. Here are the top 9 reasons showcasing the
                    importance of swimming for kids.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/9-reasons-why-swimming-for-kids-is-a-big-yes"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/54ce1c5cb84f1f3b54f1aa1974fe290e.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/teach-your-kids-how-to-study-faster-effectively"
                    className="card-text text-center m_title"
                  >
                    <b> Teach your kids how to study faster effectively</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 27/2021
                  </p>
                  <p className="card-text text-center">
                    Teaching your kids how to study faster is effective and will
                    save them time in the long run. Though, it can be hard for
                    parents. But not with these tips!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/teach-your-kids-how-to-study-faster-effectively"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/883829351f992f01b83128163d0cfc34.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/fun-and-easy-distance-learning-preschool-activities-for-toddlers"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Fun and easy distance learning preschool activities for
                      toddlers!
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 27/2021
                  </p>
                  <p className="card-text text-center">
                    Toddlers have a lot of energy and curiosity that they need
                    to burn off! With these 5 preschool activities, you don't
                    even have to leave the house.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/fun-and-easy-distance-learning-preschool-activities-for-toddlers"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pagination" data-page={22}>
            {" "}
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/704ad24684e2e1d29748a920383b60cf.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-can-you-help-children-overcome-exam-stress"
                    className="card-text text-center m_title"
                  >
                    <b> How Can You Help Children Overcome Exam Stress?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 27/2021
                  </p>
                  <p className="card-text text-center">
                    Exam stress is so common in today's life. Kids go through a
                    lot in silence. Here are some ways to help your child deal
                    with exam stress and anxiety.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-can-you-help-children-overcome-exam-stress"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/edrttdevelop-story-skills.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-develop-story-writing-skills-in-children"
                    className="card-text text-center m_title"
                  >
                    <b> How To Develop Story Writing Skills In Children?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 27/2021
                  </p>
                  <p className="card-text text-center">
                    Reading and writing are life skills that will help your
                    child in all aspects of his life. Here are some ways to
                    develop story writing skills in children!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-develop-story-writing-skills-in-children"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/d78402c25ee611a6061c6eabafabda92.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/6-ways-to-deal-with-child-throwing-temper-tantrums"
                    className="card-text text-center m_title"
                  >
                    <b> 6 Ways to Deal With Child Throwing Temper Tantrums</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 27/2021
                  </p>
                  <p className="card-text text-center">
                    Temper tantrums are very common in children, and it can be
                    difficult to deal with those. Here are 6 ways that you can
                    stop your child’s behavior.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/6-ways-to-deal-with-child-throwing-temper-tantrums"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/e7bd0f28286663b5011f4a728064b473.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/8-tips-to-raise-kids-with-respect-for-elders"
                    className="card-text text-center m_title"
                  >
                    <b> 8 Tips to Raise Kids with Respect for Elders</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 27/2021
                  </p>
                  <p className="card-text text-center">
                    Respect for elders should be taught at a very early age.
                    Here are 8 ways that you can use to groom your child and
                    help them respect elders.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/8-tips-to-raise-kids-with-respect-for-elders"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/sbekqpreschool-tips.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-primary            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-help-preschool-kids-in-learning"
                    className="card-text text-center m_title"
                  >
                    <b> How to help preschool kids in learning?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 27/2021
                  </p>
                  <p className="card-text text-center">
                    If you need ideas for how to engage your preschooler in
                    learning, here’s what we recommend.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-help-preschool-kids-in-learning"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/cykqzcharacter-building.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/9-great-fun-character-building-books-for-children"
                    className="card-text text-center m_title"
                  >
                    <b> 9 Great, Fun Character Building Books for Children</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 26/2021
                  </p>
                  <p className="card-text text-center">
                    Character building books are essential for a child’s future
                    development. Here are 9 books that will help your child to
                    learn values!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/9-great-fun-character-building-books-for-children"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/813f9579763488070fec64f4f5daa57d.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/10-ideas-for-a-fancy-dress-competition"
                    className="card-text text-center m_title"
                  >
                    <b> 10 Ideas for a Fancy Dress Competition</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 26/2021
                  </p>
                  <p className="card-text text-center">
                    Fancy dress competitions are a fun way to break the ice with
                    new people. Here are our ideas for a fancy dress competition
                    that’ll aid you!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/10-ideas-for-a-fancy-dress-competition"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/9c55394136cef0f67cb4f580c1c88ef4.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-success            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/hands-on-math-activities-for-preschoolers"
                    className="card-text text-center m_title"
                  >
                    <b> Hands-On Math Activities for Preschoolers</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 26/2021
                  </p>
                  <p className="card-text text-center">
                    Toddlers are naturally curious and want to explore. These 7
                    math for kids activities is a great way of feeding curiosity
                    while helping with basic math.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/hands-on-math-activities-for-preschoolers"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/0676d91f4a09c778b0fecc71f3bbc5ed.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/indoor-games-for-kids-to-keep-them-entertained-and-light"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Indoor Games For Kids To Keep Them Entertained and Light
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 26/2021
                  </p>
                  <p className="card-text text-center">
                    When you need a lesson plan for indoor games for kids here
                    are some great indoor games that will keep kids entertained!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/indoor-games-for-kids-to-keep-them-entertained-and-light"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/ec8fcef32721c696795818152cfaf440.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/5-ways-to-foster-your-childs-learning"
                    className="card-text text-center m_title"
                  >
                    <b> 5 Ways to Foster Your Child's Learning</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 26/2021
                  </p>
                  <p className="card-text text-center">
                    If you want your child to grow up to be a successful
                    student, they must learn at an early age. Here are 5 ways to
                    foster preschool learning!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/5-ways-to-foster-your-childs-learning"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/a69b819e4816c5fd760ab3046a736b15.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/7-brain-teasers-to-improve-critical-thinking-in-children"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      7 Brain Teasers To Improve Critical Thinking In Children
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 26/2021
                  </p>
                  <p className="card-text text-center">
                    Looking for ways to improve your child’s critical thinking
                    skills? Here are our 7 best brain teasers for kids to help
                    you do the same!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/7-brain-teasers-to-improve-critical-thinking-in-children"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/b20cce5af10465724501952b6b1d5160.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/indoor-activities-for-your-children-to-boost-creativity"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Indoor Activities For Your Children To Boost Creativity
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 26/2021
                  </p>
                  <p className="card-text text-center">
                    It can be hard for parents to know what activities are best
                    suited for children indoors, so here is a list of 7 creative
                    ideas to keep your little one entertained!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/indoor-activities-for-your-children-to-boost-creativity"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pagination" data-page={23}>
            {" "}
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/f7854083e8b6d952a400c670722302ed.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/10-reasons-you-should-send-your-kid-to-pre-primary-school"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      10 reasons you should send your kid to Pre-primary school
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 26/2021
                  </p>
                  <p className="card-text text-center">
                    Pre-primary school is very important for the effective
                    learning and development of your child. Here are some
                    reasons why!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/10-reasons-you-should-send-your-kid-to-pre-primary-school"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/wflwimotor-skills.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-success            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/activities-for-children-in-1st-grade-to-develop-fine-motor-skills"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Activities for children in 1st grade to develop fine motor
                      skills
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 26/2021
                  </p>
                  <p className="card-text text-center">
                    Wondering what are the activities for 1st graders that will
                    help them develop fine motor skills? You have to check out
                    this blog
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/activities-for-children-in-1st-grade-to-develop-fine-motor-skills"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/302dffe39c1d662b9e8a021cb2b89dfe.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/timetable-for-kids-during-the-pandemic"
                    className="card-text text-center m_title"
                  >
                    <b> Timetable for kids during the pandemic</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 26/2021
                  </p>
                  <p className="card-text text-center">
                    It is difficult to make a timetable during the lockdown for
                    your children to include all the necessary activities. Here
                    is how!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/timetable-for-kids-during-the-pandemic"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/9890460e6ef7dec9df66905d725ca0a5.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-homeschool-a-child-with-learning-disabilities"
                    className="card-text text-center m_title"
                  >
                    <b> How to homeschool a child with learning disabilities</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 26/2021
                  </p>
                  <p className="card-text text-center">
                    Homeschooling a child with learning disabilities can be a
                    challenge. But these tips can help you.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-homeschool-a-child-with-learning-disabilities"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/4d720585c434ae12b7518dc97c7ec8e0.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/practice-these-reading-activities-for-preschoolers-everyday"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Practice These Reading Activities for Preschoolers
                      Everyday
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 25/2021
                  </p>
                  <p className="card-text text-center">
                    Looking for ways to improve reading skills among young kids?
                    Try these 13 reading activities for preschoolers at home to
                    sharpen their learning everyday!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/practice-these-reading-activities-for-preschoolers-everyday"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/663f6b505275ad056fe5d5f232078a00.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/12-must-have-activity-books-for-5-year-olds"
                    className="card-text text-center m_title"
                  >
                    <b> 12 Must Have Activity Books for 5 Year Olds</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 25/2021
                  </p>
                  <p className="card-text text-center">
                    The activity books for 5 year olds include activities that
                    require more fine motor skills and problem solving skills.
                    Check out the full list here.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/12-must-have-activity-books-for-5-year-olds"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/70ca8e1d492a0c78257777984fcbb483.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/10-educational-toys-ideas-for-kids-who-are-in-preschool"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      10 Educational toys Ideas For kids who are in preschool
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 25/2021
                  </p>
                  <p className="card-text text-center">
                    Wondering what could be the best educational toys for kids?
                    This blog is a must-read
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/10-educational-toys-ideas-for-kids-who-are-in-preschool"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/wchseoutdoor-activities.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-success            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/9-best-outdoor-activities-for-kids-preschoolers"
                    className="card-text text-center m_title"
                  >
                    <b> 9 Best Outdoor Activities for Kids: Preschoolers</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 25/2021
                  </p>
                  <p className="card-text text-center">
                    Outdoor activities for kids provide immense benefits for
                    their development. Here are the top 9 activities that kids
                    will love and cherish.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/9-best-outdoor-activities-for-kids-preschoolers"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/buqhiresilience.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/11-simple-ways-to-build-resilience-in-children"
                    className="card-text text-center m_title"
                  >
                    <b> 11 Simple Ways to Build Resilience in Children</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 25/2021
                  </p>
                  <p className="card-text text-center">
                    In order to build resilience in children you might face many
                    difficulties. Here are 11 steps that will help you to build
                    resilience in your children.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/11-simple-ways-to-build-resilience-in-children"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/ed801dbb73c91adf7001469f02a1a1c7.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/tips-to-keep-your-toddler-playful-with-fun-activities-at-home"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Tips To Keep Your Toddler Playful With Fun Activities at
                      Home
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 25/2021
                  </p>
                  <p className="card-text text-center">
                    Keeping toddlers active at home can be a difficult task.
                    Here are ten toddler-approved ways to keep your toddler
                    active at home!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/tips-to-keep-your-toddler-playful-with-fun-activities-at-home"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/b71198f9ee75bdb6b80eb370a86397ff.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/gifted-children-the-signs-to-look-out-for"
                    className="card-text text-center m_title"
                  >
                    <b> Gifted Children - The Signs to Look Out For</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 25/2021
                  </p>
                  <p className="card-text text-center">
                    Gifted children are a blessing because they have the
                    potential to change our world and make it better. The
                    following signs are some that you can look out.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/gifted-children-the-signs-to-look-out-for"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/dd577a7ccc047e20f91f7b354003409c.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/10-surprising-ways-to-improve-your-childs-social-skills"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      10 Surprising Ways to Improve Your Child's Social Skills
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 25/2021
                  </p>
                  <p className="card-text text-center">
                    Social skills are an important life skill! Social skills
                    affect your child's capacity for success later on in life
                    because social interactions play an important role in our
                    day-to-day lives.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/10-surprising-ways-to-improve-your-childs-social-skills"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pagination" data-page={24}>
            {" "}
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/9dc508e713c26d6cbe13857bb56800b9.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/reasons-why-kids-start-to-dislike-the-education-system"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Reasons Why Kids Start to Dislike The Education System
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 25/2021
                  </p>
                  <p className="card-text text-center">
                    Children tend to dislike education because of various
                    reasons. There are many things that can change education for
                    a child. Following are 12 reasons.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/reasons-why-kids-start-to-dislike-the-education-system"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/adivhscreen-time.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-success            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/11-ways-screen-time-affects-your-childs-education"
                    className="card-text text-center m_title"
                  >
                    <b> 11 Ways Screen Time Affects Your Child's Education</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 25/2021
                  </p>
                  <p className="card-text text-center">
                    Wondering what are the ways in which the screen time affects
                    your child’s education? This blog has covered it all.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/11-ways-screen-time-affects-your-childs-education"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/204648c3c28ae416bb41e70a1d2a48aa.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/the-importance-of-experiential-learning-for-toddlers"
                    className="card-text text-center m_title"
                  >
                    <b> The Importance of Experiential Learning for Toddlers</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 25/2021
                  </p>
                  <p className="card-text text-center">
                    Wondering what could be the importance of experiential
                    learning for toddlers? This blog is a good read
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/the-importance-of-experiential-learning-for-toddlers"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/2fbdbff5e5033bad760504f11abd09a6.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/10-steps-to-help-you-choose-a-good-preschool-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      10 Steps to Help You Choose a Good Preschool for Kids
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 25/2021
                  </p>
                  <p className="card-text text-center">
                    Are you trying to find a preschool for kids that will not
                    only aid them but also you? If so, these 10 key points will
                    help you in finding the right one.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/10-steps-to-help-you-choose-a-good-preschool-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/ntlpbactivities-school.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-primary            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/why-should-an-activity-box-for-kids-be-supplied-in-schools"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Why should an activity box for kids be supplied in
                      schools?
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 24/2021
                  </p>
                  <p className="card-text text-center">
                    The activity box for kids is a great way for parents to send
                    their kids off in the morning with an air of excitement.
                    Learn how and why!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/why-should-an-activity-box-for-kids-be-supplied-in-schools"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/cdfb8e8a5d98defb02f1a0dd8e2b2bf7.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-beneficial-are-online-music-classes-for-toddlers"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      How beneficial are online music classes for toddlers?
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 24/2021
                  </p>
                  <p className="card-text text-center">
                    Are online music classes the key to creating musical
                    prodigies? Or do they risk depriving children of valuable
                    interaction with peers? Know the answers!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-beneficial-are-online-music-classes-for-toddlers"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/3a7ea00f412f3aa1a9c1ce7c59716157.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/things-to-consider-while-choosing-a-preschool"
                    className="card-text text-center m_title"
                  >
                    <b> Things to consider while choosing a preschool</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 24/2021
                  </p>
                  <p className="card-text text-center">
                    Choosing a nursery school is one of the most important
                    decisions you'll make for your child. When in doubt, ask
                    yourself these questions!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/things-to-consider-while-choosing-a-preschool"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/2218770c4e2ed826a4c07b24b39721f0.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/why-are-reading-and-writing-skills-important-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Why are reading and writing skills important for kids?
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 24/2021
                  </p>
                  <p className="card-text text-center">
                    Have you ever wondered how reading and writing skills are
                    important for children? If not, here is everything you need
                    to know!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/why-are-reading-and-writing-skills-important-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/869927a411dcb273f9c2ebd7b5e55e3b.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-make-online-learning-interesting"
                    className="card-text text-center m_title"
                  >
                    <b> How to Make Online Learning Interesting?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 24/2021
                  </p>
                  <p className="card-text text-center">
                    Many kids are drawn to online learning because it can be
                    more convenient and accessible. Sometimes with a risk of
                    losing engagement. Not with these tips!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-make-online-learning-interesting"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/khejrskills-kindergarden.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-teach-kids-skills-needed-for-kindergarten-activities"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      How to teach kids skills needed for kindergarten
                      activities
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 21/2021
                  </p>
                  <p className="card-text text-center">
                    The first day of kindergarten is fast approaching and you're
                    trying to figure out how to prepare your child. Try these 7
                    kindergarten activities tips!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-teach-kids-skills-needed-for-kindergarten-activities"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/dxrwqedu-entertain-combine.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-combine-education-and-entertainment-for-my-child"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      How to combine education and entertainment for my child
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 17/2021
                  </p>
                  <p className="card-text text-center">
                    Parents should make sure there is always some form of fun
                    learning activity available for the kid or else academic
                    performance may suffer!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-combine-education-and-entertainment-for-my-child"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/uwroztoddler-alphabets.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-teach-a-toddler-the-alphabets"
                    className="card-text text-center m_title"
                  >
                    <b> How to teach a toddler the alphabets</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 13/2021
                  </p>
                  <p className="card-text text-center">
                    What better way to spend time with your children than
                    teaching them a valuable life skill? Teach them the alphabet
                    for kids today with these tips!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-teach-a-toddler-the-alphabets"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pagination" data-page={25}>
            {" "}
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/twrcqcounting-10-fun.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-primary            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/make-counting-to-10-fun-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b> Make counting to 10 fun for kids</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 12/2021
                  </p>
                  <p className="card-text text-center">
                    One of the best ways to make counting for kids fun is by
                    playing games. We have 10 perfect tips for you to make it
                    exciting and easy for your child!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/make-counting-to-10-fun-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/xajgatoddler-games.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/toddler-learning-activities-and-games"
                    className="card-text text-center m_title"
                  >
                    <b> Toddler learning activities and games</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 12/2021
                  </p>
                  <p className="card-text text-center">
                    Games and activities for toddlers have a lot to do with the
                    role of parents. So, here is a list of 10 tips that you
                    might need in the process!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/toddler-learning-activities-and-games"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/ubbzzchild-school.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/5-skills-children-require-while-going-to-school"
                    className="card-text text-center m_title"
                  >
                    <b> 5 skills children require while going to school</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 10/2021
                  </p>
                  <p className="card-text text-center">
                    The key skills children require while going to school are
                    many and varied. Parents play an integral role in guiding
                    these little learners. We have a few tips!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/5-skills-children-require-while-going-to-school"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/crkqdpandemic-entertain.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-keep-my-child-entertained-during-a-pandemic"
                    className="card-text text-center m_title"
                  >
                    <b> How to keep my child entertained during a pandemic</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 10/2021
                  </p>
                  <p className="card-text text-center">
                    With a worldwide pandemic on the horizon, parents are
                    scrambling for ways to keep their children entertained. Here
                    are a few tips!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-keep-my-child-entertained-during-a-pandemic"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/dsbbrengaging-activities.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/activities-for-toddlers-at-home"
                    className="card-text text-center m_title"
                  >
                    <b> Activities for Toddlers at Home</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 10/2021
                  </p>
                  <p className="card-text text-center">
                    10 best activities for toddlers at home that are easily
                    accessible for parents and not too messy either. Try these
                    today!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/activities-for-toddlers-at-home"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/zysoseffective-learning.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-make-effective-learning-fun-and-entertaining"
                    className="card-text text-center m_title"
                  >
                    <b> How to make effective learning fun and entertaining</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 03/2021
                  </p>
                  <p className="card-text text-center">
                    It's no secret that fun learning is entertaining for kids.
                    But what makes a lesson more effective? Find out here!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-make-effective-learning-fun-and-entertaining"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/orbqssigns-kindergarden.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/is-your-child-ready-for-kindergarten"
                    className="card-text text-center m_title"
                  >
                    <b> Is your child ready for kindergarten?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 03/2021
                  </p>
                  <p className="card-text text-center">
                    Kindergarten is almost here, and you’re wondering if your
                    child has the skills they need to start school. Don’t worry
                    we got you covered with these tips!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/is-your-child-ready-for-kindergarten"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/penxnonline-learning-benefits.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-success            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/benefits-of-online-learning-for-children"
                    className="card-text text-center m_title"
                  >
                    <b> Benefits of online learning for children</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 02/2021
                  </p>
                  <p className="card-text text-center">
                    Online learning is an amazing way to learn because it
                    provides children with a more personalized experience.
                    Parents can help kids with these tips.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/benefits-of-online-learning-for-children"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/prhpibirthday-party.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-primary            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/how-to-throw-a-successful-toddler-birthday-party"
                    className="card-text text-center m_title"
                  >
                    <b> How to Throw a Successful Toddler Birthday Party</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 02/2021
                  </p>
                  <p className="card-text text-center">
                    For most parents, throwing a successful toddler birthday
                    party can be quite the challenge. But fortunately not
                    anymore, with these 8 tips!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/how-to-throw-a-successful-toddler-birthday-party"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/ywskwhomeschooling.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/parenting-solutions"
                    className="btn
      btn-success            "
                  >
                    Parenting Solutions
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/homeschooling-heres-what-you-need-to-know-about"
                    className="card-text text-center m_title"
                  >
                    <b> Homeschooling - Here's What You Need to Know About</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 02/2021
                  </p>
                  <p className="card-text text-center">
                    Homeschooling - One of the most controversial decisions a
                    parent can make is whether to homeschool their child or not.
                    Let us help you, find out how!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/homeschooling-heres-what-you-need-to-know-about"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/qzfhitoddlers-super-fun.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-primary            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/activities-for-toddlers-that-are-super-fun"
                    className="card-text text-center m_title"
                  >
                    <b> Activities For Toddlers That are Super Fun</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Aug 02/2021
                  </p>
                  <p className="card-text text-center">
                    Toddlers can be a handful, especially when they're running
                    around the house and making messes. Keep them occupied with
                    these 10 activities for toddlers.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/activities-for-toddlers-that-are-super-fun"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/ohalkchildren-activities.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-success            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/6-childrens-activities-to-keep-kids-entertained-in-summer"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      6 children’s activities to keep kids entertained in summer
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Jul 31/2021
                  </p>
                  <p className="card-text text-center">
                    Planning children’s activities during summer isn’t a tough
                    job. To cut down your work, we have gathered the 6 best
                    activities for kids you can try out to entertain your kids.
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/6-childrens-activities-to-keep-kids-entertained-in-summer"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pagination" data-page={26}>
            {" "}
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/eefoi10-books-nursery-rhymes.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-primary            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/10-best-books-of-nursery-rhymes"
                    className="card-text text-center m_title"
                  >
                    <b> 10 Best Books of Nursery Rhymes</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Jul 31/2021
                  </p>
                  <p className="card-text text-center">
                    Wondering what are the best books for your kids? This blog
                    post is a must-read
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/10-best-books-of-nursery-rhymes"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/kdjeubenefits-learning-english.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/why-it-is-important-to-learn-english-at-an-early-age"
                    className="card-text text-center m_title"
                  >
                    <b> Why it is important to learn English at an early age</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Jul 31/2021
                  </p>
                  <p className="card-text text-center">
                    Do you want your child to be bilingual? If so, then take the
                    time that they are with you and make learning the english
                    language simple with these tricks!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/why-it-is-important-to-learn-english-at-an-early-age"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://letseduvate-blog.s3.ap-south-1.amazonaws.com/media/prod/vzodofun-activities.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-primary            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/7-fun-ways-to-practice-addition-and-subtraction-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      7 fun ways to practice addition and subtraction for Kids
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Jul 30/2021
                  </p>
                  <p className="card-text text-center">
                    The best way to help your kids learn addition and
                    subtraction is by being an active participant. There are
                    many fun ways of doing that, check these 7!
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/7-fun-ways-to-practice-addition-and-subtraction-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/eb9c11551b80e1d97812058bb153172a.png"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-success            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/top-5-skills-that-online-education-teaches-nursery-school-kids"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Top 5 Skills That Online Education Teaches Nursery School
                      Kids
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Jun 16/2021
                  </p>
                  <p className="card-text text-center">
                    Top 5 Skills That Online Education Teaches Nursery School
                    Kids
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/top-5-skills-that-online-education-teaches-nursery-school-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/b61f8c561f5737228de931e2f0d05dc0.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-primary            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/is-nursery-kindergarten-and-preschool-the-same"
                    className="card-text text-center m_title"
                  >
                    <b> Is nursery, kindergarten and preschool the same?</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Jun 16/2021
                  </p>
                  <p className="card-text text-center">
                    Is nursery, kindergarten and preschool the same?
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/is-nursery-kindergarten-and-preschool-the-same"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/bbc3958b893daab98781d60929854bbb.png"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-success            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/importance-of-nursery-school-education"
                    className="card-text text-center m_title"
                  >
                    <b> Importance of nursery school education</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Jun 16/2021
                  </p>
                  <p className="card-text text-center">
                    Importance of nursery school education
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/importance-of-nursery-school-education"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/c54da074e00238202e307d8a0b7434d2.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/learning-and-reading"
                    className="btn
      btn-primary            "
                  >
                    Learning and Reading
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/heres-why-your-child-needs-to-learn-art"
                    className="card-text text-center m_title"
                  >
                    <b> Here’s Why Your Child NEEDS to Learn Art</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Jun 16/2021
                  </p>
                  <p className="card-text text-center">
                    Here’s Why Your Child NEEDS to Learn Art
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/heres-why-your-child-needs-to-learn-art"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/841f31f53c76b6a3e6a908c55425a9e4.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-success            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/the-montessori-style-of-nursery-education"
                    className="card-text text-center m_title"
                  >
                    <b> The Montessori Style of Nursery Education</b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Jun 16/2021
                  </p>
                  <p className="card-text text-center">
                    The Montessori Style of Nursery Education
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/the-montessori-style-of-nursery-education"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://sparklebox.school/blog/storage/blog_image/4cbe9ae992bc9945d04bf2b90a3aaa41.jpg"
                  alt="Card image cap"
                />
                <br />
                <div className="card-button">
                  <a
                    href="https://sparklebox.school/blog/category/preschool-and-nursery"
                    className="btn
      btn-primary            "
                  >
                    Preschool and Nursery
                  </a>
                </div>
                <div className="card-body">
                  <a
                    href="https://sparklebox.school/blog/everything-you-need-to-know-about-nursery-school-for-kids"
                    className="card-text text-center m_title"
                  >
                    <b>
                      {" "}
                      Everything you need to know about Nursery school for kids
                    </b>
                  </a>
                  <p className="text-center">
                    <i className="fa fa-calendar" aria-hidden="true" />
                    Jun 16/2021
                  </p>
                  <p className="card-text text-center">
                    Everything you need to know about Nursery school for kids
                  </p>
                  <div className="readmore">
                    <a
                      href="https://sparklebox.school/blog/everything-you-need-to-know-about-nursery-school-for-kids"
                      className="btn btn-danger"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="page_nav_list" className="page_nav_list" />
        </div>
      </section>
    </>
  );
};

export default Bodyblog;
