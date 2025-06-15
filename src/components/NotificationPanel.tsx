
import { Bell, X, CheckCircle, AlertTriangle, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const notifications = [
  {
    id: 1,
    type: "success",
    title: "Agent Deployment Complete",
    message: "GPT-4 Assistant has been successfully deployed and is now online.",
    time: "2 minutes ago",
    read: false,
  },
  {
    id: 2,
    type: "warning",
    title: "High Request Volume",
    message: "Code Reviewer is experiencing unusually high request volume.",
    time: "15 minutes ago",
    read: false,
  },
  {
    id: 3,
    type: "info",
    title: "System Update Available",
    message: "A new system update is available for installation.",
    time: "1 hour ago",
    read: true,
  },
  {
    id: 4,
    type: "error",
    title: "Agent Offline",
    message: "Data Analyzer has gone offline unexpectedly.",
    time: "2 hours ago",
    read: true,
  },
  {
    id: 5,
    type: "success",
    title: "Performance Threshold Met",
    message: "Email Responder has exceeded performance expectations.",
    time: "3 hours ago",
    read: true,
  },
];

const getNotificationIcon = (type: string) => {
  switch (type) {
    case "success":
      return <CheckCircle className="w-5 h-5 text-green-400" />;
    case "warning":
      return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
    case "error":
      return <X className="w-5 h-5 text-red-400" />;
    default:
      return <Info className="w-5 h-5 text-cyan-400" />;
  }
};

const getNotificationColor = (type: string) => {
  switch (type) {
    case "success":
      return "border-l-green-500 bg-green-500/5";
    case "warning":
      return "border-l-yellow-500 bg-yellow-500/5";
    case "error":
      return "border-l-red-500 bg-red-500/5";
    default:
      return "border-l-cyan-500 bg-cyan-500/5";
  }
};

export function NotificationPanel() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold neon-text">Notifications</h1>
          <p className="text-slate-400 mt-1">Stay updated with system alerts and updates</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="border-slate-600 hover:border-cyan-500 hover:text-cyan-400">
            Mark All Read
          </Button>
          <Button variant="outline" className="border-slate-600 hover:border-cyan-500 hover:text-cyan-400">
            Clear All
          </Button>
        </div>
      </div>

      {/* Notification List */}
      <Card className="cyber-card glow-border">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bell className="w-5 h-5 text-cyan-400" />
            <span className="text-slate-200">Recent Notifications</span>
            <div className="ml-auto bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs font-medium">
              {notifications.filter(n => !n.read).length} new
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-slate-700/50">
            {notifications.map((notification, index) => (
              <div
                key={notification.id}
                className={`p-4 border-l-4 ${getNotificationColor(notification.type)} ${
                  !notification.read ? "bg-opacity-100" : "bg-opacity-50"
                } hover:bg-slate-800/30 transition-colors animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-sm font-medium ${
                        !notification.read ? "text-slate-200" : "text-slate-400"
                      }`}>
                        {notification.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-slate-500">{notification.time}</span>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse-glow"></div>
                        )}
                      </div>
                    </div>
                    <p className={`text-sm mt-1 ${
                      !notification.read ? "text-slate-300" : "text-slate-500"
                    }`}>
                      {notification.message}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="flex-shrink-0 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="cyber-card glow-border">
        <CardHeader>
          <CardTitle className="text-slate-200">Notification Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/50">
              <h3 className="font-medium text-slate-200 mb-2">Email Notifications</h3>
              <p className="text-sm text-slate-400 mb-3">Get notified via email for critical alerts</p>
              <Button size="sm" variant="outline" className="border-slate-600 hover:border-cyan-500 hover:text-cyan-400">
                Configure
              </Button>
            </div>
            <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/50">
              <h3 className="font-medium text-slate-200 mb-2">Push Notifications</h3>
              <p className="text-sm text-slate-400 mb-3">Real-time notifications in your browser</p>
              <Button size="sm" variant="outline" className="border-slate-600 hover:border-cyan-500 hover:text-cyan-400">
                Enable
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
