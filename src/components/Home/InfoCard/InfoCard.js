import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const InfoCard = ({ info }) => {
  return (
    <div className="col-md-4">
      <div>
        <FontAwesomeIcon icon={info.icon}></FontAwesomeIcon>
      </div>
      <div>
        <h6>{info.title}</h6>
        <p>{info.description} </p>
      </div>
    </div>
  );
};

export default InfoCard;
