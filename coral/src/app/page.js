"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Navbar } from "./components/Navbar";
import Slider from "./components/Slider";
import { CallSharp } from "@mui/icons-material";
import { FaFacebook } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import image3 from "./img/hotel.jpg";
import image2 from "./img/rocks.jpg";
import image1 from "./img/rooms.jpg";
import image4 from "./img/visitor.jpg";
import { Chat } from "./components/Chat";
import { BsCheck2Circle } from "react-icons/bs";
import Counter from "./components/Counter"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const bannerImages = [ image1, image3,image2,image4 ];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const text = [
    {
      title: " Welcome to your Home",
      desc: "Away From Home !",
      color: "#0E2F52",
    },
    {
      title: "Experience The Epitome Of Luxury",
      desc: "We Make Your Dreams Real !",
      color: "black",
    },
    {
      title: " Discover The Unchartered Beauty",
      desc: " Your Ultimate Travel Guide",
      color: "#0E2F52",
    },
    {
      title: "Explore The natural Bridge",
      desc: " At Neil Island",
      color:"#F8CF2A"
    }
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
        );
        setTransitioning(false);
      }, 500);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
useEffect(()=>{
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
},[])
  return (
<main className="flex   w-[100vw] flex-col bg-purple-400  min-h-screen relative justify-between "  >
  <Navbar />
<Chat/>
  {/* <div className="image-container z-0 "> */}
  <Image
    src={bannerImages[currentImageIndex]} 
    alt={`Banner Image ${currentImageIndex + 1}`}
    
 
    className={`transition-opacity absolute bg-purple-100  top-[10vh] md:top-[-10vh] object-scale-down md:object-cover duration-300 z-20 ${
      transitioning ? "opacity-100 animate-zoom-in" : "opacity-100 "
    } animate-zoom-in`}
  />

        <div data-aos="fade-down" data-aos-duration="4000" className="absolute fade-in-text flex-col  text-purple-800 z-20  font-white inset-0 flex items-center justify-center top-[10vh] md:top-[50vh] ">
          <h1
            className="text-3xl fade-in-text md:text-6xl   lg:text-6xl xl:text-6xl px-6  py-8 mb-2 md:mb-12 text-white text-center drop-shadow-2xl"
            style={{
              borderBottom: "2px solid white",
              fontFamily: "initial",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              opacity: transitioning ? 0 : 1,
              animationDuration:"4s"
          
            }}
            
          >
            {text[currentImageIndex].title}
          </h1>
          <h1
            className={`text-xl  md:text-3xl  fade-in-text lg:text-4xl xl:text-5xl px-6 py-4 mb-12 text-yellow-200 bg-[${text[currentImageIndex].color}] text-center drop-shadow-2xl`}
            style={{
              fontFamily: "initial",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", 
              backgroundColor: text[currentImageIndex].color,
              opacity: transitioning ? 0 : 1,
              animationDuration:"4s"
            }}
          >
            {text[currentImageIndex].desc}
          </h1>
        </div>
        <div data-aos="fade-up" style={{ width: "100%" }}
      className="flex flex-col items-center absolute top-[70vh] md:top-[100vh] z-30 "
    >
      {/* z-50 top-40 */}
      <div
        style={{ width: "85%" }}
        className="  text-center md:flex flex-wrap justify-between items-center  bg-purple-700 text-white px-2 md:px-6 py-12 w-full"
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-bold  "><Counter n={1200}  /> </h2>
          <h3 className="text-lg">TOURS COMPLETED</h3>
        </div>
        <div>
          <h2 className="text-4xl  md:text-5xl font-bold "><Counter n={845}/></h2>
          <h3 className="text-lg">SATISFIED CLIENTS</h3>
        </div>
        <div>
          <h2 className="text-4xl  md:text-5xl font-bold  "> <Counter n={2560}/></h2>
          <h3 className="text-lg">ROOMS BOOKED</h3>
        </div>
        <div>
          <h2 className="text-4xl  md:text-5xl font-bold "><Counter n={1445}/></h2>
          <h3 className="text-lg">ACTIVITIES BOOKED</h3>
        </div>
      </div>
      {/* z-20 */}
      <div className="mx-5 md:mx-12 my-8  ">
        <div>
          <p className="text-xl text-center font-bold md:font-semibold text-purple-700 pb-4 ">
            Dining Enjoy a complimentary continental breakfast of pastries,
            cereal, and a variety of hot drinks. The lounge is available in
            the afternoon for guests to relax with a book, tea and coffee, and
            a variety of snacks.
          </p>
        </div>
        <div>
          <p
            className=" pt-8 m-auto z-20 font-semibold text-gray-800 text-xl text-thin text-gray-600 text-justify pb-4"
            style={{ borderTop: "1px solid #481C6B" }}
          >
            Finding an ideal romantic lodge in Ko Kradan does not have to be
            difficult. Welcome to Coral Garden Resort, a nice option for
            travelers like you.The rooms offer air conditioning, a
            refrigerator, and a desk, and getting online is possible, as free
            wifi is available, allowing you to rest and refresh with
            ease.Coral Garden Resort features a 24 hour front desk, baggage
            storage, and express check-in and check-out. In addition, as a
            valued Coral Garden Resort guest, you can enjoy an on-site
            restaurant that is available on-site.If you are looking for a good
            Mediterranean restaurant, you may want to check out Italiano Koh
            Kradan while staying at Coral Garden Resort. Coral Garden Resort
            puts the best of Ko Kradan at your fingertips, making your stay
            both relaxing and enjoyable.
          </p>
        </div>
      </div>

      <div className="bgImageA pb-12 relative z-10">
        <div
          className="text-white px-4 md:px-16 py-20  flex-col lg:grid 
"
          style={{ gridTemplateColumns: "60% 55%", gap: "20px" }}
        >
          <div className="leading-10 text-xl">
            <h3 className="text-3xl z-10  text-center md:text-left">AMENITIES</h3>
            <h4 className="text-center md:text-left">
              We offer a variety of amenities to make your stay with us as
              comfortable as possible. Cable is available in every room with
              the option of pay-per-view movies.
            </h4>

            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mt-12 mb-12">
              <div class="item flex items-center gap-2 hover:transition-all hover:pl-6 hover:duration-1000 text-yellow-300 font-semibold"><BsCheck2Circle />High-speed internet </div>
              <div class="item flex items-center gap-2 hover:transition-all hover:pl-6 hover:duration-1000 text-yellow-300 font-semibold"><BsCheck2Circle />LED TV</div>
              <div class="item flex items-center gap-2 hover:transition-all hover:pl-6 hover:duration-1000 text-yellow-300 font-semibold"><BsCheck2Circle />Breakfast</div>
              <div class="item flex items-center gap-2 hover:transition-all hover:pl-6 hover:duration-1000 text-yellow-300 font-semibold"><BsCheck2Circle />Attached Bath</div>
              <div class="item flex items-center gap-2 hover:transition-all hover:pl-6 hover:duration-1000 text-yellow-300 font-semibold"><BsCheck2Circle />Hot & Cold water</div>
              <div class="item flex items-center gap-2 hover:transition-all hover:pl-6 hover:duration-1000 text-yellow-300 font-semibold"><BsCheck2Circle />Air Conditioned</div>
              <div class="item flex items-center gap-2 hover:transition-all hover:pl-6 hover:duration-1000 text-yellow-300 font-semibold"><BsCheck2Circle />Shampoo</div>
              <div class="item flex items-center gap-2 hover:transition-all hover:pl-6 hover:duration-1000 text-yellow-300 font-semibold"><BsCheck2Circle />Soap</div>
              <div class="item flex items-center gap-2 hover:transition-all hover:pl-6 hover:duration-1000 text-yellow-300 font-semibold"><BsCheck2Circle />Free Wi-Fi</div>
            </div>

            <h4 className="text-3xl z-10">100% SATISFACTION GUARANTEED</h4>
            <h4 className="">
              Whether this is your first visit, or you have been a guest many
              times, we want your experience to be excellent. Our staff is
              always available to help with any questions or concerns you may
              have.
            </h4>
          </div>
          <div>
            <Image
              src="https://coralgardenresort.in/wp-content/uploads/2024/01/the-hotel-1.jpg"
              height={300}
              width={450}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          margin: "auto",
         
          paddingTop: "70px",
        }}
        className="pb-12 pt-12 bg-rose-100 h-[80vh]"
      >


