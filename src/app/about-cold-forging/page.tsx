import React from "react";

import Navigation from "../../../components/navigation/navigation";
import CertificateSection from "../../../components/certificateSection/certificateSection";
import FooterSection from "../../../components/footerSection/footerSection";
import InnerBannerSection from "../../../components/innerBannerSection/innerBannerSection";
import AboutContent from "../../../components/aboutContent/aboutContent";
import AboutForgeContent from "../../../components/aboutForgeContent/aboutForgeContent";

export default function Page() {
  return (
      <div>
          <Navigation/>
          <InnerBannerSection/>
          <div className={`container`}>
              <AboutForgeContent/>
          </div>
          <CertificateSection/>

          <FooterSection/>
      </div>
  )
}
