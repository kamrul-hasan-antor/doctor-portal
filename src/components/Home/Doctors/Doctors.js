import React from "react";
import doctor from "../../../images/doctors.png";
import DoctorsInfo from "../DoctorsInfo/DoctorsInfo";

const doctors = [
  {
    name: "Dr. Caudi",
    img: doctor,
    phone: "+61 452 200 126",
  },
  {
    name: "Dr. Caudi",
    img: doctor,
    phone: "+61 452 200 126",
  },
  {
    name: "Dr. Caudi",
    img: doctor,
    phone: "+61 452 200 126",
  },
];

const Doctors = () => {
  return (
    <section style={{ height: "570px" }} className="mb-5">
      <h5 className="text-center mt-5 pt-5" style={{ color: "#1cc7c1" }}>
        Our Doctors
      </h5>
      <div className="d-flex justify-content-center">
        {doctors.map((doc) => (
          <DoctorsInfo info={doc}></DoctorsInfo>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
