import React from "react";
import "./destinations.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
  return (
    <div className="card-list">
      {data?.map((x, index) => (
        <Card key={index} {...x} />
      ))}
    </div>
  );
}
export default function Destinations() {
  return (
    <section>
      <h1>
        Find <span>popular </span>
        <br /> destinations
      </h1>
      <CardList />
    </section>
  );
}
