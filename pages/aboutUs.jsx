import Image from "next/image";

export default function About({ data }) {
  const content = data.data.attributes;
  const media1 = `http://localhost:1337` + content.Person_1.Photo.data.attributes.formats.small.url;
  const media2 = `http://localhost:1337` + content.Person_2.Photo.data.attributes.formats.small.url;
  const media3 = `http://localhost:1337` + content.Person_3.Photo.data.attributes.formats.small.url;
  return (
    <div id="aboutUs" className="container p-4 mx-auto flex flex-wrap flex-col md:flex-row h-full items-center ">
      <div className="bg-gradient-to-r from-gray-600 to-gray-700 w-full md:h-fit h- absolute m-0 opacity-50 left-0" />
      <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl text-[#fff] text-center mb-2">
          {content.Title}
        </h1>

        <div className="flex items-center justify-center mb-2">
          <span className="inline-block w-40 h-1 rounded-full bg-purple-800" />
          <span className="inline-block w-3 h-1 ml-1 rounded-full bg-purple-800" />
          <span className="inline-block w-1 h-1 ml-1 rounded-full bg-purple-800" />
        </div>

        <p
          className="leading-normal text-base md:text-1xl text-md mb-8 text-center md:text-left z-10 text-slate-400 font-normal">
          {content.Description}
        </p>
      </div>
      <img
        className="w-screen mx-auto absolute duration-700 ease-in-out  left-0 top-1/3 opacity-0 md:opacity-100 z-0"
        src="/line.png"
        alt="elipse"
      />

      <img
        className="w-56 mx-auto absolute right-1/3 md:left-2/3 hidden md:inline duration-700 ease-in-out blur-3xl  z-0"
        src="/eclipse.png"
        alt="sadsa"
      />

      <div className="w-full  xl:w-3/5 md:p-12 overflow-hidden">
        <div
          className="aboutUsCard   p-6 m-3 max-w-sm mx-auto bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl shadow-md flex items-center space-x-4 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
          <div className="shrink-0">
            <div
              className="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-blue-500 text-xl text-white uppercase">
              <Image src={media1} layout={"fill"} alt="person" className="rounded-full" />
            </div>
          </div>
          <div>
            <div className="text-xl font-medium text-white">{content.Person_1.Name}</div>
            <p className="text-sm text-white">
              {content.Person_1.Description}
            </p>
          </div>
        </div>

        <div
          className="aboutUsCard p-6 m-3 max-w-sm mx-auto bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl shadow-md flex items-center space-x-4 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
          <div className="shrink-0">
            <div
              className="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-blue-500 text-xl text-white uppercase">
              <Image src={media2} layout={"fill"} alt="person" className="rounded-full" />
            </div>
          </div>
          <div>
            <div className="text-xl font-medium text-white">{content.Person_2.Name}</div>
            <p className="text-sm text-white">
              {content.Person_3.Description}
            </p>
          </div>
        </div>

        <div
          className="aboutUsCard p-6 m-3 max-w-sm mx-auto bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl shadow-md flex items-center space-x-4 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
          <div className="shrink-0">
            <div
              className="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-blue-500 text-xl text-white uppercase">
              <Image src={media3} layout={"fill"} alt="person" className="rounded-full" />
            </div>
          </div>
          <div>
            <div className="text-xl font-medium text-white">{content.Person_2.Name}</div>
            <p className="text-sm text-white">
              {content.Person_2.Description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
