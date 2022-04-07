import Link from "next/link";
import Image from "next/image";
import "font-awesome/css/font-awesome.min.css";
import { useState } from "react";
// import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { HeaderData } from "../data/HeaderData.jsx";
import MenuMobile from "./MenuMobile.jsx";
import icons from "../public/images/menuMobile/icons8-menu-64.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="px-2 py-3 mb-3 font-semibold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="#">
              <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                MOTIVE
              </a>
            </Link>
            <div className="flex items-center jus">
              <div className="hidden md:block text-right">
                <div className="ml-10 flex items-baseline space-x-4">
                  <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                    {HeaderData?.map((data) => (
                      <li key={data.index} className="nav-item">
                        <Link href={data.link}>
                          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-purple-400">
                            <span className="ml-2">{data.name}</span>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col md:flex-row">
                    <button className="text-sm md:mr-2 md:mb-0 mb-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-700 hover:border-transparent rounded-lg">
                      Login
                    </button>
                    <button className="text-sm bg-purple-400 hover:bg-purple-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-purple-400 hover:border-transparent rounded-lg">
                      Sign Up
                      <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <Image src={icons} className="bg-transparent" alt='navbar'/>
                )}
              </button>
            </div>
          </div>
        </div>
        <MenuMobile isOpen={isOpen} />
      </nav>
    </div>
  );
}
