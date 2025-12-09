import Navbar from "@/_components/Navbar";
import Hero from "@/_components/Hero";
import ImmigrationSupport from "@/_components/ImmigrationSupport";
import ContactUs from "@/_components/ContactUs";
import Footer from "@/_components/Footer";
// import { Box } from "@mui/material";
export default function EmploymentLaw() {
  const accordionData = [
    {
      title: "Expert Legal Support in Employment Law",
      content:
        "We assist with all employment law matters, ensuring you understand and exercise your rights in workplace disputes. Our team provides expert guidance to help resolve conflicts effectively.",
    },
    {
      title: "Protecting Your Career & Reputation",
      content:
        "Employment disputes can impact your income, reputation, and career. Our experts offer legal support at every step, ensuring fair treatment and helping you navigate workplace challenges.",
    },
    {
      title: "Employment Contracts & Negotiations",
      content:
        "Before starting a new role, we help review and negotiate contracts, advising on restrictive covenants, workplace disputes, disciplinary actions, and grievance issues for fair terms.",
    },
    {
      title: "Unfair Dismissal & Redundancy Claims",
      content:
        "If you’ve been unfairly dismissed or made redundant unfairly, we negotiate with employers to secure a fair settlement and protect your rights in employment-related disputes.",
    },
    {
      title: "Defending Against Workplace Restrictions",
      content:
        "We assess employer-imposed restrictions affecting future job opportunities, determining enforceability and providing defense in breach-of-contract claims to protect your career.",
    },
  ];

  return (
    <>
      <Navbar />
      {/* <Box
        sx={{
          paddingX: { xl: "60px", xxl: "none" },
          maxWidth: { xs: "1536px", xxl: "80vw" },
          width: "100%",
          margin: "auto",
          backgroundColor: "#ffffff",
        }}
      > */}
      <Hero
        text="Employment Law"
        text2=""
        backgroundImage="bgImmigrationLaw.webp"
        description="Moving abroad is challenging, but our expert team ensures a strong case for a smooth and successful immigration process."
      />
      <ImmigrationSupport data={accordionData} />
      <ContactUs />
      <Footer />
      {/* </Box> */}
    </>
  );
}
