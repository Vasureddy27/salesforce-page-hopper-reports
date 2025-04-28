
import Navbar from "@/components/Navbar";
import DashboardStats from "@/components/DashboardStats";
import ReportCard from "@/components/ReportCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const reportTypes = [
  {
    title: "Sales Performance",
    description: "Generate reports on sales activities, opportunities, and revenue metrics.",
    linkTo: "/report-generator?template=sales",
    iconPath: "/placeholder.svg"
  },
  {
    title: "Customer Engagement",
    description: "Track customer interactions, case histories, and support metrics.",
    linkTo: "/report-generator?template=customer",
    iconPath: "/placeholder.svg"
  },
  {
    title: "Team Activity",
    description: "Analyze team performance, task completion rates, and productivity.",
    linkTo: "/report-generator?template=team",
    iconPath: "/placeholder.svg"
  },
  {
    title: "Pipeline Analysis",
    description: "Forecast sales pipeline, opportunity stages, and close rates.",
    linkTo: "/report-generator?template=pipeline",
    iconPath: "/placeholder.svg"
  }
];

const recentReports = [
  {
    title: "Q2 Sales Breakdown",
    description: "Quarterly sales analysis by product line and region",
    type: "Performance Report",
    updatedAt: "2 days ago",
    linkTo: "/report-preview/1"
  },
  {
    title: "Customer Support Metrics",
    description: "Response times and resolution rates for support tickets",
    type: "Service Report",
    updatedAt: "1 week ago",
    linkTo: "/report-preview/2"
  },
  {
    title: "Marketing Campaign ROI",
    description: "Return on investment analysis for Q1 campaigns",
    type: "Marketing Report",
    updatedAt: "2 weeks ago",
    linkTo: "/report-preview/3"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container px-4 py-6 flex-1">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Welcome to your Salesforce Report Generator
            </p>
          </div>
          <Button className="mt-4 md:mt-0 bg-salesforce-sky hover:bg-salesforce-blue">
            <Link to="/report-generator">Generate New Report</Link>
          </Button>
        </div>

        <DashboardStats className="mb-8" />

        <section className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Report Types</h2>
            <Link to="/report-templates" className="text-salesforce-sky hover:underline text-sm">
              View All Templates
            </Link>
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {reportTypes.map((report, index) => (
              <ReportCard
                key={index}
                title={report.title}
                description={report.description}
                iconPath={report.iconPath}
                linkTo={report.linkTo}
                buttonText="Create Report"
              />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Recent Reports</h2>
            <Link to="/report-history" className="text-salesforce-sky hover:underline text-sm">
              View All Reports
            </Link>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {recentReports.map((report, index) => (
              <ReportCard
                key={index}
                {...report}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
