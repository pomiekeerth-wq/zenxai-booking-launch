import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (<footer className="bg-foreground pt-8 pb-32">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <p className="text-sm text-muted text-center">
          © {new Date().getFullYear()} Copyright © Hexite Technologies Private Limited, 2025. All rights reserved.
          <span className="block mt-4 text-xs opacity-70">
            All content provided on this page is for informational and promotional purposes only. Results may vary and are not guaranteed. Please review our Privacy Policy and Terms of Service
          </span>
        </p>
      </div>
    </div>
  </footer>);
};
export default Footer;
