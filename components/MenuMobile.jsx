import React, { useCallback } from "react";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderData } from "../data/HeaderData";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";


export default function MenuMobile({ isOpen, handleClick }) {
  const scrollDown = (ref) => {
    window.scrollTo({
      top: document.querySelector(`#${ref}`).offsetTop - 64,
      behavior: "smooth"
    });
    handleClick();
  };

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "";
  }, []);

  return (
    <Transition
      show={isOpen}
      enter="transition ease-out duration-100 transform"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-75 transform"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      {(ref) => (
        <div
          className="fixed top-0 z-50 flex h-screen w-screen flex-col bg-[#282734] md:hidden items-center justify-center p-10 overflow-hidden"
          id="mobile-menu"
        >
          <div
            ref={ref}
            className="px-2 pt-2 pb-3 sm:px-3 flex flex-col space-y-12 mt-5"
          >
            <FontAwesomeIcon icon={faArrowDown}
                             className="text-white cursor-pointer hover:bg-purple-500 p-2 rounded-2xl"
                             onClick={() => {
                               handleClick();
                               unlockScroll();
                             }} />
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto text-center items-center">
              {HeaderData.map((data) => (
                <li key={data.index} className="nav-item text-center cursor-pointer"
                    onClick={() => {
                      scrollDown(data.link);
                      unlockScroll();
                    }}>
                  <a
                    className="px-3 py-2 mt-5 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-purple-400">
                    <span className="ml-2">{data.name}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col md:flex-row">
              <button
                className="text-sm md:mr-2 md:mb-0 mb-2 bg-transparent hover:bg-purple-400 text-purple-400 font-semibold hover:text-white py-2 px-4 border border-purple-400 hover:border-transparent rounded-lg">
                Motive Creator Labs
              </button>
              <button
                className="text-sm bg-purple-400 hover:bg-purple-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-purple-400 hover:border-transparent rounded-lg">
                Motive For Business
              </button>
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
}

