import React from "react";
import '../styles/global.scss';
import Navigation from "../components/navigation/navigation";
import HeroSection from "../components/heroSection/heroSection";
import AboutSection from "../components/aboutSection/aboutSection";
import ServiceSection from "../components/serviceSection/serviceSection";
import SectorSection from "../components/sectorSection/sectorSection";
import ClientSection from "../components/clientSection/clientSection";
import CertificateSection from "../components/certificateSection/certificateSection";
import FooterSection from "../components/footerSection/footerSection";
import { ApiService } from '../services/api.service';

export default function Home(props: any) {
  // console.log('PROPS==',props);
  return (
      <div>
          <Navigation nav={props.nav[0].acf}/>
          <HeroSection hero={props.home[0].acf.banner} />
          <AboutSection aboutSection={props.home[0].acf.about_section} />
          <ServiceSection service={props.home[0].acf.service_banner} />
          <SectorSection sector={props.home[0].acf.sector} />
          <ClientSection client={props.home[0].acf.client} />
          <CertificateSection certificate={props.certificate[0].acf} />
          <FooterSection footer={props.footer[0].acf}/>
      </div>
  )
}

export async function getServerSideProps() {
  const baseUrl = new ApiService();
  const response = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/navigationsection`);
  const nav = await response.json(); 

  const resFooter = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/footersection`);
  const footer = await resFooter.json(); 

  const resHome = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/homepagesection`);
  const home = await resHome.json(); 

  const resCertificate = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/certificatesection`);
  const certificate = await resCertificate.json();


if (nav && nav.length > 0) {
  return {props: {nav, footer, home, certificate}}
}
else {
  return {props: {}}
}

}