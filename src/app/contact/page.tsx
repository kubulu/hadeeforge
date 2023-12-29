import React from "react";

import Navigation from "../../../components/navigation/navigation";
import FooterSection from "../../../components/footerSection/footerSection";
import InnerBannerSection from "../../../components/innerBannerSection/innerBannerSection";
import ContactSection from "../../../components/contactSection/contactSection";

export default function Page() {
  return (
      <div>
          <Navigation/>
          <InnerBannerSection/>
          <ContactSection/>

          <FooterSection/>
      </div>
  )
}
