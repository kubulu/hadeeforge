import React from "react";

import Navigation from "../components/navigation/navigation";
import CertificateSection from "../components/certificateSection/certificateSection";
import FooterSection from "../components/footerSection/footerSection";
import InnerBannerSection from "../components/innerBannerSection/innerBannerSection";
import AboutContent from "../components/aboutContent/aboutContent";
import AboutForgeContent from "../components/aboutForgeContent/aboutForgeContent";
import { ApiService } from '../services/api.service';

export default function Page(props: any) {
  console.log('Propss=',props);
  return (
      <div>
          <Navigation nav={props.nav[0].acf}/>
          <InnerBannerSection banner={props.aboutForge[0].acf.banner} />
          <div className={`container`}>
              <AboutForgeContent aboutForge={props.aboutForge[0].acf.about_content} />
          </div>


          <FooterSection footer={props.footer[0].acf} />
      </div>
  )
}


export async function getServerSideProps() {
    const baseUrl = new ApiService();
    const response = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/navigationsection`);
    const nav = await response.json(); 

    const resFooter = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/footersection`);
    const footer = await resFooter.json();

    // const resInnerBanner = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/innerbannersection`);
    // const banner = await resInnerBanner.json();

    const resCertificate = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/certificatesection`);
    const certificate = await resCertificate.json();

    const resAboutForge = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/aboutforgesection`);
    const aboutForge = await resAboutForge.json();
  
  
  if (nav && nav.length > 0) {
    return {props: {nav, footer, certificate, aboutForge}}
  }
  else {
    return {props: {}}
  }
  
  }