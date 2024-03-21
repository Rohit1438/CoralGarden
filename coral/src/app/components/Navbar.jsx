// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { Call } from "../../../public/call";
// import { FaFacebook } from "react-icons/fa";
// import { CiYoutube } from "react-icons/ci";
// import { MdAddIcCall } from "react-icons/md";
// import SmallNavbar from "./SmallNavbar"
// export const Navbar = () => {

//   const [isMobile, setIsMobile] = React.useState(false);

//   React.useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 968); // Set breakpoint as per your requirement
//     };

//     window.addEventListener('resize', handleResize);

//     handleResize(); // Initial check on component mount

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);
//   return (
//     <>
//       {isMobile ? (
//         <SmallNavbar />
//       ) : (
//         <div className="bg-[#481C6B]  md:visible  sticky top-0 z-50 text-white text-xs font-bold w-full px-12 py-4 flex items-center justify-between align-center">
//           <div>
//             <Image
//               height={200}
//               width={150}
//               src="https://coralgardenresort.in/wp-content/uploads/2024/01/coral-gardan-logo.png"
//             />
//           </div>

//           <Link href="/" className="text-yellow-200 hover:text-white">
//             HOME
//           </Link>
//           <Link href="/about_us" className="text-yellow-200 hover:text-white">
//             ABOUT
//           </Link>
//           <Link href="/room_tariff" className="text-yellow-200 hover:text-white">
//             ROOM TARIFF
//           </Link>
//           <Link href="/neil_island" className="text-yellow-200 hover:text-white">
//             NEIL ISLAND
//           </Link>
//           <Link href="/andaman" className="text-yellow-200 hover:text-white">
//             ANDAMAN
//           </Link>
//           <Link href="/scuba_diving" className="text-yellow-200 hover:text-white">
//             SCUBA DIVING
//           </Link>
//           <Link href="/contact" className="text-yellow-200 hover:text-white">
//             CONTACT
//           </Link>
//           <div className="flex justify-center align-bottom">
//             <div className="flex items-center text-yellow-200 hover:text-white">
//               <a href="tel:1234567890" className="flex items-center">
//                 <MdAddIcCall className="mr-1" />
//                 1234567890
//               </a>
//             </div>
//           </div>
//           <Link href="/">
//             <button className="rounded-full">
//               <FaFacebook className="text-white text-2xl bg-white-700 hover:text-sky-400 hover:bg-white rounded-full" />
//             </button>
//           </Link>
//           <Link href="/">
//             <button className="rounded-full">
//               <CiYoutube className="text-rose-400 text-2xl bg-white text-rose-400 hover:text-white hover:bg-rose-500 rounded-full" />
//             </button>
//           </Link>
//         </div>
//       )}
//     </>
//   );
// };








"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaFacebook } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { MdAddIcCall } from "react-icons/md";
import SmallNavbar from "./SmallNavbar"
import { RiArrowDropDownLine } from "react-icons/ri";
export const Navbar = () => {

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 968); // Set breakpoint as per your requirement
    };

    window.addEventListener('resize', handleResize);

    handleResize(); // Initial check on component mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (

  
      
<div className="sticky top-0 z-50"  >
<div className="bg-[#481C6B]  hidden  md:flex lg:flex   z-50 text-white text-xs font-bold w-full px-12 py-4 items-center justify-between align-center"><div>
            <Image
              height={200}
              width={150}
              src="https://coralgardenresort.in/wp-content/uploads/2024/01/coral-gardan-logo.png"
            />
          </div>

          <Link href="/" className="text-yellow-200 hover:text-white">
            HOME
          </Link>
          <Link href="/about_us" className="text-yellow-200 hover:text-white">
            ABOUT US
          </Link>
          <Link href="/rooms" className="text-yellow-200 hover:text-white">
            ROOMS
          </Link>
    
      


      <div class="dropdown">
<Link href="/" className="dropbtn flex items-center text-yellow-200 hover:text-white">
        EXPLORE<RiArrowDropDownLine color="yellow" />
<div className="dropdown-content">
   <Link href="/neil_island" className=" text-yellow-200 p-4 hover:text-white">
            NEIL ISLAND
          </Link>
          <Link href="/andaman" className="text-yellow-200 p-4 hover:text-white">
            ANDAMAN
          </Link>
</div>

      </Link>

  </div>
     


  <div class="dropdown">
<Link href="/" className="dropbtn flex items-center text-yellow-200 hover:text-white">
        ACTIVITIES<RiArrowDropDownLine color="yellow" />
<div className="dropdown-content">
<Link href="/scuba_diving" className="text-yellow-200 hover:text-white">
            SCUBA DIVING
          </Link>
          <Link href="/coming_soon" className="text-yellow-200 p-4 hover:text-white">
           COMING SOON
          </Link>
</div>

      </Link>

  </div>






       
          <Link href="/contact" className="text-yellow-200 hover:text-white">
            CONTACT US
          </Link>
          <div className="flex justify-center align-bottom">
            <div className="flex items-center text-yellow-200 hover:text-white">
              <Link href="tel:+919434262594" className="flex items-center">
                <MdAddIcCall className="mr-1" />
                +91 9434262594
              </Link>
            </div>
          </div>
          <Link href="/">
            <button className="rounded-full">
              <FaFacebook className="text-white text-2xl bg-white-700 hover:text-sky-700 hover:bg-white rounded-full" />
            </button>
          </Link>
          <Link href="/">
            <button className="rounded-full">
              <CiYoutube className="text-rose-400 text-2xl bg-white text-rose-600 hover:text-white hover:bg-rose-600 rounded-full" />
            </button>
          </Link>
        </div>

<div className="flex md:hidden sticky top-0 lg:hidden ">
<SmallNavbar />
</div>
</div>
        
      
 
  );
};
