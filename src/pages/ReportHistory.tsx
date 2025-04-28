import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar";

interface Report {
  id: string;
  name: string;
  type: string;
  created: string;
  createdBy: string;
  status: "completed" | "scheduled" | "failed";
}

const reports: Report[] = [
  {
    id: "1",
    name: "Q2 Sales Breakdown",
    type: "Performance Report",
    created: "Apr 26, 2025",
    createdBy: "Sarah Johnson",
    status: "completed"
  },
  {
    id: "2",
    name: "Customer Support Metrics",
    type: "Service Report",
    created: "Apr 20, 2025",
    createdBy: "Mike Chen",
    status: "completed"
  },
  {
    id: "3",
    name: "Marketing Campaign ROI",
    type: "Marketing Report",
    created: "Apr 15, 2025",
    createdBy: "Alex Rodriguez",
    status: "completed"
  },
  {
    id: "4",
    name: "Weekly Activity Summary",
    type: "Team Report",
    created: "Apr 12, 2025",
    createdBy: "Sarah Johnson",
    status: "completed"
  },
  {
    id: "5",
    name: "Pipeline Health Check",
    type: "Sales Report",
    created: "Apr 10, 2025",
    createdBy: "David Wilson",
    status: "completed"
  },
  {
    id: "6",
    name: "Monthly Sales Review",
    type: "Performance Report",
    created: "Apr 01, 2025",
    createdBy: "Sarah Johnson",
    status: "completed"
  },
  {
    id: "7",
    name: "Q2 Executive Summary",
    type: "Executive Report",
    created: "Apr 30, 2025",
    createdBy: "Sarah Johnson",
    status: "scheduled"
  },
  {
    id: "8",
    name: "Regional Performance",
    type: "Performance Report",
    created: "Apr 23, 2025",
    createdBy: "Mike Chen",
    status: "failed"
  }
];

const ReportHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredReports = reports.filter(report => 
    report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.type.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const getStatusBadge = (status: "completed" | "scheduled" | "failed") => {
    switch (status) {
      case "completed":
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-salesforce-green bg-opacity-10 text-salesforce-green">Completed</span>;
      case "scheduled":
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-salesforce-cloud bg-opacity-10 text-salesforce-cloud">Scheduled</span>;
      case "failed":
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-destructive bg-opacity-10 text-destructive">Failed</span>;
    }
  };

  const handleDownload = (reportId: string) => {
    console.log(`Downloading report ${reportId}`);
  };

  const handleShare = (reportId: string) => {
    console.log(`Sharing report ${reportId}`);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <SidebarProvider>
        <div className="flex min-h-[calc(100vh-4rem)]">
          <Sidebar>
            <SidebarHeader className="border-b px-4 py-2">
              <h2 className="text-lg font-semibold">Report History</h2>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton className="w-full">
                        <Input
                          placeholder="Search reports..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full"
                        />
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Select defaultValue="all">
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Filter by type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Types</SelectItem>
                            <SelectItem value="performance">Performance</SelectItem>
                            <SelectItem value="sales">Sales</SelectItem>
                            <SelectItem value="service">Service</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                          </SelectContent>
                        </Select>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Select defaultValue="all">
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Filter by status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="scheduled">Scheduled</SelectItem>
                            <SelectItem value="failed">Failed</SelectItem>
                          </SelectContent>
                        </Select>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          <main className="flex-1 p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Report History</h1>
                <p className="text-muted-foreground mt-1">
                  View and manage your generated reports
                </p>
              </div>
              <Button className="bg-salesforce-sky hover:bg-salesforce-blue">
                <Link to="/report-generator">Generate New Report</Link>
              </Button>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Reports</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
                <TabsTrigger value="favorites">Favorites</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Report Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead>Created By</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredReports.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                            No reports found matching your search
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredReports.map((report) => (
                          <TableRow key={report.id}>
                            <TableCell>
                              <Link to={`/report-preview/${report.id}`} className="font-medium hover:text-salesforce-sky hover:underline">
                                {report.name}
                              </Link>
                            </TableCell>
                            <TableCell>{report.type}</TableCell>
                            <TableCell>{report.created}</TableCell>
                            <TableCell>{report.createdBy}</TableCell>
                            <TableCell>{getStatusBadge(report.status)}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  asChild
                                  className="h-8 w-8 p-0 text-muted-foreground hover:text-salesforce-sky hover:bg-salesforce-sky/10"
                                >
                                  <Link to={`/report-preview/${report.id}`}>
                                    <span className="sr-only">View</span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                      <circle cx="12" cy="12" r="3" />
                                    </svg>
                                  </Link>
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  className="h-8 w-8 p-0 text-muted-foreground hover:text-salesforce-green hover:bg-salesforce-green/10"
                                  onClick={() => handleDownload(report.id)}
                                >
                                  <span className="sr-only">Download</span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" x2="12" y1="15" y2="3" />
                                  </svg>
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  className="h-8 w-8 p-0 text-muted-foreground hover:text-salesforce-indigo hover:bg-salesforce-indigo/10"
                                  onClick={() => handleShare(report.id)}
                                >
                                  <span className="sr-only">Share</span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <circle cx="18" cy="5" r="3"/>
                                    <circle cx="6" cy="12" r="3"/>
                                    <circle cx="18" cy="19" r="3"/>
                                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                                  </svg>
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="recent">
                <div className="py-8 text-center">
                  <p className="text-muted-foreground">Switch to the "All Reports" tab to see your reports</p>
                </div>
              </TabsContent>

              <TabsContent value="scheduled">
                <div className="py-8 text-center">
                  <p className="text-muted-foreground">Switch to the "All Reports" tab to see your reports</p>
                </div>
              </TabsContent>

              <TabsContent value="favorites">
                <div className="py-8 text-center">
                  <p className="text-muted-foreground">Switch to the "All Reports" tab to see your reports</p>
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default ReportHistory;
