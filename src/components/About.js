// src/components/About.js
import React from "react";
import img2 from "../assets/img-2.webp";
import img3 from "../assets/img3.webp";
const svgCode = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="30" height="30">
      <path fill="#ccc" d="M768 960v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136v-704q0-104 40.5-198.5t109.5-163.5 163.5-109.5 198.5-40.5h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136zM1664 960v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136v-704q0-104 40.5-198.5t109.5-163.5 163.5-109.5 198.5-40.5h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136z"/>
    </svg>
  `;

const testimonials = [
  {
    text: '"Working with Uptick Finances and the power team of Prashant and Madhuri has been one of the most pleasant experiences. Their professionalism and in-depth knowledge has always amazed me and my wife. Never once in our professional life we were made aware of the financial basics the way Prashant did. Today we feel much more in control of our own finances than ever"',
    author: "Nikhil and Nidhi",
  },
  {
    text: '"Working with Uptick Finances and the power team of Prashant and Madhuri has been one of the most pleasant experiences. Their professionalism and in-depth knowledge has always amazed me and my wife. Never once in our professional life we were made aware of the financial basics the way Prashant did. Today we feel much more in control of our own finances than ever"',
    author: "Nikhil and Nidhi",
  },
  {
    text: '"Working with Uptick Finances and the power team of Prashant and Madhuri has been one of the most pleasant experiences. Their professionalism and in-depth knowledge has always amazed me and my wife. Never once in our professional life we were made aware of the financial basics the way Prashant did. Today we feel much more in control of our own finances than ever"',
    author: "Nikhil and Nidhi",
  },
  {
    text: '"Working with Uptick Finances and the power team of Prashant and Madhuri has been one of the most pleasant experiences. Their professionalism and in-depth knowledge has always amazed me and my wife. Never once in our professional life we were made aware of the financial basics the way Prashant did. Today we feel much more in control of our own finances than ever"',
    author: "Nikhil and Nidhi",
  },
];

const About = () => {
  return (
    <div className="w-full">
      <div className="text-center bg-[#367d02] w-full">
        <div className="w-[70%] m-auto py-6">
          <h1 className="text-[37px] text-white font-bold">About Us </h1>
          <p className="text-xl text-white font-normal mt-2">
            We are a group of independent financial service professionals who
            work with our clients to help them take control of their finances.
            We focus on each client's individual needs and situations and strive
            to provide suitable financial solutions to our clients based on
            their time horizon and risk tolerance.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full bg-white mt-2">
        <div className="sm:w-[40%] h-[300px] sm:h-full">
          <img
            src={img2}
            className="object-cover w-full h-full lg:mt-11"
            alt="Vision and Mission"
          />
        </div>
        <div className="sm:w-[60%] p-6 sm:p-8 ">
          <div className="w-full text-center">
            <h1
              style={{ color: "rgb(77, 186, 88)" }}
              className="font-bold text-[36px] mt-1"
            >
              Vision:
            </h1>
            <h1
              style={{ color: "rgb(4, 80, 116)" }}
              className="font-bold text-[36px] mt-1"
            >
              No Family Left Behind
            </h1>
            <p className="mt-2 w-[70%] m-auto text-sm">
              In an increasingly large economy, it is becoming more and more
              difficult for families to keep up with their respective financial
              needs. We created Uptick Financial Services to lend a helping
              hand, so families don’t have to worry. With professional
              consultations from our team of experts, we can make the most out
              of your money through financial planning.
            </p>
          </div>
          <div className="w-full text-center mt-1">
            <h1
              style={{ color: "rgb(77, 186, 88)" }}
              className="font-bold text-[36px] mt-5"
            >
              Mission:
            </h1>
            <h1
              style={{ color: "rgb(4, 80, 116)" }}
              className="font-bold text-[36px]"
            >
              No Family Left Behind
            </h1>
            <p className="mt-5 w-[70%] m-auto mb-8 text-sm">
              Upon entry into the real world, many people lack the knowledge and
              experience needed to efficiently carry out personal finances and
              as a result, many families are left behind. To combat this and
              achieve our vision of “No Family Left Behind”, our team at Uptick
              Financial Services hopes to assist every family in learning the
              basics of personal finances. With this, we hope that one day we
              can reach our goal of educating 1 million families in money
              management.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 flex flex-col md:flex-row ">
        <div className="w-[100%] md:w-[40%]"></div>
        <div className="w-[100%] md:w-[60%]  text-center flex flex-col justify-center items-center mb-[80px]">
          <h1
            style={{ color: "rgb(4, 80, 116)" }}
            className="font-bold text-[36px] mt-5 "
          >
            Prashant Morajkar
          </h1>
          <p className="w-[70%] mt-3 text-start font-light text-sm">
            Prashant Morajkar is an engineer by background but now owns and
            operates a successful financial services agency. Prashant has 16
            years of corporate background working for a fortune 500 company,
            where he handled corporate roles with increasing responsibility.
          </p>
          <p className="w-[70%] mt-5 text-start font-light text-sm">
            He wanted to create a legacy for his family and was always in a
            quest to find opportunities to generate passive cash flow. The
            finance domain appealed to him as the finance industry is one of the
            largest and oldest industries in the world. Pursuing the mission to
            educate more and more families financially, Prashant achieved his
            dream by creating Uptick Financial Services in his late 30s.
          </p>
          <p className="w-[70%] mt-5 text-start font-light text-sm">
            Through "Uptick Financial Services", Prashant is following his grand
            vision of "No Family Left Behind" by helping more and more families
            learn the basics of personal finances and make a positive difference
            for families.
          </p>
        </div>
      </div>

      <div className="bg-white flex flex-col md:flex-row mt-10  mb-0 pt-14 pb-14 ">
        <div className=" w-[100%] md:w-[60%]  text-center flex flex-col justify-center items-center mb-[80px] ">
          <h1
            style={{ color: "rgb(4, 80, 116)" }}
            className="font-bold text-[36px] mt-5 "
          >
            Madhuri Morajkar
          </h1>
          <p className="w-[70%] mt-3 text-start font-light text-sm">
            An engineer by education, Madhuri Morajkar has always been
            entrepreneurial. From her early teens, she has successfully ventured
            in agricultural, food, fashion and retail industries in a variety of
            business ventures. As a co-founder of Uptick Financial Services,
            Madhuri adds tremendous value to the company with her business
            leadership skills.
          </p>
          <p className="w-[70%] mt-5 text-start font-light text-sm">
            Along with her husband Prashant Morajkar, Madhuri has been
            successful in helping families understand and implement basics of
            finances and safeguard their financial future. Together this couple
            continues to empower many other professional couples like themselves
            and continue to add value in people’s lives.
          </p>
          <p className="w-[70%] mt-5 text-start font-light text-sm">
            Even after being a busy mother of two, Madhuri always finds time to
            keep the team together and maintain a cohesive bond between the
            agencies.
          </p>
        </div>
        <div className="w-[100%] md:w-[40%] flex justify-center items-center">
          <img src={img3} className="h-[300px] w-[300px]" />
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center">
        <h1
          style={{ color: "rgb(4, 80, 116)" }}
          className="text-center w-full font-bold text-4xl mt-9 mb-9"
        >
          What Our Customers Have to Say About Us
        </h1>
        <div className="w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
            {testimonials.map((testimonial, index) => (
              <div key={index} className=" p-4 ">
                <div
                  className="mr-3"
                  dangerouslySetInnerHTML={{ __html: svgCode }}
                />
                <p className="font-light text-gray-500 italic text-sm mt-3">
                  {testimonial.text}
                </p>
                <h1 className="font-bold mt-4">- {testimonial.author}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
