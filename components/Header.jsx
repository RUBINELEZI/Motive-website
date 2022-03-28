import Link from 'next/link';
import { useRouter } from 'next/router';
import 'font-awesome/css/font-awesome.min.css';
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className='px-2 py-3 bg mb-3 font-semibold'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <Link href='#'>
              <a className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white'>
                MOTIVE
              </a>
            </Link>
            <div className='flex items-center jus'>
              <div className='hidden md:block text-right'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  <Link href='ourStory'>
                    <a className=' hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'>
                      Our story
                    </a>
                  </Link>

                  <Link href='features'>
                    <a className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                      Features
                    </a>
                  </Link>

                  <Link href='aboutUs'>
                    <a className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                      About us
                    </a>
                  </Link>

                  <Link href='newsletter'>
                    <a className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                      Newsletter
                    </a>
                  </Link>

                  <Link href='contactUs'>
                    <a className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                      Contact us
                    </a>
                  </Link>
                  <div className='flex flex-col md:flex-row'>
                    <button className='text-sm md:mr-2 md:mb-0 mb-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-700 hover:border-transparent rounded-lg'>
                      Login
                    </button>
                    <button className='text-sm bg-purple-400 hover:bg-purple-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-purple-400 hover:border-transparent rounded-lg'>
                      Sign Up
                      <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'>
                <span className='sr-only'>Open main menu</span>
                {!isOpen ? (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                ) : (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'>
          {(ref) => (
            <div className='md:hidden' id='mobile-menu'>
              <div
                ref={ref}
                className='px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col'>
                <Link href='ourStory'>
                  <a className=' hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'>
                    Our story
                  </a>
                </Link>

                <Link href='features'>
                  <a className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                    Features
                  </a>
                </Link>

                <Link href='aboutUs'>
                  <a className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                    About us
                  </a>
                </Link>

                <Link href='newsletter'>
                  <a className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                    Newsletter
                  </a>
                </Link>

                <Link href='contactUs'>
                  <a className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                    Contact us
                  </a>
                </Link>
                <div className='flex flex-col md:flex-row'>
                  <button className='text-sm md:mr-2 md:mb-0 mb-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-700 hover:border-transparent rounded-lg'>
                    Login
                  </button>
                  <button className='text-sm bg-purple-400 hover:bg-purple-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-purple-400 hover:border-transparent rounded-lg'>
                    Sign Up
                    <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                  </button>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
