// "use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
// import { icons } from "lucide-react";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YO-MEET",
  description: "Video Calling Webapp",
  icons: {
    icon: "/images/yo-meet-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/images/yo-meet-logo.png",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#371B05",
            colorInputBackground: "#F8F6E3",
            colorInputText: "#371B05",
          },
        }}
      >
        <body className={`${inter.className} bg-[#9B3922]`}>
          {children}
          <SpeedInsights />
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
