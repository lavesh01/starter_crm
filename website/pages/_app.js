import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "../styles/index.scss";

import Aos from "aos";
import { Provider } from "react-redux";
import Script from "next/script";
import SrollTop from "../components/common/ScrollTop";
import { store } from "../app/store";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  import ("bootstrap/dist/js/bootstrap");
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

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.GA_MEASUREMENT_ID}' );
        `}
      </Script>

      {/* <Script
        type="text/javascript"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/${process.env.MICROSOFT_CLARITY_ID}";
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", '${process.env.MICROSOFT_CLARITY_ID}');
          `,
        }}
      /> */}

        <Component {...pageProps} />
        <SrollTop />
      </Provider>
    </main>
  );
}
