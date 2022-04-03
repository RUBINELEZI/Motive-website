import Image from 'next/image';
import iphone from '../public/images/featuresIphone.png';

export default function Features() {
  return (
    <section className='grid'>
      <div className='container px-6 py-10 mx-auto'>
        <h1 className='text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white text-center'>
          Features{' '}
        </h1>

        <div className='mt-2 flex items-center justify-center'>
          <span className='inline-block w-40 h-1 rounded-full bg-purple-800'></span>
          <span className='inline-block w-3 h-1 ml-1 rounded-full bg-purple-800'></span>
          <span className='inline-block w-1 h-1 ml-1 rounded-full bg-purple-800'></span>
        </div>

        <div className='mt-8 xl:mt-12 lg:grid lg:items-center lg:grid-cols-3'>
          <div className='w-full grid grid-cols-1 gap-8 xl:gap-16 lg:text-right text-center'>
            <div className='space-y-3'>
              <span className='inline-block p-3 text-purple-800 bg-blue-100 rounded-xl dark:text-white dark:bg-purple-800'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                  />
                </svg>
              </span>

              <h1 className='text-2xl font-semibold text-gray-700 capitalize dark:text-white'>
                Feature 1
              </h1>

              <p className='text-gray-500 dark:text-gray-300'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>
            </div>

            <div className='space-y-3'>
              <span className='inline-block p-3 text-purple-800 bg-blue-100 rounded-xl dark:text-white dark:bg-purple-800'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z'
                  />
                </svg>
              </span>

              <h1 className='text-2xl font-semibold text-gray-700 capitalize dark:text-white'>
                Feature 2
              </h1>

              <p className='text-gray-500 dark:text-gray-300'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>
            </div>
          </div>

          <div className='w-full items-center flex justify-center'>
            <Image
              src={iphone}
              width='300px'
              height='600px'
              alt='iphone'
              quality={100}
            />
          </div>

          <div className='w-full grid grid-cols-1 gap-8 xl:gap-16 lg:text-left text-center'>
            <div className='space-y-3'>
              <span className='inline-block p-3 text-purple-800 bg-blue-100 rounded-xl dark:text-white dark:bg-purple-800'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
                  />
                </svg>
              </span>
              <h1 className='text-2xl font-semibold text-gray-700 capitalize dark:text-white'>
                Feature 3
              </h1>
              <p className='text-gray-500 dark:text-gray-300'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>
            </div>

            <div className='space-y-3'>
              <span className='inline-block p-3 text-purple-800 bg-blue-100 rounded-xl dark:text-white dark:bg-purple-800'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                  />
                </svg>
              </span>
              <h1 className='text-2xl font-semibold text-gray-700 capitalize dark:text-white'>
                Feature 4
              </h1>
              <p className='text-gray-500 dark:text-gray-300'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
