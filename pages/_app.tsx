import React from "react";
import '../styles/global.scss';
import Script from "next/script";




import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
  <React.Fragment>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" />



      <Component {...pageProps} />

      {/*<Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />*/}
      {/*<Script>*/}
      {/*    AOS.init();*/}
      {/*</Script>*/}

    </React.Fragment>
  )
}