<div className="text-center">
<h2 className="text-purple-700 text-2xl font-bold">
          TESTIMONIALS 
          </h2>
          <p className="text-rose-500 text-3xl font-normal text-center">
          What Our Clients Say
          </p>
</div>

        <Slider />
      </div>
      <div
        className="bg-white pt-20 pb-12 z-30"
        style={{ width: "100%", margin: "0" }}
      >
        <div className=" flex gap-4 flex-col  md:flex-row justify-between md:justify-center items-start px-12 fade-in-image">
          <Image
            height={500}
            width={500}
            src="https://coralgardenresort.in/wp-content/uploads/2024/01/rsw_1280h_854-1024x683.webp"
          />
          <Image
            height={500}
            width={500}
            src="https://coralgardenresort.in/wp-content/uploads/2024/01/rsw_1280h_8542-1024x683.webp"
          />
        </div>
        <p className="text-center mt-12 text-2xl font-bold text-purple-700">
          For Bookings Contact Us – 03192 282705, 9434262594, 9933293666,
          9476026661
        </p>
      </div>
      {/* sticky -z-20 */}
      <div
        style={{ width: "100%" }}
        className="  bottom-0  text-purple-200 text-center font-bold  bg-[#4E1D6D] flex flex-col items-center py-24"
      >
        <Image
          src="https://coralgardenresort.in/wp-content/uploads/2024/01/coral-gardan-logo.png"
          width={250}
          height={350}
        />
        <p style={{ width: "60%" }} className="text-lg text-center  font-semibold">
          CORAL GARDEN RESORT Neil Kendra, Andaman and Nicobar Islands, India.
          For Bookings Contact Us - 03192 282705, 9434262594, 9933293666,
          9476026661
        </p>
        <div className="flex gap-6 mt-4 ">
          <button className="bg-purple-400 p-3 rounded-full">
            <FaFacebook className="text-white text-2xl" />
          </button>
          <button className="bg-purple-400 p-3 rounded-full">
            <CiYoutube className="text-white text-2xl" />
          </button>
        </div>
      </div>

      {/* relative -z-20 */}
      <div
        style={{ width: "100%" }}
        className="  text-purple-200 text-center font-bold bg-[#4A276B] flex flex-col items-center py-8"
      >
        <p style={{ width: "60%" }} className="text-xs leading-10">
          © Copyright 2024 Coral Garden Resort.
        </p>
        <p className="text-xs">Designed by: OMM DIGITAL SOLUTION PVT. LTD</p>
      </div>
    </div>

    
 
    </main>
  );
}
