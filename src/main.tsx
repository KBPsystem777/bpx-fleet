import { Buffer } from "buffer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import React from "react";
import { createRoot } from "react-dom/client";

import { config } from "./wagmi.ts";

globalThis.Buffer = Buffer;

const queryClient = new QueryClient();

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
