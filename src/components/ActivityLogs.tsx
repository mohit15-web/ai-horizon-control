
import { useState } from "react";
import { Activity, Search, FileText, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const logs = [
  {
    id: 1,
    timestamp: "2024-01-15 14:23:45",
    agent: "GPT-4 Assistant",
    action: "Request Processed",
    details: "Generated response for user query about React best practices",
    status: "success",
    duration: "1.2s",
  },
  {
    id: 2,
    timestamp: "2024-01-15 14:22:31",
    agent: "Code Reviewer",
    action: "Code Analysis",
    details: "Analyzed 45 lines of JavaScript code for potential issues",
    status: "success", 
    duration: "0.8s",
  },
  {
    id: 3,
    timestamp: "2024-01-15 14:21:18",
    agent: "Content Generator",
    action: "Content Creation",
    details: "Generated blog post outline for AI trends topic",
    status: "success",
    duration: "2.1s",
  },
  {
    id: 4,
    timestamp: "2024-01-15 14:20:05",
    agent: "Data Analyzer",
    action: "Data Processing",
    details: "Failed to process dataset due to memory limitations",
    status: "error",
    duration: "5.3s",
  },
  {
    id: 5,
    timestamp: "2024-01-15 14:18:42",
    agent: "Email Responder",
    action: "Email Analysis",
    details: "Analyzed incoming email for sentiment and priority",
    status: "success",
    duration: "0.6s",
  },
  {
    id: 6,
    timestamp: "2024-01-15 14:17:29",
    agent: "GPT-4 Assistant",
    action: "Request Timeout",
    details: "Request exceeded maximum processing time limit",
    status: "warning",
    duration: "30.0s",
  },
];

export function ActivityLogs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredLogs = logs.filter(log => {
    const matchesSearch = log.agent.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.details.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === "all" || log.status === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "text-green-400 bg-green-500/10";
      case "error":
        return "text-red-400 bg-red-500/10";
      case "warning":
        return "text-yellow-400 bg-yellow-500/10";
      default:
        return "text-slate-400 bg-slate-500/10";
    }
  };

  const getStatusDot = (status: string) => {
    switch (status) {
      case "success":
        return "bg-green-500";
      case "error":
        return "bg-red-500";
      case "warning":
        return "bg-yellow-500";
      default:
        return "bg-slate-500";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold neon-text">Activity Logs</h1>
          <p className="text-slate-400 mt-1">Monitor agent activities and system events</p>
        </div>
        <Button variant="outline" className="border-slate-600 hover:border-cyan-500 hover:text-cyan-400">
          <FileText className="w-4 h-4 mr-2" />
          Export Logs
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="cyber-card glow-border">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search logs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-800/50 border-slate-600 focus:border-cyan-500 focus:ring-cyan-500/20"
              />
            </div>
            <div className="flex space-x-2">
              {["all", "success", "warning", "error"].map((filter) => (
                <Button
                  key={filter}
                  size="sm"
                  variant={selectedFilter === filter ? "default" : "outline"}
                  className={
                    selectedFilter === filter
                      ? "bg-cyan-600 hover:bg-cyan-500"
                      : "border-slate-600 hover:border-cyan-500 hover:text-cyan-400"
                  }
                  onClick={() => setSelectedFilter(filter)}
                >
                  <Filter className="w-3 h-3 mr-1" />
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Logs Table */}
      <Card className="cyber-card glow-border">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            <span className="text-slate-200">Recent Activity</span>
            <div className="ml-auto text-sm text-slate-400">
              {filteredLogs.length} entries
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-hidden">
            {filteredLogs.map((log, index) => (
              <div
                key={log.id}
                className="p-4 border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-2">
                    <div className={`w-2 h-2 rounded-full ${getStatusDot(log.status)}`}></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-sm font-medium text-slate-200">{log.agent}</h3>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-sm text-cyan-400">{log.action}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(log.status)}`}>
                          {log.status}
                        </span>
                        <span className="text-xs text-slate-400">{log.duration}</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-400 mb-2">{log.details}</p>
                    <div className="text-xs text-slate-500">{log.timestamp}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
