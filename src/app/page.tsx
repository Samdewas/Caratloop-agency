import DigitalMarketingMain from "@/pages/homes/digital-marketing/DigitalMarketingMain";
// import HomeMain from "@/pages/homes/home/HomeMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Carat Loop",
};

export default function Home() {
  return (
    // <HomeMain />
    <DigitalMarketingMain/>
  );
}
