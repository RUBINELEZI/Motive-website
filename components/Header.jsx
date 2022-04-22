import Link from "next/link";
import Image from "next/image";
import "font-awesome/css/font-awesome.min.css";
import { useState } from "react";
import { HeaderData } from "../data/HeaderData.jsx";
import MenuMobile from "./MenuMobile.jsx";
import logo from "../public/images/footer/Frame.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollDown = (ref) => {
    window.scrollTo({
      top: document.querySelector(`#${ref}`).offsetTop - 20,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <nav className="md:px-2 mb-3 font-semibold bg-[#282734] backdrop-filter backdrop-blur-lg bg-opacity-50 fixed top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="pb-2" onClick={() => scrollDown("hero")}>
              {/* <Image src={logo} alt="logo" width="20" height="20" quality={100}/> */}
              <span className="bg-clip-text cursor-pointer text-transparent bg-gradient-to-r  from-pink-500 to-purple-500 text-2xl ml-3">
              MOTIVE
            </span>
            </div>

            <div className="flex items-center jus">
              <div className="hidden md:block text-right">
                <div className=" flex items-baseline space-x-4">
                  <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                    {HeaderData?.map((data) => (
                      <li key={data.index} className="nav-item cursor-pointer" onClick={() => scrollDown(data.link)}>
                          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-purple-400 hover:underline hover:underline-offset-4">
                            <span className="ml-2">{data.name}</span>
                          </a>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col md:flex-row">
                    <button className="text-sm md:mr-2 md:mb-0 mb-2 bg-transparent hover:bg-purple-400 text-purple-400 font-semibold hover:text-white py-2 px-4 border border-purple-400 hover:border-transparent rounded-lg">
                      Motive Creator Labs
                    </button>
                    <button className="text-sm bg-purple-400 hover:bg-purple-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-purple-400 hover:border-transparent rounded-lg">
                      Motive For Business
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isOpen && (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="false"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <MenuMobile isOpen={isOpen} handleClick={() => setIsOpen(!isOpen)} />
      </nav>
    </div>
  );
}
