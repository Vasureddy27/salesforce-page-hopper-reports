
import Navbar from "@/components/Navbar";
import ReportCard from "@/components/ReportCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const standardTemplates = [
  {
    title: "Sales Overview",
    description: "Comprehensive sales metrics across all teams and regions",
    type: "Standard",
    linkTo: "/report-generator?template=sales-overview"
  },
  {
    title: "Lead Conversion",
    description: "Track lead-to-opportunity conversion rates and timeline",
    type: "Standard",
    linkTo: "/report-generator?template=lead-conversion"
  },
  {
    title: "Opportunity Pipeline",
    description: "Visual breakdown of all opportunities by stage",
    type: "Standard",
    linkTo: "/report-generator?template=opportunity-pipeline"
  },
  {
    title: "Activity Metrics",
    description: "Summary of all activities logged by team members",
    type: "Standard",
    linkTo: "/report-generator?template=activity-metrics"
  },
  {
    title: "Customer Support",
    description: "Case resolution times and customer satisfaction metrics",
    type: "Standard",
    linkTo: "/report-generator?template=customer-support"
  },
  {
    title: "Revenue Forecast",
    description: "Projected revenue based on pipeline and probability",
    type: "Standard",
    linkTo: "/report-generator?template=revenue-forecast"
  }
];

const customTemplates = [
  {
    title: "Q2 Team Performance",
    description: "Custom metrics for tracking quarterly team goals",
    type: "Custom",
    updatedAt: "1 week ago",
    linkTo: "/report-generator?template=custom-q2-team"
  },
  {
    title: "Executive Dashboard",
    description: "High-level metrics for executive reviews",
    type: "Custom",
    updatedAt: "3 weeks ago",
    linkTo: "/report-generator?template=custom-executive"
  },
  {
    title: "Regional Comparison",
    description: "Side-by-side analysis of regional performance",
    type: "Custom",
    updatedAt: "1 month ago",
    linkTo: "/report-generator?template=custom-regional"
  }
];

const ReportTemplates = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container px-4 py-6 flex-1">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Report Templates</h1>
            <p className="text-muted-foreground mt-1">
              Browse and use pre-built report templates
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <div className="relative w-64">
              <Input placeholder="Search templates..." className="pr-8" />
              <span className="absolute right-3 top-2.5 text-muted-foreground">
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
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </span>
            </div>
            <Button className="bg-salesforce-sky hover:bg-salesforce-blue">
              Create Template
            </Button>
          </div>
        </div>

        <Tabs defaultValue="standard" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="standard">Standard Templates</TabsTrigger>
            <TabsTrigger value="custom">Custom Templates</TabsTrigger>
          </TabsList>
          
          <TabsContent value="standard">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {standardTemplates.map((template, index) => (
                <ReportCard
                  key={index}
                  title={template.title}
                  description={template.description}
                  type={template.type}
                  linkTo={template.linkTo}
                  buttonText="Use Template"
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="custom">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {customTemplates.map((template, index) => (
                <ReportCard
                  key={index}
                  title={template.title}
                  description={template.description}
                  type={template.type}
                  updatedAt={template.updatedAt}
                  linkTo={template.linkTo}
                  buttonText="Use Template"
                />
              ))}
              <div className="border-2 border-dashed border-muted rounded-lg flex flex-col items-center justify-center p-6 h-full min-h-[240px]">
                <div className="w-12 h-12 bg-salesforce-sky/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-salesforce-sky"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </div>
                <h3 className="font-medium mb-2">Create New Template</h3>
                <p className="text-center text-muted-foreground text-sm mb-4">
                  Build a custom template from scratch or modify an existing one
                </p>
                <Button variant="outline" className="border-salesforce-sky text-salesforce-sky hover:bg-salesforce-sky/5">
                  Create Template
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ReportTemplates;
