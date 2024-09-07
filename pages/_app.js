import "@/styles/globals.css";
import Header from "@/Components/Header/header";
import Footer from "@/Components/Header/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header /> 
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
