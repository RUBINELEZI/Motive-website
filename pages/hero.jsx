import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Hero({ data }) {
  return (

    <div
      id="hero"
      className="container md:p-10 p-4 mx-auto flex flex-wrap  flex-col md:flex-row items-center"
    >

      <div
        className="flex flex-col w-full z-20 xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
        <h1
          className="mt-16 mb-4 text-3xl mt-16 md:text-5xl text-white font-semibold text-center lg:text-left">
          {data.data.attributes.Title}
        </h1>

        <div className="flex items-center justify-center mb-4">
          <span className="inline-block w-40 h-1 rounded-full bg-purple-800" />
          <span className="inline-block w-3 h-1 ml-1 rounded-full bg-purple-800" />
          <span className="inline-block w-1 h-1 ml-1 rounded-full bg-purple-800" />
        </div>
        <p
          className="leading-normal text-base md:text-1xl mb-8 text-center lg:text-left z-10 text-slate-400 font-normal">
          {data.data.attributes.Description}
        </p>

        <div className="flex flex-col md:flex-row mb-10 justify-center items-center lg:items-start">
          <button
            className="text-sm md:mr-2 md:mb-0 mb-2 bg-transparent hover:bg-purple-400 text-purple-400 font-semibold hover:text-white py-2 px-4 border border-purple-400 hover:border-transparent rounded-lg">
            Sign Up
          </button>
          <button
            className="text-sm bg-purple-400 hover:bg-purple-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-purple-400 hover:border-transparent rounded-lg">
            Log In
            <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
          </button>
        </div>

        {/*<form className="bg-gray-900  opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 z-10">*/}
        {/*  <div className="mb-4">*/}
        {/*    <label className="block text-blue-300 py-2 font-bold mb-2">*/}
        {/*      Signup for our newsletter*/}
        {/*    </label>*/}
        {/*    <input*/}
        {/*      className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"*/}
        {/*      id="emailaddress"*/}
        {/*      type="text"*/}
        {/*      placeholder="you@somewhere.com"*/}
        {/*    />*/}
        {/*  </div>*/}

        {/*  <div className="flex items-center justify-between pt-4">*/}
        {/*    <button*/}
        {/*      className="bg-purple-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"*/}
        {/*      type="button"*/}
        {/*    >*/}
        {/*      Sign Up*/}
        {/*    </button>*/}
        {/*  </div>*/}
        {/*</form>*/}
      </div>
      <img
        className="w-screen mx-auto absolute duration-700 ease-in-out  left-0 top-1/3 opacity-0 md:opacity-100 z-0"
        src="/line.png"
        alt="elipse"
      />

      <div className="w-full xl:w-3/5 md:p-12 z-20 overflow-hidden">
        <div className="w-full items-center flex justify-center">
          <img
            className="md:w-96 w-44 absolute flex flex-row justify-center duration-700 ease-in-out blur-3xl  z-0"
            src="/eclipse.png"
            alt="sadsa"
          />

          <Image
            className="mx-auto w-full md:w-4/5 h-96 transform -rotate-left-6 transition hover:scale-95 duration-700 ease-in-out z-20 hover:rotate-6"
            src={
              
              data.data.attributes.Hero_imge.data.attributes.formats.medium.url
            }
            alt="elipse"
            width={800}
            height={700}
          />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`https://motive-admin.herokuapp.com/api/hero?populate=*`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
