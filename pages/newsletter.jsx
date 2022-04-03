import Image from 'next/image';
import iphones from '../public/images/newsletterIphones.png';

export default function Newsletter() {
  return (
    <div className='text-white px-10 bg-gradient-to-r from-[#E8A980] to-[#6A54EF] grid lg:grid-cols-2'>
      <div className='flex flex-row '>
        <div className='newsletterIphones pt-36'>
          <Image
            width='682px'
            height='543px'
            src={iphones}
            alt='iphones'
            quality={100}
          />
        </div>
      </div>
      <div>
        <h1>Subscribe Newsletter</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </p>
         <div class="sm:max-w-md mb-8 sm:flex sm:items-center sm:bg-white sm:rounded-full">
            <span class="hidden sm:inline-block pl-2 sm:pl-6 lg:pl-10">
              <svg width="37" height="37" viewbox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="18.5" r="9.5" fill="#1F40FF" fill-opacity="0.15"></circle><circle cx="18.5" cy="18.5" r="18.5" fill="#1F40FF" fill-opacity="0.06"></circle><circle cx="18.5" cy="18.5" r="2.5" fill="#282C36"></circle></svg>
            </span>
            <button class="w-full sm:w-auto ml-auto px-10 py-5 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200">Subscribe</button>
          </div>
      </div>
    </div>
  );
}
