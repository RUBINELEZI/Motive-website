import Image from "next/image";

export default function OurStory({ data }) {
  const content = data.data.attributes;
  const rImage = !content.Right_Image.data
    ? "/f1.png"
    : content.Right_Image.data.attributes.formats.medium.url;

  const lImage =
    content.Left_Image.data === null
      ? "/f1.png"
      : content.Left_Image.data.attributes.formats.medium.url;

  return (
    <section id="ourStory" className="grid md:p-10">
      <div className="container px-6 py-10 mx-auto">
        <div className="mt-8 xl:mt-12 lg:grid lg:items-center lg:grid-cols-2 gap-x-5">
          <div className="w-full grid grid-cols-1 gap-12 xl:gap-16 lg:text-left text-center">
            <div
              className="space-y-3">
              <h1 className="text-3xl font-semibold capitalize lg:text-4xl text-[#fff] text-center lg:text-left">
                {content.Title}
              </h1>

              <div className="mt-2 flex items-center justify-center lg:items-start lg:justify-start">
                <span className="inline-block w-40 h-1 rounded-full bg-purple-800" />
                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-purple-800" />
                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-purple-800" />
              </div>
              <p className="text-gray-400 -text-width-20">
                {content.First_text}
              </p>
              <div className="w-full z-10 overflow-hidden">
                <Image className="mx-auto w-full md:w-4/5" src={`https://motive-admin.herokuapp.com` + lImage}
                       width={700}
                       height={600} alt="image" />
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 gap-12 xl:gap-16 lg:text-left text-center">
            <div
              className="space-y-3">
              <div className="w-full z-10 overflow-hidden">
                <Image className="mx-auto w-full md:w-4/5" src={`https://motive-admin.herokuapp.com` + rImage}
                       width={700}
                       height={600} alt="image" />
              </div>

              <p className="text-gray-400 ">
                {content.Right_Text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
