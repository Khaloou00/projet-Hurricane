import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  DollarSign,
  Handshake,
  HardHat,
  Home,
  MapPin,
  Shield,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBackground from "@/assets/hero-background.jpg";
import immobilierBg from "@/assets/immobilier-bg.jpg";
import { GrMapLocation } from "react-icons/gr";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { useState } from "react";
import Cite from "@/assets/logo-hurricane.png";
import YoutubeIcon from "@/assets/téléchargement.png";
import Aj from "@/assets/banner.png";
import Confiance from "./Confiance";
import Camion from "./Camion";
import { link } from "../../node_modules/@types/d3-shape/index.d";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Index = () => {
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoPlayed, setVideoPlayed] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(false);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Définir la fonction handleVideoPlay
  const handleVideoPlay = () => {
    setVideoPlayed(true);
    setIsVideoLoading(true);
  };

  // Définir la fonction handleVideoLoad
  const handleVideoLoad = () => {
    setIsVideoLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Split Design */}
      <section className="relative min-h-screen grid lg:grid-cols-2">
        {/* Left Side - Real Estate */}
        <Link
          to="/construction"
          className="block hover:cursor-pointer hover:scale-105 transition duration-500 z-2"
        >
          <div className="relative flex items-center justify-center min-h-[50vh] lg:min-h-screen overflow-hidden pt-[50px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${Aj})` }}
            />
            <div className="absolute inset-0 bg-hurricane-black/70" />
            <div className="relative z-10 p-8 lg:p-16 max-w-xl">
              <motion.span
                {...fadeInUp}
                className="text-primary text-sm font-semibold tracking-widest uppercase"
              >
                Notre Expertise
              </motion.span>
              <motion.h1
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 leading-tight"
              >
                Immobilier & Construction
              </motion.h1>
              <motion.p
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-primary-foreground/80 mt-6 text-lg"
              >
                Investissez dans l'avenir avec nos projets immobiliers
                d'exception en Côte d'Ivoire.
              </motion.p>
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <Button variant="heroLight" size="xl" className="group" asChild>
                  <Link to="/construction">
                    Découvrir le projet
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </Link>

        {/* Right Side - Commercial Services */}
        <Link
          to="/construction"
          className="block hover:cursor-pointer hover:scale-105 transition duration-500 z-2"
        >
          <div className="relative flex items-center justify-center min-h-[50vh] lg:min-h-screen overflow-hidden bg-hurricane-black ">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20 "
              style={{ backgroundImage: `url(${heroBackground})` }}
            />
            <div className="relative z-10 p-8 lg:p-16 max-w-xl">
              <motion.span
                {...fadeInUp}
                className="text-primary text-sm font-semibold tracking-widest uppercase"
              >
                Notre Expertise
              </motion.span>
              <motion.h1
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 leading-tight"
              >
                Intermédiation Commerciale
              </motion.h1>
              <motion.p
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-primary-foreground/80 mt-6 text-lg"
              >
                Votre partenaire stratégique pour toutes vos transactions
                commerciales.
              </motion.p>
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <Button variant="hero" size="xl" className="group" asChild>
                  <Link to="/construction">
                    Voir nos solutions
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </Link>
      </section>

      {/* Domains Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Nos Domaines d'Expertise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
              Des solutions complètes pour vos projets
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Handshake,
                title: "Intermédiation Commerciale",
                description:
                  "Nous facilitons vos transactions commerciales avec expertise et professionnalisme.",
                href: "/construction",
              },
              {
                icon: Building2,
                title: "Achat & Vente Immobilière",
                description:
                  "Trouvez le bien idéal ou vendez au meilleur prix avec notre accompagnement personnalisé.",
                href: "/construction",
              },
              {
                icon: HardHat,
                title: "Constructions",
                description:
                  "De la conception à la réalisation, nous bâtissons vos projets avec qualité et rigueur.",
                href: "/construction",
              },
            ].map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={domain.href}
                  className="block group bg-background p-8 rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 h-full"
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <domain.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {domain.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {domain.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-primary font-medium">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <div>
        <section id="promo" className="py-2 bg-white">
          <div className="max-w-[90%] mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-red-600 font-bold tracking-wider text-sm uppercase">
                NOTRE OFFRE PHARE
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">
                Lots avec ACD – Bingerville
              </h2>
              <div className="w-24 h-0.5 bg-red-500 mx-auto mb-12"></div>

              <p className="text-slate-700 max-w-3xl mx-auto text-lg leading-relaxed">
                Découvrez nos lots sécurisés avec{" "}
                <strong>Arrêté de Concession Définitive (ACD)</strong>,
                idéalement situés à{" "}
                <strong>Bingerville, après le Palais de Justice</strong>. Une
                opportunité foncière rare, adaptée à l'habitat comme à
                l'investissement immobilier.
              </p>
            </div>
            //début du nouveau code
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div
                className="rounded-[10px] h-[320px] w-full md:h-[350px] lg:h-[420px] relative cursor-pointer"
                onClick={() => {
                  setVideoPlayed(true);
                  setIsLoading(true); // Reset loading state when video is clicked
                }}
              >
                {videoPlayed ? (
                  <div className="z-10 relative w-full h-full">
                    {/* Loading indicator */}
                    {isLoading && (
                      <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-70 rounded-[10px]">
                        <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                    <iframe
                      src="https://www.youtube.com/embed/8w2drULRCR8?autoplay=1&modestbranding=1&rel=0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-[10px] absolute inset-0 z-20"
                      title="Lots Bingerville ACD"
                      onLoad={() => setIsLoading(false)}
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full group cursor-pointer">
                    {/* Overlay de hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-[10px] z-10 group-hover:from-black/60 transition-all duration-300"></div>

                    {/* Image avec animation de zoom au hover */}
                    <img
                      className="rounded-[10px] h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      src={Cite}
                      alt="Lots Bingerville ACD"
                    />

                    {/* Texte indicateur en bas */}
                    <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20">
                      <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded-full">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-white text-xs md:text-sm font-medium">
                          Cliquez pour voir la vidéo
                        </span>
                      </div>
                    </div>

                    {/* Bouton play avec animations */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="relative group/btn">
                        {/* Bouton principal */}
                        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center shadow-2xl transform group-hover/btn:scale-110 transition-all duration-300">
                          <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center">
                            <svg
                              className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-red-600 ml-0.5 md:ml-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>

                        {/* Animation de pulse externe */}
                        <div className="absolute -inset-2 md:-inset-3 lg:-inset-4 border-2 border-red-400/50 rounded-full animate-ping opacity-60"></div>

                        {/* Animation de pulse interne */}
                        <div
                          className="absolute -inset-3 md:-inset-4 lg:-inset-6 border border-red-300/30 rounded-full animate-ping opacity-30"
                          style={{ animationDelay: "0.5s" }}
                        ></div>

                        {/* Effet de glow au hover */}
                        <div className="absolute -inset-4 md:-inset-6 lg:-inset-8 bg-red-500/10 rounded-full opacity-0 group-hover/btn:opacity-100 blur-xl transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="space-y-8 md:space-y-10 lg:space-y-12">
                {/* Feature 1 - Localisation */}
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-3 md:p-4 lg:p-5 rounded-2xl mr-4 md:mr-5 lg:mr-6 text-red-600 shadow-lg group-hover:bg-gradient-to-br group-hover:from-red-500 group-hover:to-red-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-105">
                    <GrMapLocation className="text-xl md:text-2xl lg:text-3xl" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-slate-900 group-hover:text-red-600 transition-colors">
                      Localisation Stratégique
                    </h4>
                    <p className="text-slate-700 text-sm md:text-base lg:text-lg leading-relaxed">
                      Situés à{" "}
                      <strong className="text-red-600">
                        Bingerville, après le Palais de Justice
                      </strong>
                      , dans une zone accessible et en pleine expansion avec
                      accès privilégié aux principaux axes routiers.
                    </p>
                  </div>
                </div>

                {/* Feature 2 - Sécurité */}
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-3 md:p-4 lg:p-5 rounded-2xl mr-4 md:mr-5 lg:mr-6 text-red-600 shadow-lg group-hover:bg-gradient-to-br group-hover:from-red-500 group-hover:to-red-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-105">
                    <Shield className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-slate-900 group-hover:text-red-600 transition-colors">
                      Sécurité Juridique Garantie
                    </h4>
                    <p className="text-slate-700 text-sm md:text-base lg:text-lg leading-relaxed">
                      Tous nos terrains disposent d'un{" "}
                      <strong className="text-red-600">
                        ACD (Arrêté de Concession Définitive)
                      </strong>
                      , garantissant une acquisition 100% fiable, légale et
                      sécurisée. Aucun risque juridique.
                    </p>
                  </div>
                </div>

                {/* Feature 3 - Superficies */}
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-3 md:p-4 lg:p-5 rounded-2xl mr-4 md:mr-5 lg:mr-6 text-red-600 shadow-lg group-hover:bg-gradient-to-br group-hover:from-red-500 group-hover:to-red-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-105">
                    <HiOutlineHomeModern className="text-xl md:text-2xl lg:text-3xl" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-slate-900 group-hover:text-red-600 transition-colors">
                      Superficies Flexibles
                    </h4>
                    <p className="text-slate-700 text-sm md:text-base lg:text-lg leading-relaxed mb-3 md:mb-4">
                      Des surfaces adaptées à tous vos projets d'investissement
                      :
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                      {["1 ha 8 000 m²"].map((size, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-xl p-2 md:p-3 text-center group-hover:border-red-300 transition-colors"
                        >
                          <span className="font-bold text-red-700 text-sm md:text-base lg:text-lg">
                            {size}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 md:pt-6">
                  <Link
                    to="/contact"
                    className="group/cta inline-flex items-center justify-center gap-3 md:gap-4 w-full py-3 md:py-4 lg:py-5 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-sm md:text-base lg:text-lg rounded-xl md:rounded-2xl shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl hover:from-red-500 hover:to-red-400 transition-all duration-300 transform hover:scale-[1.02] border border-red-400"
                  >
                    <span className="relative">
                      <span className="opacity-0 group-hover/cta:opacity-100 absolute -inset-2 md:-inset-3 lg:-inset-4 bg-white/20 blur-xl rounded-full transition-opacity"></span>
                      CONTACTER POUR PLUS D'INFORMATIONS
                    </span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 transform group-hover/cta:translate-x-1 md:group-hover/cta:translate-x-2 transition-transform" />
                  </Link>

                  <p className="text-center text-slate-500 mt-3 md:mt-4 text-xs md:text-sm">
                    ⚡ <strong>Réponse sous 24h</strong> •
                    <strong>Consultation gratuite</strong> •
                    <strong>Documents officiels fournis</strong>
                  </p>
                </div>
              </div>
            </div>
            {/* CTA Button */}
            <div className="mt-8 text-center">
              <Link
                to="/offres"
                className="inline-flex items-center gap-3 px-10 py-4 bg-red-600 text-white font-semibold hover:bg-red-700 transition-all rounded-xl shadow-md hover:shadow-lg"
              >
                Voir toutes nos offres
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Camion />
      <Confiance />
      {/* About Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary text-sm font-semibold tracking-widest uppercase"
            >
              Qui sommes-nous
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4"
            >
              À Propos de Hurricane Services CI
            </motion.h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-6" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 space-y-6 text-muted-foreground text-lg leading-relaxed"
            >
              <p>
                <strong className="text-foreground">
                  HURRICANE SERVICES CI IMMOBILIER
                </strong>{" "}
                est un groupe multiservices structuré autour de plusieurs pôles
                complémentaires : la vente de terrains, la promotion immobilière
                et l'intermédiation commerciale.
              </p>
              <p>
                Nous accompagnons particuliers, entreprises et institutions dans
                leurs projets, de la conception à la réalisation, en alliant
                expertise technique, vision stratégique et qualité d'exécution.
              </p>
              <p>
                Notre mission : créer de la valeur, bâtir des projets solides et
                offrir à nos clients une visibilité qui compte.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              {[
                { value: "10+", label: "Années d'expérience" },
                { value: "150+", label: "Projets réalisés" },
                { value: "500+", label: "Clients satisfaits" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground mt-2">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/a-propos">En savoir plus sur nous</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-hurricane-black relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
              Prêt à concrétiser votre projet ?
            </h2>
            <p className="text-primary-foreground/70 mt-6 text-lg">
              Notre équipe d'experts est à votre disposition pour vous
              accompagner dans tous vos projets immobiliers et commerciaux.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Nous contacter
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
                asChild
              >
                <Link to="/offres">Voir nos offres</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
