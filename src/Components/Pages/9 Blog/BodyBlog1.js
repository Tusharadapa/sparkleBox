import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./blog.css";

// Blog API
const url = "https://blogs.letseduvate.com/blog/sbs/all-blogs";

// Main Function
function BodyBlog1() {
  const [blogData, setBlogData] = useState([]);

  const getBlog = async () => {
    await Axios.get(url, {
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((response) => {
        setBlogData(response.data.result);
      })
      .catch(() => {
        setBlogData([]);
      });
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <>
      <div className="container">
        {/* Links above */}
        <section className="top-buttons">
          <div className="search-buttons">
            <button type="button" className="btn btn-danger">
              All
            </button>
            <button type="button" className="btn btn-primary">
              Learning and Reading
            </button>
            <button type="button" className="btn btn-primary">
              Parenting Solutions
            </button>
            <button type="button" className="btn btn-primary">
              Health and Nutrition
            </button>
            <button type="button" className="btn btn-primary">
              Social skills blogs
            </button>
            <button type="button" className="btn btn-primary">
              Preschool and Nursery
            </button>
            <button type="button" className="btn btn-primary">
              Creative Blogs
            </button>
          </div>
        </section>

        {/* Cards */}
        <section className="bottom-cards">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {blogData.map((item) => {
              const dates = new Date(item.created_at);
              const readMore = () => {
                window.open(
                  `https://sparklebox.school/blog/${item.title_slug}`,
                  "_blank"
                );
              };
              return (
                <>
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={item.image}
                        className="card-img-top1"
                        alt="img-top"
                      />
                      <div className="card-body">
                        <div
                          style={{ textAlign: "center", paddingBottom: "15px" }}
                        >
                          <button
                            className="category-button"
                            style={{ width: "230px" }}
                          >
                            {item.category_details.category_name}
                          </button>
                        </div>
                        <a>
                          <h5
                            className="card-title"
                            style={{ textAlign: "center" }}
                          >
                            {item.title}
                          </h5>
                        </a>
                        <p className="date">
                          <i class="fa-solid fa-calendar-days"></i>
                          {` ${dates.getDate()}/${dates.getMonth()}/${dates.getFullYear()} `}
                        </p>

                        <p
                          className="card-text"
                          style={{ textAlign: "center" }}
                        >
                          {item.seo_desc}
                        </p>
                        <div style={{ textAlign: "center" }}>
                          <button
                            onClick={readMore}
                            className="read-button"
                            style={{
                              width: "150px",
                              backgroundColor: "#dc3545",
                            }}
                          >
                            Read More &#62;
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default BodyBlog1;
