import React from "react";
import "./services.css";
import image from "../../images/me-about.jpg";

export default function Services({ secId }) {
  return (
    <section id={secId}>
      <div className="services-section">
        <div className="services-text">
          <h2>We provide the best</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            sint eos ipsa, <br /> voluptatum debitis repellat!
          </p>
        </div>
        <div className="services-cards">
          <TinyCardsList />
        </div>
      </div>
    </section>
  );
}
const data = [
  {
    img: "/assets/person.jpg",
    service: "Select Destination",
    desc: "At first choose the place you want to go",
  },
  {
    img: "/assets/person.jpg",
    service: "Book a trip",
    desc: "Book your trip from our exclusive offers",
  },
  {
    img: "/assets/person.jpg",
    service: "Take your flight",
    desc: "Take your flight on selected date and enjoy",
  },
];

function TinyCardsList() {
  return (
    <div className="services-list">
      {data.map((x, index) => (
        <TinyCards key={index} {...x} />
      ))}
    </div>
  );
}
function TinyCards({ img, service, desc }) {
  return (
    <div className="services-card">
      <img src={img} alt={service} />
      <div className="services-card-text">
        <h4>{service}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}
