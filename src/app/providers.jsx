"use client";
import { SessionProvider } from "next-auth/react";
import { AppProvider } from "@/components/AppContext";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }) {
  return (
    <SessionProvider>
      <AppProvider>
        <Toaster />
        {children}
      </AppProvider>
    </SessionProvider>
  );
}
