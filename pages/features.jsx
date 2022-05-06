import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { useState } from "react";

export default function Features({ data }) {
  const [showMedia, setShowMedia] = useState("");
  const content = data.data.attributes;
  const media1 = `http://localhost:1337` + content.Feature_1.Feature_icon.data.attributes.formats.medium.url;
  const media2 = `http://localhost:1337` + content.Feature_2.Feature_icon.data.attributes.formats.medium.url;
  const media3 = `http://localhost:1337` + content.Feature_3.Feature_icon.data.attributes.formats.medium.url;
  const media4 = `http://localhost:1337` + content.Feature_4.Feature_icon.data.attributes.formats.medium.url;
  const media5 = `http://localhost:1337` + content.Feature_5.Feature_icon.data.attributes.formats.medium.url;

  function mediaHover() {
    if (showMedia === "media1") {
      return media1;
    } else if (showMedia === "media2") {
      return media2;
    } else if (showMedia === "media3") {
      return media3;
    } else if (showMedia === "media4") {
      return media4;
    } else return media5;
  }

  return (
    <section id="features" className="grid md:p-10">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold capitalize lg:text-4xl text-[#fff] text-center">
          {content.Title}
        </h1>

        <div className="mt-2 flex items-center justify-center">
          <span className="inline-block w-40 h-1 rounded-full bg-purple-800" />
          <span className="inline-block w-3 h-1 ml-1 rounded-full bg-purple-800" />
          <span className="inline-block w-1 h-1 ml-1 rounded-full bg-purple-800" />
        </div>

        <div className="mt-8 xl:mt-12 lg:grid lg:items-center lg:grid-cols-3">
          <div className="w-full grid grid-cols-1 gap-8 xl:gap-16 lg:text-right text-center">
            <div
              className="space-y-3 md:mr-3 cursor-pointer"
              onMouseOver={() => setShowMedia("media1")}
            >
              <span className="inline-block p-3  rounded-xl text-[#fff] bg-[#6B21A7]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold capitalize text-[#fff]">
                {content.Feature_1.Feature_title}
              </h1>

              <p className="text-gray-400 ">
                {content.Feature_1.Feature_Description}
              </p>
            </div>

            <div
              className="space-y-3 md:mr-3 mb-6 cursor-pointer"
              onMouseOver={() => setShowMedia("media2")}
            >
              <span className="inline-block p-3  rounded-xl text-[#fff] bg-[#6B21A7]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold  capitalize text-[#fff]">
                {content.Feature_2.Feature_title}
              </h1>

              <p className="text-gray-400 ">
                {content.Feature_2.Feature_Description}
              </p>
            </div>
          </div>

          <div className="w-full items-center flex justify-center">
            <img
              className="w-96 absolute flex flex-row justify-center duration-700 ease-in-out blur-3xl z-0"
              src="/eclipse.png"
              alt="eclipse"
            />
            {/* <Image src={iphone} width="300px" height="600px" alt="iphone" />*/}
            <div className="border-[12px] rounded-[42px] border-slate-600 border-opacity-20 md:hidden">
              <div className="w-[300px] h-[600px]">
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  onSwiper={(swiper) => console.log(swiper)}
                  className="rounded-[32px] "
                >
                  <SwiperSlide>
                    <Image
                      src={media1}
                      width={300}
                      height={600}
                      alt="mockup"
                      className="rounded-[32px] object-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={media2}
                      width={300}
                      height={600}
                      alt="mockup"
                      className="rounded-[32px] object-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={media3}
                      width={300}
                      height={600}
                      alt="mockup"
                      className="rounded-[32px] object-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={media4}
                      width={300}
                      height={600}
                      alt="mockup"
                      className="rounded-[32px] object-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={media5}
                      width={300}
                      height={600}
                      alt="mockup"
                      className="rounded-[32px] object-cover"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div className="border-[12px] rounded-[42px] border-slate-600 border-opacity-20 hidden md:block">
              <div className="w-[300px] h-[600px]">
                <Image
                  src={mediaHover()}
                  width={300}
                  height={600}
                  alt="mockup"
                  className="rounded-[32px] object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 gap-8 xl:gap-16 lg:text-left text-center">
            <div
              className="space-y-3 md:ml-3 mt-6 cursor-pointer"
              onMouseOver={() => setShowMedia("media3")}
            >
              <span className="inline-block p-3   rounded-xl text-[#fff] bg-[#6B21A7]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </span>
              <h1 className="text-2xl font-semibold capitalize text-[#fff]">
                {content.Feature_3.Feature_title}
              </h1>

              <p className="text-gray-400 ">
                {content.Feature_3.Feature_Description}
              </p>
            </div>

            <div
              className="space-y-3 md:ml-3 cursor-pointer"
              onMouseOver={() => setShowMedia("media4")}
            >
              <span className="inline-block p-3  rounded-xl text-[#fff] bg-[#6B21A7]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </span>
              <h1 className="text-2xl font-semibold capitalize text-[#fff]">
                {content.Feature_4.Feature_title}
              </h1>

              <p className="text-gray-400 ">
                {content.Feature_4.Feature_Description}
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center text-center mt-6 space-y-3 md:ml-3 cursor-pointer"
          onMouseOver={() => setShowMedia("media5")}
        >
          <span className="inline-block p-3   rounded-xl text-[#fff] bg-[#6B21A7]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </span>
          <h1 className="text-2xl font-semibold capitalize text-[#fff]">
            {content.Feature_5.Feature_title}
          </h1>

          <p className="text-gray-400 ">
            {content.Feature_5.Feature_Description}
          </p>
        </div>
      </div>
    </section>
  );
}
