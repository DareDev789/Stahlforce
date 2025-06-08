// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import NextTopLoader from 'nextjs-toploader';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`bg-white`}
      >
        <NextTopLoader
          color="#29d"
          height={4}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
