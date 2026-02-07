import { useState, useEffect } from "react";

import compname from "@/assets/compname.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 h-14 md:h-20 transition-all duration-300 ${scrolled
                ? "bg-white/90 backdrop-blur-md shadow-sm"
                : "bg-white"
                }`}
        >
            <div className="w-full h-full px-4 md:px-8 flex items-end justify-between">

                {/* LOGO + BRAND */}
                <Link to="/" className="relative z-50 flex items-center gap-0 group self-end mb-1">


                    {/* COMPANY NAME */}
                    <img
                        src={compname}
                        alt="ZENXAI"
                        className="h-10 md:h-16 w-auto object-contain shrink-0 -ml-4 translate-y-2 md:translate-y-3 transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                {/* NAVIGATION */}
                <nav className="hidden md:flex items-center gap-6 mb-3 transition-colors duration-300 text-foreground">
                    <a href="#features" className="text-sm font-medium hover:text-primary transition">
                        Features
                    </a>
                    <a href="#work" className="text-sm font-medium hover:text-accent transition">
                        Work
                    </a>
                    <a href="#process" className="text-sm font-medium hover:text-accent transition">
                        Process
                    </a>
                    <a href="#testimonials" className="text-sm font-medium hover:text-accent transition">
                        Testimonials
                    </a>
                    <a href="#faq" className="text-sm font-medium hover:text-accent transition">
                        FAQ
                    </a>
                    <a href="#contact" className="text-sm font-medium hover:text-primary transition">
                        Contact
                    </a>
                </nav>

                {/* LOGIN */}
                <div className="hidden md:flex items-center mb-3">
                    <Button
                        variant="outline"
                        className="rounded-full transition-all duration-300 border-primary/20 hover:bg-primary/5 text-foreground"
                    >
                        <User className="h-4 w-4 mr-2" />
                        Log in
                    </Button>
                </div>

            </div>
        </header>
    );
};

export default Header;
