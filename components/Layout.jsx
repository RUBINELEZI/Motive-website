import Head from "next/head";
import Header from "./Header";
// import Footer from "./Footer";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className="leading-loose font-light">{children}</div>
      {/*<Footer />*/}
    </div>
  );
}

Layout.defaultProps = {
  title: "Motive",
  keywords: "Keywords for motive",
  description: "Motive"
};
