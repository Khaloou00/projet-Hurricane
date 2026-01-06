import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import logo from "@/assets/logo-hurricane.png";

const Footer = () => {
  return (
    <footer className="bg-hurricane-black text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="Hurricane Services CI Immobilier"
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="text-primary-foreground/70 leading-relaxed">
              De l'idée a la realisation. Votre partenaire de confiance pour
              tous vos projets immobiliers et commerciaux en Côte d'Ivoire.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/offres"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Nos Offres
                </Link>
              </li>
              <li>
                <Link
                  to="/a-propos"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Nos Domaines */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Nos Domaines</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/domaines/intermediation"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Intermédiation commerciale
                </Link>
              </li>
              <li>
                <Link
                  to="/domaines/immobilier"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Achat & vente immobilière
                </Link>
              </li>
              <li>
                <Link
                  to="/domaines/constructions"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Constructions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  Abidjan, Côte d'Ivoire
                  <br />
                  Cocody, Corniche
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="tel:+2250708290382"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  +225 07 08 29 03 82
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:hurricaneservicesci@gmail.com"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  hurricaneservicesci@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2026 Hurricane Services CI Immobilier. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-primary transition-colors"
            >
              Mentions légales
            </a>
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-primary transition-colors"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
