import Image from "next/image";
import secondhalf from "../public/images/newsLetterImg/halfiphone2.png";

import Image from 'next/image';
import iphones from '../public/images/newsletterIphones.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Newsletter() {
  return (
    <div className="text-white bg-gradient-to-r from-[#E8A980]	 to-[#6A54EF] flex flex-row md:p-10">
      <div>
        <div className="newsletterIphones pt-36 z-0">
          <Image
              width='682px'
              height='543px'
              src={iphones}
              alt='iphones'
              quality={100}
          />
        </div>
      </div>
      <div className=" m-auto md:w-1/3">
        <h1 className="text-4xl">Subscribe Newsletter</h1>
        <p className="font-thin text-sm mt-5 leading-7 text-[#C4C4C4]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </p>
        <div class="mb-12 mt-8">
          <input
            type="email"
            id="email"
            className="bg-[#4E4B66] placeholder-white text-sm rounded-lg  block w-full p-4"
            placeholder="Enter your email"
          />
          <button className="absolute ml-80 -mt-11  px-8 py-2.5  bg-[#A996FF] text-black focus:outline-none  font-medium rounded-md text-sm w-full sm:w-auto text-center ">
            Subscribe
            <FontAwesomeIcon icon={faArrowRight} className='ml-4' />
          </button>
        </div>
      </div>
    </div>
  );
}
