// src/components/Services.js
import React from 'react';
import img1 from '../assets/img1.webp'
import img4 from '../assets/img4.webp'
import ContactForm from './ConatactForm';
const responsibilities = [
    "Schedule appointments",
    "Conduct face-to-face meetings",
    "Analyze clients’ financial situations with help of tools provided",
    "Conduct the gap analysis for clients",
    "Recommend appropriate solutions",
    "Present the solutions to client",
    "Coordinate with the client and service providers",
    "Complete and maintain all necessary documentation",
    "Create and maintain a healthy and long-lasting relationship with clients",
    "Develop leads",
    "Expand the task-force for increased outreach",
    "Comply with all regulatory requirements, including licensing and registrations"
];

const Partner = () => {
    const svgPath = "M57 25.59 1.315.893c.167.113.362.173.562.173.062 0 .126-.006.188-.018.26-.05.49-.201.639-.421l2.246-3.311c.311-.457.191-1.079-.266-1.389l-29.122-19.761c-.34-.23-.783-.23-1.123 0l-29.124 19.762c-.457.31-.576.932-.266 1.389l2.246 3.311c.148.22.379.371.639.421.262.05.531-.007.75-.155l1.316-.894v10.005c-.586.256-1.065.729-1.316 1.351-1.681 4.156-3.684 9.618-3.684 12.054 0 3.59 2.09 6.378 5 6.903v4.097h-5v2h60v-2h-5zm-51.611-1.323-1.123-1.657 27.734-18.819 27.734 18.819-1.123 1.656-26.049-17.676c-.17-.115-.366-.173-.562-.173s-.392.058-.562.173zm-1.389 24.733c0-1.625 1.289-5.745 3.537-11.304.115-.283.362-.313.463-.313s.348.03.463.313c2.248 5.559 3.537 9.679 3.537 11.304 0 2.897-1.683 5-4 5s-4-2.103-4-5zm5 6.903c2.91-.525 5-3.313 5-6.903 0-2.436-2.003-7.898-3.684-12.054-.251-.622-.73-1.095-1.316-1.351v-11.362l23-15.607 23 15.607v19.465l-.168-.252c-.371-.557-1.293-.557-1.664 0l-2 3c-.109.163-.168.357-.168.554v2h-2v-2c0-.197-.059-.391-.168-.555l-2-3c-.371-.557-1.293-.557-1.664 0l-2 3c-.109.164-.168.358-.168.555v2h-2v-2c0-.197-.059-.391-.168-.555l-2-3c-.371-.557-1.293-.557-1.664 0l-2 3c-.109.164-.168.358-.168.555v13h-6v-19c0-.553-.447-1-1-1h-11c-.553 0-1 .447-1 1v19h-7zm30 4.097h-2v-12.697l1-1.5 1 1.5zm2-9h2v2h-2zm0 4h2v5h-2zm6 5h-2v-12.697l1-1.5 1 1.5zm2-9h2v2h-2zm0 4h2v5h-2zm-22 5h-9v-18h9zm26 0v-12.697l1-1.5 1 1.5v12.697z";
    return (
        <div className='w-full'>
            <div className='text-center bg-[#367d02] w-full pt-16 pb-16'>
                <h1 className='text-[37px] text-white font-bold'>Partner Program </h1>
                <p className='text-xl text-white font-normal mt-2 w-[80%] mx-auto'>Experience a rewarding career at Uptick Financial Services LLC. where you help people understand the basics of their personal finances while building your own personal career in the finance domain. Whether you are new to the industry or you are looking to enhance your professional skills, we can provide you with the training and support you need to take your skills to the next level. As an associate with Uptick Financial Services LLC, you will help individuals accumulate wealth and protect their hard-earned assets..</p>
            </div>
           
            <div className='bg-white shadow-lg w-full flex justify-center  md:justify-start lg:justify-center items-center pt-10 pb-10 flex-wrap'>
                <div className='w-full sm:w-1/2 md:w-[40%]  md:ml-7  lg:w-1/4 mx-2'>
                    <div className='mx-5'>
                        <h1 style={{ color: 'rgb(4, 80, 116)' }} className='font-bold text-4xl mt-5 mb-4'>Responsibilities</h1>
                        <ul className="list-disc list-inside text-sm font-light text-gray-600">
                            {responsibilities.map((task, index) => (
                                <li key={index} className="mb-2">{task}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 md:w-[40%] md:ml-7  lg:w-1/4 mx-2'>
                    <div className='mx-5'>
                        <h1 style={{ color: 'rgb(4, 80, 116)' }} className='font-bold text-4xl mt-5 mb-4'>Required Skills</h1>
                        <ul className="list-disc list-inside text-sm font-light text-gray-600">
                            {responsibilities.map((skill, index) => (
                                <li key={index} className="mb-2">{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 md:w-[40%] md:ml-7 lg:w-1/4 mx-2'>
                    <div className='mx-5'>
                        <h1 style={{ color: 'rgb(4, 80, 116)' }} className='font-bold text-4xl mt-5 mb-4'>What You Will Gain</h1>
                        <ul className="list-disc list-inside text-sm font-light text-gray-600">
                            {responsibilities.map((gain, index) => (
                                <li key={index} className="mb-2">{gain}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex justify-around bg-gray-100 pb-10'>
                <div className='text-center'>
                    <h1 style={{ color: 'rgb(4, 80, 116)' }} className='text-center w-full font-bold text-4xl mt-9'>What We Offer</h1>
                    <p>Full Time / Part Time</p>
                </div>
                <div className='text-center'>
                    <h1 style={{ color: 'rgb(4, 80, 116)' }} className='text-center w-full font-bold text-4xl mt-9'>What We Offer</h1>
                    <p>Full Time / Part Time</p>
                </div>
            </div>
            <ContactForm/>

        </div>
    );
};

export default Partner;
