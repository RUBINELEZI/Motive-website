import Layout from "../components/Layout";
import OurStory from "./ourStory";
import Hero from "./hero";
import Features from "./features";
import About from "./aboutUs";
import Newsletter from "./newsletter";
import Contact from "./contactUs";
import Footer from "./footer";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <OurStory />
        <div className="bg-gradient-to-r from-[#343340] to-gray-800 opacity-85">
          <Features />
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
