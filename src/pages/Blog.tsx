import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import LL from "@/assets/Acd.png";
import Voir from "@/assets/Ter.png";

// Définition des animations
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

// Import d'images (à remplacer par vos vraies images si nécessaire)
// Si vous n'avez pas ces images, vous pouvez utiliser des URLs d'images de remplacement
const immobilierBg = LL;
const heroBackground = Voir;

const Blog = () => {
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoPlayed, setVideoPlayed] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(false);

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
      <section className="relative min-h-screen grid lg:grid-cols-2">
        {/* Left Side - Real Estate */}
        <Link
          to="/construction"
          className="block hover:cursor-pointer hover:scale-105 transition duration-500 z-2"
        >
          <div className="relative flex items-center justify-center min-h-[50vh] lg:min-h-screen overflow-hidden pt-[50px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${immobilierBg})` }}
            />
            <div className="absolute inset-0 bg-hurricane-black/70" />
            <div className="relative z-10 p-8 lg:p-16 max-w-xl">
              <motion.span
                {...fadeInUp}
                className="text-primary text-sm font-semibold tracking-widest uppercase"
              >
                Nos réalisations
              </motion.span>
              <motion.h1
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 leading-tight"
              >
                Galerie
              </motion.h1>
              <motion.p
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-primary-foreground/80 mt-6 text-lg"
              >
                Temps forts & réalisations, découvrez notre parcours à travers
                images captivantes. Nos actions sur le terrain témoignent de
                notre engagement et de de notre expertise dans le secteur
                immobilier en Côte d'Ivoire.
              </motion.p>
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <Button variant="heroLight" size="xl" className="group" asChild>
                  <Link to="/domaines/immobilier">
                    Voir la galerie complète
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
          <div className="relative flex items-center justify-center min-h-[50vh] lg:min-h-screen overflow-hidden bg-hurricane-black">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${heroBackground})` }}
            />
            <div className="relative z-10 p-8 lg:p-16 max-w-xl">
              <motion.span
                {...fadeInUp}
                className="text-primary text-sm font-semibold tracking-widest uppercase"
              >
                Nos réalisations
              </motion.span>
              <motion.h1
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 leading-tight"
              >
                Actualité sur nos activités
              </motion.h1>
              <motion.p
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-primary-foreground/80 mt-6 text-lg"
              >
                Suivez nos activités en temps réel et découvrez comment nous
                transformons le secteur immobilier en Côte d'Ivoire.
              </motion.p>
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <Button variant="hero" size="xl" className="group" asChild>
                  <Link to="/domaines/intermediation">
                    Voir les dernières nouvelles
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Blog;
