import Navbar from "@/_components/Navbar";
import Hero from "@/_components/Hero";
import ImmigrationSupport from "@/_components/ImmigrationSupport";
import Footer from "@/_components/Footer";
import pngs from "@/_assets/webp";

export default function DisputeResolutionCommercial() {
  const accordionData = [
    {
      title: "Resolving Business Disputes Effectively",
      content:
        "Business conflicts can be emotional and costly. Our legal experts help business owners, managers, and shareholders resolve disputes efficiently, ensuring minimal disruption to operations.",
    },
    {
      title: "Legal Support for Directors & Shareholders",
      content:
        "We assist directors, shareholders, and partners in disputes involving company policies, financial concerns, and decision-making conflicts, ensuring fair and legal resolutions.",
    },
    {
      title: "Common Causes of Business Disputes",
      content:
        "Disagreements arise when roles shift, benefits are redefined, or power imbalances occur. We help resolve conflicts caused by asset sales, financial misconduct, and management disputes.",
    },
    {
      title: "Out-of-Court Settlements & Litigation",
      content:
        "We prioritise settlements to avoid lengthy court battles, but if litigation is necessary, our legal team provides fearless representation to protect your business interests.",
    },
    {
      title: "Strategic Legal Advice for Negotiations",
      content:
        "Legal support isn’t always about litigation. We help businesses reassess disputes, strengthen their negotiation stance, and find mutually beneficial resolutions.",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero
        banner="Clarity. Strategy. Results."
        heading="Your Trusted Commercial Law Partners"
      />
      <ImmigrationSupport
        reverseOrder={true}
        image={pngs.CommercialLaw}
        data={accordionData}
      />
      <Footer />
    </>
  );
}
