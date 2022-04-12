import Image from "next/image";
export default function OurStory() {
  return (
    <div
      id="ourStory"
      className=" container  md:p-10 p-4 mx-auto flex flex-wrap flex-col text-white md:flex-row items-center"
    >
      <div className="flex flex-col md:pr-10 w-full xl:w-1/2 justify-center lg:items-start overflow-y-hidden">
        <div className="mb-10">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white text-center">
            Our story{" "}
          </h1>
          <div className="mt-2 flex items-center justify-center">
            <span className="inline-block w-40 h-1 rounded-full bg-purple-800"></span>
            <span className="inline-block w-3 h-1 ml-1 rounded-full bg-purple-800"></span>
            <span className="inline-block w-1 h-1 ml-1 rounded-full bg-purple-800"></span>
          </div>
        </div>
        <p className="leading-normal text-base  mb-8 text-center md:text-left z-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s,
        </p>

        <div>

        </div>

        <div className="w-full z-10 overflow-hidden">
          <Image
            className="mx-auto w-full md:w-4/5"
            src="/f1.png"
            width={700}
            height={600}
            alt="sadsa"
          />
        </div>
      </div>

      <div className="flex flex-col w-full md:pl-10 xl:w-1/2 justify-center lg:items-start overflow-y-hidden">
        <div className="w-full  overflow-hidden">
          <Image
            className="mx-auto w-full md:w-4/5"
            src="/f1.png"
            width={700}
            height={600}
            alt="sadsa"
          />
        </div>

        <p className="mb-8 text-center md:text-left z-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
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
