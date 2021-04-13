import React from "react";
import fluoride from "../../../images/001-dental.png";
import cavity from "../../../images/tooth (1).png";
import whitening from "../../../images/tooth.png";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const servicesData = [
  {
    name: "Fluoride Treatment",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    img: cavity,
  },
  {
    name: "Teeth Whitening",
    img: whitening,
  },
];

const Services = () => {
  return (
    <section style={{ height: "400px" }} className="services-container">
      <div className="text-center mt-5">
        <h5 style={{ color: "#1cc7c1" }}>OUR SERVICES</h5>
        <h2 style={{ color: "#3a4256" }}>Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-4">
          {servicesData.map((service) => (
            <ServiceDetail data={service}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
