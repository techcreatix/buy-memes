import React from "react";
import Layout from "../layout/Layout";
import Banner from "../components/Banner";
import HottestCards from "../components/HottestCards";
import LearnMore from "../components/LearnMore";

export default function LandingPage() {
  return (
    <Layout >
      <Banner />
      <div className="flex flex-col gap-5 mt-8 lg:w-[992px] w-full mx-auto">
        <h2 className="font-bold hidden md:block text-[32px]">Hottest</h2>
        <h2 className="font-bold block md:hidden text-[32px]">Trending</h2>

        <HottestCards />
      </div>
      <div className="flex flex-col gap-5 mt-3 lg:w-[992px] w-full mx-auto">
        <h2 className="font-bold text-[32px]">Learn More</h2>
        <LearnMore />
      </div>
    </Layout>
  );
}
