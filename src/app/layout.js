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
  title: "Supernova 2025",
  description: "Supernova Hackathon 2025 is a national-level hybrid hackathon",
  keywords:
    "Supernova, national level, 2025, hackathon, technology, innovation, developers, coding, AI",
  author: "Harshit Jain",
  metadataBase: new URL("https://supernova25.vercel.app/"),
  openGraph: {
    title: "Supernova Hackathon 2025",
    url: "https://supernova25.vercel.app",
    type: "website",
    images: "/supernova.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supernova Hackathon 2025",
    images: "/supernova.png",
  },
  applicationName: "Supernova Hackathon",
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
