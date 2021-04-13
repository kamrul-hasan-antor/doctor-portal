import React from "react";

const Testimonial = ({ test }) => {
  return (
    <div
      className="card shadow-sm m-2 main-card"
      style={{ border: "1px solid lightgrey" }}
    >
      <div className="card-body">
        <p className="card-text text-center">{test.quote} </p>
      </div>
      <div className="card-footer d-flex align-items-center">
        <img className="mx-3" src={test.img} alt="" width="60" />
        <div>
          <h6 className="text-primary">{test.name}</h6>
          <p className="m-0">{test.from}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
