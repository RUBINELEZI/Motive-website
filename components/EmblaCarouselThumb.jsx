import React from 'react';

export const Thumb = ({ selected, onClick, imgSrc }) => (
  <div className={` ${selected ? '' : ''}`}>
    <button onClick={onClick} className='' type='button'>
      <div className='space-y-3 md:mr-3 mb-6'>
        <span className='inline-block p-3 rounded-xl text-[#fff] bg-[#6B21A7]'>
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

        <h1 className='text-2xl font-semibold  capitalize text-[#fff]'>
          Feature 2
        </h1>

        <p className='text-gray-400 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab
          nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
        </p>
      </div>
    </button>
  </div>
);
