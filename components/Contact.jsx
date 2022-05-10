import { useEffect, useState } from "react";

export default function Contact({ data }) {
  const content = data.data.attributes;
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);
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

            <form name="contact" data-netlify="true" action="/?success=true"
            >
              <p>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
              </p>
              <p>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" />
              </p>
              <p>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message"></textarea>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
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

