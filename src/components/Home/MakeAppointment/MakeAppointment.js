import React from "react";
import doctor from "../../../images/5790-removebg.png";
import "./MakeAppointment.css";
const MakeAppointment = () => {
  return (
    <section className="make-appointment">
      <div className="container ">
        <div className="row ">
          <div className="col-md-5 d-none d-md-block">
            <img className="img-fluid" src={doctor} alt="" />
          </div>
          <div className="col-md-6 text-white py-5">
            <h5 style={{ color: "#1cc7c1" }}>APPOINTMENT</h5>
            <h2>
              Make an appointment <br />
              Today
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur officia ipsa excepturi nulla reiciendis veritatis.
            </p>
            <button className="btn btn-info">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
