import React from "react";

import Navigation from "../components/navigation/navigation";
import FooterSection from "../components/footerSection/footerSection";
import InnerBannerSection from "../components/innerBannerSection/innerBannerSection";
import ContactSection from "../components/contactSection/contactSection";
import { ApiService } from '../services/api.service';

export default function Page(props: any) {
  return (
      <div>
          <Navigation nav={props.nav[0].acf}/>
          <InnerBannerSection banner={props.contact[0].acf.banner} />
          <ContactSection contact={props.contact[0].acf} />
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

  const resContact = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/contactsection`);
  const contact = await resContact.json();

if (nav && nav.length > 0) {
  return {props: {nav, footer, contact}}
}
else {
  return {props: {}}
}

}
