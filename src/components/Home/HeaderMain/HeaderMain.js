import React from "react";
import chair from "../../../images/Mask Group 1.png";
const HeaderMain = () => {
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1 style={{ color: "#3a4256" }}>
          Your New Smile <br /> Starts Here
        </h1>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos
          minus culpa deserunt voluptates ex praesentium non, dolores itaque
          quaerat.
        </p>
        <button className="btn btn-primary">Get Appointment</button>
      </div>
      <div className="col-md-6 ">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
