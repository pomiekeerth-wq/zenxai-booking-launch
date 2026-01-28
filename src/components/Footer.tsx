import logo from "@/assets/zenxai-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="ZENXAI Logo" className="h-10 w-auto brightness-0 invert" />
          </div>
          
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a href="#services" className="text-sm text-muted hover:text-background transition-colors">
              Services
            </a>
            <a href="#features" className="text-sm text-muted hover:text-background transition-colors">
              Features
            </a>
            <a href="#industries" className="text-sm text-muted hover:text-background transition-colors">
              Industries
            </a>
            <a href="#contact" className="text-sm text-muted hover:text-background transition-colors">
              Contact
            </a>
          </nav>
          
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} ZENXAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
