
import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardOverview } from "@/components/DashboardOverview";
import { AgentList } from "@/components/AgentList";
import { NotificationPanel } from "@/components/NotificationPanel";
import { ActivityLogs } from "@/components/ActivityLogs";
import { Settings } from "@/components/Settings";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("Dashboard");

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "Dashboard":
        return <DashboardOverview />;
      case "Agents":
        return <AgentList />;
      case "Activity Logs":
        return <ActivityLogs />;
      case "Notifications":
        return <NotificationPanel />;
      case "Settings":
        return <Settings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <AppSidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="mb-4">
            <SidebarTrigger className="text-slate-400 hover:text-cyan-400 transition-colors" />
          </div>
          <div className="max-w-7xl mx-auto">
            {renderCurrentPage()}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
