import React from "react";

// Load first: component styles must be able to override the shared utilities.
import "./styles/tokens.css";
import "./styles/base.css";

import useReveal from "./hooks/useReveal";
import useScrollState from "./hooks/useScrollState";

import Cursor from "./ui/Cursor";
import ScrollProgress from "./ui/ScrollProgress";

import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Metrics from "./sections/Metrics";
import MarqueeBand from "./sections/MarqueeBand";
import Work from "./sections/Work";
import CaseStudies from "./sections/CaseStudies";
import AiTesting from "./sections/AiTesting";
import Experience from "./sections/Experience";
import Capabilities from "./sections/Capabilities";
import Toolkit from "./sections/Toolkit";
import Domains from "./sections/Domains";
import Philosophy from "./sections/Philosophy";
import About from "./sections/About";
import Notes from "./sections/Notes";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  const {progress, scrolled} = useScrollState();

  useReveal();

  return (
    <>
      <ScrollProgress progress={progress} />
      <Cursor />
      <Nav scrolled={scrolled} />

      <main id="main">
        <Hero />
        <Metrics />
        <MarqueeBand />
        <Work />
        <CaseStudies />
        <AiTesting />
        <Experience />
        <Capabilities />
        <Toolkit />
        <Domains />
        <Philosophy />
        <About />
        <Notes />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
