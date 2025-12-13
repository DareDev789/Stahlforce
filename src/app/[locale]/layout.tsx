// import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ReactNode } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import NextTopLoader from 'nextjs-toploader';
import { TranslationProvider } from '../../Contexte/TranslationContext';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {

  const { locale } = await params;
  return (
    <html lang={locale}>
      <body
        className={`bg-white`}
      >
        <NextTopLoader
          color="#29d"
          height={4}
        />
        <TranslationProvider locale={locale}>
          <Header />
          {children}
          <Footer />
        </TranslationProvider>

      </body>
    </html>
  );
}
