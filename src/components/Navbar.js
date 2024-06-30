// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import UptickLogo from "../assets/UptickLogo.webp";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleBookAppointmentClick = () => {
//     window.open('https://mail.google.com/mail/?view=cm&fs=1&to=mahummaqbool24@gmail.com', '_blank');
//   };

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-20">
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//         <div className="relative flex items-center justify-between h-16">
//           <div className="flex-shrink-0">
//             <img className="h-10" src={UptickLogo} alt="Uptick Logo" />
//           </div>

//           <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:bg-gray-100 focus:outline-none"
//             >
//               <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>

//           <div className="hidden sm:flex sm:ml-6 space-x-4">
//             <Link
//               to="/"
//               className="text-gray-900 hover:bg-[#4dba58] px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className="text-gray-900 hover:bg-[#4dba58] px-3 py-2 rounded-md text-sm font-medium"
//             >
//               About Us
//             </Link>
//             <Link
//               to="/services"
//               className="text-gray-900 hover:bg-[#4dba58] px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Services
//             </Link>
//             <Link
//               to="/products"
//               className="text-gray-900 hover:bg-[#4dba58] px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Products
//             </Link>
//             <Link
//               to="/partner-program"
//               className="text-gray-900 hover:bg-[#4dba58] px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Partner Program
//             </Link>
//             <Link
//               to="/blogs"
//               className="text-gray-900 hover:bg-[#4dba58] px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Blogs
//             </Link>
//             <Link
//               to="/contact"
//               className="text-gray-900 hover:bg-[#4dba58] px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Contact Us
//             </Link>
//           </div>

//           <div className="hidden sm:block sm:ml-6">
//             <button onClick={handleBookAppointmentClick} className="bg-green-500 hover:bg-[#4dba58] text-white px-4 py-2 rounded-full text-sm font-medium focus:outline-none">
//               {/* <a href="mailto:mahummaqbool24@gmail.com"> */}
//               Book an Appointment
//               {/* </a> */}
//             </button>

//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="sm:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             <Link
//               to="/"
//               className="text-gray-900 hover:bg-[#4dba58] block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className="text-gray-900 hover:bg-[#4dba58] block px-3 py-2 rounded-md text-base font-medium"
//             >
//               About Us
//             </Link>
//             <Link
//               to="/services"
//               className="text-gray-900 hover:bg-[#4dba58] block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Services
//             </Link>
//             <Link
//               to="/products"
//               className="text-gray-900 hover:bg-[#4dba58] block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Products
//             </Link>
//             <Link
//               to="/partner"
//               className="text-gray-900 hover:bg-[#4dba58] block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Partner
//             </Link>
//             <Link
//               to="/program"
//               className="text-gray-900 hover:bg-[#4dba58] block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Program
//             </Link>
//             <Link
//               to="/blogs"
//               className="text-gray-900 hover:bg-[#4dba58] block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Blogs
//             </Link>
//             <Link
//               to="/contact"
//               className="text-gray-900 hover:bg-[#4dba58] block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Contact Us
//             </Link>
//           </div>

//           <div className="px-2 pt-2 pb-3">
//             <button className="bg-green-500 hover:bg-[#4dba58] text-white px-4 py-2 rounded-full text-sm font-medium w-full focus:outline-none">
//               Book an Appointment
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import UptickLogo from "../assets/UptickLogo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // State to track active link
  const location = useLocation(); // Get current location

  useEffect(() => {
    setActiveLink(location.pathname); // Update active link when location changes
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleBookAppointmentClick = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=mahummaqbool24@gmail.com', '_blank');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="h-10" src={UptickLogo} alt="Uptick Logo" />
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <div className="hidden sm:flex sm:ml-6 space-x-4">
            <NavLink
              to="/"
              activeClass="bg-[#4dba58]"
              className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              activeLink={activeLink}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              activeClass="bg-[#4dba58]"
              className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              activeLink={activeLink}
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              activeClass="bg-[#4dba58]"
              className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              activeLink={activeLink}
            >
              Services
            </NavLink>
            <NavLink
              to="/products"
              activeClass="bg-[#4dba58]"
              className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              activeLink={activeLink}
            >
              Products
            </NavLink>
            <NavLink
              to="/partner-program"
              activeClass="bg-[#4dba58]"
              className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              activeLink={activeLink}
            >
              Partner Program
            </NavLink>
            <NavLink
              to="/blogs"
              activeClass="bg-[#4dba58]"
              className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              activeLink={activeLink}
            >
              Blogs
            </NavLink>
            <NavLink
              to="/contact"
              activeClass="bg-[#4dba58]"
              className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              activeLink={activeLink}
            >
              Contact Us
            </NavLink>
          </div>

          <div className="hidden sm:block sm:ml-6">
            <button onClick={handleBookAppointmentClick} className="bg-green-500 hover:bg-[#4dba58] text-white px-4 py-2 rounded-full text-sm font-medium focus:outline-none">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              activeClass="bg-[#4dba58]"
              className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              activeLink={activeLink}
              
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              activeClass="bg-[#4dba58]"
              className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              activeLink={activeLink}
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              activeClass="bg-[#4dba58]"
              className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              activeLink={activeLink}
            >
              Services
            </NavLink>
            <NavLink
              to="/products"
              activeClass="bg-[#4dba58]"
              className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              activeLink={activeLink}
            >
              Products
            </NavLink>
            <NavLink
              to="/partner"
              activeClass="bg-[#4dba58]"
              className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              activeLink={activeLink}
            >
              Partner
            </NavLink>
            <NavLink
              to="/program"
              activeClass="bg-[#4dba58]"
              className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              activeLink={activeLink}
            >
              Program
            </NavLink>
            <NavLink
              to="/blogs"
              activeClass="bg-[#4dba58]"
              className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              activeLink={activeLink}
            >
              Blogs
            </NavLink>
            <NavLink
              to="/contact"
              activeClass="bg-[#4dba58]"
              className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              activeLink={activeLink}
            >
              Contact Us
            </NavLink>
          </div>

          <div className="px-2 pt-2 pb-3">
            <button className="bg-green-500 hover:bg-[#4dba58] text-white px-4 py-2 rounded-full text-sm font-medium w-full focus:outline-none">
              Book an Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// NavLink component to handle active link styling
const NavLink = ({ to, activeClass, className, children, activeLink }) => {
  const isActive = to === activeLink;

  return (
    <Link to={to} className={`${className} ${isActive ? activeClass : ''}`}>
      {children}
    </Link>
  );
};

export default Navbar;

