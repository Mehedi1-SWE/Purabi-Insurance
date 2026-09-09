import type { Route } from "./+types/Home";

import Category from "../../components/Category";
import ClaimsTracker from "../../components/ClaimsTracker";
import Hero from "../../components/home/Hero";
import WorkingProcess from "../../components/home/WorkingProcess";
import MobileApp from "../../components/MobileApp";
import NewsEvents from "../../components/NewsEvents";
import PriceCalculator from "../../components/PriceCalculator";
import TrustedPartners from "../../components/TrustedPartners";

export function meta({ }: Route.MetaArgs) {
  return [
    {
      title: "Purabi General Insurance",
    },
    {
      name: "description",
      content: "Purabi General Insurance Company Limited",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <PriceCalculator />
      <Category />
      <ClaimsTracker />
      <TrustedPartners />
      <WorkingProcess />
      <NewsEvents />
      <MobileApp />
    </>
  );
}