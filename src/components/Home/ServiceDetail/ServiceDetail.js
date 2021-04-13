import React from "react";

const ServiceDetail = ({ data }) => {
  return (
    <div className="col-md-4 text-center">
      <img style={{ height: "60px" }} src={data.img} alt="" />
      <h5 className="mt-3 mt-4">{data.name} </h5>
      <p className="text-secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste beatae
        neque alias a! Itaque, velit.
      </p>
    </div>
  );
};

export default ServiceDetail;
