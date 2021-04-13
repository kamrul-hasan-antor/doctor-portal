import React from "react";

const BlogPost = ({ data }) => {
  return (
    <div
      style={{ border: "1px solid lightgrey" }}
      className="shadow-sm mt-5 m-2 p-2 container"
    >
      <div className=" d-flex ml-4 mt-3 ">
        <img
          className="mx-3"
          src={data.authorImg}
          alt=""
          width="60"
          height="60"
        />
        <div>
          <h6>{data.author}</h6>
          <p>{data.date} </p>
        </div>
      </div>
      <div className="text-justify p-3">
        <h6>{data.title}</h6>
        <p className="text-secondary">{data.description}</p>
      </div>
    </div>
  );
};

export default BlogPost;
