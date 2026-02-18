import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { Differentiators } from "@/components/Differentiators";
import { DashboardPreview } from "@/components/DashboardPreview";
import { Waitlist } from "@/components/Waitlist";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <Differentiators />
      <DashboardPreview />
      <Waitlist />
      <FAQ />
    </>
  );
}
