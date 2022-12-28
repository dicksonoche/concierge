import React from "react";
import "./testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

// import required modules
import { Navigation, Pagination } from "swiper";

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
    img: "/assets/me-about.jpg",
  },
  {
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et quas aliquid, repellat neque aperiam.",
    name: "Happy client",
    desc: "Entrepreneur",
    img: "/assets/me-about.jpg",
  },
  {
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et quas aliquid, repellat neque aperiam.",
    name: "Happy client",
    desc: "Entrepreneur",
    img: "/assets/me-about.jpg",
  },
];

function TinyCardsList() {
  return (
    <div className="testimonials-list">
      <Swiper
        pagination={true}
        slidesPerView={3}
        spaceBetween={20}
        modules={[Pagination]}
        grabCursor={true}
      
        breakpoints={{
          // when window width is >= 320px
          380: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          769: {
            slidesPerView: 2,
          },
          // when window width is >= 640px
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {data.map((x, index) => (
          <SwiperSlide key={index}>
            <TinyCards {...x} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
function TinyCards({ img, comment, name, desc }) {
  return (
    <div className="testimonials-card">
      <img src={img} alt={name} />
      <p className="testimonials-comment"> "{comment}"</p>
      <h4>{name}</h4>
      <p>{desc}</p>
    </div>
  );
}
