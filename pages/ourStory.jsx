import Image from "next/image";
export default function OurStory() {
  return (
    <div className="container p-2 mx-auto flex flex-wrap flex-col text-white md:flex-row items-center">
      <div className="flex flex-col w-full xl:w-1/2 justify-center lg:items-start overflow-y-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
          Our <span> </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            story
          </span>
        </h1>
        <p className="leading-normal text-base  mb-8 text-center md:text-left z-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>

        <div className="w-full z-10 p-12 overflow-hidden">
          <Image
            className="mx-auto w-full md:w-4/5"
            src="/f1.png"
            width={700}
            height={600}
            alt="sadsa"
          />
        </div>
      </div>

      <img
        className="w-56 mx-auto absolute right-1/2 duration-700 ease-in-out blur-3xl  z-0"
        src="/elipse.png"
        alt="sadsa"
      />

      <div className="flex flex-col w-full xl:w-1/2 justify-center lg:items-start overflow-y-hidden">
        <div className="w-full p-12 overflow-hidden">
          <Image
            className="mx-auto w-full md:w-4/5"
            src="/f1.png"
            width={700}
            height={600}
            alt="sadsa"
          />
        </div>

        <p className="leading-normal text-base mb-8 text-center md:text-left z-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset
        </p>
      </div>
    </div>
  );
}
