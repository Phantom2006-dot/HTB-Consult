import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import AcademyLogo from "@/components/AcademyLogo";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" aria-label="HTB Consult Academy home" className="mb-4 inline-flex items-center rounded-sm">
              <AcademyLogo className="h-14" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering professionals with industry-leading training in Project Management, Business Analysis, and career development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "Courses", path: "/courses" },
                { label: "Services", path: "/services" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Training</h4>
            <ul className="space-y-2">
              {["Project Management", "Business Analysis", "CV Review", "1-on-1 Mentoring"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary shrink-0" />
                info@htbconsults.com
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary shrink-0" />
                +44 (0) 123 456 7890
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                London, United Kingdom
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HTB Consults. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
