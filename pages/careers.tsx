import React from "react";

import Navigation from "../components/navigation/navigation";
import FooterSection from "../components/footerSection/footerSection";
import InnerBannerSection from "../components/innerBannerSection/innerBannerSection";
import { ApiService } from '../services/api.service';
import CareersCard from "../components/careerCards/careersCard";

export default function Page(props: any) {
  return (
      <div>
          <Navigation nav={props.nav[0].acf}/>
          <InnerBannerSection banner={props.career[0].acf.banner} />
          <div className={`container`}>
            <CareersCard career={props.career[0].acf} />
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

    const resCertificate = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/certificatesection`);
    const certificate = await resCertificate.json();

    const resCareer = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/careerspagesection`);
    const career = await resCareer.json();
  
  
  if (nav && nav.length > 0) {
    return {props: {nav, footer, certificate, career}}
  }
  else {
    return {props: {}}
  }
  
  }
