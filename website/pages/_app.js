import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "../styles/index.scss";

import Aos from "aos";
import { Provider } from "react-redux";
import SrollTop from "../components/common/ScrollTop";
import { store } from "../app/store";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <main>
      <Provider store={store}>
        <Component {...pageProps} />
        <SrollTop />
      </Provider>
    </main>
  );
}
