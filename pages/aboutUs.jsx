export default function About() {
  return (
    <div className='container p-4 md:p-0 mx-auto flex flex-wrap flex-col md:flex-row h-full items-center '>
      <div className='bg-gradient-to-r from-gray-600 to-gray-700 w-full md:h-fit h- absolute m-0 opacity-50 left-0'></div>
      <div className='flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden'>
        <h1 className='my-4 text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-fuchsia-500 opacity-75 font-bold leading-tight text-center md:text-left'>
          About US
        </h1>
        <p className='leading-normal text-base md:text-1xl text-md mb-8 text-center md:text-left z-10 text-slate-400 font-normal'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into
        </p>
      </div>
      <img
        className='w-screen mx-auto absolute duration-700 ease-in-out  left-0 top-1/3 opacity-0 md:opacity-100 z-0'
        src='/line.png'
        alt='elipse'
      />

      <img
        className='w-56 mx-auto absolute right-1/3 duration-700 ease-in-out blur-3xl  z-0'
        src='/elipse.png'
        alt='sadsa'
      />

      <div className='w-full xl:w-3/5 p-12 overflow-hidden'>
        <div className='aboutUsCard p-6 m-3 max-w-sm mx-auto bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl shadow-md flex items-center space-x-4 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60'>
          <div className='shrink-0'>
            <img
              className='h-12 w-12 rounded-full ring-2 ring-white'
              src='/avatar.jpg'
            />
          </div>
          <div>
            <div className='text-xl font-medium text-white'>Ang Ganxha</div>
            <p className='text-sm text-white'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
          </div>
        </div>

        <div className='aboutUsCard p-6 m-3 max-w-sm mx-auto bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl shadow-md flex items-center space-x-4 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60'>
          <div className='shrink-0'>
            <img
              className='h-12 w-12 rounded-full ring-2 ring-white'
              src='/avatar.jpg'
            />
          </div>
          <div>
            <div className='text-xl font-medium text-white'>Ang Ganxha</div>
            <p className='text-sm text-white'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
          </div>
        </div>

        <div className='aboutUsCard p-6 m-3 max-w-sm mx-auto bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl shadow-md flex items-center space-x-4 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60'>
          <div className='shrink-0'>
            <img
              className='h-12 w-12 rounded-full ring-2 ring-white'
              src='/avatar.jpg'
            />
          </div>
          <div>
            <div className='text-xl font-medium text-white'>Ang Ganxha</div>
            <p className='text-sm text-white'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
