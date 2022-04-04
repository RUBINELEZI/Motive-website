import Image from 'next/image';
import iphones from '../public/images/newsletterIphones.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Newsletter() {
  return (
      <div className='text-white px-10 bg-gradient-to-r from-[#E8A980] to-[#6A54EF] grid lg:grid-cols-2 z-50'>
        <div className="flex flex-col justify-center mt-9">
          <h1>Subscribe Newsletter</h1>
          <p className="md:w-2/3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
          </p>
          <form className=''>
            <div className='flex h-fit items-stretch mt-12 sm:max-w-md mb-8 sm:flex sm:items-center bg-[#4E4B66] rounded-xl pr-4'>
              <input
                  className='bg-[#4E4B66] rounded-lg text-base leading-none text-white p-3 w-4/5 border border-transparent focus:outline-none'
                  type='email'
                  placeholder='Enter your email.'
              />
              <button className='flex w-32 my-3 bg-[#A996FF] rounded-xl p-3 pt-[15px] text-base font-normal leading-none text-[#4E4B66]  focus:outline-none'>
                Subscribe
                <FontAwesomeIcon icon={faArrowRight} className='ml-4' />
              </button>
            </div>
          </form>
        </div>
        <div className='flex flex-row '>
          <div className='newsletterIphones md:pt-20'>
            <Image
                width='682px'
                height='543px'
                src={iphones}
                alt='iphones'
                quality={100}
            />
          </div>
        </div>
      </div>
  );
}
