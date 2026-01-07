import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Eye,
  Award,
  Users,
  Play,
  Pause,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Equipe from "./Equipe";

const About = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Pour redémarrer la vidéo si elle se termine
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleEnded = () => {
        video.currentTime = 0;
        video.play();
      };
      video.addEventListener("ended", handleEnded);
      return () => video.removeEventListener("ended", handleEnded);
    }
  }, []);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="">
        {/* Hero avec vidéo */}
        <section className="relative py-[200px] overflow-hidden">
          {/* Vidéo de fond */}
          <div className="absolute inset-0 z-0">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              onLoadedData={handleVideoLoaded}
            >
              <source
                src="https://www.pexels.com/fr-fr/download/video/35466045/?fps=30fps"
                type="video/mp4"
              />
              {/* Remplacez par votre propre vidéo */}
              {/* <source src="/videos/about-hero.mp4" type="video/mp4" /> */}
            </video>

            {/* Overlay sombre pour améliorer la lisibilité */}
            <div className="absolute inset-0 bg-hurricane-black/70"></div>

            {/* Indicateur de chargement */}
            {!videoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-hurricane-black/80">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            )}
          </div>

          {/* Contenu */}
          <div className="container-custom text-center relative z-10">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary text-sm font-semibold tracking-widest uppercase"
            >
              Notre Histoire
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4"
            >
              À Propos de Hurricane Services CI
            </motion.h1>

            {/* Sous-titre optionnel */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/80 mt-6 max-w-2xl mx-auto"
            >
              Bâtissons ensemble l'avenir de l'immobilier en Côte d'Ivoire
            </motion.p>
          </div>
        </section>

        {/* Reste du contenu inchangé */}
        <section className="py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose prose-lg max-w-none"
              >
                <p className="text-xl text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">
                    HURRICANE SERVICES CI IMMOBILIER
                  </strong>{" "}
                  est un groupe multiservices structuré autour de plusieurs
                  pôles complémentaires : la vente de terrains, la promotion
                  immobilière et l'intermédiation commerciale.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                  Nous accompagnons particuliers, entreprises et institutions
                  dans leurs projets, de la conception à la réalisation, en
                  alliant expertise technique, vision stratégique et qualité
                  d'exécution.
                </p>
              </motion.div>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
              {[
                {
                  icon: Target,
                  title: "Notre Mission",
                  description:
                    "Créer de la valeur et bâtir des projets solides pour nos clients.",
                },
                {
                  icon: Eye,
                  title: "Notre Vision",
                  description:
                    "Devenir le leader de l'immobilier et des services commerciaux en Côte d'Ivoire.",
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description:
                    "Nous visons l'excellence dans chaque projet que nous réalisons.",
                },
                {
                  icon: Users,
                  title: "Proximité",
                  description:
                    "Un accompagnement personnalisé pour chaque client, à chaque étape.",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-20 bg-hurricane-black rounded-3xl p-12"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: "5+", label: "Années d'expérience" },
                  { value: "50+", label: "Projets réalisés" },
                  { value: "50+", label: "Clients satisfaits" },
                  { value: "20+", label: "Collaborateurs" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-4xl md:text-5xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-primary-foreground/70 mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-20 text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Prêt à travailler avec nous ?
              </h2>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Contactez-nous
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
        <Equipe />
      </main>

      <Footer />
    </div>
  );
};

export default About;
