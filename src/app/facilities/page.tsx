import React from "react";

import Navigation from "../../../components/navigation/navigation";
import FooterSection from "../../../components/footerSection/footerSection";
import InnerBannerSection from "../../../components/innerBannerSection/innerBannerSection";
import FacilitySection from "../../../components/facilitieSection/facilitySection";

export default function Page() {
  return (
      <div>
          <Navigation/>
          <InnerBannerSection/>
          <FacilitySection/>

          <FooterSection/>
      </div>
  )
}
