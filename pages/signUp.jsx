export default function SignUp({ data }) {
  const content = data.data.attributes;

  return (
    <section className="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden">
      <div className="relative container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <div className="max-w-md">
                <span className="text-lg text-blue-400 font-medium">Register Account</span>
                <h2 className="mt-8 mb-12 text-5xl font-medium font-heading text-white">Start your journey by creating
                  an account.</h2>
                <p className="text-lg text-gray-200"><span>The brown fox jumps over</span> <span
                  className="text-white">the lazy dog.</span></p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <form className="w-full max-w-lg bg-gray-700 bg-opacity-40 p-10 rounded-2xl">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-400 text-xs font-medium mb-2"
                           htmlFor="grid-first-name">
                      First Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-600 text-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-500"
                      id="grid-first-name" type="text" placeholder="" name="name" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-400 text-xs font-medium mb-2"
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
                    <label className="block uppercase tracking-wide text-gray-400 text-xs font-medium mb-2"
                           htmlFor="email">
                      E-mail
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-600 text-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-500 focus:border-gray-500"
                      id="email" type="email" name="email" />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-400 text-xs font-medium mb-2"
                           htmlFor="number">
                      Age
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-600 text-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-500 focus:border-gray-500"
                      id="number" type="number" name="age" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label htmlFor="gender"
                           className="block mb-2 text-sm font-medium text-gray-400">Gender</label>
                    <select id="gender"
                            className="bg-gray-600 text-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-gray-500 focus:border-gray-500 block w-full">
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label htmlFor="city"
                           className="block mb-2 text-sm font-medium text-gray-400">City</label>
                    <select id="city"
                            className="bg-gray-600 text-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-gray-500 focus:border-gray-500 block w-full">
                      <option value="1">City 1</option>
                      <option value="2">City 2</option>
                      <option value="3">City 3</option>
                      <option value="4">City 4</option>
                    </select>
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label htmlFor="music"
                           className="block mb-2 text-sm font-medium text-gray-400">Music streaming service</label>
                    <select id="music"
                            className="bg-gray-600 text-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-gray-500 focus:border-gray-500 block w-full">
                      <option value="S">Spotify</option>
                      <option value="AM">Apple music</option>
                      <option value="A">Amazon music</option>
                      <option value="T">Tidal</option>
                      <option value="YM">Youtube music</option>
                    </select>
                  </div>
                </div>

                <label className="block mb-2 text-sm font-medium text-gray-400"
                       htmlFor="phone">
                  What smartphone are you using?
                </label>
                <div className="flex flex-wrap -mx-3 mb-6 ml-1">
                  <div className="flex items-center mr-4">
                    <input id="inline-radio" type="radio" value="" name="inline-radio-group"
                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="inline-radio"
                           className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">IOS</label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input id="inline-2-radio" type="radio" value="" name="inline-radio-group"
                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="inline-2-radio"
                           className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Android</label>
                  </div>
                </div>


                <div className="md:flex md:items-center">
                  <div className="md:w-1/3">
                    <button
                      className="shadow bg-purple-400 hover:bg-purple-500 focus:shadow-outline focus:outline-none text-white py-1 px-3 rounded"
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
      </div>
    </section>
  );
}


export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`https://motive-admin.herokuapp.com/api/our-story?populate=*`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
