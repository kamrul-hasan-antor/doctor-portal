import React from "react";
import caudi from "../../../images/Ellipse 1.png";
import sinthia from "../../../images/Ellipse 2.png";
import henry from "../../../images/Ellipse 3.png";
import BlogPost from "../BlogPost/BlogPost";
const blogData = [
  {
    title: "Check at least a doctor in a year for your teeth",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi excepturi eveniet dolorum. Perferendis, voluptas animi?",
    author: "Dr. Caudi",
    authorImg: caudi,
    date: "22 August 2018",
  },
  {
    title: "Two time brush in a day can keep you healthy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi excepturi eveniet dolorum. Perferendis, voluptas animi?",
    author: "Dr. Sinthia",
    authorImg: sinthia,
    date: "23 April 2018",
  },
  {
    title: "The tooth cancer is taking a challenge",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi excepturi eveniet dolorum. Perferendis, voluptas animi?",
    author: "Dr. Henry",
    authorImg: henry,
    date: "23 April 2019",
  },
];

const Blogs = () => {
  return (
    <section>
      <div>
        <div className="text-center mt-5">
          <h5 style={{ color: "#1cc7c1" }}>OUR BLOG</h5>
          <h2 style={{ color: "#3a4256" }}>From Our blog News</h2>
        </div>
        <div className="d-flex justify-content-center container">
          {blogData.map((blogs) => (
            <BlogPost data={blogs}></BlogPost>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
