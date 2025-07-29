import React from "react";
import Hero from "./Hero";
import Cards from "./Cards";
import Category from "./Category";
import Consultant from "./Consultant";
import Logos from "./Logos";
export default function HomePage() {
  return (
    <div>
      <Hero />
      <Logos/>
      <Cards />
      <Consultant />
      <Category />
    </div>
  );
}
