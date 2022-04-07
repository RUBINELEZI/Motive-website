import Image from "next/image";
import React from "react";
import logo from "../public/images/footer/Frame.png";
import facebook from "../public/images/footer/facebook.png";

export default function Footer() {
  return (
    <div className="bg-gray  w-full px-4 pt-10 pb-7 xl:px-[160px]">
      <div className="flex w-full flex-col justify-around md:flex-row md:space-x-6 xl:justify-between">
        <div className="mb-7 sm:self-center sm:text-center md:text-left">
          <div className="pb-2">
            <Image src={logo} alt="logo" width="40" height="40" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r  from-pink-500 to-purple-500 text-4xl ml-3">
              MOTIVE
            </span>
          </div>
          <p className="mb-4 max-w-[270px] text-[#C4C4C4] text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
          </p>
          <div className="flex space-x-2">
            <a
              href="#"
              className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-black bg-opacity-5 transition-colors hover:bg-opacity-40"
            >
              <Image src={facebook} alt="twitter link" width={40} height={40} />
            </a>
            <a
              href="#"
              className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-black bg-opacity-5 transition-colors hover:bg-opacity-40"
            >
              <Image src={facebook} alt="twitter link" width={40} height={40} />
            </a>
            <a
              href="#"
              className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-black bg-opacity-5 transition-colors hover:bg-opacity-40"
            >
              <Image src={facebook} alt="twitter link" width={40} height={40} />
            </a>
            <a
              href="#"
              className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-black bg-opacity-5 transition-colors hover:bg-opacity-40"
            >
              <Image src={facebook} alt="twitter link" width={40} height={40} />
            </a>
          </div>
        </div>
        <div className="w-full text-[#C4C4C4] flex-1 md:mt-16 justify-around sm:flex sm:space-x-4 md:max-w-xl lg:justify-between">
          <div>
              <h1>Address</h1>
              <div>
                  <div>+0123 4567 8910</div>
                  <div>test@test.com</div>
                  <div>123 Street 4567 UK  </div>

              </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 text-xs sm:text-center lg:text-left">
        <p className="pt-4 text-gray-700">
          Copyright @ 2022 by. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
