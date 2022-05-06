import Image from "next/image";
import iphone from "../public/images/sharedImages/iphone.png";

export default function Hero({ data }) {
  return (
    <div
      id="hero"
      className="container md:p-10 p-4 mx-auto flex flex-wrap  flex-col md:flex-row items-center"
    >
      <div className="flex flex-col w-full z-20 xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
        <h1 className="mt-16 mb-4 text-3xl mt-16 md:text-5xl text-white  font-semibold text-center md:text-left">
          {data.data.attributes.Title}
        </h1>

        <div className="flex items-center justify-center mb-4">
          <span className="inline-block w-40 h-1 rounded-full bg-purple-800" />
          <span className="inline-block w-3 h-1 ml-1 rounded-full bg-purple-800" />
          <span className="inline-block w-1 h-1 ml-1 rounded-full bg-purple-800" />
        </div>
        <p className="leading-normal text-base md:text-1xl mb-8 text-center md:text-left z-10 text-slate-400 font-normal">
          {data.data.attributes.Description}
        </p>
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
            src="/elipse.png"
            alt="sadsa"
          />

          <Image
            className="mx-auto w-full md:w-4/5 h-96 transform -rotate-left-6 transition hover:scale-95 duration-700 ease-in-out z-20 hover:rotate-6"
            src={
              `http://localhost:1337` +
              data.data.attributes.Hero_imge.data.attributes.formats.medium.url
            }
            alt="elipse"
            width={350}
            height={700}
          />
        </div>
      </div>
    </div>
  );
}
