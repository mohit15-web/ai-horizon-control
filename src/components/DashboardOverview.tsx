
import { Activity, Users, Bell, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "Active Agents",
    value: "12",
    change: "+2 from last hour",
    icon: Users,
    color: "text-green-400",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Total Requests",
    value: "1,429",
    change: "+12% from yesterday",
    icon: Activity,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
  },
  {
    title: "Notifications",
    value: "8",
    change: "3 unread",
    icon: Bell,
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
  },
  {
    title: "Log Entries",
    value: "2,847",
    change: "+156 today",
    icon: FileText,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
];

const agents = [
  { id: 1, name: "GPT-4 Assistant", status: "online", requests: 245 },
  { id: 2, name: "Code Reviewer", status: "online", requests: 189 },
  { id: 3, name: "Content Generator", status: "idle", requests: 156 },
  { id: 4, name: "Data Analyzer", status: "offline", requests: 98 },
  { id: 5, name: "Email Responder", status: "online", requests: 234 },
];

export function DashboardOverview() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={stat.title} className={`cyber-card glow-hover animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <p className="text-xs text-slate-400">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Agent Status Grid */}
      <Card className="cyber-card glow-border">
        <CardHeader>
          <CardTitle className="neon-text text-xl">Agent Status Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {agents.map((agent, index) => (
              <div
                key={agent.id}
                className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] group animate-fade-in"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">
                    {agent.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        agent.status === "online"
                          ? "status-online"
                          : agent.status === "idle"
                          ? "status-idle"
                          : "status-offline"
                      }`}
                    ></div>
                    <span className={`text-xs capitalize ${
                      agent.status === "online"
                        ? "text-green-400"
                        : agent.status === "idle"
                        ? "text-yellow-400"
                        : "text-red-400"
                    }`}>
                      {agent.status}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-slate-400">
                  <span className="text-slate-300 font-medium">{agent.requests}</span> requests today
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="cyber-card glow-border">
        <CardHeader>
          <CardTitle className="neon-text text-xl">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: "Agent 'GPT-4 Assistant' completed task", time: "2 minutes ago", type: "success" },
              { action: "New notification received", time: "5 minutes ago", type: "info" },
              { action: "Agent 'Data Analyzer' went offline", time: "12 minutes ago", type: "warning" },
              { action: "System update completed", time: "1 hour ago", type: "success" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-slate-800/20 hover:bg-slate-800/40 transition-colors">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === "success" ? "bg-green-500" :
                  activity.type === "warning" ? "bg-yellow-500" : "bg-cyan-500"
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm text-slate-200">{activity.action}</p>
                  <p className="text-xs text-slate-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
