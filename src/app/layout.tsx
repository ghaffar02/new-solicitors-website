import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeRegistry from "./ThemeRegistry";
import ConsentGate from "@/_components/privacy/ConsentGate";
import AnalyticsGA from "@/_components/privacy/AnalyticsGA";
import MetaPixel from "@/_components/privacy/MetaPixel";
// import CookieBanner from "@/_components/privacy/CookieBanner";
export const metadata: Metadata = {
  title: "Conquest | Right Way to the Legal Solution",
  description: "Conquest | Right Way to the Legal Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "";
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
        <ToastContainer />

        <ConsentGate>
          {gaId && <AnalyticsGA gaId={gaId} />}
          {pixelId && <MetaPixel pixelId={pixelId} />}
        </ConsentGate>

        {/* <CookieBanner /> */}
      </body>
    </html>
  );
}
