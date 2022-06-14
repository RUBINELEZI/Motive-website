import Layout from "../components/Layout";
import OurStory from "./ourStory";
import Hero from "./hero";
import Features from "./features";
import About from "./aboutUs";
import Newsletter from "./newsletter";
import Footer from "./footer";
import ScrollToTop from "react-scroll-to-top";
import Contact from "./Contact";

export default function Home({ hero, ourStory, features, about, newsletter, contact, footer }) {
  return (
    <>
      <input type="hidden" name="form-name" value="contact" />

      <Layout>
        <Hero data={hero} />
        <OurStory data={ourStory} />
        <div className="bg-gradient-to-r from-[#343340] to-gray-800 opacity-85">
          <Features data={features} />
          <About data={about} />
        </div>
        <Newsletter data={newsletter} />
        <Contact data={contact} />
        <input type="hidden" name="form-name" value="contact" />

        <Footer data={footer} />
      </Layout>
      <ScrollToTop smooth color="#121212" height="20" width="40"
                   style={{ zIndex: 100, background: "#b794f4", borderRadius: "22px" }} />
    </>
  );
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`https://motive-admin.herokuapp.com/api/hero?populate=*`);
  const hero = await res.json();

  const res2 = await fetch(`https://motive-admin.herokuapp.com/api/our-story?populate=*`);
  const ourStory = await res2.json();

  const res3 = await fetch(`https://motive-admin.herokuapp.com/api/feature?populate=*`);
  const features = await res3.json();

  const res4 = await fetch(`https://motive-admin.herokuapp.com/api/about-us?populate=*`);
  const about = await res4.json();

  const res5 = await fetch(`https://motive-admin.herokuapp.com/api/newsletter?populate=*`);
  const newsletter = await res5.json();

  const res6 = await fetch(`https://motive-admin.herokuapp.com/api/contact-Us?populate=*`);
  const contact = await res6.json();

  const res7 = await fetch(`https://motive-admin.herokuapp.com/api/footer?populate=*`);
  const footer = await res7.json();

  // Pass data to the page via props
  return { props: { hero, ourStory, features, about, newsletter, contact, footer } };
}
