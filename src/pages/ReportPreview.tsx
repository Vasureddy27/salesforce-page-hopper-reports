
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

// Example data for charts
const barData = [
  { name: "Jan", value: 12400 },
  { name: "Feb", value: 14800 },
  { name: "Mar", value: 19200 },
  { name: "Apr", value: 17800 },
  { name: "May", value: 21500 },
  { name: "Jun", value: 25600 },
  { name: "Jul", value: 28300 }
];

const pieData = [
  { name: "Product A", value: 35 },
  { name: "Product B", value: 25 },
  { name: "Product C", value: 20 },
  { name: "Product D", value: 15 },
  { name: "Product E", value: 5 }
];

const COLORS = ["#0070D2", "#1589EE", "#02CF8A", "#6547C7", "#5867E8"];

const tableData = [
  { id: 1, owner: "Sarah Johnson", stage: "Closed Won", amount: "$45,600", probability: "100%" },
  { id: 2, owner: "David Wilson", stage: "Negotiation", amount: "$28,900", probability: "80%" },
  { id: 3, owner: "Mike Chen", stage: "Proposal", amount: "$64,200", probability: "60%" },
  { id: 4, owner: "Alex Rodriguez", stage: "Qualified", amount: "$35,100", probability: "40%" },
  { id: 5, owner: "Sarah Johnson", stage: "Closed Won", amount: "$52,800", probability: "100%" }
];

interface Report {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  type: string;
}

const reports: Record<string, Report> = {
  "1": {
    id: "1",
    name: "Q2 Sales Breakdown",
    description: "Quarterly sales analysis by product line and region",
    createdAt: "Apr 26, 2025",
    type: "Performance Report"
  },
  "2": {
    id: "2",
    name: "Customer Support Metrics",
    description: "Response times and resolution rates for support tickets",
    createdAt: "Apr 20, 2025",
    type: "Service Report"
  },
  "3": {
    id: "3",
    name: "Marketing Campaign ROI",
    description: "Return on investment analysis for Q1 campaigns",
    createdAt: "Apr 15, 2025",
    type: "Marketing Report"
  },
  "new": {
    id: "new",
    name: "New Generated Report",
    description: "Your newly generated report from the report builder",
    createdAt: "Apr 28, 2025",
    type: "Custom Report"
  }
};

const ReportPreview = () => {
  const { id } = useParams<{ id: string }>();
  const [report, setReport] = useState<Report | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      if (id && reports[id]) {
        setReport(reports[id]);
      }
      setIsLoading(false);
    }, 800);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container px-4 py-6 flex-1 flex items-center justify-center">
          <div className="space-y-4 text-center">
            <div className="w-16 h-16 border-4 border-t-salesforce-sky border-r-salesforce-sky border-b-transparent border-l-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-lg font-medium">Loading report...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container px-4 py-6 flex-1 flex items-center justify-center">
          <div className="space-y-4 text-center">
            <h1 className="text-2xl font-bold">Report Not Found</h1>
            <p className="text-muted-foreground">The requested report could not be found.</p>
            <Button className="mt-4 bg-salesforce-sky hover:bg-salesforce-blue">
              Back to Reports
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container px-4 py-6 flex-1">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{report.name}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1">
              <span className="text-muted-foreground">{report.type}</span>
              <span className="hidden sm:block text-muted-foreground">•</span>
              <span className="text-muted-foreground">Created {report.createdAt}</span>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm">
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
                className="mr-2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" y2="3" />
              </svg>
              Download
            </Button>
            <Button variant="outline" size="sm">
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
                className="mr-2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              Share
            </Button>
            <Button size="sm" className="bg-salesforce-sky hover:bg-salesforce-blue">
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
                className="mr-2"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              Edit Report
            </Button>
          </div>
        </div>

        <Tabs defaultValue="charts" className="w-full">
          <TabsList className="mb-6 max-w-full overflow-auto">
            <TabsTrigger value="charts">Charts</TabsTrigger>
            <TabsTrigger value="table">Table Data</TabsTrigger>
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="settings">Report Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="charts" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-4">Sales Performance Over Time</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={barData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip 
                        formatter={(value) => [`$${value}`, 'Revenue']}
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid #e2e8f0',
                          borderRadius: '0.375rem'
                        }}
                      />
                      <Bar dataKey="value" fill="#0070D2" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-4">Revenue by Product</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value) => [`${value}%`, 'Share']}
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid #e2e8f0',
                          borderRadius: '0.375rem'
                        }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-4">Key Observations</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="min-w-4 h-4 w-4 rounded-full bg-salesforce-sky mt-1 mr-2"></div>
                    <p>Sales performance has shown consistent growth with a 32% increase over the past 7 months.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 h-4 w-4 rounded-full bg-salesforce-green mt-1 mr-2"></div>
                    <p>Product A continues to be the top performer, accounting for 35% of total revenue.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 h-4 w-4 rounded-full bg-salesforce-indigo mt-1 mr-2"></div>
                    <p>June and July showed the strongest performance, coinciding with the Q2 marketing campaign.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 h-4 w-4 rounded-full bg-salesforce-purple mt-1 mr-2"></div>
                    <p>The diversification of products has improved with Product C and D showing increased market share.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="table">
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full whitespace-nowrap">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left font-medium p-4 text-muted-foreground">ID</th>
                        <th className="text-left font-medium p-4 text-muted-foreground">Owner</th>
                        <th className="text-left font-medium p-4 text-muted-foreground">Stage</th>
                        <th className="text-left font-medium p-4 text-muted-foreground">Amount</th>
                        <th className="text-left font-medium p-4 text-muted-foreground">Probability</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row) => (
                        <tr key={row.id} className="hover:bg-muted/50">
                          <td className="p-4">{row.id}</td>
                          <td className="p-4">{row.owner}</td>
                          <td className="p-4">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${row.stage === 'Closed Won' ? 'bg-salesforce-green bg-opacity-10 text-salesforce-green' : 'bg-salesforce-cloud bg-opacity-10 text-salesforce-cloud'}`}>
                              {row.stage}
                            </span>
                          </td>
                          <td className="p-4">{row.amount}</td>
                          <td className="p-4">{row.probability}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="summary">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-4">Report Summary</h3>
                  <p className="mb-4">{report.description}</p>
                  <p className="mb-4">This report provides an analysis of sales performance across different products and time periods. Key metrics include revenue growth, product distribution, and sales team performance.</p>
                  <p>The data indicates strong performance in Q2 with continued growth trajectory. Product A remains the top performer, while newer products are showing promising adoption rates.</p>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-4">Report Details</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Created:</span>
                        <span>{report.createdAt}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Last Modified:</span>
                        <span>{report.createdAt}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Report Type:</span>
                        <span>{report.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Time Period:</span>
                        <span>Last Quarter</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-4">Data Sources</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-salesforce-sky rounded-full"></div>
                        <span>Opportunities</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-salesforce-green rounded-full"></div>
                        <span>Products</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-salesforce-indigo rounded-full"></div>
                        <span>Users</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="settings">
            <div className="py-8 text-center">
              <p className="text-muted-foreground">Report settings are currently being loaded...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ReportPreview;
