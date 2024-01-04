import React from "react";
// import '../styles/globals.scss';
import '../styles/global.scss';
// import 'animate.css';
import Script from "next/script";




import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
  <React.Fragment>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" />
      <Component {...pageProps} />
    </React.Fragment>
  )
}