"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import TheProblem from "@/components/TheProblem";
import WhyNow from "@/components/WhyNow";
import Explanation from "@/components/Explanation";
import HowItWorks from "@/components/HowItWorks";
import TargetAudience from "@/components/TargetAudience";
import UseCases from "@/components/UseCases";
import DeveloperPlatform from "@/components/DeveloperPlatform";
import Security from "@/components/Security";
import Comparison from "@/components/Comparison";
import Pricing from "@/components/Pricing";
import Navbar from "@/components/Navbar";
import Roadmap from "@/components/Roadmap";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ContactFormModal from "@/components/ContactFormModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main>
      <Navbar onRequestAccess={openModal} />
      <Hero onRequestAccess={openModal} />
      <TheProblem />
      <WhyNow />
      <Explanation />
      <HowItWorks />
      <TargetAudience />
      <UseCases />
      <DeveloperPlatform />
      <Security />
      <Comparison />
      <Pricing />
      <Roadmap />
      <CTA onRequestAccess={openModal} />
      <Footer />
      <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}
