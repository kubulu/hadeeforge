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
  return (
      <div>
          <Navigation nav={props.nav[0].acf}/>
          <HeroSection hero={props.hero[0].acf} />
          <AboutSection aboutSection={props.aboutSection[0].acf} />
          <ServiceSection service={props.service[0].acf} />
          <SectorSection sector={props.sector[0].acf} />
          <ClientSection client={props.client[0].acf} />
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

  const resHero = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/herosection`);
  const hero = await resHero.json(); 

  const resAboutSection = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/aboutsection`);
  const aboutSection = await resAboutSection.json(); 

  const resService = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/servicesection`);
  const service = await resService.json(); 

  const resSector = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/sectorsection`);
  const sector = await resSector.json();

  const resClient = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/clientsection`);
  const client = await resClient.json();

  const resCertificate = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/certificatesection`);
  const certificate = await resCertificate.json();


if (nav && nav.length > 0) {
  return {props: {nav, footer, hero, aboutSection, service, sector, client, certificate}}
}
else {
  return {props: {}}
}

}