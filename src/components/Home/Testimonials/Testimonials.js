import React from "react";
import Wilson from "../../../images/Ellipse 1.png";
import ema from "../../../images/Ellipse 2.png";
import aleja from "../../../images/Ellipse 3.png";
import Testimonial from "../Testimonial/Testimonial";
import "./Testimonials.css";
const testimonialData = [
  {
    name: "Wilson Harry",
    from: "California",
    img: Wilson,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!",
  },
  {
    name: "Ema Gomez",
    from: "California",
    img: ema,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!",
  },
  {
    name: "Aleja Farari",
    from: "California",
    img: aleja,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials  mt-5 pt-5">
      <div className="container">
        <div className="section-header">
          <h5 style={{ color: "#1cc7c1" }}>TESTIMONIAL</h5>
          <h2 style={{ color: "#3a4256" }}>
            What's Our Patients <br />
            Says
          </h2>
        </div>
      </div>
      <div className="justify-content-center d-flex  p-4 m-2">
        {testimonialData.map((testimonial) => (
          <Testimonial test={testimonial}></Testimonial>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
