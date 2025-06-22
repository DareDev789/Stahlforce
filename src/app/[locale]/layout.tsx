// import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
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

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={params.locale}>
      <body
        className={`bg-white`}
      >
        <NextTopLoader
          color="#29d"
          height={4}
        />
        <TranslationProvider locale={params.locale}>
          <Header />
          {children}
          <Footer />
        </TranslationProvider>

      </body>
    </html>
  );
}
