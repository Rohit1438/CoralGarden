"use client";

import React from "react";
import "flowbite";
import { Navbar } from "../components/Navbar";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { Chat } from "../components/Chat";
import beach0 from "../img/beach/fetchpik.com-shutter-5lqqu0matl_720.jpg";
import beach1 from "../img/beach/fetchpik.com-shutter-eep08mqnmh_720.jpg";
import beach2 from "../img/beach/fetchpik.com-shutter-ibimkjqfsy_720.jpg";
import beach3 from "../img/beach/fetchpik.com-shutter-ojdtpcuy0p_720.jpg";
import beach4 from "../img/beach/fetchpik.com-shutter-pznsitouf2_720.jpg";
import beach5 from "../img/beach/fetchpik.com-shutter-s2xciln5nu_720.jpg";
import beach6 from "../img/beach/fetchpik.com-shutter-xl80jbtxbs_720.jpg";
const page = () => {
  return (
    <div className="">
      <Navbar />
      <Chat />
      <div className="bg-rose-100 pb-20 mb-8">
        <div className="text-center pt-8 pb-12">
          <h1 className="text-purple-700 text-2xl font-semibold">
            ABOUT ANDAMAN
          </h1>
          <p className="text-rose-500 text-center font-semibold">
            Where Nature Meets Paradise
          </p>

          <div
            style={{ width: "70%", margin: "auto" }}
            className="grid md:grid-cols-2 pt-4 gap-12 "
          ></div>

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
            <div
              className="relative h-56 overflow-hidden rounded-lg md:h-96"
              style={{}}
            >
              <div
                className="hidden duration-200 ease-linear "
                data-carousel-item
              >
                <Image
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/andaman08.jpg"
                  width={800}
                  height={800}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div
                className="hidden duration-200 ease-linear"
                data-carousel-item
              >
                <Image
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/andaman09.jpg"
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
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/andaman10.jpg"
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
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/andaman01.jpg"
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
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/andaman02.jpg"
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
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/andaman03.jpg"
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
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/andaman04.jpg"
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
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/andaman05.jpg"
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
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/andaman06.jpg"
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
      {/* <div
        style={{ width: "90%", margin: "auto" }}
        className="text-md text-blackn text-justify pb-12 "
      >
        The Andaman and Nicobar are a group of picturesque Islands, big and
        small, inhabited and uninhabited, a total of 572 islands, islets and
        rocks lying in the South Eastern part of Bay of Bengal. The Andaman and
        Nicobar Islands have great maritime importance. During the British
        period political leaders considered dangerous to the interests of the
        Raj and the other dreaded criminals were deported from mainland to the
        Cellular Jail – The Indian Bastille, situated on the sea coast of
        Atlanta Point in the North-Eastern part of Port Blair. Thus these
        Islands were infamously known as the ‘Black water Prison’ or ‘Kala
        Pani’. The Andaman offers many opportunities for water sports including
        Scuba Diving, Snorkeling, and Swimming etc… You can laze on the tranquil
        beaches; drink a refreshing draught of fresh coconut milk and watches
        the water, birds soar across the azure sky. Feel completely at peace on
        tours to the Andaman’s. You can go Snorkeling or travel on boat cruises
        to witness the amazing marine life of Andaman’s. If you’re lucky you can
        see Dolphin’s cruising by the side of your boat and Dugong or Sea cow, a
        large marine mammal, which feeds on seaweeds near the cost. A visit to
        the pristine beaches and lagoons with profile of an Andaman and Nicobar
        Islands tour is sure to be an unforgettable journey, come and enjoy the
        Enchanting, Marvelous, Eye Catching, World of Flora and Fauna “The
        Island of Dreams”.
      </div> */}

      <div className=" bg-gradient-to-r from-yellow-400 to-cyan-700 w-[100%] pb-14">
        <div className="lists flex flex-col text-center justify-center w-[90%] m-auto  bg-gradient-to-r from-yellow-400 to-cyan-700">
          <h3
            className="text-2xl md:text-4xl drop-shadow-xl font-bold text-white pt-4 pb-4"
            style={{
              background: "-webkit-linear-gradient(teal, black)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "white",
            }}
          >
            Highlights
          </h3>
          <ul className="text-left rounded-lg text-md text-lg font-semibold">
            <li className="py-2 md:py-4">
              Area of Andaman and Nicobar: 8,249 square kilometers.
            </li>
            <li className="py-2 md:py-4">
              Location: Latitude -6° to 14°North, Longitude – 92° to 94°.
            </li>
            <li className="py-2 md:py-4">
              Airports: Veer Savarkar International Airport, Port Blair
            </li>
            <li className="py-2 md:py-4">Administrative capital: Port Blair</li>
            <li className="py-2 md:py-4">
              Language: Major languages – Hindi, Bangla, Tamil, Telugu,
              Malayalam, and Nicobarese
            </li>
            <li className="py-2 md:py-4">
              Highest peak: Saddle Peak – 732 meters
            </li>
            <li className="py-2 md:py-4">
              Climate: Temperature ranges from 23° (minimum) to 31° (maximum).
            </li>
            <li className="py-2 md:py-4">Humidity: 70-90%</li>
            <li className="py-2 md:py-4">
              Tribes: Onge, Jarawa, Andamanese, and Sentinelese of Negroid
              descent; Shompen and Nicobarese of Mongoloid descent.
            </li>
            <li className="py-2 md:py-4">
              Forest Area: 92% protected forest; 86% reserve forest.
            </li>
            <li className="py-2 md:py-4">Currency: Indian Rupees</li>
          </ul>
        </div>
      </div>

      <h2 className="text-center font-bold bg-gradient-to-r from-[#D74B76] to-[#8B93FF] text-white mt-12 py-4 text-xl md:text-4xl">
        Overview of the Andaman and Nicobar Archipelago
      </h2>
      <div className=" w-[97%] md:w-[95%]  grid grid-cols-1 md:grid-cols-1 pt-4 m-auto gap-10 pb-12">
        <div className="bg-gradient-to-r from-green-500 to-purple-500 px-2 md:px-8  py-4 rounded-md ">
          <p className="text-gray-100 rounded-md  mt-2 pt-2 px-2 text-justify  text-md:text-lg font-semibold ">
            The islands of Andaman and Nicobar are situated on the east side of
            the Indian mainland of the Bay of Bengal. A group of 836 islands
            with picturesque beauty is the most attractive attribute of the
            islands as it is covered in dense rain forests with extensive growth
            of flora and fauna. Of the total 550 islands there, only 28 of them
            are inhabited. The Ten Degree Channel with a width of 150 kilometers
            separates the two groups of islands.
          </p>
          <p className="text-gray-100 rounded-md mt-2 pt-2 px-2 text-justify text-md:text-lg font-semibold">
            As the island is filled with wood pigeons, Andaman padauk, dugong,
            Andaman, and Nicobar Islands have declared 270 different species and
            subspecies in the island area. 96 wildlife sanctuaries are made
            there, with 9 national parks and 1 biosphere reserve. As both the
            southwest and northeast monsoons are a part of the island, natural
            beauty with other elements has overflown in Andaman.
          </p>
        </div>
        <div className="bg-gradient-to-r from-rose-400 to-rose-600 px-2 md:px-8  py-4 rounded-md shadow-lg ">
          <h2 className="text-[#ffffff] text-xl md:text-4xl   font-bold text-center ">
            Locations
          </h2>
          <h3 className="text-[#ffffff] text-lg md:text-2xl   font-bold ">
            Port Blair
          </h3>
          <p className="text-gray-100 rounded-md mt-2 pt-2 px-2 text-justify border-gray-100 text-md:text-lg font-semibold ">
            The island has many small villages, yet Port Blair is the capital
            city of the Andaman and Nicobar Islands. As this belongs to the
            union territory of India, the navigation of the island is based on
            this city. Andaman government and safety measures are designed for
            easy living in the regions while keeping tourists safe. The
            distribution of Andaman and Nicobar food depends on the development
            of transportation management. Here, the Andaman and Nicobar tourist
            places are the main hubs that need a regular food supply. Andaman
            food supply systems also require this support of transportation and
            management of laws for better safety and security.
          </p>
        </div>
        {/* <div className="bg-gradient-to-r from-violet-500 to-purple-500 px-2 md:px-8  py-4 rounded-md shadow-lg ">
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
        </div> */}
      </div>
      <section className="bg-gradient-to-r from-green-500   to-blue-500 shadow text-black  py-8 px-4 md:px-20 m-auto">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-4 text-white">
          Suitable Time to Visit Andaman
        </h2>
        {/* Ramnagar Beach */}

        <div className="mb-8 p-1 md:p-4 bg-white rounded-md">
          <h3 className="text-xl md:text-2xl font-bold mb-2">By Air ✈</h3>
          <p>
            You can reach Andaman with the support of aviation services, which
            requires you to explore the city from the airport. Major airlines
            like Air India, GoAir, IndiGo, Vistara, and Spicejet connect Port
            Blair directly with the urban cities of India. This makes the entire
            approach of the journey for places to visit in Andaman and Nicobar
            more intriguing. The services of the International airport are only
            available in Port Blair, as the Veer Savarar International Airport
            is the main Andaman airport present in current days.
          </p>
        </div>

        <div className="mb-8 p-1 md:p-4 bg-white rounded-md">
          <h3 className="text-xl md:text-2xl font-bold mb-2">By Sea 🚢</h3>
          <p>
            Services of passenger ships are available that operate between
            Chennai, Kolkata, and Visakhapatnam to the port of Port Blair. The
            journey by the sea takes around 60 to 70 hours which also can get
            disrupted by the weather conditions. The Andaman and Nicobar climate
            is a significant factor for the tour plans since the monsoon season
            is not so suitable for tourists due to disruptive weather. The
            tourist ships have different classes such as it includes the
            services of first-class cabins, second-class cabins, and deluxe
            cabins.
          </p>
          <p>
            Sunset Points and Formations of Natural Rock Natural Bridge The
            geological formation of the bridges made with stone and rocks gives
            this island an exotic feel which makes it more exciting for
            travelers. Vibrant hues with mesmerizing rock formations make the
            beaches more exciting for photography enthusiasts. Coral Garden
            Resort Neil Island reflects these attractions while giving you the
            chance to explore the natural beauty and a luxurious stay. Sunset at
            Laxmanpur Beach A relaxing view of the sunset is available at this
            beach which gives the chance to witness enchanting sunsets.
            Beautiful sandy beaches make this tour very exciting and
            picturesque.
          </p>
        </div>
        <div className="bg-gray-700 rounded-md">
          <p className="text-yellow-200 p-4 font-semibold ">
            ⭐ As the system of pre-booking is available, it is recommended to
            follow proper planning of the dates of your tour for confirmed
            tickets during the peak seasons.
          </p>
        </div>
      </section>

      <section className="bg-yellow-100">
        <div className="container mx-auto px-4 py-8 ">
          <h2 className="text-3xl font-bold mb-4">Cultural Significance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="md:col-span-1">
              <p className="text-lg mb-4">
                Indigenous tribes in the Andaman region are another aspect that
                gets to be explored while visiting the islands. Inhabited for
                almost 60,000 years by the tribal people the islands are more
                interesting with their cultural resources. The tribes are
                differentiated by their features and physical attributes, as
                there are Negrito tribes along with the Mongoloid tribes. The
                tribe with African ancestry identifies the Onge, Jarawa, and
                Sentinelese tribes which are believed to be the oldest habitants
                of the islands. The other tribes have migrated from the
                Southeast regions of Asia, which indicates the Nicobarese and
                Shompen tribes. As the culture of Andaman and Nicobar Islands is
                inspired by both types of cultures, it has become another aspect
                of attraction for tourists with cultural curiosity.
              </p>
              <p className="text-lg">
                Traditional attributes of the tribes are based on
                hunter-gatherer instincts, as it was the primary aspect of
                living and surviving for the tribal people in their early days.
                Hunting and gathering have made the languages of the tribal
                people very distinctive which makes a significant part of the
                cultural attributes of the people. The Andaman and Nicobar
                Islands&apos; language is quite influenced by the tribal languages
                which are mostly unwritten and have not been explored or studied
                for any further understanding. Andaman and Nicobar Islands&apos;
                population has influenced its very own traditions along with
                cultural practices, intricate body arts, and music forms.
              </p>
            </div>
            <div className="md:col-span-1  rounded-md">
              <p className="text-lg mb-4">
                The Andaman and Nicobar culture is influenced by the tribal
                people, as various steps have been taken by the Indian
                government for the development of their well-being and daily
                lives in the islands. Encroachment of the lands by outsiders,
                deadly disease outbreaks, and attempts of forced assimilation;
                have made their lives quite difficult there in recent years. The
                conditions of the islanders remain uncertain despite the support
                and safety protocols of the Indian government.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gray-100 py-12 bg-purple-200 text-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center ">
              Climate and Geography
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 bg-gray-700 ">
                <p className="text-lg mb-4">
                  The weather of Andaman and Nicobar Islands Beaches is tropical
                  since it has both the Southwest monsoon and Northeast monsoon
                  at different times of the year. The southwest monsoon enters
                  the islands near the end of May, while the northeast monsoon
                  comes around during November. As the attributes of the climate
                  of the Andaman and Nicobar Islands are quite impactful on the
                  growth of tourism, it is recommended to be aware of the place
                  and its climate differences before planning a trip.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 bg-gray-700 ">
                <p className="text-lg mb-4">
                  For tourists coming from the excessive heat and extreme chilly
                  weather of North India; the time of May, June, July, or
                  December, January is the perfect duration. The time between
                  May to December is the blooming season in the Andaman Islands.
                  Lush green forests with soothing tropical weather make Andaman
                  and Nicobar places to visit during these months for the best
                  experience. Tourists with a keen on diving can visit the place
                  from December to April since it is the perfect time for
                  exploring the sea. Bird watching is another attraction in the
                  regions of the beaches, sincere the time of winter is the most
                  appropriate time for bird watchers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section>
        <div className="bg-gray-100 py-12 bg-rose-200 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-700 ">
              Tribes of the Andaman and Nicobar Archipelago
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg shadow-md p-6 bg-gray-700 ">
                <h3 className="font-semibold">Composition of Population</h3>
                <p className="text-lg mb-4">
                  An approximation of two dozen islands in Andaman have the
                  inhabitants of human settlements while making it only 12 of
                  the islands in Nicobar that are inhabited. Most spoken
                  languages in these regions are Hindi, and Bengali, along with
                  Tamil, Telugu, and Malayalam. The Andamanese language and its
                  dialects have been a part of the Andaman and Nicobar
                  population which makes their communication with the locals
                  quite difficult to understand for the outside people.
                </p>
                <p className="text-lg mb-4">
                  Mostly two-thirds of the islands are inspired by the Hindu
                  culture, although a minor community of Muslims is a part of
                  the islands, Nicobarese culture along with local religions,
                  and Christianity are present in the islands.
                </p>
              </div>
              <div className="rounded-lg shadow-md p-6 bg-gray-700">
                <h3 className="font-semibold">Demographic trends and settlement patterns</h3>
                <p className="text-lg mb-4">
                  Extension of the population of the Andaman and Nicobar Islands
                  people have slowed down by the 1980s mostly, which has made
                  the small villages populated with very minimal families. Port
                  Blair is the primary town in Andaman which contains a fourth
                  of the population as the remaining people are spread across
                  the 500 small villages in surroundings. The supply of food in
                  the Andaman and Nicobar Islands makes the experiences of the
                  tribal people alongside the tourists very limited which makes
                  these tours more exotic and adventurous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>







      <section className=" text-white py-8 px-4 md:px-8 mt-4">
        <h2 className="text-center text-2xl  text-[#2155e4] md:text-4xl font-bold mb-4">
          Economy in the Andaman and Nicobar
        </h2>
        {/* Natural Bridge */}
        <div className="w-[100%] m-auto grid grid-col-1 md:grid-cols-4 gap-4 ">
          <div className="mb-4 bg-[#253694] p-2 md:p-4 rounded-md hover:border-[#253694] hover:border-[3px] hover:text-[#253694] hover:transition-all hover:duration-[0.5s] hover:bg-white">
            <h3 className="text-lg md:text-xl font-bold mb-2">
              Agriculture, forestry, and fishing
            </h3>
            <p className="text-sm md:text-md">
              Agriculture is the primary aspect of living in the islands of
              Andaman and Nicobar as it is filled with natural resources which
              are ideal for crops. Various crops like rice, coconuts, and betel
              also known as areca nuts are harvested here along with fruits and
              spices like turmeric. Trees of rubber, oil palms, and cashews are
              a part of the vegetation as well since these trees provide
              materials that bring a better economy to the islands. As the
              Andaman weather is mostly sunny and tropical, it helps to grow
              forests and provide an element of living to the natural habitats
              directly from the sea.
            </p>
          </div>
          {/* Sunset at Laxmanpur Beach */}
          <div className="mb-4 bg-[#cf4ba3]  p-2 md:p-4 rounded-md hover:border-[#cf4ba3] hover:border-[3px] hover:text-[#cf4ba3] hover:transition-all hover:duration-[0.5s] hover:bg-white">
            <h3 className="text-lg md:text-xl font-bold mb-2">Manufacturing</h3>
            <p className="text-sm md:text-md">
              The construction of wood products has become the most reliable
              trend that sustains the requirements of economic growth. The
              construction of wooden furniture, and accessories, provides
              various chances for economic development increases. Materials for
              clothing along with the management of furniture have biome further
              renowned in the market. Processed food materials are also sold by
              the islanders which gives them another chance of economic growth.
              These materials are utilized in the Andaman and Nicobar hotels,
              which provide excellent services to tourists with a home-like
              atmosphere. These products are also attributes during the Andaman
              and Nicobar festivals, giving a more extravagant feeling to the
              tourists.
            </p>
          </div>
          <div className="mb-4 bg-[#668b2a] p-2 md:p-4 rounded-md hover:border-[#668b2a] hover:border-[3px] hover:text-[#668b2a] hover:transition-all hover:duration-[0.5s] hover:bg-white">
            <h3 className="text-lg md:text-xl font-bold mb-2">Tourism</h3>
            <p className="text-sm md:text-md">
              Attractive attributes of tourism are available here as it
              contribute to the economic growth of the regions. Most of the
              tourists are from the Indian mainland, although various foreign
              tourists come to visit the place due to its historical elements
              that are remnants of the British Empire in India, such as the
              Cellular jail, or the Andaman jail.
            </p>
          </div>

          {/* Healthcare */}
          <div className="mb-4 bg-[#8945d8] p-2 md:p-4 rounded-md hover:border-[#8945d8] hover:border-[3px] hover:text-[#8945d8] hover:transition-all hover:duration-[0.5s] hover:bg-white">
            <h3 className="text-lg md:text-xl font-bold mb-2">
              Transportation
            </h3>
            <p className="text-sm md:text-md">
              Paved roads are mostly established in southern regions of Andaman,
              such as Port Blair and Diglipur are the most reliable ways of
              transportation there. Services of ships and boats are available to
              the small and medium islands of Andaman, which makes the
              experiences and knowledge about Andaman and Nicobar more intricate
              in these regions.
            </p>
          </div>
        </div>
      </section>

      <section className=" text-white py-8 px-4 md:px-8 mt-4">
        <h2 className="text-center text-2xl  text-[#25946f] md:text-4xl font-bold mb-4">
          Government and society
        </h2>
        {/* Natural Bridge */}
        <div className="w-[100%] m-auto grid grid-col-1 md:grid-cols-3 gap-4 ">
          <div className="mb-4 bg-[#25946f] p-2 md:p-4 rounded-md hover:border-[#25946f] hover:border-[3px] hover:text-[#25946f] hover:transition-all hover:duration-[0.5s] hover:bg-white">
            <h3 className="text-lg md:text-xl font-bold mb-2">
              Administrative framework
            </h3>
            <p className="text-sm md:text-md">
              Administrative framework The attributes of the lieutenant Governor
              of the place are the primary aspect of the government constitution
              in the areas. As the Council of Ministers makes these attributes
              more reliable for the law and regulations there, it impacts
              Andaman tourism, alongside the lifestyles of the Andaman and
              Nicobar tribes.
            </p>
          </div>
          {/* Sunset at Laxmanpur Beach */}
          <div className="mb-4 bg-[#25946f] p-2 md:p-4 rounded-md hover:border-[#25946f] hover:border-[3px] hover:text-[#25946f] hover:transition-all hover:duration-[0.5s] hover:bg-white">
            <h3 className="text-lg md:text-xl font-bold mb-2">
              Health and welfare
            </h3>
            <p className="text-sm md:text-md">
              Basic treatments alongside other medicinal facilities are provided
              free of cost to the residents of the Andaman and Nicobar Islands.
              Healthcare centers and primary rural regions are a part of the
              system as well, which makes the experiences of tourists better
              under any circumstances of serious medical issues.
            </p>
          </div>
          <div className="mb-4 bg-[#25946f] p-2 md:p-4 rounded-md hover:border-[#25946f] hover:border-[3px] hover:text-[#25946f] hover:transition-all hover:duration-[0.5s] hover:bg-white">
            <h3 className="text-lg md:text-xl font-bold mb-2">Education</h3>
            <p className="text-sm md:text-md">
              Most of the schools offer primary education to the children
              although there are limited numbers of schools and educational
              institutes that provide better resources of education to the
              residential children. Andaman tribes have a literacy rate quite
              high as four-fifths of the territory people are literate. Other
              institutes for technical training, nursing, and industrial
              training alongside teachers&apos; training courses have become further
              established in the islands.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-500   to-blue-500 shadow text-black  py-8 px-4 md:px-20 m-auto">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-4 text-white">
          Nicobar Group of Islands
        </h2>
        {/* Ramnagar Beach */}

        <div className="mb-8 p-1 md:p-4 bg-white rounded-md">
          <p>
            The influence of the Indian Republic is quite significant in the
            governmental structure of Andaman and Nicobar history. In current
            years, the tribal communities of the islands are under the
            regulations of Traditional Tribal councils. Three panchayats are
            attributes for the islanders while developing their community rules
            based on one panchayat samiti in the Great Nicobar.
          </p>
        </div>

        <div className="mb-8 p-1 md:p-4 bg-white rounded-md">
          <p>
            The attributes of tourism in the islands have become more reliable
            with its natural beauty since the flora and fauna of Andaman and
            Nicobar Islands make the places quite aesthetic. The best time to
            visit Andaman is during its tropical sessions which gives an
            abundance of the flora of Andaman and Nicobar islands, intriguing
            nature enthusiasts to the extreme. Andaman and Nicobar places to
            visit are all related to the beach experiences which makes the
            Andaman beaches more interesting for its tourists. The attributes of
            transportation from Prot Blair make the experience of the tourists
            more relaxing for their journeys as the Andaman Airport name is also
            related to the historic value of the place itself.
          </p>
        </div>
      </section>

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
