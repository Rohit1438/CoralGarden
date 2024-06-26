"use client";

import React from "react";
import "flowbite";
import { Navbar } from "../components/Navbar";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { Chat } from "../components/Chat";
const page = () => {
  return (
    <div className="">
      <Navbar />
      <Chat />
      <div className="bg-rose-100 pb-20 mb-8">
        <div className="text-center pt-8 pb-12">
          <h2 className="text-purple-700 text-2xl font-semibold">
            ABOUT SCUBA DIVING
          </h2>
          <p className="text-rose-500 text-center font-semibold">
            Where Nature Meets Paradise
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
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/scuba08.jpg"
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
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/scuba01.jpg"
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
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/scuba02.jpg"
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
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/scuba07.jpg"
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
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/scuba03.jpg"
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
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/scuba04.jpg"
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
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/scuba05.jpg"
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
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/scuba06.jpg"
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
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/scuba09.jpg"
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
                  src="
        https://coralgardenresort.in/wp-content/uploads/2024/01/scuba10.jpg"
                  width={800}
                  height={800}
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
        The experience of scuba diving is one of the luxuries that requires
        proper planning and arrangements for the tour. Exploring the wild
        underwater gives you an exotic thrill which makes the experience
        extraordinary. Scuba diving in Andaman requires strategic planning of
        your tour since the underwater ecosystem here has one of the most dense
        coral reefs which radiates colors and vibrancy.
      </div>
      <section className="bg-yellow-200">
        <div class="w-[100%] rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <h2 className="text-center text-2xl md:text-3xl font-black mb-4">
              Best Places to Scuba Dive in Andaman
            </h2>

            <div class="flex flex-col md:grid md:grid-cols-2">
              <div>
                <p class="text-gray-700 text-md md:text-lg">
                  Long-stretched coral reefs are surrounded everywhere since
                  several hundred meters wide coral reefs are visible in this
                  part of the ocean. Underwater coastal belts with volcanic lava
                  hills, the beauty of the place enhances, making it one of the
                  most remarkable scuba diving spots. Various places in Andaman
                  and Nicobar provide scuba diving services; the top four places
                  are Havelock Island, North Bay Island, Neil Island, and Port
                  Blair.
                </p>
              </div>
              <div class="mt-4 md:mt-0 md:ml-4">
                <div class="font-bold text-lg mb-2 ">
                  Few factors for better safety and clearer visibility
                  underwater:
                </div>
                <ul class="list-disc pl-5 text-sm md:text-lg">
                  <li>The depth of water</li>
                  <li>Clarity of the water</li>
                  <li>Safety aspects</li>
                  <li>Population of the corals</li>
                  <li>Population of the fish species</li>
                  <li>Water current</li>
                  <li>Weather</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" text-white py-8 px-4 md:px-8 mt-4">
        <h2 className="text-center text-2xl  text-[#e42121] md:text-4xl font-bold mb-4">
          Diving in Havelock Island
        </h2>
        <h3 className="text-center text-2xl  text-[#e42121] md:text-4xl font-bold mb-4">
          Top Places to Dive in Havelock Island
        </h3>
        {/* Natural Bridge */}
        <div className="w-[100%] m-auto grid grid-col-1 md:grid-cols-4 gap-4 ">
          <div className="mb-4 bg-[#e42121] p-2 md:p-4 rounded-md hover:border-[#e42121] hover:border-[3px] hover:text-[#e42121] hover:transition-all hover:duration-[0.5s] hover:bg-white">
            <h3 className="text-lg md:text-xl font-bold mb-2">
              Barracuda City{" "}
            </h3>
            <p className="text-sm md:text-md">
              Long-striped coral belts with radiant fish species, and sea
              turtles are to be spotted here that gives you a dreamy experience
              underwater. This place is quite reliable for newbies in diving as
              it has all the elements to give you a memorable experience from
              diving.
            </p>
          </div>
          {/* Sunset at Laxmanpur Beach */}
          <div className="mb-4 bg-[#e42121]  p-2 md:p-4 rounded-md hover:border-[#e42121] hover:border-[3px] hover:text-[#e42121] hover:transition-all hover:duration-[0.5s] hover:bg-white">
            <h3 className="text-lg md:text-xl font-bold mb-2">
              Seduction Point{" "}
            </h3>
            <p className="text-sm md:text-md">
              This particular point is hilly underwater which gives the rock
              formations better visibility around the place. Hard staghorn
              corals and their inhabitants are to be seen here such as Napoleons
              of unique designs and many more.
            </p>
          </div>
          <div className="mb-4 bg-[#e42121] p-2 md:p-4 rounded-md hover:border-[#e42121] hover:border-[3px] hover:text-[#e42121] hover:transition-all hover:duration-[0.5s] hover:bg-white">
            <h3 className="text-lg md:text-xl font-bold mb-2">Aquarium</h3>
            <p className="text-sm md:text-md">
              This spot is a little offshore which is 3 km distant from Elephant
              Beach as it offers you large groups of colorful fish and fringing
              coral reefs. In this place, the corals are quite hard and the
              water visibility is appropriate for that, making it suitable for
              inexperienced divers.
            </p>
          </div>

          {/* Healthcare */}
          <div className="mb-4 bg-[#e42121] p-2 md:p-4 rounded-md hover:border-[#e42121] hover:border-[3px] hover:text-[#e42121] hover:transition-all hover:duration-[0.5s] hover:bg-white">
            <h3 className="text-lg md:text-xl font-bold mb-2">Turtle Bay </h3>
            <p className="text-sm md:text-md">
              This place offers an abundance of sea turtles, as it has a huge
              coral population and rays, that enhance the beauty of the water
              areas. The diving site is a maximum of 14 meters deep, making it
              appropriate for new divers.
            </p>
          </div>
          <div className="mb-4 bg-[#e42121] p-2 md:p-4 rounded-md hover:border-[#e42121] hover:border-[3px] hover:text-[#e42121] hover:transition-all hover:duration-[0.5s] hover:bg-white">
            <h3 className="text-lg md:text-xl font-bold mb-2">Mac Point</h3>
            <p className="text-sm md:text-md">
              This place requires boats to reach there which has various species
              of fish roaming in small groups along with hard corals. Dugong,
              which is the capital animal of Andaman, generally known as the sea
              cow is quite easily visible here.
            </p>
          </div>

          {/* Supermarkets and Bazaars */}
          <div className="mb-4 bg-[#e42121] p-2 md:p-4 rounded-md hover:border-[#e42121] hover:border-[3px] hover:text-[#e42121] hover:transition-all hover:duration-[0.5s] hover:bg-white">
            <h3 className="text-lg md:text-xl font-bold mb-2">Lighthouse</h3>
            <p className="text-sm md:text-md">
              This place depicts the enormous underwater rock formation which
              drops down to 56 meters and gives a very unique view of
              underwater. Soft corals and abundant marine life make the wall one
              of the most exquisite diving sites in Andaman.
            </p>
          </div>
          <div className="mb-4 bg-[#e42121] p-2 md:p-4 rounded-md hover:border-[#e42121] hover:border-[3px] hover:text-[#e42121] hover:transition-all hover:duration-[0.5s] hover:bg-white">
            <h3 className="text-lg md:text-xl font-bold mb-2">Pilot Reef</h3>
            <p className="text-sm md:text-md">
              Experienced divers are welcomed here as this place is almost 24
              meters deep, filled with hard corals that are inhabited by some
              unique fish species. Leopard fish and whitetip sharks are visible
              here making the sightings more exotic for the divers.
            </p>
          </div>

          {/* Airport and Port Facilities */}
          <div className="mb-4 bg-[#e42121] p-2 md:p-4 rounded-md hover:border-[#e42121] hover:border-[3px] hover:text-[#e42121] hover:transition-all hover:duration-[0.5s] hover:bg-white">
            <h3 className="text-lg md:text-xl font-bold mb-2">
              Minvera Bridge
            </h3>
            <p className="text-sm md:text-md">
              Big blocks of hard corals define the Minerva Bridge which has an
              average amount of sea dwellers along with sharks. This part of the
              diving zone is for experienced ones only since it provides
              exquisite experiences to the divers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-purple-400 text-black">
        <div class="w-[100%] rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <h3 className="text-center text-2xl md:text-3xl font-black mb-4 text-black">
              Other Scuba Diving Sites in Havelock Island:
            </h3>

            <div class="flex flex-col ">
              <div>
                <p class="text-white text-md md:text-lg">
                  Other places are quite suitable for scuba diving in Havelock
                  providing fun experiences to the divers while giving a better
                  look at their surrounding underwater habitats, such as:
                </p>
              </div>
              <div class="mt-4 md:mt-0 md:ml-4">
                <ul class="list-square pl-5 text-sm md:text-lg bg-purple-500 text-white">
                  <li>Jonnys Geroge</li>
                  <li>Whitehouse Rock</li>
                  <li>Dicksons Pinnacle</li>
                  <li>Jacksons Bar</li>
                  <li>Broken Ledge</li>
                  <li>S.S. Inchkett</li>
                  <li>M4</li>
                  <li>Red Pillar</li>
                  <li>The Slope</li>
                  <li>MV Mars</li>
                  <li>Purple Haze</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className=" w-[97%] md:w-[95%]  grid grid-cols-1 md:grid-cols-1 pt-4 m-auto gap-10 pb-12">
        <div className="bg-gradient-to-r from-amber-500 to-pink-500 px-2 md:px-8  py-4 rounded-md ">
          <h3 className="text-[#ffffff] text-lg md:text-2xl   font-bold text-center ">
            Diving in North Bay Island
          </h3>
          <p className="text-gray-100 rounded-md border-t mt-2 pt-2 px-2 text-justify border-gray-100 text-md:text-lg font-semibold ">
            This area of diving is situated near Ross Island which is the second
            best place to dive in the entire Andaman. Crystal clear shoreline
            and water body gives a clear view of the rich population of coral
            reefs making the water exquisite with its beautiful aquatic species.
            For sports like snorkeling vs scuba diving, this place is quite
            eligible, as both of the sports can be experienced here with proper
            ease.
          </p>
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-violet-600 px-2 md:px-8  py-4 rounded-md shadow-lg ">
          <h3 className="text-[#ffffff] text-lg md:text-2xl   font-bold text-center ">
            Diving in Neil Island
          </h3>
          <p className="text-gray-100 rounded-md border-t mt-2 pt-2 px-2 text-justify border-gray-100 text-md:text-lg font-semibold ">
            This place offers a smooth experience to tourists as it is most
            renowned for its services of resorts, hotels, and restaurants. As
            the water body is not entirely clear here, it does not provide a
            view from the surface of the water. Scuba diving in Neil Island is
            filled with underwater species of vibrant fish and other water
            dwellers as it gives a clear look at the alive coral reefs. Scuba
            diving charges are quite high in Neil as it is not one of the
            primary diving sites in Andaman.
          </p>
        </div>
        <div className="bg-gradient-to-r from-rose-500 to-green-500 px-2 md:px-8  py-4 rounded-md shadow-lg ">
          <h3 className="text-[#ffffff] text-lg md:text-2xl   font-bold text-center ">
            Dive Sites in Neil Island
          </h3>
          <div class="mt-4 md:mt-0 md:ml-4">
            <ul class="list-square pl-5 text-sm md:text-lg bg-gradient-to-r  shadow-white from-rose-500 to-green-500 text-white">
              <li>Jonnys Geroge</li>
              <li>Whitehouse Rock</li>
              <li>Dicksons Pinnacle</li>
              <li>Jacksons Bar</li>
              <li>Broken Ledge</li>
              <li>S.S. Inchkett</li>
              <li>M4</li>
              <li>Red Pillar</li>
              <li>The Slope</li>
              <li>MV Mars</li>
              <li>Purple Haze</li>
            </ul>
          </div>
        </div>
        <div className="bg-gradient-to-r from-violet-500 to-orange-500 px-2 md:px-8  py-4 rounded-md shadow-lg ">
          <h3 className="text-[#ffffff] text-lg md:text-2xl   font-bold text-center ">
            Diving in Port Blair
          </h3>
          <p className="text-gray-100 rounded-md border-t mt-2 pt-2 px-2 text-justify border-gray-100 text-md:text-lg font-semibold ">
            Having experience diving in Port Blair, the Corbyn&apos;s Cove Beach can
            give you the chance to experience a thrill here. Live corals near
            Snake Island give an exotic view of the well-preserved water body
            which can enhance the intensity of the experience of diving here.
            Coral reef scuba diving becomes more exotic with the support of
            proper gear and accessories, which makes the experience safer. Scuba
            diving equipment is viable to carry or rent from the dive sites to
            have extensive safety with underwater fun. Scuba diving cost in Port
            Blair is quite moderate as it is not ideally recommended for diving,
            although is a good place for family adventures and fun underwater.
          </p>
          <p className="text-yellow-200">
            Other great places to dive in Port Blair Mahatma Gandhi Marine
            National Park, Corruption Rock, Rutland Island, Snake Island.
          </p>
        </div>
      </div>

      <h3 className="text-center font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white  py-4 text-xl md:text-4xl">
        Scuba Diving Prices and Trips
      </h3>
      <p className="text-left font-semibold  py-4 px-2 md:px-12 text-md md:text-lg">
        Various limits and parameters are available here for scuba diving in
        Andaman cost, which helps you to choose from the packages. Rates also
        differ as there is a huge difference between snorkeling and scuba diving
        which require different equipment while having the experience.
      </p>

      <section className="overflow-x-auto ">
        <div class="text-xs md:text-lg ">
          <table class="overflow-x-auto w-[100%]  divide-gray-200 shadow-md ">
            <thead class="">
              <tr>
                <th
                  scope="col"
                  class=" text-left   font-semibold bg-rose-400  text-gray-100 uppercase tracking-wider"
                >
                  Diving Place
                </th>
                <th
                  scope="col"
                  class=" text-left   font-semibold bg-rose-200   text-rose-600 uppercase tracking-wider"
                >
                  Scuba Dive Type
                </th>
                <th
                  scope="col"
                  class=" text-left   font-semibold bg-rose-400 text-gray-100 uppercase tracking-wider"
                >
                  Location of Dive
                </th>
                <th
                  scope="col"
                  class=" text-left font-semibold bg-rose-200   text-rose-600  uppercase tracking-wider"
                >
                  Cost of Diving
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="px-0 py-0 md:px-6 md:py-4 whitespace-nowrap">Havelock Island</td>
                <td class="px-0 py-0 md:px-6 md:py-4 whitespace-nowrap">Seashore Dive</td>
                <td class="px-0 py-0 md:px-6 md:py-4 whitespace-nowrap">
                  Nemo Reef, Beach No. 3
                </td>
                <td class="px-0 py-0 md:px-6 md:py-4 whitespace-nowrap">₹ 3,490/-</td>
              </tr>
                  <tr>
                    <td class="px-0 py-0 md:px-6 md:py-4 whitespace-nowrap">North Bay Island</td>
                    <td class="px-0 py-0 md:px-6 md:py-4 whitespace-nowrap">Seashore Dive</td>
                    <td class="px-0 py-0 md:px-6 md:py-4 whitespace-nowrap">North Bay Beach</td>
                    <td class="px-0 py-0 md:px-6 md:py-4 whitespace-nowrap">₹ 3,400/-</td>
                  </tr>
                  <tr>
                    <td class="px-0 py-0 md:px-6 md:py-4 whitespace-nowrap">Port Blair</td>
                    <td class="px-0 py-0 md:px-6 md:py-4 whitespace-nowrap">Boat Dive</td>
                    <td class="px-0 py-0 md:px-6 md:py-4 whitespace-nowrap">Carbyn&apos;s Cove Beach</td>
                    <td class="px-0 py-0 md:px-6 md:py-4 whitespace-nowrap">₹ 4,000/-</td>
                  </tr>
                  <tr>
                    <td class="px-0 py-0 md:px-6 md:py-4 whitespace-nowrap">Havelock Island</td>
                    <td class="px-0 py-0 md:px-6 md:py-4 whitespace-nowrap">Boat Dive</td>
                    <td class="px-0 py-0 md:px-6 md:py-4 whitespace-nowrap">Dongi Dive</td>
                    <td class="px-0 py-0 md:px-6 md:py-4 whitespace-nowrap">₹ 6,400/-</td>
                  </tr>
                  <tr>
                    <td class="px-0 py-0 md:px-6 md:py-4 whitespace-nowrap">Neil Island</td>
                    <td class="px-0 py-0 md:px-6 md:py-4 whitespace-nowrap">Boat Dive</td>
                    <td class="px-0 py-0 md:px-6 md:py-4 whitespace-nowrap">Laxmanpur Beach</td>
                    <td class="px-0 py-0 md:px-6 md:py-4 whitespace-nowrap">₹ 3,490/-</td>
                  </tr>
                  <tr>
                    <td class="px-0 py-0 md:px-6 md:py-4 whitespace-nowrap">Barren Island</td>
                    <td class="px-0 py-0 md:px-6 md:py-4 whitespace-nowrap">Boat Dive</td>
                    <td class="px-0 py-0 md:px-6 md:py-4 whitespace-nowrap">Near the Island</td>
                    <td class="px-0 py-0 md:px-6 md:py-4 whitespace-nowrap">₹ 22,700/-</td>
                  </tr>
            </tbody>
          </table>
        </div>
      </section>
      <h3 className="text-center font-bold bg-gradient-to-r from-green-500 to-cyan-500 text-white  py-4 text-xl md:text-4xl">
        Learning Scuba with Certification in Andaman
      </h3>
      <p className="text-left font-semibold  py-4 px-2 md:px-12 text-md md:text-lg">
        Queries like what is scuba diving gain more clarity with proper training
        and learning, which is also available in the regions of Andaman and
        Nicobar. Two schools have been established here that provide authentic
        certification to the people learning professional diving in Andaman.
        These two schools are PADI and SSI, and both provide training in
        different areas of water in Andaman.
      </p>
      {/* <section className="overflow-x-auto">
        <div class="text-xs md:text-lg">
          <table class="overflow-x-auto w-[100%]  divide-gray-200 shadow-md">
            <thead class="">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left   font-semibold bg-rose-400  text-gray-100 uppercase tracking-wider"
                >
                  Dive Type
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left   font-semibold bg-rose-200   text-rose-600 uppercase tracking-wider"
                >
                  No. of Dives
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left   font-semibold bg-rose-400 text-gray-100 uppercase tracking-wider"
                >
                  No. Of Days
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left font-semibold bg-rose-200   text-rose-600  uppercase tracking-wider"
                >
                  Cost
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  PADI Scuba Diver Course - Upto 12m
                </td>
                <td class="px-6 py-4 whitespace-nowrap">2</td>
                <td class="px-6 py-4 whitespace-nowrap">1-2</td>
                <td class="px-6 py-4 whitespace-nowrap">Rs.16500</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  PADI Open Water Course - Upto 18m
                </td>
                <td class="px-6 py-4 whitespace-nowrap">4</td>
                <td class="px-6 py-4 whitespace-nowrap">4</td>
                <td class="px-6 py-4 whitespace-nowrap">Rs.25400</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  PADI Advanced Open Water Course - Upto 30m
                </td>
                <td class="px-6 py-4 whitespace-nowrap">5</td>
                <td class="px-6 py-4 whitespace-nowrap">3</td>
                <td class="px-6 py-4 whitespace-nowrap">Rs.20200</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  Emergency First Responder Rescue Course (CPR/First Aid)
                  (Non-Dive)
                </td>
                <td class="px-6 py-4 whitespace-nowrap">0</td>
                <td class="px-6 py-4 whitespace-nowrap">1</td>
                <td class="px-6 py-4 whitespace-nowrap">Rs.8675</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">PADI Rescue Diver</td>
                <td class="px-6 py-4 whitespace-nowrap">2</td>
                <td class="px-6 py-4 whitespace-nowrap">3</td>
                <td class="px-6 py-4 whitespace-nowrap">Rs.19356</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  Combo - PADI Rescue and EFR
                </td>
                <td class="px-6 py-4 whitespace-nowrap">2</td>
                <td class="px-6 py-4 whitespace-nowrap">3</td>
                <td class="px-6 py-4 whitespace-nowrap">Rs.26745</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  SSI Advanced Adventurer (AA) - Upto 30m
                </td>
                <td class="px-6 py-4 whitespace-nowrap">2-4</td>
                <td class="px-6 py-4 whitespace-nowrap">2-3</td>
                <td class="px-6 py-4 whitespace-nowrap">Rs.20450</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  SSI Open Water (OW) - Upto 18m
                </td>
                <td class="px-6 py-4 whitespace-nowrap">3-6</td>
                <td class="px-6 py-4 whitespace-nowrap">3-4</td>
                <td class="px-6 py-4 whitespace-nowrap">Rs.23450</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section> */}
      <section class="overflow-x-auto bg-gradient-to-r from-amber-500 to-pink-500 px-12 ">
        <div class="text-sm md:text-lg ">
          <div class="py-8">
            <h2 class="text-2xl font-bold text-center mb-4 text-white ">
              Snorkeling in Andaman
            </h2>
            <p class="text-center mb-8 text-white font-semibold">
              The experience of snorkeling in India has grown further since the
              services of water sports have become a matter of attraction for
              the Andaman and Nicobar archipelago. Snorkeling meaning is having
              the experience of being underwater in a half-diving mode, as you
              get to breathe through the snorkel while swimming on the edge of
              the water&apos;s surface. On the other hand, the attributes of scuba
              diving require proper safety gear just like snorkeling since it
              also involves spending time swimming underwater. The modern
              approaches of snorkeling vs scuba diving have become dependent on
              the skills and adaptability of the divers, clarifying queries of
              your mind like what is snorkeling, or such as this, is swimming
              necessary for snorkeling; which makes their experiences more
              thrilling with proper comfort and adventure all at once.
            </p>
          </div>
          <div class="py-8">
            <h2 class="text-2xl font-bold text-center mb-4 text-white">
              Best places for Snorkeling in Andaman
            </h2>

            <p className="text-gray-600 font-bold rounded-md border-t mt-4 mb-6 px-6 pt-2 px-2 text-justify text-white border-gray-100 text-md:text-lg font-semibold ">
              Snorkeling services are available on the Andaman and Nicobar
              Islands, requiring you to collect the snorkeling gear first and
              have the experience underwater. As the blue tinge of the sea in
              Andaman gives a thrilling yet calming vibe, snorkeling makes the
              experience more intense while exploring the chromatic beauty of
              the sea and the sea dwellers. In the contemporary era, snorkeling
              in Andaman has become quite famous which offers a submerging
              experience of underwater exploration with proper safety. A few of
              the snorkeling sights in Andaman are mentioned here which gives
              you a clear idea about this particular sport.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-blue-100 p-6 rounded-lg">
                <h3 class="text-xl font-semibold mb-2">Elephant Beach</h3>
                <p class="text-sm text-gray-700 mb-4">
                  Where: Havelock Islands (Swaraj Dweep)
                </p>
                <p class="text-sm text-gray-700 mb-4">
                  Snorkeling Price (approx.): ₹500 onwards (per person),
                  excluding all snorkeling gears
                </p>
                <p class="text-sm text-gray-700 mb-4">
                  Activity Timings: 15 to 20 minutes (approx.)
                </p>
                <p class="text-sm text-gray-700">
                  Description: Snorkeling on this particular beach is very
                  convenient as it allows services for children since the sight
                  for the water sports is near the shorelines, which are
                  approximately 4 to 6 meters in depth. The difference between
                  snorkeling and scuba diving is quite significant as both
                  support underwater exploring, yet scuba diving allows you to
                  visit the depth of the water, and snorkeling is roaming around
                  the surface only with a snorkel and fins.
                </p>
              </div>

              <div class="bg-green-100 p-6 rounded-lg">
                <h3 class="text-xl font-semibold mb-2">Red Skin Island</h3>
                <p class="text-sm text-gray-700 mb-4">
                  Where: Mahatma Gandhi Marine National Park
                </p>
                <p class="text-sm text-gray-700 mb-4">
                  Snorkeling Price (approx.): ₹500 onwards (per person),
                  excluding all snorkeling gears
                </p>
                <p class="text-sm text-gray-700 mb-4">
                  Activity Timings: 15 to 20 minutes (approx.)
                </p>
                <p class="text-sm text-gray-700">
                  Description: The Mahatma Gandhi Marine National Park has
                  developed 15 beaches which have their individuality alongside
                  the facilities for diving and snorkeling. As Red Skin Beach
                  gives you chances to explore the water with PADI-approved and
                  certified instructors, you get to experience the depth of
                  untouched underwater with different species of rare sea
                  dwellers.
                </p>
              </div>

              <div class="bg-yellow-100 p-6 rounded-lg">
                <h3 class="text-xl font-semibold mb-2">Bharatpur Beach</h3>
                <p class="text-sm text-gray-700 mb-4">
                  Where: Neil Island (Shaheed Dweep)
                </p>
                <p class="text-sm text-gray-700 mb-4">
                  Snorkeling Price (approx.): ₹500 onwards (per person),
                  excluding all snorkeling gears
                </p>
                <p class="text-sm text-gray-700 mb-4">
                  Activity Timings: 15 to 20 minutes (approx.)
                </p>
                <p class="text-sm text-gray-700">
                  Description: Various species of fish are available at
                  Bharatpur Beach where you can experience blackfish,
                  pufferfish, blue-spotted stingrays, and soldierfish along with
                  angelfish.
                </p>
              </div>

              <div class="bg-gray-100 p-6 rounded-lg">
                <h3 class="text-xl font-semibold mb-2">
                  North Bay Island/Coral Island{" "}
                </h3>
                <p class="text-sm text-gray-700 mb-4">
                  Where: Close to Port Blair
                </p>
                <p class="text-sm text-gray-700 mb-4">
                  Snorkeling Price (approx.): ₹500 onwards (per person),
                  excluding all snorkeling gears
                </p>
                <p class="text-sm text-gray-700 mb-4">
                  Activity Timings: 15-20 minutes (approx.)
                </p>
                <p class="text-sm text-gray-700">
                  This is the oldest coral island in Andaman while having a
                  close vicinity to Port Blair, being the third largest coral
                  island in India. Both watersports, snorkeling, and scuba
                  diving are available here which gives you the chance to
                  experience the best kinds of adventures here. Water sporting
                  with proper gears can take you 6 to 7 meters below the water&apos;s
                  surface, giving you a mesmerizing view of the coral reefs
                  around. Mighty creatures like dolphins are very often visible
                  here along with other species like batfish, pufferfish, and
                  blue-spotted stingrays.
                </p>
              </div>

              <div class="bg-rose-100 p-6 rounded-lg">
                <h3 class="text-xl font-semibold mb-2">
                  South Button Island National Park{" "}
                </h3>
                <p class="text-sm text-gray-700 mb-4">
                  Where: Near Port Blair, the Rani Jhansi Marine National Park
                </p>
                <p class="text-sm text-gray-700 mb-4">
                  Snorkeling Price (approx.): ₹500 onwards (per person),
                  excluding all snorkeling gears
                </p>
                <p class="text-sm text-gray-700 mb-4">
                  Activity Timings: 15-20 minutes (approx.)
                </p>
                <p class="text-sm text-gray-700">
                  This beach primarily belongs to the Rani Jhansi Marine Park
                  which provides chances to witness various exotic marine
                  creatures such as yellow snappers, ornate hard, sea plumes,
                  docile fish along soft corals. For novice snorkelers, this
                  beach can be very difficult since you have to go deeper into
                  the seabed to witness colonies of hard and soft corals. Proper
                  gear with a snorkel kit makes the experience more secure here
                  which gives you the best kind of feel of underwater
                  adventures.
                </p>
              </div>

              <div class="bg-purple-100 p-6 rounded-lg">
                <h3 class="text-xl font-semibold mb-2">Kalipur Beach</h3>
                <p class="text-sm text-gray-700 mb-4">
                  Where: Near Diglipur, transportation is available from Port
                  Blair
                </p>
                <p class="text-sm text-gray-700 mb-4">
                  Snorkeling Price (approx.): ₹500 onwards (per person),
                  excluding all snorkeling gears
                </p>
                <p class="text-sm text-gray-700 mb-4">
                  Activity Timings: 15-20 minutes (approx.)
                </p>
                <p class="text-sm text-gray-700">
                  Distinct marine creatures are visible under the water-level
                  beach since it has an abundance of coral reefs with octopuses,
                  sea turtles, and both soft and hard colonies of coral reefs.
                  The Kalipur beach has crystalline waters that become sparkling
                  during the days of winter. This beach is also renowned for
                  being a turtle nesting site, which is situated at an
                  approximate distance of 17 kilometers from Diglipur Beach.
                </p>
              </div>

              <div class="bg-orange-100 p-6 rounded-lg">
                <h3 class="text-xl font-semibold mb-2">Jolly Buoy Island </h3>
                <p class="text-sm text-gray-700 mb-4">
                  Where: Mahatma Gandhi Marine National Park
                </p>
                <p class="text-sm text-gray-700 mb-4">
                  Snorkeling Price (approx.): ₹500 onwards (per person),
                  excluding all snorkeling gears
                </p>
                <p class="text-sm text-gray-700 mb-4">
                  Activity Timings: 15 to 20 minutes (approx.)
                </p>
                <p class="text-sm text-gray-700">
                  This beach is a part of the Mahatma Gandhi Marine National
                  Park which reflects a vibe of tranquility and calmness along
                  with a ride of surrealism all around you. Here, soft and
                  vibrant sponge coral reefs can be witnessed where vast swathes
                  of blue corals are resting. Due to authoritative pressures,
                  limited numbers of tourists are allowed on this island, as it
                  remains closed for 6 months of the year. Through these
                  maintenance attributes, the authorities of government have
                  made it sustainable for coral reefs that grow properly during
                  the closed time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-200">
        <div class="container mx-auto px-4 py-8">
          <h2 class="text-2xl font-bold text-center mb-8">
            Snorkeling in Andaman
          </h2>

          <div class="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 class="text-lg font-semibold mb-4">Snorkeling Age Limit</h3>
            <ul class="list-disc pl-4">
              <li class="mb-2">Children above 10 years old</li>
              <li class="mb-2">
                Under 18 children need parents’ signatures on the consent form
                for snorkeling or diving
              </li>
              <li>Above 18 do not require any consent form</li>
            </ul>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 class="text-lg font-semibold mb-4">
              Snorkeling Price in Andaman
            </h3>
            <p class="mb-2">
              The average price for snorkeling in Andaman begins from
              approximately ₹500 to ₹1,500 onwards per person for 15-20 minutes.
            </p>
            <p>
              These charges can vary due to safety gear like a snorkel set,
              along with a snorkel tube for individuals.
            </p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 class="text-lg font-semibold mb-4">
              Equipment for Snorkeling in Andaman and Nicobar Islands
            </h3>
            <ul class="list-disc pl-4">
              <li class="mb-2">
                A Snorkel Mask is required to protect your eyes and nose from
                seawater
              </li>
              <li class="mb-2">
                Dry Snorkel helps you to breathe underwater comfortably without
                any pressure
              </li>
              <li class="mb-2">
                Snorkeling Fins help you to propel yourself with water at a
                greater speed
              </li>
              <li class="mb-2">
                Life Vest is mandatory for all but those who are engulfed in a
                snorkeling excursion
              </li>
              <li>
                A waterproof Camera is optional and at an additional cost
                (exclusive of the package)
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-lg font-semibold mb-4">General Snorkeling Tips</h3>
            <ul class="list-disc pl-4">
              <li class="mb-2">
                Apply some SPF-enriched sunscreen 15 minutes before going
                underwater
              </li>
              <li class="mb-2">
                Choose fins that are neither too tight, nor too loose for your
                feet
              </li>
              <li class="mb-2">
                Follow proper underwater techniques and do not touch the corals
              </li>
              <li class="mb-2">
                Children above the year of 10 are not recommended to indulge in
                snorkeling or swimming deep into the sea
              </li>
              <li class="mb-2">
                Adults are suggested to snorkel with their instructors for
                better safety
              </li>
              <li class="mb-2">
                Pay proper attention to your instructor and their given
                instructions with care
              </li>
              <li>
                Avoid indulging in snorkeling during monsoon in Andaman, even
                with lucrative offers
              </li>
            </ul>
          </div>
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
