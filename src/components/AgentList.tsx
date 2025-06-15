
import { useState } from "react";
import { Search, Users, Settings, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const agents = [
  {
    id: 1,
    name: "GPT-4 Assistant",
    type: "Language Model",
    status: "online",
    requests: 1245,
    uptime: "99.8%",
    lastActive: "2 min ago",
  },
  {
    id: 2,
    name: "Code Reviewer",
    type: "Code Analysis",
    status: "online",
    requests: 892,
    uptime: "98.9%",
    lastActive: "5 min ago",
  },
  {
    id: 3,
    name: "Content Generator",
    type: "Content Creation",
    status: "idle",
    requests: 567,
    uptime: "97.2%",
    lastActive: "1 hour ago",
  },
  {
    id: 4,
    name: "Data Analyzer",
    type: "Analytics",
    status: "offline",
    requests: 234,
    uptime: "89.5%",
    lastActive: "3 hours ago",
  },
  {
    id: 5,
    name: "Email Responder",
    type: "Communication",
    status: "online",
    requests: 1456,
    uptime: "99.9%",
    lastActive: "1 min ago",
  },
];

export function AgentList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAgent, setSelectedAgent] = useState<number | null>(null);

  const filteredAgents = agents.filter(agent =>
    agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agent.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold neon-text">AI Agents</h1>
          <p className="text-slate-400 mt-1">Manage and monitor your AI agents</p>
        </div>
        <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 glow-hover">
          <Users className="w-4 h-4 mr-2" />
          Create Agent
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="cyber-card glow-border">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search agents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-800/50 border-slate-600 focus:border-cyan-500 focus:ring-cyan-500/20"
              />
            </div>
            <Button variant="outline" className="border-slate-600 hover:border-cyan-500 hover:text-cyan-400">
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Agent Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredAgents.map((agent, index) => (
          <Card
            key={agent.id}
            className={`cyber-card glow-hover cursor-pointer transition-all duration-300 ${
              selectedAgent === agent.id ? "glow-border" : ""
            } animate-fade-in`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedAgent(selectedAgent === agent.id ? null : agent.id)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-slate-200">{agent.name}</CardTitle>
                    <p className="text-sm text-slate-400">{agent.type}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      agent.status === "online"
                        ? "status-online"
                        : agent.status === "idle"
                        ? "status-idle"
                        : "status-offline"
                    }`}
                  ></div>
                  <span className={`text-xs capitalize font-medium ${
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
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400">{agent.requests}</div>
                  <div className="text-xs text-slate-400">Requests</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">{agent.uptime}</div>
                  <div className="text-xs text-slate-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-slate-300">{agent.lastActive}</div>
                  <div className="text-xs text-slate-400">Last Active</div>
                </div>
              </div>
              
              {selectedAgent === agent.id && (
                <div className="border-t border-slate-700 pt-4 mt-4 animate-fade-in">
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="border-slate-600 hover:border-cyan-500 hover:text-cyan-400">
                      <Activity className="w-4 h-4 mr-1" />
                      Logs
                    </Button>
                    <Button size="sm" variant="outline" className="border-slate-600 hover:border-cyan-500 hover:text-cyan-400">
                      <Settings className="w-4 h-4 mr-1" />
                      Configure
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
