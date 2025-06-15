
import { 
  Home, 
  Users, 
  Activity, 
  Settings, 
  Bell, 
  FileText,
  ChevronRight
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Dashboard",
    icon: Home,
  },
  {
    title: "Agents",
    icon: Users,
  },
  {
    title: "Activity Logs",
    icon: Activity,
  },
  {
    title: "Notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

interface AppSidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function AppSidebar({ currentPage, setCurrentPage }: AppSidebarProps) {
  return (
    <Sidebar className="border-r border-slate-700/50 bg-gradient-to-b from-slate-900/80 to-slate-800/50 backdrop-blur-sm">
      <SidebarHeader className="border-b border-slate-700/50 p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold neon-text">AI Dashboard</h2>
            <p className="text-sm text-slate-400">Agent Management</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4 py-6">
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-400 text-xs uppercase tracking-wide mb-4">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={currentPage === item.title}
                    className={`group relative transition-all duration-300 rounded-lg cursor-pointer ${
                      currentPage === item.title
                        ? "bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 text-cyan-400"
                        : "hover:bg-slate-800/50 hover:border-slate-600/50 text-slate-300 hover:text-cyan-400"
                    }`}
                    onClick={() => setCurrentPage(item.title)}
                  >
                    <div className="flex items-center space-x-3 w-full p-3">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                      {currentPage === item.title && (
                        <ChevronRight className="w-4 h-4 ml-auto text-cyan-400" />
                      )}
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-slate-700/50 p-4">
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-800/30">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <span className="text-white text-sm font-bold">A</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-slate-200">Admin User</p>
            <p className="text-xs text-slate-400">System Administrator</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
