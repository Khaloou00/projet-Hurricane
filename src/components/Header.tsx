import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-hurricane.png";

const domainesItems = [
  { label: "Intermédiation commerciale", href: "/construction" },
  { label: "Achat & vente de biens immobiliers", href: "/construction" },
  { label: "Constructions", href: "/construction" },
];

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Nos domaines", href: "#", hasDropdown: true, items: domainesItems },
  { label: "Nos Offres", href: "/offres" },
  { label: "Blog", href: "/blog" },
  { label: "À propos", href: "/a-propos" },
];

// Pages qui ont un hero/fond foncé au début
const pagesWithDarkHero = [
  "/",
  "/contact",
  "/a-propos",
  "/offres",
  "/contact",
  "/blog",
]; // Ajoutez vos pages ici

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDomainesOpen, setIsDomainesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Vérifier l'état initial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Vérifier si la page actuelle a un fond foncé
  const hasDarkHero = pagesWithDarkHero.includes(location.pathname);

  // Déterminer si le header doit être transparent
  const shouldBeTransparent = hasDarkHero && !isScrolled;

  // Correction de la fonction isActive
  const isActive = (href: string) => {
    if (href === "#") return false; // Pour les dropdowns
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldBeTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Hurricane Services CI Immobilier"
              className="h-[95px] w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsDomainesOpen(true)}
                    onMouseLeave={() => setIsDomainesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 font-light tracking-wide text-sm uppercase transition-colors py-2 ${
                        shouldBeTransparent
                          ? "text-white/90 hover:text-white"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isDomainesOpen ? "rotate-180" : ""
                        } ${
                          shouldBeTransparent
                            ? "text-white/90"
                            : "text-gray-700"
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isDomainesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50"
                        >
                          {item.items?.map((subItem, index) => (
                            <Link
                              key={subItem.href}
                              to={subItem.href}
                              className={`block px-4 py-3 transition-colors font-light ${
                                isActive(subItem.href)
                                  ? "text-primary bg-primary/5"
                                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              }`}
                              style={{ animationDelay: `${index * 50}ms` }}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`font-light tracking-wide text-sm uppercase transition-colors relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                      shouldBeTransparent
                        ? isActive(item.href)
                          ? "text-white after:w-full"
                          : "text-white/90 hover:text-white"
                        : isActive(item.href)
                        ? "text-primary after:w-full"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Button
              variant="outline"
              size="lg"
              asChild
              className={`font-light text-sm uppercase tracking-wider px-6 py-2 rounded-full border transition-all duration-300 ${
                shouldBeTransparent
                  ? "border-gray-800 text-gray-800 hover:bg-red-600 hover:text-white"
                  : "border-red-600 text-red-600 hover:bg-white hover:text-gray-800"
              }`}
            >
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${
                  shouldBeTransparent ? "text-white" : "text-gray-800"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  shouldBeTransparent ? "text-white" : "text-gray-800"
                }`}
              />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="container-custom py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsDomainesOpen(!isDomainesOpen)}
                        className={`flex items-center justify-between w-full py-3 font-light tracking-wide text-sm uppercase ${
                          shouldBeTransparent ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isDomainesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isDomainesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-2"
                          >
                            {item.items?.map((subItem) => (
                              <Link
                                key={subItem.href}
                                to={subItem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block py-2 text-sm transition-colors font-light ${
                                  isActive(subItem.href)
                                    ? "text-primary font-medium"
                                    : "text-gray-600 hover:text-gray-900"
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-3 font-light tracking-wide text-sm uppercase ${
                        isActive(item.href)
                          ? "text-primary font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full font-light text-sm uppercase tracking-wider border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white rounded-full"
                  asChild
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
