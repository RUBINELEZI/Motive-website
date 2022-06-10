import Image from "next/image";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsletterForm from "../components/NewsletterForm";

export default function Newsletter({ data }) {
  const content = data.data.attributes;
  const media1 = content.Image.data.attributes.formats.medium.url;
  const url = "https://app.us14.list-manage.com/subscribe/post?u=763d1f99d4cdb54542bb41a55&amp;id=8ddd0c7dc4";

  return (
    <div id="newsletter" className="text-white px-10 bg-gradient-to-r from-[#E8A980] to-[#6A54EF] grid lg:grid-cols-2">
      <div className="flex flex-row justify-center order-2 md:order-1 mb-0">
        <div className="newsletterIphones md:py-10">
          <Image
            width="630px"
            height="543px"
            src={media1}
            alt="iphones"
            quality={100}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center mt-9 order-1 md:order-2">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl text-[#fff] ml-4">
          {content.Title}
        </h1>

        <div className="mt-2 flex mb-2 ml-4">
          <span className="inline-block w-40 h-1 rounded-full bg-purple-800" />
          <span className="inline-block w-3 h-1 ml-1 rounded-full bg-purple-800" />
          <span className="inline-block w-1 h-1 ml-1 rounded-full bg-purple-800" />
        </div>

        <p className="md:w-2/3 ml-4">
          {content.Description}
        </p>
        {/*<form className="ml-4"*/}
        {/*      action="https://app.us14.list-manage.com/subscribe/post?u=763d1f99d4cdb54542bb41a55&amp;id=8ddd0c7dc4"*/}
        {/*      method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank"*/}
        {/*      novalidate>*/}
        {/*  <div*/}
        {/*    className="flex h-fit items-stretch mt-12 sm:max-w-md mb-8 sm:flex sm:items-center bg-[#4E4B66] rounded-xl pr-4">*/}
        {/*    <input*/}
        {/*      className="bg-[#4E4B66] rounded-lg text-base leading-none text-white p-3 w-4/5 border border-transparent focus:outline-none"*/}
        {/*      type="email"*/}
        {/*      placeholder="Enter your email."*/}
        {/*      value="" name="EMAIL" id="mce-EMAIL"*/}
        {/*    />*/}
        {/*    <button*/}
        {/*      className="flex w-32 my-3 bg-[#A996FF] rounded-xl p-3 pt-[15px] text-base font-normal leading-none text-[#4E4B66]  focus:outline-none"*/}
        {/*      type="submit">*/}
        {/*      Subscribe*/}
        {/*      <FontAwesomeIcon icon={faArrowRight} className="ml-4" />*/}
        {/*    </button>*/}
        {/*  </div>*/}
        {/*</form>*/}

        <MailchimpSubscribe
          url={url}
          render={(props) => {
            const { subscribe, status, message } = props || {};
            return (
              <NewsletterForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
              />
            );
          }}
        />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`https://motive-admin.herokuapp.com/api/newsletter?populate=*`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
