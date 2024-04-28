import StreamVideoProvider from "@/providers/StreamClientProvider";
import React, { Children } from "react";

const RootLayout = ({ children }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
