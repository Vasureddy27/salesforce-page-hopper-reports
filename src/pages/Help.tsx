
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const Help = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="h-6 w-6 text-salesforce-sky" />
            <h1 className="text-2xl font-semibold">Help Center</h1>
          </div>
          
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <h3 className="font-medium mb-2">Creating Your First Report</h3>
                    <p className="text-muted-foreground">Learn how to create and customize reports using our intuitive interface.</p>
                  </li>
                  <li>
                    <h3 className="font-medium mb-2">Using Templates</h3>
                    <p className="text-muted-foreground">Save time by using our pre-built templates or create your own.</p>
                  </li>
                  <li>
                    <h3 className="font-medium mb-2">Managing Report History</h3>
                    <p className="text-muted-foreground">Access and organize your previously generated reports.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Need Additional Support?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our support team is here to help you get the most out of the Report Generator.
                </p>
                <Button className="bg-salesforce-sky hover:bg-salesforce-blue">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Help;
