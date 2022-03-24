import Head from "next/head";
import Layout from "../components/Layout";
import OurStory from "./ourStory";
import Hero from "./hero";
import Features from "./features";
import About from "./aboutUs";
import Newsletter from "./newsletter";
import Contact from "./contactUs";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <OurStory />
      <Features />
      <About />
      <Newsletter />
      <Contact />
    </Layout>
  );
}
