// src/components/Services.js
import React from 'react';
import img1 from '../assets/img1.webp'

const data = [
  {
    imgSrc: img1,
    title: 'Quality',
    description: 'Everything we do centers on providing services of the highest level of quality. We won’t stop until we feel confident you’ve been provided our best service.'
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

const Services = () => {
  const svgPath = "M57 25.59 1.315.893c.167.113.362.173.562.173.062 0 .126-.006.188-.018.26-.05.49-.201.639-.421l2.246-3.311c.311-.457.191-1.079-.266-1.389l-29.122-19.761c-.34-.23-.783-.23-1.123 0l-29.124 19.762c-.457.31-.576.932-.266 1.389l2.246 3.311c.148.22.379.371.639.421.262.05.531-.007.75-.155l1.316-.894v10.005c-.586.256-1.065.729-1.316 1.351-1.681 4.156-3.684 9.618-3.684 12.054 0 3.59 2.09 6.378 5 6.903v4.097h-5v2h60v-2h-5zm-51.611-1.323-1.123-1.657 27.734-18.819 27.734 18.819-1.123 1.656-26.049-17.676c-.17-.115-.366-.173-.562-.173s-.392.058-.562.173zm-1.389 24.733c0-1.625 1.289-5.745 3.537-11.304.115-.283.362-.313.463-.313s.348.03.463.313c2.248 5.559 3.537 9.679 3.537 11.304 0 2.897-1.683 5-4 5s-4-2.103-4-5zm5 6.903c2.91-.525 5-3.313 5-6.903 0-2.436-2.003-7.898-3.684-12.054-.251-.622-.73-1.095-1.316-1.351v-11.362l23-15.607 23 15.607v19.465l-.168-.252c-.371-.557-1.293-.557-1.664 0l-2 3c-.109.163-.168.357-.168.554v2h-2v-2c0-.197-.059-.391-.168-.555l-2-3c-.371-.557-1.293-.557-1.664 0l-2 3c-.109.164-.168.358-.168.555v2h-2v-2c0-.197-.059-.391-.168-.555l-2-3c-.371-.557-1.293-.557-1.664 0l-2 3c-.109.164-.168.358-.168.555v13h-6v-19c0-.553-.447-1-1-1h-11c-.553 0-1 .447-1 1v19h-7zm30 4.097h-2v-12.697l1-1.5 1 1.5zm2-9h2v2h-2zm0 4h2v5h-2zm6 5h-2v-12.697l1-1.5 1 1.5zm2-9h2v2h-2zm0 4h2v5h-2zm-22 5h-9v-18h9zm26 0v-12.697l1-1.5 1 1.5v12.697z";
  return (
    <div className='w-full'>
      <div className='text-center bg-[#367d02] w-full pt-16 pb-16'>
        <h1 className='text-[37px] text-white font-bold'>Services </h1>
        <p className='text-xl text-white font-normal mt-2 w-[80%] mx-auto'>Discover more about our extensive range of professional services. We constantly update this page, but if you still can’t find what you’re looking for, please feel free to get in touch with us – we will be more than happy to help.</p>
      </div>
      <div className='bg-white pt-10 pb-[50px]'>
        <h1 style={{ color: 'rgb(4, 80, 116)' }} className='text-center w-full font-bold text-4xl mt-9 mb-9'>What We Offer</h1>
        <div className="w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6).keys()].map((index) => (
              <div key={index} className=" p-4 rounded-lg flex ">
                <div style={{ background: 'rgba(177, 232, 189, 1)' }} className="h-[50px] w-[140px] rounded-full flex justify-center items-center mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    className="w-6 h-6 fill-current text-gray-600 inline-block"
                  >
                    <path d={svgPath} />
                  </svg>
                </div>
                <div className="ml-4">
                  <h1 className="font-bold text-xl mb-2">Estate Planning</h1>
                  <p className="font-light text-gray-600">Protect your valuable financial assets against litigation and unfavorable taxation.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-gray-100 w-full pt-7'>
        <h1 style={{ color: 'rgb(4, 80, 116)' }} className='text-center w-full font-bold text-4xl mt-9 mb-9'>Our Philosophy</h1>
        <div className='w-full flex justify-center flex-wrap'>
          {data.map((item, index) => (
            <div key={index} className='bg-white w-[90%] sm:w-[60%] md:w-[42%] lg:w-[29%] xl:w-[24%] mx-7 mb-6 shadow-md'>
              <div className='w-[100%] text-center'>
                <div className='w-[90%] m-auto pt-10'>
                  <img src={item.imgSrc} alt={`Image ${index}`} className='mx-auto' />
                </div>
                <h1 className='font-bold mt-6'>{item.title}</h1>
                <p className='text-gray-900 my-4 w-[80%] mx-auto'>{item.description}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
