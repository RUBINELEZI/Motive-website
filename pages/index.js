import Head from "next/head";
import Layout from "../components/Layout";
import OurStory from "./ourStory";
import Hero from "./hero";
import Features from "./features";
import About from "./aboutUs";
import Newsletter from "./newsletter";
import Contact from "./contactUs";
import Footer from "./footer";

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
    </>
  );
}
