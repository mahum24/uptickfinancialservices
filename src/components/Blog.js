// src/components/About.js
import React from "react";
import { useLocation } from 'react-router-dom';
import img5 from "../assets/img5.webp";
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons'

import Entrepreneurs from "../assets/Entrepreneurs.webp"
import Dreams from "../assets/Dreams.webp"
import Money from "../assets/Money.webp"
import phsycology from "../assets/phsycology.webp"

function generateHyphenatedString(inputString) {
    const lowerCaseString = inputString.toLowerCase();
    const hyphenatedString = lowerCaseString.replace(/\s+/g, '-');
    return hyphenatedString;
}

const Blog = () => {
    const location = useLocation();
    const { blogData, allData } = location.state || {};

    if (!blogData) {
        return null;
    }

    return (
        <div className="w-[85%] m-auto pb-20 ">
            <h1 className="text-[60px] font-bold mt-14 mb-7">{blogData.name}</h1>
            <span className="text-[#747474] font-light mb-9 ">{blogData.aurthor} • {blogData.date}</span>
            {blogData.beforePicData && <h1 className="text-[40px] mt-5 font-semibold mb-2">{blogData.beforePicData}</h1>}
            <img src={blogData.img} className="mt-3" />
            {blogData.afterPicData && <h1 className="text-[40px] mt-5 font-semibold mb-2">{blogData.afterPicData}</h1>}
            <p className="text-[#747474] mt-3 font-light">{blogData.description}</p>
            {blogData.detailed_content.map((item, index) => {
                return (
                    <div key={index} className="mb-4">
                        <p className="mt-5 text-[#747474] font-light">{item.heading}</p>
                        <p className="text-[#747474] font-light">{item.detail}</p>
                        {item.tip && <p className="text-[#747474] font-light mt-3">Tip: {item.tip}</p>}
                    </div>
                )
            })}
            <p className="text-[#747474] font-light mt-3">{blogData.consclusion}</p>

            <div>
                <h1 className="font-bold text-lg mt-[90px]">Share</h1>
                <div className="flex mt-3">
                    <a className="text-gray-600 text-sm mr-2 border  rounded-md radius-2 p-1 bg-[#dedede] min-w-[74px]" href="http://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.uptickfinancialservices.com%2Fmoney-and-happiness">Share</a>
                    <a className="overflow-hidden h-[30px] text-gray-600 text-sm mx-2 border  rounded-md radius-2  bg-[#dedede] min-w-[90px] border border-gray-400" href="http://twitter.com/intent/tweet?text=I wanted to share this great website with you&amp;url=https%3A%2F%2Fwww.uptickfinancialservices.com%2Fmoney-and-happiness"><SocialIcon url="https://twitter.com" style={{ borderRadius: '0px', height: '40px', margin: '0px', padding: '0px', marginLeft: '-10px', marginTop: '-6px', marginRight: '-7px' }} /> Tweet</a>
                    <a className="text-gray-600 text-sm mx-2 border rounded-md radius-2 p-1  bg-[#dedede] min-w-[74px]" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.uptickfinancialservices.com%2Fmoney-and-happiness&amp;title=I wanted to share this great website with you">Share</a>
                    <a className="text-gray-600 text-sm mx-2 border rounded-md p-1  bg-[#dedede] min-w-[74px]" href="/_dm/s/rt/actions/emailshare?text=I wanted to share this great website with you&amp;site=https%3A%2F%2Fwww.uptickfinancialservices.com%2Fmoney-and-happiness&amp;lang=us&amp;class=insidePopUp">Mail</a>
                </div>

            </div>

            <div className="mt-10">
                <div className="flex justify-center">
                    <div class="w-full flex flex-wrap justify-between">
                        {allData.map((item, index) => {
                            const new_description = `${item.detailed_content[0]?.heading} ${item.detailed_content[0]?.detail}`
                            const hyphenatedString = generateHyphenatedString(item.name)
                            if (item.name != blogData.name) {
                                return (
                                    <div class="w-full lg:w-[49%] mb-4 lg:mb-0 overflow-hidden">
                                        <div class="relative group">
                                            <img src={item.img} class="object-cover w-full h-[300px] lg:mt-11 transition-transform duration-300 transform-gpu group-hover:scale-105" alt="Vision and Mission" />
                                            <h1 class="text-xl font-bold mt-5 mb-4 text-[25px]">{item.name}</h1>
                                            <p class="mt-2 h-[100px] overflow-hidden text-[#747474] font-montserrat">{item.description ? item.description : new_description}</p>
                                            {item.name == "Yes, You can have a life that you always dream about!" && <Link to={{
                                                pathname: `/not-found`
                                            }}
                                                className="text-blue-500 mt-2 inline-block text-[#747474] font-montserrat">Read More →</Link>}
                                            {item.name != "Yes, You can have a life that you always dream about!" && <Link to={{
                                                pathname: `/blog/${hyphenatedString}`
                                            }}
                                                state={{ blogData: item, allData: allData }}
                                                className="text-blue-500 mt-2 inline-block text-[#747474] font-montserrat">Read More →</Link>}
                                        </div>
                                    </div>

                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;