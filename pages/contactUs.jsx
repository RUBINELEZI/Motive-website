import Image from 'next/image';
import macbook from '../public/images/macbook.png';

export default function Contact() {
  return (
    <section className='grid'>
      <div className='container px-6 py-10 mx-auto'>
        <h1 className='text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white text-center'>
          Contact us{' '}
        </h1>

        <div className='mt-2 flex items-center justify-center'>
          <span className='inline-block w-40 h-1 rounded-full bg-purple-800'></span>
          <span className='inline-block w-3 h-1 ml-1 rounded-full bg-purple-800'></span>
          <span className='inline-block w-1 h-1 ml-1 rounded-full bg-purple-800'></span>
        </div>

        <div className='mt-8 xl:mt-12 lg:grid lg:items-center '>
          <div className='w-full items-center flex justify-center'>
            <Image
              src={macbook}
              width='3185px'
              height='1920px'
              alt='macbook'
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
