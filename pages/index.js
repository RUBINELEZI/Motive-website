import Layout from "../components/Layout";
import OurStory from "./ourStory";
import Hero from "./hero";
import Features from "./features";
import About from "./aboutUs";
import Newsletter from "./newsletter";
import Contact from "./contactUs";
import Footer from "./footer";
import ScrollToTop from "react-scroll-to-top";

export default function Home({
  hero,
  ourStory,
  features,
  about,
  newsletter,
  contact,
}) {
  return (
    <>
      <Layout>
        <Hero data={hero} />
        <OurStory data={ourStory} />
        <div className="bg-gradient-to-r from-[#343340] to-gray-800 opacity-85">
          <Features data={features} />
          <About />
        </div>
        <Newsletter />
        <Contact />
        <Footer />
      </Layout>
      <ScrollToTop smooth color="#121212" height="20" width="40"
                   style={{ zIndex: 100, background: "#b794f4", borderRadius: "22px" }} />
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("sabdhsadjhsa");
  // Fetch data from external API
  const res = await fetch(`http://localhost:1337/api/hero?populate=*`);
  const hero = await res.json();

  const res2 = await fetch(`http://localhost:1337/api/our-story?populate=*`);
  const ourStory = await res2.json();

  const res3 = await fetch(`http://localhost:1337/api/feature?populate=*`);
  const features = await res3.json();

  // Pass data to the page via props
  return { props: { hero, ourStory, features } };
}
