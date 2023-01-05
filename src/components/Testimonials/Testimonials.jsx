import "./testimonials.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
  BsChatLeftQuoteFill,
} from "react-icons/bs";
import "swiper/css/navigation";
import { FaQuoteLeft } from "react-icons/fa";

// import required modules
import { Navigation } from "swiper";
import data from "./data";

function Card({ img, comment, name, desc }) {
  return (
    <div className="testimonials-card">
      <div className="testimonials-card-image">
        {" "}
        <img src={img} alt={"Happy client"} />
      </div>
      <div className="testimonials-comment">
        <FaQuoteLeft className="swiper-button-quote" />
        <p> {comment}</p>
      </div>

      <h4>{name}</h4>
      <p>{desc}</p>
    </div>
  );
}

function CardList() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className="testimonials-list">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        modules={[Navigation]}
        grabCursor={true}
        fadeEffect={true}
        navigation={
          ({
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          },
          true)
        }
        onSlideChange={(swiper) => {
          var realIndex = swiper.realIndex;

          if (swiper.isEnd) {
            return (navigationNextRef.current.style.display = "none");
          }
          if (realIndex == 0) {
            return (navigationPrevRef.current.style.display = "none");
          } else {
            navigationPrevRef.current.style.display = "block";
            navigationNextRef.current.style.display = "block";
          }
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
      >
        {data?.map((x, index) => (
          <SwiperSlide key={index}>
            <Card {...x} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <div ref={navigationNextRef}>
          <BsFillArrowRightCircleFill className="swiper-button-next" />
        </div>
      </div>
      <div ref={navigationPrevRef}>
        <BsFillArrowLeftCircleFill className="swiper-button-prev " />
      </div>
    </div>
  );
}

export default function Testimonials({ secId }) {
  return (
    <section id={secId}>
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
        </div>
        <CardList />
      </div>
    </section>
  );
}
