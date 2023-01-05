import React from "react";
import image from "../../images/me-about.jpg";
import "./about.css";

export default function About({ secId }) {
  return (
    <section id={secId}>
      <div className="about-section">
        <div className="about-text">
          <small>about us</small>
          <h2>
            Explore all corners of <br />
            the world with us
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            maiores sunt placeat repellat eos adipisci corporis obcaecati
            debitis cum qui. Similique quae consequuntur quas ipsum, ipsa
            pariatur minus ducimus cupiditate.
          </p>

          <div>{}</div>
        </div>

        <div>
          <img src={image} alt={""} />
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
