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
      <div className="text-center pt-8 pb-12">
          <h2 className="text-purple-700 text-2xl font-semibold">
            ABOUT SNORKELING
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
      <section className=" bg-gradient-to-r from-green-500 to-sky-400">
        <div class="container mx-auto px-4 py-8">
          <h2 class="text-2xl font-bold text-center mb-8 text-white">
            Snorkeling in Andaman
          </h2>

          <div class="bg-white rounded-lg shadow-md p-6 mb-8 text-sm md:text-lg">
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

          <div class="bg-white rounded-lg shadow-md p-6 mb-8 text-sm md:text-lg">
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

          <div class="bg-white rounded-lg shadow-md p-6 mb-8 text-sm md:text-lg">
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

          <div class="bg-white rounded-lg shadow-md p-6 text-sm md:text-lg">
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
