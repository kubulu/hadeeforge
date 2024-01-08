import React from "react";

import Navigation from "../components/navigation/navigation";
import FooterSection from "../components/footerSection/footerSection";
import InnerBannerSection from "../components/innerBannerSection/innerBannerSection";
import FacilitySection from "../components/facilitieSection/facilitySection";
import { ApiService } from '../services/api.service';

export default function Page(props: any) {
  return (
      <div>
          <Navigation nav={props.nav[0].acf}/>
          <InnerBannerSection banner={props.facility[0].acf.banner} />
          <FacilitySection facility={props.facility[0].acf.facility} />

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

  const resFacility = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/facilitiessection`);
  const facility = await resFacility.json();


if (nav && nav.length > 0) {
  return {props: {nav, footer, facility}}
}
else {
  return {props: {}}
}

}