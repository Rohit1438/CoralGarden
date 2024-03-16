"use client";

import React from "react";
import "flowbite";
import { Navbar } from "../components/Navbar";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
const page = () => {
  return (
    <div className="">
      <Navbar />
      <div className="bg-rose-100 pb-20 mb-8">
        <div className="text-center pt-8 pb-12">
          <h2 className="text-purple-700 text-2xl font-semibold">
            ABOUT SCUBA DIVING
          </h2>
          <p className="text-rose-500 text-center">
            Where Nature Meets Paradise
          </p>

       

          <div
            id="animation-carousel"
         
            style={{
             
              margin: "auto",
              borderRadius: "15px",
              border: "5px solid white",
            }}
            className=" w-[100%] md:w-[70%] relative "
            data-carousel="static"
          >
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              <div className="hidden duration-200 ease-linear" data-carousel-item>
                <Image
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/scuba08.jpg"
                  width={800}
                  height={800}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div className="hidden duration-200 ease-linear" data-carousel-item>
                <Image
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/scuba01.jpg"
                  width={800}
                  height={800}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>

              <div className="hidden duration-200 ease-linear" data-carousel-item>
                <Image
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/scuba02.jpg"
                  width={800}
                  height={800}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div className="hidden duration-200 ease-linear" data-carousel-item>
                <Image
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/scuba07.jpg"
                  width={800}
                  height={800}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>

              <div className="hidden duration-200 ease-linear" data-carousel-item>
                <Image
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/scuba03.jpg"
                  width={800}
                  height={800}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div className="hidden duration-200 ease-linear" data-carousel-item>
                <Image
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/scuba04.jpg"
                  width={800}
                  height={800}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div className="hidden duration-200 ease-linear" data-carousel-item>
                <Image
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/scuba05.jpg"
                  width={800}
                  height={800}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div className="hidden duration-200 ease-linear" data-carousel-item>
                <Image
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/scuba06.jpg"
                  width={800}
                  height={800}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div className="hidden duration-200 ease-linear" data-carousel-item>
                <Image
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/scuba09.jpg"
                  width={800}
                  height={800}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div className="hidden duration-200 ease-linear" data-carousel-item>
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
        About Scuba Diving in Port Blair, Havelock and Neil islands There is no
        adventure than diving. Whether you are novice, or whether you were been
        diving for so many years, there is always something new, fascinating or
        challenging about venturing into the underwater world. Your mind may be
        mesmerized by clouds of colorful fish, your curiosity raised by the
        musterios remains of sunken ships or your creativity awakened by the art
        of underwater photography. Your diving interests may range from a casual
        pastime, pursuesd on vacation, to constant passion, or even a career.
        Diving offers something new for everyone. Scuba Diving in andmans is a
        unique lifetime experience. The coastal water surrounding theses islands
        is the abode of one of the richest coral reef ecosystem I the world. The
        specialty is that, there the coral reefs and underwater formation are
        undamaged by human activity. The best season for Andaman Scuba Diving is
        form December to April For Good Andaman Scuba Diving Packages. Many of
        the islands are surrounded by fringing reefs, often several hundred
        meters wide and separated from the shore by a lagoon of similar width.
        There are also more steeply undulating hills of raval volcanic lava,
        which makes for some unusual diving. There are plenty of steeply sloping
        and shallow reefs suitable for snorkeling. Large pelagics are plentiful
        in thee waters as are a variety of sharks. Large schools of hammerhead
        often patrol the waters away from the reefs ad grey, whitetip, nurse and
        leopard sharks are found closer inshore. Silvertip and ocean whitetips
        also silver and the deep blue beyond. Enormous manta rays are also often
        seen. TIPS FOR DIVERS Best season for Scuba Diving in Andaman Was
        October to April. Dive only on the Areas opened / permitted for scuba
        diving by the Andaman & nicobar administration. Do not dive with un
        qualified / un register dive operator for the same may be dangerous for
        your life. Avail services of scuba dive instructors certified by the
        international professional organization such has PADI, CMAS, NAUI, BSAC
        or SSI for safe diving experience. Details about approved scuba dive
        centers, list of areas / sites permitted by the administration for scuba
        diving an the terms and condition for operating scuba dive centers in
        Andamans. INR:- 4500/- Per Person With One Images and Video CD With PADI
        Certificate. Both Dives Are 30 to 45 Minutes After The Course of 30
        minutes.
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
