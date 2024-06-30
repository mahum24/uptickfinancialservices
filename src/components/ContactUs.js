// src/components/About.js
import React from "react";

import img5 from "../assets/img5.webp";
import ContactForm from "./ContactUsForm";

const ContactUs = () => {
    return (
        <div className="w-full">
            <div className="text-center bg-[#367d02] w-full">
                <div className="w-full lg:w-[70%] m-auto py-6 px-4 lg:px-0">
                    <h1 className="text-[37px] text-white font-bold mb-5">Contact Us</h1>
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <div class="mb-6 lg:mb-0">
                            <h1 class="text-white text-[20px] font-bold">Phone Number:</h1>
                            <p class="text-white text-[20px]">+1 678 534 8123</p>
                        </div>
                        <div class="mb-6 lg:mb-0 lg:ml-12">
                            <h1 class="text-white text-[20px] font-bold">Address:</h1>
                            <p class="text-white text-[20px]">3675 Crestwood Parkway,</p>
                            <p class="text-white text-[20px]">Suite # 506 Duluth,</p>
                            <p class="text-white text-[20px]">GA 30096</p>
                        </div>
                        <div>
                            <h1 class="text-white text-[20px] font-bold">Email:</h1>
                            <p class="text-white text-[20px]">connect@uptickfs.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <h1 style={{ color: "rgb(4, 80, 116)" }}
                    className="text-center w-full font-bold text-4xl pt-14 pb-9">Connect with Us</h1>
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactUs;
