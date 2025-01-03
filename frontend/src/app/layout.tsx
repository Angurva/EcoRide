import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Box } from "@mui/material";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecoride",
  description: "Ecology Carpooling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Box 
          sx={{
            width:'100vw',
            height:'100vh',
            display:'flex',
            flexDirection:'column'
          }}
        >
          <Navigation/>
          <Box sx={{
            flexGrow:1,
            display:'flex',
            
          }}>
            {children}
          </Box>
          <Footer/>
        </Box>
        
      </body>
    </html>
  );
}
