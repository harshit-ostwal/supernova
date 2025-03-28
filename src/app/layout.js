import { Figtree, Geist_Mono, Righteous } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Cursor from "./components/cursor";

const righteous = Righteous({
  variable: "--font-righteous",
  weight: ["400"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  weight: ["400", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "SuperNova 2025",
  description: "SuperNova Hackathon 2025 is a national-level hybrid hackathon",
  keywords:
    "SuperNova, national level, 2025, hackathon, technology, innovation, developers, coding, AI",
  author: "Harshit Jain",
  metadataBase: new URL("https://SuperNova25.vercel.app/"),
  openGraph: {
    title: "SuperNova Hackathon 2025",
    url: "https://SuperNova25.vercel.app",
    type: "website",
    images: "/SuperNova.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "SuperNova Hackathon 2025",
    images: "/SuperNova.png",
  },
  applicationName: "SuperNova Hackathon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressContentEditableWarning suppressHydrationWarning>
      <body className={`${righteous.variable} ${figtree.variable} ${geistMono.variable} tracking-tighter font-figtree antialiased`}>
        <Cursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
