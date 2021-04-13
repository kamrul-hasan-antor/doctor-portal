import React from "react";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const DoctorsInfo = ({ info }) => {
  return (
    <div>
      <img width="420px" src={info.img} alt="" />
      <div className="text-center mt-3">
        <h5>{info.name}</h5>
        <p className="text-secondary">
          <FontAwesomeIcon color="#1cc7c1" icon={faPhoneAlt}></FontAwesomeIcon>{" "}
          {info.phone}
        </p>
      </div>
    </div>
  );
};

export default DoctorsInfo;
