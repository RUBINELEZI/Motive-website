import Image from "next/image";
import iphone from "../public/images/sharedImages/iphone.png";
import Rectangle from "../public/images/featureImages/Rectangle 646.png";

export default function Features() {
  return (
    <div className="mb-24 ">
      <h1 className="text-3xl md:text-5xl md:p-10 font-bold leading-tight  md:text-left bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-fuchsia-500 opacity-75 flex flex-row justify-center text-center mt-12">
        Features
      </h1>
      <div className="mt-24 text-white ">
        <div className="flex flex-row justify-center text-center">
          <div className=" w-1/4 space-y-24 h-full mt-8 mr-12">
            <div className="space-y-4">
              <Image width="50px" height="50px" src={Rectangle} />
              <h1 className="text-2xl">Feature 1</h1>
              <p className="text-sm font-thin">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="space-y-4">
              <Image width="50px" height="50px" src={Rectangle} />
              <h1 className="text-2xl">Feature 1</h1>
              <p className="text-sm font-thin">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <img
              className="w-96 absolute flex flex-row justify-center duration-700 ease-in-out blur-3xl  z-0"
              src="/elipse.png"
              alt="sadsa"
            />
            <Image src={iphone} width="300px" height="600px" />
          </div>
          <div className=" w-1/4 space-y-24 h-full mt-8 ml-12">
            <div className="space-y-4">
              <Image width="50px" height="50px" src={Rectangle} />
              <h1 className="text-2xl">Feature 1</h1>
              <p className="text-sm font-thin">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="space-y-4">
              <Image width="50px" height="50px" src={Rectangle} />
              <h1 className="text-2xl">Feature 1</h1>
              <p className="text-sm font-thin">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
