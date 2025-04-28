
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = {
  title: string;
  path: string;
};

const navItems: NavItem[] = [
  { title: "Dashboard", path: "/" },
  { title: "New Report", path: "/report-generator" },
  { title: "Templates", path: "/report-templates" },
  { title: "Report History", path: "/report-history" }
];

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <header className={cn("border-b bg-background sticky top-0 z-30", className)}>
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link 
            to="/" 
            className="flex items-center space-x-2 font-semibold text-lg text-salesforce-sky"
          >
            <div className="w-8 h-8 bg-salesforce-sky rounded-md flex items-center justify-center">
              <span className="text-white font-bold">SF</span>
            </div>
            <span>Report Generator</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-sm font-medium px-4 py-2 rounded-md hover:bg-accent transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            Help
          </Button>
          <Button size="sm" className="bg-salesforce-sky hover:bg-salesforce-blue transition-colors">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
