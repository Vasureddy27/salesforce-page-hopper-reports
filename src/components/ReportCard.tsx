
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ReportCardProps {
  title: string;
  description: string;
  iconPath?: string;
  linkTo: string;
  buttonText?: string;
  type?: string;
  updatedAt?: string;
}

const ReportCard = ({
  title,
  description,
  iconPath,
  linkTo,
  buttonText = "Open",
  type,
  updatedAt
}: ReportCardProps) => {
  return (
    <Card className="report-card-hover overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            {iconPath && (
              <div className="w-10 h-10 bg-salesforce-sky/10 rounded-md flex items-center justify-center">
                <img src={iconPath} alt={title} className="w-6 h-6" />
              </div>
            )}
            <div>
              <CardTitle className="text-lg font-medium">{title}</CardTitle>
              {type && <span className="text-xs text-muted-foreground">{type}</span>}
            </div>
          </div>
          {updatedAt && (
            <span className="text-xs text-muted-foreground">
              Updated: {updatedAt}
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-salesforce-sky hover:bg-salesforce-blue">
          <Link to={linkTo}>{buttonText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ReportCard;
