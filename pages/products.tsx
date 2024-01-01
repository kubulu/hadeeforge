import React from "react";

import Navigation from "../components/navigation/navigation";
import FooterSection from "../components/footerSection/footerSection";
import InnerBannerSection from "../components/innerBannerSection/innerBannerSection";
import InnerProductSection from "../components/innerProductSection/innerProductSection";

export default function Page() {
  return (
      <div>
          <Navigation/>
          <InnerBannerSection/>
          <InnerProductSection/>

          <FooterSection/>
      </div>
  )
}
