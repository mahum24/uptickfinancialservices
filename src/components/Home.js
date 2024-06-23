// src/components/Home.js
import React from 'react';
import img1 from '../assets/img1.webp'

const dataArray = [
  {
    imgSrc: img1,
    title: 'Expertise',
    description: 'We have years of experience in helping customers determine how to manage their money and make smarter financial decisions'
  },
  {
    imgSrc: img1,
    title: 'Expertise',
    description: 'We have years of experience in helping customers determine how to manage their money and make smarter financial decisions'
  },
  {
    imgSrc: img1,
    title: 'Expertise',
    description: 'We have years of experience in helping customers determine how to manage their money and make smarter financial decisions'
  },
  {
    imgSrc: img1,
    title: 'Expertise',
    description: 'We have years of experience in helping customers determine how to manage their money and make smarter financial decisions'
  }
];

const data = [
  {
    imgSrc: img1,
    title: 'Expertise',
    description: 'We have years of experience in helping customers determine how to manage their money and make smarter financial decisions'
  },
  {
    imgSrc: img1,
    title: 'Expertise',
    description: 'We have years of experience in helping customers determine how to manage their money and make smarter financial decisions'
  },
  {
    imgSrc: img1,
    title: 'Expertise',
    description: 'We have years of experience in helping customers determine how to manage their money and make smarter financial decisions'
  }
];

const Home = () => {
  return (
    <div className="w-full">
      <div className='text-center bg-[#367d02] w-full pt-16 pb-16'>
        <h1 className='text-[37px] text-white font-bold'>Welcome to </h1>
        <h1 className='text-[37px] text-white font-bold'>Uptick Financial Services</h1>
        <p className='text-xl text-white font-normal mt-2'>We offer discreet and dependable consulting for your personal financial needs. Our team is available to guarantee you the best possible service.</p>
      </div>

      <div className='flex flex-wrap justify-center pt-10 pb-5 bg-white'>
        {dataArray.map((item, index) => (
          <div key={index} className='text-center w-full sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%] mb-4 sm:mr-3 sm:ml-3'>
            <div className='mx-auto'>
              <img src={item.imgSrc} alt={`Image ${index}`} className='mx-auto' />
            </div>
            <h1 className='font-bold mt-4'>{item.title}</h1>
            <p className='text-gray-900'>{item.description}</p>
          </div>
        ))}
      </div>

      <div>
        <h1 style={{ color: 'rgb(4, 80, 116)' }} className='text-center w-full font-bold text-4xl mt-9 mb-9'>What We Offer</h1>
        <div className='w-full flex justify-center flex-wrap'>
          {data.map((item, index) => (
            <div key={index} className='bg-white w-[80%] sm:w-[45%] md:w-[30%] lg:w-[27%] xl:w-[27%] mx-3 mb-6 shadow-md'>
              <div className='w-[100%] text-center'>
                <div className='w-[90%] m-auto pt-10'>
                  <img src={item.imgSrc} alt={`Image ${index}`} className='mx-auto' />
                </div>
                <h1 className='font-bold mt-9'>{item.title}</h1>
                <p className='text-gray-900 my-4'>{item.description}</p>
                <button
                  className="w-[80%] bg-transparent border border-green-500 text-green-500 rounded-full mt-7 mb-12 px-4 py-2 mt-4 hover:bg-green-500 hover:text-white transition duration-300 ease-in-out"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Home;
