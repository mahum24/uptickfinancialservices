// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-200 py-4">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center">
//           {/* Left Side - Copyright */}
//           <div className="text-sm text-gray-600">
//             <p>Copyright © 2024. Uptick Financial Services. All rights reserved.</p>
//           </div>

//           {/* Right Side - Links */}
//           <div className="text-sm text-gray-600">
//             <a href="#" className="ml-4 hover:text-gray-800">
//               Disclaimer
//             </a>
//             <span className="mx-2">|</span>
//             <a href="#" className="ml-4 hover:text-gray-800">
//               Privacy Policy
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          <div className=" text-gray-600">
            <p>Copyright © 2024. Uptick Financial Services. All rights reserved.</p>
          </div>

          <div className=" text-green-600 mt-1">
            <a href="#" className="hover:text-green-800">
              Disclaimer
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-green-800">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

