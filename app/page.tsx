import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Differentiators } from "@/components/Differentiators";
import { FeaturesBenefits } from "@/components/FeaturesBenefits";
import { DashboardPreview } from "@/components/DashboardPreview";
import { Testimonials } from "@/components/Testimonials";
import { Waitlist } from "@/components/Waitlist";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <Differentiators />
      <FeaturesBenefits />
      <DashboardPreview />
      <Testimonials />
      <Waitlist />
      <FAQ />
    </>
  );
}
