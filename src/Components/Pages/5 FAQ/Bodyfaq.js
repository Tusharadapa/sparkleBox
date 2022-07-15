import React from "react";
import "./faq.css";

const Bodyfaq = () => {
  return (
    <>
      <div className="container-fluid faq-body">
        <div className="container">
          <div className="accordion-option">
            <h1 className="title">Frequently Asked Questions (FAQ's)</h1>
            <a
              href="javascript:void(0)"
              className="toggle-accordion active"
              accordion-id="#accordion"
            />
          </div>
          <div className="clearfix" />

          <div
            className="panel-group"
            id="accordion"
            role="tablist"
            aria-multiselectable="true"
          >
            {/* 1st ques */}
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingOne">
                <h4 className="panel-title">
                  <a
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What is SparkleBox School?
                  </a>
                </h4>
              </div>
              <div
                id="collapseOne"
                className="panel-collapse collapse show"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div className="panel-body">
                  SparkleBox.School consists of curriculum-based learning
                  programs for children between 2 to 6 years of age. It’s a
                  comprehensive pre-primary learning program created for
                  providing highly effective hands-on learning experience for
                  your child. Your child gets started with Literacy, Numeracy,
                  Arts, Dance, EVS and many more subjects, at the comfort of
                  your home.
                </div>
              </div>
            </div>

            {/* 2nd Ques */}
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingTwo">
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    What do I get when I buy SparkleBox School?
                  </a>
                </h4>
              </div>
              <div
                id="collapseTwo"
                className="panel-collapse collapse in"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div className="panel-body">
                  SparkleBox.School provides comprehensive material for hands-on
                  learning. The box contains activity kits, books, write and
                  wipe sheets, flash cards, DIY Learning tools, lesson plans,
                  development checklists. The materials are easy to handle and
                  come with simple instructions for you to read and help your
                  child learn.
                </div>
              </div>
            </div>

            {/* 3rd Ques */}
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingThree">
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    How is SparkleBox School different from Sparklebox?
                  </a>
                </h4>
              </div>
              <div
                id="collapseThree"
                className="panel-collapse collapse in"
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div className="panel-body">
                  While SparkleBox is a one-stop solution for hands-on learning
                  kits for ages 2-15 year olds, Sparklebox.School is a
                  school-like learning program for 2 to 6 year olds that
                  provides pre-primary learning materials. SparkleBox.School is
                  designed to replace your child’s pre-schooling by providing
                  everything your child needs at the convenience of your home.
                </div>
              </div>
            </div>

            {/* 4th Ques */}
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingFive">
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseFive"
                    aria-expanded="true"
                    aria-controls="collapseFive"
                  >
                    Can I cancel my child’s subscription from SparkleBox School?
                  </a>
                </h4>
              </div>
              <div
                id="collapseFive"
                className="panel-collapse collapse in"
                role="tabpanel"
                aria-labelledby="headingFive"
              >
                <div className="panel-body">
                  Yes, you can. But you have to have a subscription of more than
                  3 months.Our learning packages are shipped on a term-wise
                  basis. They are shipped for 3 months at a time. So, if your
                  purchased plan is for 6 months, 9 months or 1 year, you have
                  the option to cancel your subscription any time before the
                  shipment for the next term. We will refund the amount for the
                  unshipped term/s back to your account.
                </div>
              </div>
            </div>

            {/* 5th Ques */}
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingSix">
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseSix"
                    aria-expanded="true"
                    aria-controls="collapseSix"
                  >
                    What is your refund policy?
                  </a>
                </h4>
              </div>
              <div
                id="collapseSix"
                className="panel-collapse collapse in"
                role="tabpanel"
                aria-labelledby="headingSix"
              >
                <div className="panel-body">
                  Once you cancel the membership, the refund amount for the
                  unshipped terms will be credited to your account, i.e., to
                  your original payment mode during enrollment. The same shall
                  reflect within 5-7 business days.
                </div>
              </div>
            </div>

            {/* End of Ques */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bodyfaq;
