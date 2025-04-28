
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter,
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

const ReportGenerator = () => {
  const [searchParams] = useSearchParams();
  const templateParam = searchParams.get("template");
  const [activeTab, setActiveTab] = useState<string>("general");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate report generation
    setTimeout(() => {
      setIsGenerating(false);
      toast({
        title: "Report Generated",
        description: "Your report has been successfully created.",
      });
      navigate("/report-preview/new");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container px-4 py-6 flex-1">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Report Generator</h1>
          <p className="text-muted-foreground mt-1">
            Configure and generate custom reports from your Salesforce data
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit}>
              <Card>
                <CardHeader>
                  <CardTitle>Report Configuration</CardTitle>
                  <CardDescription>
                    Set up your report parameters and data sources
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="general">General</TabsTrigger>
                      <TabsTrigger value="data">Data Selection</TabsTrigger>
                      <TabsTrigger value="visuals">Visualization</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="general" className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="report-name">Report Name</Label>
                        <Input id="report-name" placeholder="Enter report name" defaultValue={templateParam ? `New ${templateParam.charAt(0).toUpperCase() + templateParam.slice(1)} Report` : ""} />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="report-description">Description</Label>
                        <Input id="report-description" placeholder="Brief description of this report" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="report-type">Report Type</Label>
                        <Select defaultValue={templateParam || "custom"}>
                          <SelectTrigger id="report-type">
                            <SelectValue placeholder="Select report type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sales">Sales Performance</SelectItem>
                            <SelectItem value="customer">Customer Engagement</SelectItem>
                            <SelectItem value="team">Team Activity</SelectItem>
                            <SelectItem value="pipeline">Pipeline Analysis</SelectItem>
                            <SelectItem value="custom">Custom Report</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="time-period">Time Period</Label>
                        <Select defaultValue="quarter">
                          <SelectTrigger id="time-period">
                            <SelectValue placeholder="Select time period" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="week">Last Week</SelectItem>
                            <SelectItem value="month">Last Month</SelectItem>
                            <SelectItem value="quarter">Last Quarter</SelectItem>
                            <SelectItem value="year">Last Year</SelectItem>
                            <SelectItem value="custom">Custom Range</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="flex items-center space-x-2 pt-2">
                        <Checkbox id="schedule" />
                        <Label htmlFor="schedule">Schedule recurring report</Label>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="data" className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="data-source">Primary Data Source</Label>
                        <Select defaultValue="opportunities">
                          <SelectTrigger id="data-source">
                            <SelectValue placeholder="Select data source" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="opportunities">Opportunities</SelectItem>
                            <SelectItem value="contacts">Contacts</SelectItem>
                            <SelectItem value="accounts">Accounts</SelectItem>
                            <SelectItem value="leads">Leads</SelectItem>
                            <SelectItem value="cases">Cases</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="fields">Select Fields</Label>
                        <div className="grid grid-cols-2 gap-2 pt-2">
                          {["Name", "Amount", "Stage", "Close Date", "Owner", "Type", "Lead Source", "Probability"].map((field) => (
                            <div key={field} className="flex items-center space-x-2">
                              <Checkbox id={`field-${field}`} defaultChecked />
                              <Label htmlFor={`field-${field}`}>{field}</Label>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="filter">Filters</Label>
                        <div className="grid grid-cols-3 gap-2">
                          <Select defaultValue="stage">
                            <SelectTrigger id="filter-field">
                              <SelectValue placeholder="Field" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="stage">Stage</SelectItem>
                              <SelectItem value="amount">Amount</SelectItem>
                              <SelectItem value="close-date">Close Date</SelectItem>
                            </SelectContent>
                          </Select>
                          
                          <Select defaultValue="equals">
                            <SelectTrigger id="filter-operator">
                              <SelectValue placeholder="Operator" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="equals">Equals</SelectItem>
                              <SelectItem value="not-equals">Not Equals</SelectItem>
                              <SelectItem value="greater-than">Greater Than</SelectItem>
                              <SelectItem value="less-than">Less Than</SelectItem>
                            </SelectContent>
                          </Select>
                          
                          <Input placeholder="Value" defaultValue="Closed Won" />
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="visuals" className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="chart-type">Chart Type</Label>
                        <Select defaultValue="bar">
                          <SelectTrigger id="chart-type">
                            <SelectValue placeholder="Select chart type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bar">Bar Chart</SelectItem>
                            <SelectItem value="line">Line Chart</SelectItem>
                            <SelectItem value="pie">Pie Chart</SelectItem>
                            <SelectItem value="table">Table</SelectItem>
                            <SelectItem value="kanban">Kanban Board</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="grouping">Group By</Label>
                        <Select defaultValue="stage">
                          <SelectTrigger id="grouping">
                            <SelectValue placeholder="Select grouping field" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="stage">Stage</SelectItem>
                            <SelectItem value="owner">Owner</SelectItem>
                            <SelectItem value="type">Type</SelectItem>
                            <SelectItem value="lead-source">Lead Source</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="color-scheme">Color Scheme</Label>
                        <Select defaultValue="salesforce">
                          <SelectTrigger id="color-scheme">
                            <SelectValue placeholder="Select color scheme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="salesforce">Salesforce</SelectItem>
                            <SelectItem value="blue">Blue</SelectItem>
                            <SelectItem value="green">Green</SelectItem>
                            <SelectItem value="rainbow">Rainbow</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="flex items-center space-x-2 pt-2">
                        <Checkbox id="show-summary" defaultChecked />
                        <Label htmlFor="show-summary">Show summary statistics</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox id="interactive" defaultChecked />
                        <Label htmlFor="interactive">Enable interactive features</Label>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Save as Template</Button>
                  <Button 
                    type="submit" 
                    className="bg-salesforce-sky hover:bg-salesforce-blue"
                    disabled={isGenerating}
                  >
                    {isGenerating ? "Generating..." : "Generate Report"}
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </div>
          
          <div className="lg:col-span-4">
            <Card>
              <CardHeader>
                <CardTitle>Template Suggestions</CardTitle>
                <CardDescription>
                  Recommendations based on your data
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div 
                  className="p-3 bg-salesforce-sky/10 rounded-md cursor-pointer hover:bg-salesforce-sky/20 transition-colors"
                  onClick={() => setActiveTab("general")}
                >
                  <p className="font-medium">Quarterly Performance</p>
                  <p className="text-sm text-muted-foreground">Analysis of sales metrics for the quarter</p>
                </div>
                <div 
                  className="p-3 bg-salesforce-sky/10 rounded-md cursor-pointer hover:bg-salesforce-sky/20 transition-colors"
                  onClick={() => setActiveTab("general")}
                >
                  <p className="font-medium">Pipeline Health Check</p>
                  <p className="text-sm text-muted-foreground">Overview of your current sales pipeline</p>
                </div>
                <div 
                  className="p-3 bg-salesforce-sky/10 rounded-md cursor-pointer hover:bg-salesforce-sky/20 transition-colors"
                  onClick={() => setActiveTab("general")}
                >
                  <p className="font-medium">Team Activity Summary</p>
                  <p className="text-sm text-muted-foreground">Track team performance and engagement</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Help & Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <p className="font-medium">Filter Effectively</p>
                  <p className="text-muted-foreground">Use multiple filters to narrow down your data for more focused insights.</p>
                </div>
                <div>
                  <p className="font-medium">Choose the Right Chart</p>
                  <p className="text-muted-foreground">Bar charts work best for comparisons, while line charts show trends over time.</p>
                </div>
                <div>
                  <p className="font-medium">Schedule Reports</p>
                  <p className="text-muted-foreground">Set up recurring reports to automatically track metrics at regular intervals.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportGenerator;
