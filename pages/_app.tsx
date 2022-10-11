import "../styles/globals.css"
import type { AppProps } from "next/app"
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
