// src/App.jsx
import React from 'react';
import SoftwareSolutions from './SoftwareSolutions';
import IndustrySolutions from "./Industry"
import CelebrationSection from './CelebrationSection';
import PartnerSection from './PartnerSection';
import PhilosophyTimeline from './PhilosophyTimeline';
import JourneySection from './JourneySection';
import TeamShowcase from './TeamShowcase';
import AssociatePartners from './AssociatePartners';
import Footer from './Footer';
import Header from './Header';
import HeroSection from './HeroSection';
import FoundersSection from './FoundersSection';


export const App = () => {
  return (
    <div className=" bg-[#0b0a14]">
      
      <Header />
      <HeroSection />
      <FoundersSection />
      <SoftwareSolutions />
      <IndustrySolutions />
      <CelebrationSection />
      <PartnerSection />
      <PhilosophyTimeline />
      <JourneySection />
      <TeamShowcase />
      <AssociatePartners />
      <Footer />
    </div>
  );
};
