import Axios from "axios";
import React, { useEffect, useState } from "react";

const url =
  "https://blogs.letseduvate.com/blog/sbs/category-blogs/learning-and-reading";
const LearningAndReading = () => {
  const [LAR, setLAR] = useState([]);
  const getLAR = async () => {
    await Axios.get(url, {
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((response) => {
        setLAR(response.data.result);
      })
      .catch(() => {
        setLAR([]);
      });
  };

  useEffect(() => {
    getLAR();
  }, []);
  return <></>;
};

export default LearningAndReading;
