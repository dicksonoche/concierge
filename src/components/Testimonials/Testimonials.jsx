import React from "react";
import "./testimonials.css";
import image from "../../images/me-about.jpg";

export default function Testimonials() {
  return (
    <section>
      <div className="testimonials-section">
        <div className="testimonials-text">
          <h2>
            What adventurers
            <br /> say <span>about</span> us
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            obcaecati quis ea vitae dolorum similique eaque facilis optio
            voluptate numquam.
          </p>

          <TinyCardsList />
        </div>

        <div className="testimonials-image">
          <img src={image} alt={"adventurer"} />
        </div>
      </div>
    </section>
  );
}
const data = [
  {
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et quas aliquid, repellat neque aperiam.",
    name: "Happy client",
    desc: "Entrepreneur",
  },
  // {
  //   comment:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et quas aliquid, repellat neque aperiam.",
  //   name: "Happy client",
  //   desc: "Entrepreneur",
  // },
  // {
  //   comment:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et quas aliquid, repellat neque aperiam.",
  //   name: "Happy client",
  //   desc: "Entrepreneur",
  // },
];

function TinyCardsList() {
  return (
    <div className="testimonials-list">
      {data.map((x, index) => (
        <TinyCards key={index} {...x} />
      ))}
    </div>
  );
}
function TinyCards({ comment, name, desc }) {
  return (
    <div className="testimonials-card">
      <p>"{comment}"</p>
      <h4>{name}</h4>
      <p>{desc}</p>
    </div>
  );
}
