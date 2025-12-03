import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";

export const metadata: Metadata = {
  title: "Rako Foods | Local Bar, Homemade Food & Refreshing Drinks | RakoFoods.org",
  description:
    "Rako Foods (RakoFoods) - Your premier local bar serving homemade food, refreshing drinks, and delicious yoghurt. Perfect for weddings, funerals, birthdays, and special events. Discover authentic local bar services with quality homemade meals and beverages.",
  keywords: [
    "rako",
    "rakofood",
    "rakofoods",
    "rako foods",
    "rakofoods.org",
    "local bar",
    "homemade food",
    "refreshing drinks",
    "yoghurt",
    "yogurt",
    "local bar services",
    "event catering",
    "wedding catering",
    "funeral catering",
    "birthday catering",
    "homemade meals",
    "fresh drinks",
    "local cuisine",
    "bar services",
    "food and drinks",
    "event bar services",
    "catering services",
    "local food bar",
    "authentic homemade food",
    "quality refreshing beverages",
  ],
  authors: [{ name: "Rako Foods" }],
  creator: "Rako Foods",
  publisher: "Rako Foods",
  metadataBase: new URL("https://rakofoods.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rakofoods.org",
    siteName: "Rako Foods | RakoFoods",
    title: "Rako Foods | Local Bar, Homemade Food & Refreshing Drinks",
    description:
      "Rako Foods - Your premier local bar serving homemade food, refreshing drinks, and delicious yoghurt. Perfect for weddings, funerals, birthdays, and special events.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rako Foods - Local Bar with Homemade Food and Refreshing Drinks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rako Foods | Local Bar, Homemade Food & Refreshing Drinks",
    description:
      "Your premier local bar serving homemade food, refreshing drinks, and delicious yoghurt. Perfect for all your special events.",
    images: ["/images/twitter-image.jpg"],
    creator: "@rakofoods",
    site: "@rakofoods",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // Add your verification codes here
  },
  category: "Food & Beverage",
  icons: {
    icon: [
      { url: "/images/logo.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/images/logo.jpg", sizes: "16x16", type: "image/jpeg" },
    ],
    apple: { url: "/images/logo.jpg", sizes: "180x180", type: "image/jpeg" },
    shortcut: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body>
        <ScrollToTop />
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
