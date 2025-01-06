import { useDisconnect } from "wagmi";
import { AppSidebar } from "./AppSideBar";
import { Button } from "./ui/button";

import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { disconnect } = useDisconnect();

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-col w-full h-screen overflow-y-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <SidebarTrigger />
          <Button
            variant="destructive"
            className="absolute top-4 right-4"
            onClick={() => disconnect()}
          >
            Disconnect
          </Button>
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
