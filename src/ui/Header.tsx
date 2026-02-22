import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Themetoggler } from "@/Themetoggler";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface Nav {
  label: string;
  to: string;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems: Nav[] = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about-us" },
    { label: "Sermons", to: "/sermons" },
    { label: "Partner", to: "/partner" },
    { label: "Contact Us", to: "/contact-us" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 dark:border-primary/10">
      <div className="w-10/12 mx-auto flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 transition-transform hover:scale-105"
        >
          <img
            src="/church-logo.svg"
            alt="The Household of Light Church"
            width={60}
            height={60}
            className="w-12 h-12 md:w-16 md:h-16"
            decoding="async"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-8">
          {NavItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `heading-4 text-base lg:text-lg font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-primary dark:text-accent"
                    : "text-foreground/70 hover:text-primary dark:hover:text-accent"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Side - Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          <Button 
            onClick={() => {
              const givingSection = document.getElementById('giving-section');
              givingSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hidden sm:inline-flex btn-primary text-sm"
          >
            Give Now
          </Button>
          <Themetoggler />

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-primary dark:text-accent" />
            ) : (
              <Menu className="w-6 h-6 text-primary dark:text-accent" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background dark:bg-muted animate-fade-in-up">
          <nav className="w-10/12 mx-auto py-6 space-y-4">
            {NavItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg font-semibold text-base transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent"
                      : "text-foreground/70 hover:bg-muted dark:hover:bg-muted/50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button 
              onClick={() => {
                const givingSection = document.getElementById('giving-section');
                givingSection?.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
              }}
              className="w-full btn-primary mt-4"
            >
              Give Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
