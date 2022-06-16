import "font-awesome/css/font-awesome.min.css";
import { useCallback, useState } from "react";
import { HeaderData } from "../data/HeaderData.jsx";
import MenuMobile from "./MenuMobile.jsx";
import Link from "next/link";
import logo from "../public/motive.svg";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollDown = (ref) => {
    window.scrollTo({
      top: document.querySelector(`#${ref}`).offsetTop - 20,
      behavior: "smooth"
    });
  };

  const lockScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <nav
      className="md:px-2 mb-3 font-semibold bg-[#282734] backdrop-filter backdrop-blur-lg bg-opacity-50 fixed top-0 z-50 w-full">
      <div className="flex items-center justify-between h-16 lg:px-[0.8rem] xl:px-[6rem]">
        <div className="" onClick={() => scrollDown("hero")}>
          <Image src={logo} alt="logo" width="50" height="20" quality={100} />
          <span
            className="bg-clip-text cursor-pointer text-transparent bg-gradient-to-r from-pink-500 to-purple-500 text-2xl ml-3">
              MOTIVE
            </span>
        </div>

        <div className="flex items-center">
          <div className="hidden md:block text-right">
            <div className=" flex space-x-4">
              <ul className="flex items-center lg:flex-row list-none lg:ml-auto">
                {HeaderData?.map((data) => (
                  <li key={data.index} className="nav-item cursor-pointer"
                      onClick={() => scrollDown(data.link)}>
                    <a
                      className="px-3 flex text-xs uppercase md:font-medium lg:font-bold leading-snug text-white hover:text-purple-400 hover:underline hover:underline-offset-4">
                      <span className="md:ml-0 lg:ml-2">{data.name}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col md:flex-row hidden lg:block">
                <Link href={"404"}>
                  <button
                    className="text-sm md:mr-2 md:mb-0 mb-2 bg-transparent hover:bg-purple-400 text-purple-400 font-semibold hover:text-white py-2 md:px-2 lg:px-4 border border-purple-400 hover:border-transparent rounded-lg">
                    Motive Creator Labs
                  </button>
                </Link>

                <Link href={"404"}>
                  <button
                    className="text-sm bg-purple-400 hover:bg-purple-500 text-gray-700 font-semibold hover:text-white py-2 md:px-2 lg:px-4 border border-purple-400 hover:border-transparent rounded-lg">
                    Motive For Business
                  </button>
                </Link>
              </div>

              <div className="flex flex-col md:flex-row lg:hidden">
                <button
                  className="text-sm md:mr-2 md:mb-0 mb-2 bg-transparent hover:bg-purple-400 text-purple-400 font-semibold hover:text-white py-2 md:px-2 lg:px-4 border border-purple-400 hover:border-transparent rounded-lg">
                  Labs
                </button>
                <button
                  className="text-sm bg-purple-400 hover:bg-purple-500 text-gray-700 font-semibold hover:text-white py-2 md:px-2 lg:px-4 border border-purple-400 hover:border-transparent rounded-lg">
                  Business
                </button>
              </div>

            </div>
          </div>
        </div>
        <div className="mr-2 flex md:hidden" onClick={() => {
          lockScroll();
        }}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center text-gray-400"
            type="button"
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
      <MenuMobile isOpen={isOpen} handleClick={() => setIsOpen(!isOpen)} />
    </nav>
  );
}

