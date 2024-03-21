"use client";

import React from "react";
import "flowbite";
import { Navbar } from "../components/Navbar";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { Chat } from "../components/Chat";
import beach0 from "../img/beach/fetchpik.com-shutter-5lqqu0matl_720.jpg"
import beach1 from "../img/beach/fetchpik.com-shutter-eep08mqnmh_720.jpg"
import beach2 from "../img/beach/fetchpik.com-shutter-ibimkjqfsy_720.jpg"
import beach3 from "../img/beach/fetchpik.com-shutter-ojdtpcuy0p_720.jpg"
import beach4 from "../img/beach/fetchpik.com-shutter-pznsitouf2_720.jpg"
import beach5 from "../img/beach/fetchpik.com-shutter-s2xciln5nu_720.jpg"
import beach6 from "../img/beach/fetchpik.com-shutter-xl80jbtxbs_720.jpg"




const page =() => {
  return (
    <div className="">
      <Navbar />
      <Chat />
      <div className="bg-rose-100 pb-20 mb-8">
        <div className="text-center pt-8 pb-12">
          <h1 className="text-purple-700 text-2xl font-semibold">
            About Neil Island
          </h1>
          <p className="text-rose-500 text-center font-semibold">
            Experience tranquility in paradise
          </p>

          <div
            id="animation-carousel"
            style={{
              margin: "auto",
              borderRadius: "15px",
              border: "5px solid white",
            }}
            className=" w-[100%] md:w-[50%] relative "
            data-carousel="static"
          >
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              <div
                className="hidden duration-200 ease-linear"
                data-carousel-item
              >
                <Image
                  src={beach1}
                  width={500}
                  height={500}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div
                className="hidden duration-200 ease-linear"
                data-carousel-item
              >
                <Image
                  src={beach2}
                  width={500}
                  height={500}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>

              <div
                className="hidden duration-200 ease-linear"
                data-carousel-item
              >
                <Image
                  src={beach5}
                  width={500}
                  height={500}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div
                className="hidden duration-200 ease-linear"
                data-carousel-item
              >
                <Image
                  src={beach4}
                  width={500}
                  height={500}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>

              <div
                className="hidden duration-200 ease-linear"
                data-carousel-item
              >
                <Image
                  src={beach6}
                  width={500}
                  height={500}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
            </div>

            <button
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        style={{ width: "90%", margin: "auto" }}
        className="text-md text-blackn text-justify pb-12 "
      >
        Known for the magnificent beauty of coral reefs and biodiversity, the
        popularity of Neil Island increases from time to time as it is a part of
        the Andaman and Nicobar archipelago, in the Bay of Bengal. Sandy beaches
        with tropical woodlands make the attributes of Neil Island Andaman very
        intriguing for tourists worldwide. The island is only 18.9 square
        kilometers of the area, which is a flat landscape and a small area
        filled with lucid charm and a laid-back vibe. Various services for the
        tourists and the residents have been developed here in the last few
        years as new Neil Island hotels and restaurants are developed here while
        providing services of ferry and helicopters for the travelers.
      </div>

      <h2 className="text-center font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white py-4 text-xl md:text-4xl">
        Overview of Neil Island
      </h2>
      <div className=" w-[97%] md:w-[95%]  grid grid-cols-1 md:grid-cols-1 pt-4 m-auto gap-10 pb-12">
        <div className="bg-gradient-to-r from-amber-500 to-pink-500 px-2 md:px-8  py-4 rounded-md ">
          <h3 className="text-[#ffffff] text-lg md:text-2xl   font-bold text-center ">
            Location and Geography
          </h3>
          <p className="text-gray-100 rounded-md border-t mt-2 pt-2 px-2 text-justify border-gray-100 text-md:text-lg font-semibold ">
            The island belongs to the region of Andaman and Nicobar archipelago
            which is the southern part of the Bay of Bengal. Neil Island is
            located in the range of 40 kilometers northeast of Port Blair which
            is the capital of the Andaman Islands. Many establishments of{" "}
            <span className="text-rose-500 px-1 rounded-lg mx-2  bg-white font-semibold">
              Neil Island Resorts
            </span>{" "}
            have made the attractions of the place more intriguing for tourists.
          </p>
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-violet-600 px-2 md:px-8  py-4 rounded-md shadow-lg ">
          <h3 className="text-[#ffffff] text-lg md:text-2xl   font-bold text-center ">
            Climate and Best Time to Visit
          </h3>
          <p className="text-gray-100 rounded-md border-t mt-2 pt-2 px-2 text-justify border-gray-100 text-md:text-lg font-semibold ">
            The island has two primary seasons, as tropical weather remains for
            most of the year. Dry season approaches in Neil Island during the
            period of November to April as monsoon comes around May and stays
            till October. The temperature reaches 24°C to 32°C in the dry
            season, which makes it appropriate for the tourists while giving a
            pleasant experience to them.
          </p>
        </div>
        <div className="bg-gradient-to-r from-violet-500 to-purple-500 px-2 md:px-8  py-4 rounded-md shadow-lg ">
          <h3 className="text-[#ffffff] text-lg md:text-2xl   font-bold text-center ">
            History and Cultural Significance
          </h3>
          <p className="text-gray-100 rounded-md border-t mt-2 pt-2 px-2 text-justify border-gray-100 text-md:text-lg font-semibold ">
            The island has been a part of the indigenous tribes who were the
            Nicobarese people, giving it individuality in its cultural and
            historical attributes. Their unique way of life and cultural
            traditions have a significant impact on the island as it has made
            various vibrant festivals a part of the place. Traditional dance
            forms and music are another part of the indigenous culture which has
            become a part of the tour attractions in the area. Harvest festivals
            like the Ossuary Feast are a significant part of the culture as it
            is maintained with great enthusiasm.
          </p>
        </div>
      </div>

      <div className="">
        <h2
          style={{
            background: "-webkit-linear-gradient(#5356FF, #891652)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="text-5xl text-center font-black"
        >
          Natural Attractions
        </h2>
        <div className=" bgImage w-[100%] md:w-[100%]  grid grid-cols-1 md:grid-cols-2 pt-4 px-0 md:px-12 m-auto gap-10 pb-12">
          <div className=" bg-[#FFF3C7] px-2 md:px-8  py-4 rounded-md ">
            <h4 className="text-[#b16fee] text-lg md:text-2xl   font-bold ">
              Bharatpur Beach
            </h4>
            <p className="text-gray-700   mt-2 pt-2 px-2 text-justify  text-md:text-lg font-semibold ">
              The western coast of Neil Island presents Bharatpur Beach which is
              famous for its picturesque stretch of golden sand and its crystal
              clear waters. Vibrant-colored coral reefs are a part of the island
              which makes it more attractive for tourists. This beach reflects
              the way of diversity in marine life which makes colorful fish, and
              coral formations with exquisite shapes and colors a huge part of
              it. Swimming, sunbathing along with volleyball and other beach
              games are quite renowned here. Lush green sceneries with coconut
              groves make the beauty of the island other-worldly.
            </p>
          </div>

          <div className="flex items-center"> 
            <Image src={beach0} height={700} width={700} />
          </div>
          <div className="flex items-center"> 
            <Image src={beach1} height={700} width={700} />
          </div>
          <div className="bg-[#FFF3C7] px-2 md:px-8  py-4 rounded-md ">
            <h4 className="text-[#b16fee] text-lg md:text-2xl   font-bold ">
              Sitapur Beach
            </h4>
            <p className="text-gray-700   mt-2 pt-2 px-2 text-justify  text-md:text-lg font-semibold ">
              Among the various areas, this beach is situated on the eastern
              coast which makes it the ideal spot for meditation and relaxation.
              Lush green vegetation and turquoise sea are the prime attractions
              in this region as they make the experience of travelers more
              exquisite. This part is quite renowned for its beauty and calm
              greenery, making it one of the desired places to visit on Neil
              Island.
            </p>
          </div>
          <div className="bg-[#FFF3C7] px-2 md:px-8  py-4 rounded-md ">
            <h4 className="text-[#b16fee] text-lg md:text-2xl   font-bold ">
              Laxmanpur Beach
            </h4>
            <p className="text-gray-700   mt-2 pt-2 px-2 text-justify  text-md:text-lg font-semibold ">
              This beach is the most loved beach for its super maintenance
              attributes which give a vast area of sea shells to the tourists.
              Unique formations of limestones are available at this particular
              beach which gives a charming view for photography enthusiasts. A
              beautiful rocky shoreline with a backdrop of changing hues makes
              it very attainable and relaxing for travelers.
            </p>
          </div>
          <div className="flex items-center"> 
            <Image src={beach4} height={700} width={700} />
          </div>
        </div>
      </div>

      <h2 className="text-center font-bold bg-gradient-to-r from-amber-500 to-purple-500 text-white py-4 text-2xl md:text-4xl">
        Coral Reefs and Snorkeling
      </h2>
      <div className=" w-[97%] md:w-[95%]  grid grid-cols-1 md:grid-cols-1 pt-4 m-auto gap-10 pb-12">
        <div className="bg-gradient-to-r from-purple-500 to-teal-500  px-2 md:px-8  py-4 rounded-md ">
          <h4 className="text-[#ffffff] text-lg md:text-2xl   font-bold text-center ">
            Neil Island Marine Park
          </h4>
          <p className="text-gray-100 rounded-md border-t mt-2 pt-2 px-2 text-justify  text-md border-gray-100 md:text-lg  ">
            Coral reefs, seagrass meadows along with diverse marine life are
            surrounded in this place as this park is dedicated to the preserving
            of a rich marine ecosystem. This park provides snorkeling tours to
            tourists with professional guidance as the underwater experience of
            the coral gardens makes it more desirable. Colorful fish and sea
            turtles along with other fascinating marine species are visible
            underwater.
          </p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-teal-500  px-2 md:px-8  py-4 rounded-md ">
          <h4 className="text-[#ffffff] text-lg md:text-2xl   font-bold text-center ">
            Howrah Bridge
          </h4>
          <p className="text-gray-100 rounded-md border-t mt-2 pt-2 px-2 text-justify  text-md border-gray-100 md:text-lg   ">
            Named after the renowned bridge in Kolkata, the Howrah Bridge is a
            natural formation of rock that emerges during the period of low tide
            at the Sitapur beach. This structure is created with stones and
            underwater rocks, giving a chance to snorkeling enthusiasts to have
            an unforgettable experience with this natural wonder.
          </p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-teal-500  px-2 md:px-8  py-4 rounded-md ">
          <h4 className="text-[#ffffff] text-lg md:text-2xl   font-bold text-center ">
            Snorkeling Tips and Safety Measures
          </h4>
          <p className="text-gray-100 rounded-md border-t mt-2 pt-2 px-2 text-justify  text-md border-gray-100 md:text-lg  ">
            For the experience of snorkeling, the divers need to follow through
            the safety protocols and guidelines to have a remarkable and
            memorable experience. Tips for wearing proper safety gear are given
            to snorkelers as masks, snorkel, and fins are recommended for a
            better experience. Rash guards or wetsuits are also advised to the
            snorkelers for the prevention of potential jellyfish stings or
            protection from high sunlight. Proper techniques of snorkeling are
            also aimed at the tourists for better safety and prevention of
            accidents.
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-teal-500  px-2 md:px-8  py-4 rounded-md ">
          <h4 className="text-[#ffffff] text-lg md:text-2xl   font-bold text-center ">
            Neil Island 4 Point Tour
          </h4>
          <p className="text-gray-100 rounded-md border-t mt-2 pt-2 px-2 text-justify  text-md border-gray-100 md:text-lg   ">
            The tour of the 4 points in Neil Island depicts the visit to the
            three beaches of the place, Bharatpur Beach, Sitapur Beach, and
            Laxanpur. This tour is known to be the 3-point tour of Neil Island
            in the locale. This particular tour is made for tourists with a
            single-day plan for Neil Island while covering the most exquisite
            attractions on these beaches. Touring the best beach on Neil Island
            becomes more thrilling with the 4-point trip while exploring the
            thrilling beaches as it gives the taste of all the renowned beaches
            around.
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-teal-500  px-2 md:px-8  py-4 rounded-md ">
          <h4 className="text-[#ffffff] text-lg md:text-2xl   font-bold text-center ">
            Trekking
          </h4>
          <p className="text-gray-100 rounded-md border-t mt-2 pt-2 px-2 text-justify  text-md border-gray-100 md:text-lg   ">
            Tropical forests are covered throughout the entire Neil Island,
            allowing you to explore the greenery by trekking. Hiking through the
            quaint villages of the island, and exploring jungles with a
            breathtaking view of the beaches, makes the trip to the island more
            exciting and thrilling.
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-teal-500  px-2 md:px-8  py-4 rounded-md ">
          <h4 className="text-[#ffffff] text-lg md:text-2xl   font-bold text-center ">
            Lazy Beach Time
          </h4>
          <p className="text-gray-100 rounded-md border-t mt-2 pt-2 px-2 text-justify  text-md border-gray-100 md:text-lg  ">
            The feeling of relaxation is the most intriguing part of Neil Island
            since it has a very laid-back attitude towards the lifestyle.
            Spending time reading, sunbathing, or simply relaxing or lying on
            the beach becomes a further fascinating aspect, making the things to
            do on Neil Island extremely relaxing with the slow pace of life on
            the island.
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-teal-500 px-2 md:px-8  py-4 rounded-md ">
          <h4 className="text-[#ffffff] text-lg md:text-2xl   font-bold text-center ">
            Explore Neil on 2 Wheelers
          </h4>
          <p className="text-gray-100 rounded-md border-t mt-2 pt-2 px-2 text-justify  text-md border-gray-100 md:text-lg  ">
            Bikes and scooters are available on the island as it is very easy to
            ride in a navigation-friendly locality. Rentals of mopeds are
            available, as many restaurants and resorts provide their services of
            2-wheelers for rent.
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-teal-500  px-2 md:px-8  py-4 rounded-md ">
          <h4 className="text-[#ffffff] text-lg md:text-2xl   font-bold text-center ">
            Snorkeling Tips and Safety Measures
          </h4>
          <p className="text-gray-100 rounded-md border-t mt-2 pt-2 px-2 text-justify  text-md  border-gray-100  md:text-lg  ">
            For the experience of snorkeling, the divers need to follow through
            the safety protocols and guidelines to have a remarkable and
            memorable experience. Tips for wearing proper safety gear are given
            to snorkelers as masks, snorkel, and fins are recommended for a
            better experience. Rash guards or wetsuits are also advised to the
            snorkelers for the prevention of potential jellyfish stings or
            protection from high sunlight. Proper techniques of snorkeling are
            also aimed at the tourists for better safety and prevention of
            accidents.
          </p>
        </div>
      </div>

      <section className="bg-gradient-to-r from-green-500   to-blue-500 shadow text-black  py-8 px-4 md:px-20 m-auto">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-4 text-white">
          Mangrove Forests and Biodiversity
        </h2>
        {/* Ramnagar Beach */}


        
        <div className="mb-8 p-1 md:p-4 bg-white rounded-md">
          <h3 className="text-xl md:text-2xl font-bold mb-2">Ramnagar Beach</h3>
          <p>
            This particular beach is mostly renowned for its mangrove forests,
            natural habitat, and bird species. Rich biodiversity and mangrove
            forests make this beach the epitome of natural elements, helping to
            maintain ecological balance and acting as a natural barrier against
            coastal erosion.
          </p>
        </div>
        
        <div className="flex justify-center items-center m-4"> 
            <Image src={beach2} height={700} width={700} />
          </div>
        <div className="mb-8 p-1 md:p-4 bg-white rounded-md">
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            Neil Island Forest Reserve
          </h3>
          <p>
            The reserve of exotic flora and fauna on this part of the island
            gives you the chance to explore endemic and endangered species like
            the famous Andaman serpent eagle, the Nicobar megapode, alongside
            the Nicobar scrubfowl. Witness rich biodiversity with towering
            trees, rare orchids, and colorful butterflies.
          </p>
          <p>
            Sunset Points and Formations of Natural Rock (H3) Natural Bridge
            (H4) The geological formation of the bridges made with stone and
            rocks gives this island an exotic feel which makes it more exciting
            for travelers. Vibrant hues with mesmerizing rock formations make
            the beaches more exciting for photography enthusiasts. Coral Garden
            Resort Neil Island reflects these attractions while giving you the
            chance to explore the natural beauty and a luxurious stay. Sunset at
            Laxmanpur Beach (H4) A relaxing view of the sunset is available at
            this beach which gives the chance to witness enchanting sunsets.
            Beautiful sandy beaches make this tour very exciting and
            picturesque.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-r  m-auto from-lime-500 to-orange-500 text-black  py-8 px-4 md:px-20 mt-4 md:mt-12">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-4">
          Sunset Points and Formations of Natural Rock
        </h2>
        {/* Ramnagar Beach */}
        <div className="bg-[#ffffff6c] px-1 md:px-4 rounded-md">
          <div className="mb-8 ">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Natural Bridge
            </h3>
            <p>
              The geological formation of the bridges made with stone and rocks
              gives this island an exotic feel which makes it more exciting for
              travelers. Vibrant hues with mesmerizing rock formations make the
              beaches more exciting for photography enthusiasts. Coral Garden
              Resort Neil Island reflects these attractions while giving you the
              chance to explore the natural beauty and a luxurious stay.
            </p>
          </div>
          {/* Neil Island Forest Reserve */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Sunset at Laxmanpur Beach{" "}
            </h3>
            <p>
              A relaxing view of the sunset is available at this beach which
              gives the chance to witness enchanting sunsets. Beautiful sandy
              beaches make this tour very exciting and picturesque.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-violet-300 mt-12">
        <div className="flex flex-col items-center w-[90%] m-auto">
          <h1 className="font-sans text-2xl md:text-4xl font-bold text-gray-800 mb-8 text-center mt-8">
            Popular Dive Sites around Neil Island
          </h1>
          <ol className="olcards grid grid-cols-2 md:flex flex-col  items-center gap-4">
            <li style={{ "--cardColor": "#fc374e" }}>
              <div className="content flex">
                <div className="icon">🐠</div>
                <div className="title text-md md:text:lg">The Wall</div>
                <div className="text text-sm md:tex-md">
                  Renowned for its huge vertical drop, the wall is quite
                  intriguing for tourists which makes it exciting for divers.
                  Vibrant coral formations with an abundance of marine life such
                  as angelfish, and parrotfish, along with colorful reef sharks
                  are to be explored underwater.
                </div>
              </div>
            </li>
            <li style={{ "--cardColor": "#36aeb3" }}>
              <div className="content flex">
                <div className="icon">🐢</div>
                <div className="title text-md md:text:lg">
                  Margherita s Mischief
                </div>
                <div className="text text-sm md:tex-md">
                  This site diving features a stunning view of a coral garden
                  which gives more thrill to the divers. Marine species like sea
                  turtles, lionfish, and moray eels give more charm to the
                  diving experience.
                </div>
              </div>
            </li>
            <li style={{ "--cardColor": "#162d59" }}>
              <div className="content flex">
                <div className="icon">🐟</div>
                <div className="title text-md md:text:lg">Junction</div>
                <div className="text text-sm md:tex-md">
                  Depicting the place s name is a point of collaboration for two
                  currents, which gives an extra thrilling experience to the
                  divers. As the dynamic in the water changes with the currents,
                  various species of fish, large schools of fishes along with
                  snappers and trevallies become visible.
                </div>
              </div>
            </li>
            <li style={{ "--cardColor": "#f15f0e" }}>
              <div className="content flex">
                <div className="icon">🐠</div>
                <div className="title text-md md:text:lg">Bus Stop</div>
                <div className="text text-sm md:tex-md">
                  This place is near Neil Island which is renowned for scuba
                  diving and snorkeling. Various species of colorful fish,
                  teeming coral reefs, clown fish, surgeon fish, and butterfly
                  fish are available. Moreover, the attractions of the unmatched
                  beauty of this place make it one of the biggest attractions
                  among the Neil Island tourist places.
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-semibold text-center mb-8">
            Activities on Neil Island
          </h1>
          <div className=" rounded-lg grid grid-cols-1  md:grid-cols-2 gap-8 text-white">
            
            
            <div className="bg-[#ffffffb4] cardbga bg-cover bg-center bg-no-repeat bg-blur-md  rounded-lg">
  <div className="bg-[#000000b6] h-[100%] p-2 md:p-4">
  <h3 className="text-xl font-semibold  mb-4">
                Fishing and Angling
              </h3>
              <p className="text-lg  leading-relaxed">
                Andaman gives a chance to experience the best hotels on Neil
                Island which helps the tour to become more exciting for the
                enthusiasts of fishing and angling. Neil Island is very reliable
                for its natural divinity, which gives a relaxing experience to
                enthusiasts. The approach of fishing with angling capacities has
                made this place more adventurous for fishing enthusiasts. Marine
                species of various fishes, barracuda, red snapper, and grouper
                give an exotic charm to the tour to Neil Island Andaman and
                Nicobar Islands.
              </p>
  </div>
               {/* <Image src={beach3} height={400} width={700}/> */}
          
            </div>
            <div className="bg-[#ffffffb4] cardbgb bg-cover bg-center bg-no-repeat bg-blur-md rounded-lg">
  <div className="bg-[#000000b6] h-[100%] p-2 md:p-4">
       <h3 className="text-xl font-semibold  mb-4">
                Sea Walking and Glass Bottom Boat Rides
              </h3>
              <p className="text-lg  leading-relaxed">
                Various services for sea-walking are another tremendous
                experience that is offered in the Andaman region. This makes the
                attributes of scuba diving more comfortable for travelers who
                want the underwater experience without the diving part. As the
                routes of Neil Island to Port Blair explore the surroundings
                with better prominence for the extensive comfort of travelers,
                it helps to find reliable stations for sea walking. The
                attributes of glass bottom boat rides make the experiences of
                Neil Island excruciatingly mesmerizing.    Exploring marine beauty
                with boat rides on boats with glass bottoms and transparent
                sections in the hull makes the experience of underwater
                experience very exciting. This allows the visitors to have an
                experience of the underwater beauty while not getting wet. Neil
                Island beaches give a thrilling experience to travelers while
                making them more intrigued by these services.
              </p>
              {/* <Image src={beach5} height={400} width={700}/> */}
         
            </div>
         
          </div>
          </div>
        </div>
      </section>

      <section className=" text-white py-8 px-4 md:px-8 mt-4">
        <h2 className="text-center text-2xl  text-[#e42121] md:text-4xl font-bold mb-4">
          Important aspects of Neil Island
        </h2>
        {/* Natural Bridge */}
        <div className="w-[100%] m-auto grid grid-col-1 md:grid-cols-4 gap-4 ">
          <div className="mb-4 bg-[#e42121] p-2 md:p-4 rounded-md hover:border-[#e42121] hover:border-[3px] hover:text-[#e42121] hover:transition-all hover:duration-[0.5s] hover:bg-white">
            <h3 className="text-lg md:text-xl font-bold mb-2">Weather</h3>
            <p className="text-sm md:text-md">
              In the region of Andaman and Nicobar, three seasons are primarily
              observed summer, winter, and monsoon. Tropical weather for the
              beaches is experienced in these regions which makes the Neil
              Island weather very effective in different months of the year.
            </p>
          </div>
          {/* Sunset at Laxmanpur Beach */}
          <div className="mb-4 bg-[#e42121]  p-2 md:p-4 rounded-md hover:border-[#e42121] hover:border-[3px] hover:text-[#e42121] hover:transition-all hover:duration-[0.5s] hover:bg-white">
            <h3 className="text-lg md:text-xl font-bold mb-2">Currency</h3>
            <p className="text-sm md:text-md">
              On this particular island, only two ATMs are available while
              having the currency of Indian Rupee in the Andaman and Nicobar
              archipelago.
            </p>
          </div>
          <div className="mb-4 bg-[#e42121] p-2 md:p-4 rounded-md hover:border-[#e42121] hover:border-[3px] hover:text-[#e42121] hover:transition-all hover:duration-[0.5s] hover:bg-white">
            <h3 className="text-lg md:text-xl font-bold mb-2">
              Communication and Internet
            </h3>
            <p className="text-sm md:text-md">
              Connection of BSNL is mostly available on the island for
              communication, yet reliable broadband connections and network
              services are very unreliable on Neil Island. This makes the
              attributes of Neil Island Hotel booking based on telephonic
              communication with the hotels and resorts.
            </p>
          </div>

          {/* Healthcare */}
          <div className="mb-4 bg-[#e42121] p-2 md:p-4 rounded-md hover:border-[#e42121] hover:border-[3px] hover:text-[#e42121] hover:transition-all hover:duration-[0.5s] hover:bg-white">
            <h3 className="text-lg md:text-xl font-bold mb-2">Healthcare</h3>
            <p className="text-sm md:text-md">
              The island has a primary healthcare facility center that provides
              reliable services to the islanders while giving services to the
              law enforcement of Andaman. Places of staying, like the best
              resort in Neil Island become more reliable with their inbuilt
              first-aid services for tourists.
            </p>
          </div>
          <div className="mb-4 bg-[#e42121] p-2 md:p-4 rounded-md hover:border-[#e42121] hover:border-[3px] hover:text-[#e42121] hover:transition-all hover:duration-[0.5s] hover:bg-white">
            <h3 className="text-lg md:text-xl font-bold mb-2">Safety</h3>
            <p className="text-sm md:text-md">
              Andaman and Nicobar police departments are present for any crime
              or legal issues in the islands, making Neil Island s stay more
              systematic and safe. With the support of law enforcement and
              locales, the utility of the Neil Island map increases, giving
              better comfort to global travelers.
            </p>
          </div>

          {/* Supermarkets and Bazaars */}
          <div className="mb-4 bg-[#e42121] p-2 md:p-4 rounded-md hover:border-[#e42121] hover:border-[3px] hover:text-[#e42121] hover:transition-all hover:duration-[0.5s] hover:bg-white">
            <h3 className="text-lg md:text-xl font-bold mb-2">
              Supermarkets and Bazaars
            </h3>
            <p className="text-sm md:text-md">
              Small and systematic, a humble presentation of markets and bazaars
              is to be experienced in Neil Island. Fresh markets of fruits and
              vegetables are very reliable here, exporting its resources to even
              Port Blair. As the Port Blair to Neil Island distance is quite
              reachable, it gives the experience of fruit and vegetable
              exporting more growth in profits while giving a steady field of
              work.
            </p>
          </div>
          <div className="mb-4 bg-[#e42121] p-2 md:p-4 rounded-md hover:border-[#e42121] hover:border-[3px] hover:text-[#e42121] hover:transition-all hover:duration-[0.5s] hover:bg-white">
            <h3 className="text-lg md:text-xl font-bold mb-2">Language</h3>
            <p className="text-sm md:text-md">
              The Hindi language is the most spoken here as the locales speak
              one of the native languages in India, making Bengali another
              speakable language here. English is less understood in Neil Island
              yet not entirely unspeakable.
            </p>
          </div>

          {/* Airport and Port Facilities */}
          <div className="mb-4 bg-[#e42121] p-2 md:p-4 rounded-md hover:border-[#e42121] hover:border-[3px] hover:text-[#e42121] hover:transition-all hover:duration-[0.5s] hover:bg-white">
            <h3 className="text-lg md:text-xl font-bold mb-2">
              Airport and Port Facilities
            </h3>
            <p className="text-sm md:text-md">
              The Veer Savarkar Airport situated in Port Blair is the closest to
              Neil Island as the services of the jetty are also available from
              Bharatpur Beach.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-yellow-400 w-[100%] pb-14">
        <div className="lists flex flex-col text-center justify-center w-[90%]  m-auto bg-yellow-400">
          <h3
            className="text-2xl md:text-4xl drop-shadow-xl font-bold text-white pt-4 pb-4"
            style={{
              background: "-webkit-linear-gradient(teal, black)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Guidance for the visitors
          </h3>
          <ul className="text-left rounded-lg text-md text-lg ">
            <li className="py-2 md:py-4">
              Finding public transport can become difficult after 9:00 PM on
              Neil Island due to less locality.{" "}
            </li>
            <li className="py-2 md:py-4">
              The weather of the locality has a significant impact on its
              traveling attributes.{" "}
            </li>
            <li className="py-2 md:py-4">
              Mosquitos are a part of the island, which requires you to carry
              repellents all along.{" "}
            </li>
            <li className="py-2 md:py-4">
              The best restaurants in Neil Island provide authentic local
              cuisine to the tourists which can be exotic and delicious all at
              once.{" "}
            </li>
            <li className="py-2 md:py-4">
              The water activities on Neil Island give a thrilling yet calming
              experience to travelers which is not available in any part of
              India.{" "}
            </li>
            <li className="py-2 md:py-4">
              Petrol stations get closed after sunset, making it difficult for
              two-wheeler rides without petrol backup after dark.{" "}
            </li>
            <li className="py-2 md:py-4">
              Bookings of tickets for stay need to be conducted before for the
              avoidance of getting stranded.{" "}
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{ width: "100%" }}
        className="    text-purple-200 text-center  bg-[#4E1D6D] flex flex-col items-center py-24"
      >
        <Image
          src="https://coralgardenresort.in/wp-content/uploads/2024/01/coral-gardan-logo.png"
          width={250}
          height={350}
        />
        <p style={{ width: "60%" }} className="text-normal  font-light">
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
      <div
        style={{ width: "100%" }}
        className=" text-purple-200 text-center  bg-[#4A276B] flex flex-col items-center py-8"
      >
        <p style={{ width: "60%" }} className="text-xs leading-10">
          © Copyright 2024 Coral Garden Resort.
        </p>
        <p className="text-xs">Designed by: OMM DIGITAL SOLUTION PVT. LTD</p>
      </div>
    </div>
  );
};
export default page;
