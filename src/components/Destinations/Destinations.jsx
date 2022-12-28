import "./destinations.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

// import required modules
import { Navigation } from "swiper";

const data = [
  {
    img: "/assets/img-2.jpg",
    title: "serayu rafting",
    desc: "Dieng Indonesia",
    price: "20",
    rating: "4.5",
  },
  {
    img: "/assets/img-2.jpg",
    title: "serayu rafting",
    desc: "Dieng Indonesia",
    price: "20",
    rating: "4.5",
  },
  {
    img: "/assets/img-2.jpg",
    title: "serayu rafting",
    desc: "Dieng Indonesia",
    price: "20",
    rating: "4.5",
  },
  {
    img: "/assets/img-2.jpg",
    title: "serayu rafting",
    desc: "Dieng Indonesia",
    price: "20",
    rating: "4.5",
  },
  {
    img: "/assets/img-2.jpg",
    title: "serayu rafting",
    desc: "Dieng Indonesia",
    price: "20",
    rating: "4.5",
  },
  {
    img: "/assets/img-2.jpg",
    title: "serayu rafting",
    desc: "Dieng Indonesia",
    price: "20",
    rating: "4.5",
  },
  {
    img: "/assets/img-2.jpg",
    title: "serayu rafting",
    desc: "Dieng Indonesia",
    price: "20",
    rating: "4.5",
  },
];

function Card({ img, title, desc, price }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={img} alt={title} />
      </div>

      <div className="card-body">
        <div className="card-title">
          <h4>{title}</h4>
          <small>{desc}</small>
        </div>

        <div className="card-footer">
          <h3>
            <span>$</span>
            {price}
            <small>/Person</small>
          </h3>
          <button>Book</button>
        </div>
      </div>
    </div>
  );
}

function CardList() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className="card-list">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        modules={[Navigation]}
        grabCursor={true}
        className="destinations-slider"
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
          console.log(swiper);
          if (swiper.isEnd) {
            return (navigationNextRef.current.style.display = "none");
          }
          if (realIndex == 0) {
            console.log(realIndex + " - hide arrow");
            return (navigationPrevRef.current.style.display = "none");
          } else {
            console.log(realIndex + " - show arrow");
            navigationPrevRef.current.style.display = "block";
            navigationNextRef.current.style.display = "block";
          }
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
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
        {data?.map((x, index) => (
          <SwiperSlide key={index}>
            <Card {...x} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div ref={navigationPrevRef}>
        <BsFillArrowLeftCircleFill className="swiper-button-prev " />
      </div>

      <div ref={navigationNextRef}>
        <BsFillArrowRightCircleFill className="swiper-button-next" />
      </div>
    </div>
  );
}

export default function Destinations() {
  return (
    <section>
      <h2>
        Find <span>popular </span>
        <br /> destinations
      </h2>
      <CardList />
    </section>
  );
}
