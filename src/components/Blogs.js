// src/components/About.js
import React from "react";

import Entrepreneurs from "../assets/Entrepreneurs.webp"
import Dreams from "../assets/Dreams.webp"
import Money from "../assets/Money.webp"
import phsycology from "../assets/phsycology.webp"

import img5 from "../assets/img5.webp";
import { Link } from "react-router-dom";


function generateHyphenatedString(inputString) {
    const lowerCaseString = inputString.toLowerCase();
    const hyphenatedString = lowerCaseString.replace(/\s+/g, '-');
    return hyphenatedString;
}

const Blogsdata = [
    {
        img: Money,
        name: "Money and happiness",
        aurthor: "Prashant Morajkar",
        date: "Apr 27, 2023",
        beforePicData: "Finding Balance in Your Personal Finances",
        description: "Money is often associated with happiness, but the relationship between the two is more complex than we realize. While money can provide a sense of security and comfort, it doesn't necessarily equate to happiness. In fact, studies have shown that beyond a certain threshold, more money doesn't necessarily lead to more happiness. So, how can we find balance in our personal finances and achieve true happiness?",
        consclusion: "In conclusion, finding balance in your personal finances requires a holistic approach that goes beyond money. By identifying your values, setting realistic goals, practicing gratitude and self-care, and giving back to others, you can achieve true happiness and fulfillment in all areas of your life. Remember, true happiness is not just about the amount of money you have, but about how you use it to enhance your life and the lives of others.",
        detailed_content: [{
            heading: "1. Identify Your Values",
            detail: "The first step in finding balance in your personal finances is to identify your values. What matters to you the most? Is it spending time with loved ones, pursuing your passion, or achieving financial security? Knowing your values will help you prioritize your spending and make intentional financial decisions.",
        },
        {
            heading: "2. Set Realistic Goals",
            detail: "Once you've identified your values, set realistic financial goals that align with them. For example, if spending time with loved ones is important to you, allocate a budget for family outings or vacations. Setting realistic goals can help you stay motivated and focused on what truly matters.",
        },
        {
            heading: "3. Practice Gratitude",
            detail: "Gratitude is an essential component of happiness. Take time to appreciate what you already have and the progress you've made towards your financial goals. Focus on the positive aspects of your life and finances rather than obsessing over what you don't have.",
        },
        {
            heading: "4. Practice Self-Care",
            detail: "Taking care of your physical and emotional well-being is crucial for finding balance and happiness in your personal finances. Make time for activities that bring you joy, such as exercise, meditation, or hobbies. This can help you reduce stress and maintain a positive outlook on life.",
        },
        {
            heading: "5. Give Back",
            detail: "Giving back to others can also contribute to our happiness. Consider donating to a cause you care about or volunteering your time to a local organization. Giving back can provide a sense of purpose and fulfillment beyond financial gain.",
        },

        ]
    },
    {
        img: phsycology,
        name: "The Psychology of Money",
        aurthor: "Prashant Morajkar",
        date: "Apr 27, 2023",
        beforePicData: "Understanding Your Relationship with Finances",
        afterPicData: "",
        description: "Money is an essential aspect of our lives, yet we often overlook the psychological impact it has on us. Our relationship with money is complex and multi-dimensional, and it can be shaped by various factors, including our upbringing, cultural background, and personal experiences. In this blog post, we'll explore the psychology of money and provide tips on how to understand and improve your relationship with finances",
        consclusion: "In conclusion, understanding the psychology of money can help you develop a healthier and more positive relationship with your finances. By recognizing your emotions, values, and beliefs about money, you can make more informed and intentional financial decisions. Remember that your relationship with money is unique and may require time and effort to improve, but the benefits of a healthy financial outlook are well worth it.",
        detailed_content: [{
            heading: "1. Money and Emotions",
            detail: "Money can evoke a range of emotions, from excitement and happiness to anxiety and stress. How we feel about money can impact our financial decisions and behavior. For example, fear of losing money can lead to a reluctance to invest, while the desire for instant gratification can result in overspending.",
            tip: "Recognize and acknowledge your emotions towards money. Understanding your emotions can help you make better financial decisions."
        },
        {
            heading: "2. Money and Identity",
            detail: "Our relationship with money is often intertwined with our sense of identity. We may associate certain possessions or financial achievements with our self-worth or social status. This can lead to a vicious cycle of comparing ourselves to others and feeling inadequate.",
            tip: "Reflect on your values and priorities. Identify what truly matters to you and align your financial goals with those values"
        },
        {
            heading: "3. Money and the Future",
            detail: "Our relationship with money is also shaped by our perception of the future. For example, if we believe that the future is uncertain, we may be more inclined to save and less likely to take risks. Conversely, if we have a positive outlook on the future, we may be more likely to invest and take chances.",
            tip: "Evaluate your beliefs about the future. Recognize that while the future is unpredictable, you can take steps to prepare for it."
        },
        {
            heading: "4. Money and Behavior",
            detail: "Our relationship with money is ultimately reflected in our financial behavior. This includes how we spend, save, and invest our money. Our behavior is often driven by subconscious beliefs and biases, which can impact our financial outcomes.",
            tip: " Identify your financial biases and try to counteract them. For example, if you tend to overspend on credit cards, consider switching to cash or a debit card to limit your spending."
        },
        {
            heading: "5. Money and Relationships",
            detail: "Money can also impact our relationships, including those with family, friends, and romantic partners. Disagreements about money can strain relationships and create tension.",
            tip: "Communicate openly and honestly about money with those close to you. Set clear boundaries and expectations to avoid misunderstandings and conflicts."
        },

        ]
    },
    {
        img: Dreams,
        name: "Yes, You can have a life that you always dream about!",
        aurthor: "",
        date: "",
        afterPicData: "",
        description: "It’s rare when life changing opportunities come knocking on your door, book a one on one free consultation appointment to learn more about new avenues of passive income and transform your financial life.",
        consclusion: "",
        detailed_content: []
    },
    {
        img: Entrepreneurs,
        name: "Top 10 Tips for Entrepreneurs",
        aurthor: "Prashant M ",
        date: "May 26, 2019",
        afterPicData: "Shark Tank Star Robert Herjavec's Top 10 Tips for Entrepreneurs",
        description: "",
        consclusion: "We only get one chance at this life. If you're going to play this game, play it to win.",
        detailed_content: [
            {
                heading: "1. Believe in the business — and yourself",
                detail: "There are so many people that will say, 'No — bad idea, it's never going to work’. You have to have a senseless belief in your idea and yourself - almost to the point of being delusional. Remember that everyone has advice but no one knows what you have to go through to start, grow and scale a business until they live it! Talk is cheap, but action speaks volumes. I often tell the story of the ancient general who took his troops to battle and when they got to the foreign shore, he burned all the ships so there would be no option of retreating. That is the kind of belief you need. There’s no going back.",
            },
            {
                heading: "2. Test before you jump in",
                detail: "Don't ask your mom, your wife, your friends, your barber what they think — those are opinions (and often biased one’s at that!). Test the idea with the only people who really matter: the ones who are going to cut you a cheque for it. Call on some potential clients and see if they will buy whatever it is you’re selling.",
            },
            {
                heading: "3. Everyone lies",
                detail: "Some people will lie to you because they mean to. Others will do it to tell you what you want to hear. Either way, test everything you are told. If someone tells you they are going to invest, get a date. And if the date passes, make sure your spider senses are tingling. If a client tells you he is giving you the order, ask him if it is in procurement yet; if not, ask him if he minds if you call the purchaser yourself. Test what people tell you. They don't always mean to lie to you, but they do lie.",
            },
            {
                heading: "4. Bring a compass",
                detail: "It's awkward when you have to eat your friends. That's a cute saying I saw a long time ago, but it's very true. When you're starting out, you have to realize that it is going to be hard and then it will get worse…far worse than you think. Be prepared to survive the worst situation you can think of — and then assume that things will still get even worse than that. Be prepared — it's much better to have a compass to get out of the woods (just in case) than to have to eat your friends to survive.",
            },
            {
                heading: "5. If they can't catch you, they can't overtake you",
                detail: "Go fast — really fast. The elephant can't catch a running mouse, but he sure can crush him when the mouse is standing still! When you're small, you’ve got to be faster than the competition. Be nimble, be agile, be responsive. Learn from your customers. As you grow be prepared for the new entrants that want to take you down and ask yourself how you can maintain the sense of agility that led to your initial success.",
            },
            {
                heading: "6. Train for a marathon",
                detail: "This is where I completely contradict myself, because diligence is so important. Once you find a good opportunity, go slow and check and double-check everything. Business is a sprint until you find an opportunity, then it requires the patience of a marathon runner. I know this is hard and trust me, I am not a marathoner — but I have run two of them just to reinforce this point to myself.",
            },
            {
                heading: "7. Hunt for your dinner",
                detail: "No matter how full and fat you get, don't stop looking for opportunities. You can never be satisfied as an entrepreneur, and the basis of any successful, growing business is new clients. Make sure your company always has the attitude of going out and hunting for its dinner. We don't pay our salespeople for renewals at Herjavec Group, that's a customer service job and not a sales job. Sales people should be hunters.",
            },
            {
                heading: "8. There is no work/life balance",
                detail: "Your business is a living, breathing thing, and it has to be fed and grow to survive. There is no balance in your life when your business is in trouble. If you are under the illusion that you can start a business and run it at your life's schedule, you are mistaken. The business is like a starving puppy — when it needs to eat, then it needs to eat regardless of what you have going on personally.",
            },
            {
                heading: "9. Being committed to business is hard",
                detail: "The reason so few companies and people make it: It's not easy. Be honest with yourself. What price are you willing to pay to make the business work and be successful? Would you sacrifice your time, your family, your friends, your golf game, your entire social life? I am not advocating that you should, but you have to ask yourself if you are prepared to.",
            },
            {
                heading: "10. It's all about the approach",
                detail: "Work hard…have fun…be nice…play fair…dream big.",
            },

        ]
    },

]
const Blogs = () => {
    return (
        <div className="flex justify-center pb-14">
            <div class="w-full md:w-[80%] flex flex-wrap justify-between">
                {Blogsdata.map((item, index) => {
                    const new_description = `${item.detailed_content[0]?.heading} ${item.detailed_content[0]?.detail}`
                    const hyphenatedString = generateHyphenatedString(item.name)
                    return (
                        <div class="w-full lg:w-[49%] mb-4 lg:mb-0 overflow-hidden">
                            <div class="relative group">
                                <img src={item.img} class="object-cover w-full h-[500px] lg:mt-11 transition-transform duration-300 transform-gpu group-hover:scale-105" alt="Vision and Mission" />
                                <h1 class="text-xl font-bold mt-5 mb-4 text-[25px]">{item.name}</h1>
                                <p class="mt-2 h-[100px] overflow-hidden text-[#747474] font-montserrat">{item.description ? item.description : new_description}</p>
                                { item.name == "Yes, You can have a life that you always dream about!" && <Link to={{
                                pathname: `/not-found`
                                }} 
                                className="text-blue-500 mt-2 inline-block text-[#747474] font-montserrat">Read More →</Link> }
                                { item.name != "Yes, You can have a life that you always dream about!" && <Link to={{
                                pathname: `/blog/${hyphenatedString}`
                                }} 
                                state={{ blogData: item, allData: Blogsdata}}
                                className="text-blue-500 mt-2 inline-block text-[#747474] font-montserrat">Read More →</Link> }
                                
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Blogs;
