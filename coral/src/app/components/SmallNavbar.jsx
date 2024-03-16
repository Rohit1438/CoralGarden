import {
  Button,
  Radio,
  RadioGroup,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";

import { Call } from "../../../public/call";
import { FaFacebook } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { MdAddIcCall } from "react-icons/md";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
const SmallNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");
  return (
    <div
      className="bg-[#481C6B]  flex  sticky top-0 z-50  text-white text-xs font-boldi   w-full px-12  items-center bg-purple-800 py-4 justify-between align-center"
      style={{ width: "100%", display: "flex", alignItems: "flex-end" }}
    >
      <div>
        <Image
          height={200}
          width={150}
          src="https://coralgardenresort.in/wp-content/uploads/2024/01/coral-gardan-logo.png"
        />
      </div>
      <Button colorScheme="gray" onClick={onOpen}>
        {!isOpen ? (
          <GiHamburgerMenu color="purple" className="text-purple-500" />
        ) : (
          <IoCloseSharp color="purple" className="text-purple-500" />
        )}
      </Button>

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay color="yellow" />
        <DrawerContent colorScheme="yellow">
          {/* <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader> */}
          <DrawerBody className="bg-purple-700">
            <div
              className="flex items-center justify-center my-6"
              style={{ width: "100%" }}
            >
              <Button colorScheme="gray" onClick={onClose}>
                <IoCloseSharp className="text-purple-500" color="purple" />
              </Button>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div>
                <Image
                  height={200}
                  width={150}
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/coral-gardan-logo.png"
                />
              </div>

              <Link
                href="/"
                className="text-yellow-200 hover:text-white hover:bg-sky-600 px-2 py-2 rounded-lg"
                style={{ width: "100%" }}
              >
                HOME
              </Link>
              <Link
                href="/about_us"
                className="text-yellow-200 hover:text-white hover:bg-sky-600 px-2 py-2 rounded-lg"
                style={{ width: "100%" }}
              >
                ABOUT US
              </Link>
              <Link
                href="/rooms"
                className="text-yellow-200 hover:text-white hover:bg-sky-600 px-2 py-2 rounded-lg"
                style={{ width: "100%" }}
              >
                ROOMS
              </Link>

              <div class="dropdown">
                <Link
                  href="/"
                  className="dropbtn text-yellow-200 hover:text-white"
                >
                  EXPLORE
                  <div className="dropdown-content">
                    <Link
                      href="/neil_island"
                      className=" text-yellow-200 p-4 hover:text-white"
                    >
                      NEIL ISLAND
                    </Link>
                    <Link
                      href="/andaman"
                      className="text-yellow-200 p-4 hover:text-white"
                    >
                      ANDAMAN
                    </Link>
                  </div>
                </Link>
              </div>

              <div class="dropdown">
                <Link
                  href="/"
                  className="dropbtn text-yellow-200 hover:text-white"
                >
                  ACTIVITIES
                  <div className="dropdown-content">
                    <Link
                      href="/scuba_diving"
                      className="text-yellow-200 hover:text-white"
                    >
                      SCUBA DIVING
                    </Link>
                    <Link
                      href="/coming_soon"
                      className="text-yellow-200 p-4 hover:text-white"
                    >
                      COMING SOON
                    </Link>
                  </div>
                </Link>
              </div>

              <Link
                href="/contact"
                className="text-yellow-200 hover:text-white hover:bg-sky-600 px-2 py-2 rounded-lg"
                style={{ width: "100%" }}
              >
                CONTACT US
              </Link>
              <div
                className="flex justify-center align-bottom bg-yellow-400 text-purple-600 font-bold hover:bg-sky-600 rounded-lg"
                style={{ width: "100%" }}
              >
                <div className="flex items-center text-yellow-200 hover:text-white  px-2 py-2 rounded-lg">
                  <Link href="tel:1234567890" className="flex items-center ">
                    <MdAddIcCall className="mr-1" />
                    <p>
                      1234567890
                    </p>
                  </Link>
                </div>
              </div>
              <Link href="/">
                <button className=" rounded-full">
                  <FaFacebook className="text-white text-5xl bg-white-700  hover:text-sky-600 hover:bg-white rounded-full" />
                </button>
              </Link>
              <Link href="/">
                <button className=" rounded-full">
                  <CiYoutube className="text-rose-400 text-5xl  bg-white  text-rose-600 hover:text-white hover:text-white hover:bg-rose-500 rounded-full" />
                </button>
              </Link>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export default SmallNavbar;
