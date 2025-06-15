
import { Settings as SettingsIcon, User, Bell, Activity, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function Settings() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold neon-text">Settings</h1>
          <p className="text-slate-400 mt-1">Configure your AI dashboard preferences</p>
        </div>
        <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 glow-hover">
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <Card className="cyber-card glow-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="w-5 h-5 text-cyan-400" />
              <span className="text-slate-200">Profile Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-slate-300">Username</Label>
              <Input
                id="username"
                defaultValue="admin"
                className="bg-slate-800/50 border-slate-600 focus:border-cyan-500 focus:ring-cyan-500/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-300">Email</Label>
              <Input
                id="email"
                type="email"
                defaultValue="admin@company.com"
                className="bg-slate-800/50 border-slate-600 focus:border-cyan-500 focus:ring-cyan-500/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone" className="text-slate-300">Timezone</Label>
              <Input
                id="timezone"
                defaultValue="UTC-8 (Pacific Standard Time)"
                className="bg-slate-800/50 border-slate-600 focus:border-cyan-500 focus:ring-cyan-500/20"
              />
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="cyber-card glow-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="w-5 h-5 text-cyan-400" />
              <span className="text-slate-200">Notifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-slate-300">Email Notifications</Label>
                <p className="text-sm text-slate-400">Receive alerts via email</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-slate-300">Browser Notifications</Label>
                <p className="text-sm text-slate-400">Show notifications in browser</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-slate-300">Agent Status Alerts</Label>
                <p className="text-sm text-slate-400">Alert when agents go offline</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-slate-300">Performance Warnings</Label>
                <p className="text-sm text-slate-400">Notify on performance issues</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* System Settings */}
        <Card className="cyber-card glow-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-cyan-400" />
              <span className="text-slate-200">System Configuration</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="refresh-rate" className="text-slate-300">Dashboard Refresh Rate</Label>
              <Input
                id="refresh-rate"
                defaultValue="30 seconds"
                className="bg-slate-800/50 border-slate-600 focus:border-cyan-500 focus:ring-cyan-500/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="max-agents" className="text-slate-300">Maximum Concurrent Agents</Label>
              <Input
                id="max-agents"
                type="number"
                defaultValue="50"
                className="bg-slate-800/50 border-slate-600 focus:border-cyan-500 focus:ring-cyan-500/20"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-slate-300">Auto-restart Failed Agents</Label>
                <p className="text-sm text-slate-400">Automatically restart offline agents</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Data & Privacy */}
        <Card className="cyber-card glow-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              <span className="text-slate-200">Data & Privacy</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="log-retention" className="text-slate-300">Log Retention Period</Label>
              <Input
                id="log-retention"
                defaultValue="90 days"
                className="bg-slate-800/50 border-slate-600 focus:border-cyan-500 focus:ring-cyan-500/20"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-slate-300">Analytics Collection</Label>
                <p className="text-sm text-slate-400">Collect usage analytics</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-slate-300">Data Encryption</Label>
                <p className="text-sm text-slate-400">Encrypt sensitive data at rest</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Button 
              variant="outline" 
              className="w-full border-slate-600 hover:border-red-500 hover:text-red-400"
            >
              Export All Data
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Danger Zone */}
      <Card className="cyber-card border-red-500/30 bg-red-500/5">
        <CardHeader>
          <CardTitle className="text-red-400">Danger Zone</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium text-slate-200">Reset Dashboard</h3>
              <p className="text-sm text-slate-400">Reset all settings to default values</p>
            </div>
            <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500/10">
              Reset
            </Button>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium text-slate-200">Delete All Logs</h3>
              <p className="text-sm text-slate-400">Permanently delete all activity logs</p>
            </div>
            <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500/10">
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
