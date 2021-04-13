import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import {
  faClock,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
const infosData = [
  {
    title: "Opening Hours",
    description: "We are open 7 days",
    icon: faClock,
    background: "primary",
  },
  {
    title: "visit Our Location",
    description: "Brooklyn, NY 10036, United States",
    icon: faMapMarkerAlt,
    background: "dark",
  },
  {
    title: "Contact Us Now",
    description: "+000 123 456789",
    icon: faPhoneAlt,
    background: "primary",
  },
];
const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="w-75 row">
        {infosData.map((infos) => (
          <InfoCard info={infos}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
