import { Epilogue, Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { Tags } from "@/components/Tags";
import Chat from "@/components/Chat";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter", // Ensure this variable is correctly defined
});

const epilogue = Epilogue({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-epilogue",
});

export const metadata: Metadata = {
  title: {
    default: "Mark // Full-stack Developer",
    template: "%s - Mark // Full-stack Developer",
  },
  description: `Hi, ik ben Mark een Full-stack developer. Met meer dan 10 jaar ervaring in softwareontwikkeling, ben ik gespecialiseerd in het bouwen van webapplicaties en mobiele apps. Van start tot finish.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.variable} ${epilogue.variable}`}>
      <Tags />

      <body>
        <Header />
        <main className="max-w-7xl mx-auto">{children}</main>
        <Chat />
        <Footer />
        <ScrollProgress />
      </body>
    </html>
  );
}
