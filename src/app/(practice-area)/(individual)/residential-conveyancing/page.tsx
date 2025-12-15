import Navbar from "@/_components/Navbar";
import Hero from "@/_components/Hero";
import ImmigrationSupport from "@/_components/ImmigrationSupport";
import Footer from "@/_components/Footer";

export default function ResidentialConveyancing() {
  const accordionData = [
    {
      title: "Expert Support for Buying or Selling Your Home",
      content:
        "This will be the content we will use in this option: The purchase of a home is the biggest single transaction majority of the population shall make. And therefore, our clients deserve the finest quality and guidance they aim to seek. Whether you are purchasing or selling, you can be guaranteed that our conveyancing team at Conquest Law Solicitors will work firmly on your behalf to achieve smooth completions of transactions.",
    },
    {
      title: "Comprehensive Advice on All Residential Property Matters",
      content:
        "Our team of experts, have in-depth technical knowledge of conveyancing and residential property law including a well-established knowledge of the local market. Our Property Solicitors can advise on all aspects of residential property, which can include buying, selling, remortgages, investment properties, buy-to-let and the transfer of property following a divorce or separation. In addition to this, our team can also advise on complexities such as the transfer of ownership of a property following the death of beloved one.",
    },
    {
      title: "Accredited by CQS for Trusted Property Transactions",
      content:
        "We're proud to be part of the Law Society's CQS, which is a sign of quality for legal professionals involved in buying or selling property. It's a sign of trust from some of the biggest lenders in the UK, so if you're looking to buy or sell a property, you know you're in good hands. Being part of CQS means that we meet the highest standards for residential conveyancing practices, so you can trust that we're honest and follow industry best practices. That means being clear about what needs to be done when you buy or sell property, being able to provide the service you need, and being open about costs to make sure your property transaction goes as smooth and fast as possible.",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero
        banner="Trust You Can Count On"
        heading="Helping You Build Your Future Abroad"
      />
      <ImmigrationSupport data={accordionData} />
      <Footer />
    </>
  );
}
