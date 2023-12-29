import React from "react";

import Navigation from "../../../components/navigation/navigation";
import FooterSection from "../../../components/footerSection/footerSection";
import InnerBannerSection from "../../../components/innerBannerSection/innerBannerSection";
import QualitySection from "../../../components/qualitySection/qualitySection";

export default function Page() {
  return (
      <div>
          <Navigation/>
          <InnerBannerSection/>
          <QualitySection/>

          <FooterSection/>
      </div>
  )
}
