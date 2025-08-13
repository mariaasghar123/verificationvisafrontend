import React from "react";
import Hero from "./Hero";
import Cards from "./Cards";
import Category from "./Category";
import Consultant from "./Consultant";
import Logos from "./Logos";
import Map from "./Map";
import VisaCategories from "./VisaCategory";
export default function HomePage({ footerRef }) {
  return (
    <div>
      
      <Hero />
      <Logos/>
      <Cards />
      <Consultant />
      <Map/>
      <Category />
      <VisaCategories scroltofooter={() => footerRef.current.scrollIntoView({ behavior: 'smooth' })} />
      
    </div>
  );
}
