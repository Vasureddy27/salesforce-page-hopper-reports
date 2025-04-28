
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  description?: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  icon?: React.ReactNode;
  className?: string;
}

const StatCard = ({ title, value, description, trend, icon, className }: StatCardProps) => (
  <Card className={className}>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      {icon && <div className="text-muted-foreground">{icon}</div>}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
      {trend && (
        <div className={`flex items-center text-xs mt-2 ${trend.isPositive ? 'text-salesforce-green' : 'text-destructive'}`}>
          {trend.isPositive ? '↑' : '↓'} {trend.value}
        </div>
      )}
    </CardContent>
  </Card>
);

interface DashboardStatsProps {
  className?: string;
}

const DashboardStats = ({ className }: DashboardStatsProps) => {
  return (
    <div className={`grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
      <StatCard 
        title="Total Reports" 
        value="128" 
        description="Across all categories"
        trend={{ value: "12% from last month", isPositive: true }}
      />
      <StatCard 
        title="Generated This Week" 
        value="23" 
        description="Scheduled and manual"
        trend={{ value: "4% from last week", isPositive: true }}
      />
      <StatCard 
        title="Custom Templates" 
        value="15" 
        description="Available for reuse"
      />
      <StatCard 
        title="Avg. Generation Time" 
        value="2.3s" 
        description="Down from 3.1s"
        trend={{ value: "26% faster", isPositive: true }}
      />
    </div>
  );
};

export default DashboardStats;
