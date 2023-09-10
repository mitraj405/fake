import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/autoscroll.css";
import "../styles/team.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Saptkrishi Scientific Pvt Ltd is an agri-tech startup 
committed to solve the problem of perishability of 
horticultural commodities."
        />
        <title>SaptKrishi Scientific Pvt. Ltd.</title>
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
