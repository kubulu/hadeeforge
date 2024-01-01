import React from "react";

import Navigation from "../components/navigation/navigation";
import HeroSection from "../components/heroSection/heroSection";
import AboutSection from "../components/aboutSection/aboutSection";
import ServiceSection from "../components/serviceSection/serviceSection";
import SectorSection from "../components/sectorSection/sectorSection";
import ClientSection from "../components/clientSection/clientSection";
import CertificateSection from "../components/certificateSection/certificateSection";
import FooterSection from "../components/footerSection/footerSection";
import InnerBannerSection from "../components/innerBannerSection/innerBannerSection";
import AboutContent from "../components/aboutContent/aboutContent";

export default function Page() {
  return (
      <div>
          <Navigation/>
          <InnerBannerSection/>
          <div className={`container`}>
              <AboutContent/>
          </div>
          <CertificateSection/>

          <FooterSection/>
      </div>
  )
}
