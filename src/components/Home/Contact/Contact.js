import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="main-section col-12 p-0 ">
      <div className="col-12 col-md-12 text-center text-white pt-5">
        <h5 style={{ color: "#1cc7c1" }}>CONTACT US</h5>
        <h2>Always Connect With Us</h2>
      </div>
      <div className="col-12 col-md-8 ml-auto mr-auto text-center pt-4  mt-5">
        <form action="">
          <input
            type="email"
            className="form-control form-field"
            placeholder="Email Address*"
          />
          <input
            type="text"
            className="form-control form-field mt-3"
            placeholder="Subject*"
          />
          <textarea
            className="form-control mt-3"
            rows="7"
            placeholder="Your Message*"
          ></textarea>
          <input
            style={{ width: "150px" }}
            className="mt-3 btn btn-info"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
