import React from "react";
import featured from "../../../images/Mask Group 3.png";
const FeaturedService = () => {
  return (
    <section className="pb-0 pb-md-5 my-5">
      <div className="container mb-5 mr-1">
        <div className="row mb-5">
          <div className="col-md-5 mb-4 m-md-0">
            <img className="img-fluid" src={featured} alt="" />
          </div>
          <div className="col-md-6 align-self-center">
            <h1 style={{ color: "#3a4256" }}>
              Exceptional Dental <br /> Care, on Your Terms
            </h1>
            <p className="text-secondary my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              facere soluta delectus debitis voluptatibus sapiente, unde odio
              omnis pariatur corporis fuga quia iste cum veniam itaque ipsum
              expedita, eveniet explicabo sint. Libero id quidem vel repudiandae
              accusantium et eligendi corporis natus, perspiciatis obcaecati
              unde magnam a laborum, repellat atque commodi.
            </p>
            <button className="btn btn-info">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
