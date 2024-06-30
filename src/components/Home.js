// src/components/Home.js
import React from "react";
import heroImg from "../assets/hero-img.webp";
import { Link } from "react-router-dom";

import dependability from "../assets/dependability.webp"
import discretion from "../assets/discretion.webp"
import efficency from "../assets/efficency.webp"
import expertise from "../assets/expertise.webp"


import patnership from "../assets/patnership.webp"
import consulting from "../assets/consulting.webp"
import sales from "../assets/sales.webp"

const dataArray = [
  {
    imgSrc: expertise,
    title: "Expertise",
    description:
      "We have years of experience in helping customers determine how to manage their money and make smarter financial decisions",
  },
  {
    imgSrc: discretion,
    title: "Discretion",
    description:
      "You can count on us to keep things under wraps. Your privacy is our top priority",
  },
  {
    imgSrc: efficency,
    title: "Efficiency",
    description:
      "Our representatives strive to provide fast and efficient service while delivering their best work.",
  },
  {
    imgSrc: dependability,
    title: "Dependability",
    description:
      "You will be in good hands with our experienced representatives who can help you reach those long-awaited financial goals.",
  },
];

const data = [
  {
    imgSrc: consulting,
    title: "Consulting",
    description:
      "Save time when you need it the most, and get ahead on important financial decisions.",
    link: '/services'
  },
  {
    imgSrc: sales,
    title: "Sales",
    description:
      "You will enjoy company growth faster than you expected, by streamlining services and features. ",
    link: '/products'
  },
  {
    imgSrc: patnership,
    title: "Partnership",
    description:
      "Our support team is available every day to make sure that things run smoothly. We’re here to help. ",
    link: '/partner-program'
  },
];

const handleBookAppointmentClick = () => {
  window.open('https://mail.google.com/mail/?view=cm&fs=1&to=mahummaqbool24@gmail.com', '_blank');
};

const Home = () => {
  return (
    <>
      <div class="flex flex-col flex-col-reverse lg:flex lg:flex-row lg:items-center bg-white">
        <div class="pt-14 pb-14 lg:pt-0 lg:pb-0 lg:w-1/2 w-full bg-white flex justify-center items-center">
          <div class="mx-4 lg:mx-10 mt-10 lg:mt-20 text-center lg:text-left">
            <h3 class="font-bold text-zinc-800 lg:text-6xl md:text-5xl text-3xl leading-relaxed text-slide-in">
              Make extra money
            </h3>
            <h3 class="font-bold text-zinc-800 lg:text-6xl md:text-5xl text-3xl leading-relaxed text-slide-in">
              and keep your day job
            </h3>
            <button onClick={handleBookAppointmentClick} class="inline-block bg-green-600 rounded-full lg:h-14 lg:w-64 w-full h-12 text-white  mt-10 lg:mt-7 mb-4">
              Book an Appointment
            </button>
          </div>
        </div>
        <div class="lg:w-1/2 lg:mt-0 bg-grey-700  ">
          <img src={heroImg} alt="Hero Image" class="w-full h-full lg:float-right" />
        </div>
      </div>

      <div className="w-full">
        <div className="text-center bg-[#367d02] w-full pt-16 pb-16">
          <h1 className="text-[37px] text-white font-bold">Welcome to </h1>
          <h1 className="text-[37px] text-white font-bold">
            Uptick Financial Services
          </h1>
          <p className="text-xl text-white font-normal mt-2">
            We offer discreet and dependable consulting for your personal
            financial needs. Our team is available to guarantee you the best
            possible service.
          </p>
        </div>

        <div className="flex flex-wrap justify-center pt-10 pb-5 bg-white">
          {dataArray.map((item, index) => (
            <div
              key={index}
              className="text-center w-full sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%] mb-4 sm:mr-3 sm:ml-3"
            >
              <div className="mx-auto">
                <img
                  src={item.imgSrc}
                  alt={`Image ${index}`}
                  className="mx-auto"
                />
              </div>
              <h1 className="font-bold mt-2 text-[25px]">{item.title}</h1>
              <p className="text-[#747474] mt-3 font-light">{item.description}</p>
            </div>
          ))}
        </div>

        <div>
          <h1
            style={{ color: "rgb(4, 80, 116)" }}
            className="text-center w-full font-bold text-4xl mt-9 mb-9"
          >
            What We Offer
          </h1>
          <div className="w-full flex justify-center flex-wrap">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-white w-[80%] sm:w-[45%] md:w-[30%] lg:w-[27%] xl:w-[27%] mx-3 mb-6 shadow-md"
              >
                <div className="w-[100%] text-center">
                  <div className="w-[75%] m-auto pt-10">
                    <img
                      src={item.imgSrc}
                      alt={`Image ${index}`}
                      className="mx-auto"
                    />
                  </div>
                  <h1 className="font-bold mt-9 text-[25px]">{item.title}</h1>
                  <p className="text-[#747474] font-light my-4 w-[75%] m-auto">{item.description}</p>
                  <Link to={item.link}>

                    <button className="w-[70%] bg-transparent border border-green-800  font-bold  text-xl text-green-800 rounded-full mt-4 mb-12 px-4 py-3 mt-4 hover:bg-green-800 hover:text-white transition duration-300 ease-in-out">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
