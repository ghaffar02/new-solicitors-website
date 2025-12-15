import Navbar from "@/_components/Navbar";
import Hero from "@/_components/Hero";
import Footer from "@/_components/Footer";
import InsightsAndLegalGuidance from "./_sections/InsightsAndLegalGuidance";

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <Hero
        banner="Stay Informed"
        heading="Your source for trusted legal updates"
        backgroundImage="bgNews.png"
      />
      <InsightsAndLegalGuidance />
      <Footer />
    </>
  );
}
