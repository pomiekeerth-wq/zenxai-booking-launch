import logo from "@/assets/zenxai-logo.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="ZENXAI Logo" className="h-10 w-auto" />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#industries" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Industries
          </a>
        </nav>
        <Button className="gradient-accent shadow-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity">
          Book a Consultation
        </Button>
      </div>
    </header>
  );
};

export default Header;
