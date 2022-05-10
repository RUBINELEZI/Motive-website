export default function Contact({ data }) {
  const content = data.data.attributes;

  return (
    <section id="contact" className="grid ">
      <div className="container px-6 py-10 mx-auto">
        <div className="mt-8 xl:mt-12 ">
          <div className="lg:grid lg:grid-cols-2 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-semibold capitalize lg:text-4xl text-[#fff]">
                {content.Ttile}
              </h1>

              <div className="mb-2">
                <span className="inline-block w-40 h-1 rounded-full bg-purple-800" />
                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-purple-800" />
                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-purple-800" />
              </div>

              <p className="md:w-2/3 text-gray-200 mb-8 text-center">
                {content.Description}
              </p>
            </div>

            <form className="w-full max-w-lg bg-gray-700 bg-opacity-40 p-10 rounded-2xl" name="contact" method="POST"
                  data-netlify="true">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                         htmlFor="grid-first-name">
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-600 text-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-500"
                    id="grid-first-name" type="text" placeholder="" name="name" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                         htmlFor="grid-last-name">
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-600 text-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-500"
                    id="grid-last-name" type="text" placeholder="" name="lastName" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                         htmlFor="grid-password">
                    E-mail
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-600 text-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-500 focus:border-gray-500"
                    id="email" type="email" name="email" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                         htmlFor="grid-password">
                    Message
                  </label>
                  <textarea
                    className="no-resize appearance-none block w-full bg-gray-600 text-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-500 focus:border-gray-500 h-48 resize-none"
                    id="message" name="message" />
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                  <button
                    className="shadow bg-purple-400 hover:bg-purple-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit">
                    Send
                  </button>
                </div>
                <div className="md:w-2/3" />
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}


export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`https://motive-admin.herokuapp.com/api/contact-Us?populate=*`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
