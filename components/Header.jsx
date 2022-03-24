import Link from "next/link";
import { useRouter } from "next/router";
import "font-awesome/css/font-awesome.min.css";
import { useState } from "react";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg mb-3 font-semibold">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className=" w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="#">
              <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                MOTIVE
              </a>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fa fa-bars" />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link href="ourStory">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-purple-400">
                    <span className="ml-2">Our Story</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="features">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-purple-400">
                    <span className="ml-2">Features</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="aboutUs">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-purple-400">
                    <span className="ml-2">About Us</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="newsletter">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-purple-400">
                    <span className="ml-2">Newsletter</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="contact">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-purple-400">
                    <span className="ml-2">Contact Us</span>
                  </a>
                </Link>
              </li>
              <div className="flex flex-col md:flex-row">
                <button className="text-sm md:mr-2 md:mb-0 mb-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-700 hover:border-transparent rounded-lg">
                  Login
                </button>
                <button className="text-sm bg-purple-400 hover:bg-purple-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-purple-400 hover:border-transparent rounded-lg">
                  Sign Up
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
