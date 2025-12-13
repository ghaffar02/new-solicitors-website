import Navbar from "@/_components/Navbar";
import Hero from "@/_components/Hero";
import ImmigrationSupport from "@/_components/ImmigrationSupport";
import ContactUs from "@/_components/ContactUs";
import Footer from "@/_components/Footer";
// import { Box } from "@mui/material";
export default function ActionsAgainstPublicBodies() {
  const accordionData = [
    {
      title: "Ensuring Accountability of Public Bodies",
      content:
        "At Conquest Law Solicitors, we work to hold public bodies accountable when they fail to uphold their standards. Our legal team ensures that state authorities like the Police, Local Authority, and Home Office do not infringe upon your rights or act unlawfully.",
    },
    {
      title: "Legal Claims Against the Police",
      content:
        "We assist individuals in filing complaints and civil claims against the Police for wrongful arrest, assault, false imprisonment, malicious prosecution, and other unlawful acts that violate legal rights and due process.",
    },
    {
      title: "Challenging Unlawful Immigration Detention",
      content:
        "We handle claims against the Home Office for immigration detention-related issues, including assault, misfeasance, false imprisonment, and unlawful detention of children, torture victims, and individuals with mental health conditions.",
    },
    {
      title: "Victim’s Right to Review & CPS Cases",
      content:
        "If the Crown Prosecution Service (CPS) fails to prosecute an offence, we assist in applications for a ‘Victim’s Right to Review’ and provide legal support for public law challenges related to prosecutorial decisions.",
    },
    {
      title: "Legal Action Against Local Authorities",
      content:
        "We challenge decisions made by local councils, particularly in cases where there are allegations of discrimination, prejudice, or unlawful practices. Our legal team ensures fairness and adherence to legal standards.",
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
      <Hero banner="" heading="" />
      <ImmigrationSupport data={accordionData} />
      <ContactUs />
      <Footer />
      {/* </Box> */}
    </>
  );
}
