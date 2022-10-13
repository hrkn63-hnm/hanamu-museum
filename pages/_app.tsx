import "../styles/globals.css"
import type { AppProps } from "next/app"
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Header from "../components/Header";
>>>>>>> f80c79d (a)
=======
>>>>>>> 64cc830 (first commit)
import "swiper/css/bundle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Header /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
