import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Check, Play, Pause } from "lucide-react";
import immobilierBg from "@/assets/immobilier-bg.jpg";
import { useState, useRef, useEffect } from "react";

const offres = [
  {
    id: 1,
    title: "Villa Premium 400m²",
    location: "Hurricane Gardens, Assinie",
    surface: "400 m²",
    features: ["4 Chambres", "Piscine privée", "Jardin", "Garage 2 voitures"],
    price: "À partir de 180 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
  },
  {
    id: 2,
    title: "Villa Moderne 300m²",
    location: "Hurricane Gardens, Assinie",
    surface: "300 m²",
    features: ["3 Chambres", "Toit-terrasse", "Jardin", "Garage"],
    price: "À partir de 120 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
  },
  {
    id: 3,
    title: "Terrain Viabilisé",
    location: "Bingerville",
    surface: "500 m²",
    features: ["Eau & Électricité", "Accès goudronné", "Titre foncier", "Zone résidentielle"],
    price: "À partir de 15 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
  },
  {
    id: 4,
    title: "Villa Luxueuse 500m²",
    location: "Cocody Riviera",
    surface: "500 m²",
    features: ["5 Chambres", "Piscine olympique", "Home cinéma", "Parking 3 voitures"],
    price: "À partir de 250 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
  },
  {
    id: 5,
    title: "Appartement Standing",
    location: "Plateau, Abidjan",
    surface: "150 m²",
    features: ["3 Chambres", "Ascenseur", "Sécurité 24h", "Vue panoramique"],
    price: "À partir de 85 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
  },
  {
    id: 6,
    title: "Villa Contemporaine",
    location: "Marcory Zone 4",
    surface: "350 m²",
    features: ["4 Chambres", "Cuisine équipée", "Terrasse", "Jardin tropical"],
    price: "À partir de 145 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
  },
  {
    id: 7,
    title: "Duplex Moderne",
    location: "Yopougon Niangon",
    surface: "200 m²",
    features: ["3 Chambres", "Double salon", "Balcon", "Parking"],
    price: "À partir de 75 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
  },
  {
    id: 8,
    title: "Terrain Loti",
    location: "Bassam",
    surface: "1000 m²",
    features: ["Bord de mer", "Titre foncier", "Viabilisé", "Accès plage"],
    price: "À partir de 35 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
  },
  {
    id: 9,
    title: "Villa de Prestige",
    location: "Cocody Angré",
    surface: "600 m²",
    features: ["6 Chambres", "2 Piscines", "Salle de sport", "Jardin paysager"],
    price: "À partir de 320 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  },
  {
    id: 10,
    title: "Studio Meublé",
    location: "Cocody Deux Plateaux",
    surface: "45 m²",
    features: ["Tout équipé", "Climatisation", "Internet", "Sécurité"],
    price: "À partir de 25 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
  },
  {
    id: 11,
    title: "Maison Familiale",
    location: "Abobo Avocatier",
    surface: "250 m²",
    features: ["4 Chambres", "Cour spacieuse", "Garage", "Titre foncier"],
    price: "À partir de 65 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
  },
  {
    id: 12,
    title: "Villa Bord de Lagune",
    location: "Bingerville",
    surface: "450 m²",
    features: ["5 Chambres", "Vue lagune", "Ponton privé", "Jardin tropical"],
    price: "À partir de 195 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
  },
  {
    id: 13,
    title: "Penthouse Luxe",
    location: "Plateau Cité Administrative",
    surface: "280 m²",
    features: ["4 Chambres", "Toit-terrasse", "Jacuzzi", "Vue 360°"],
    price: "À partir de 175 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800",
  },
  {
    id: 14,
    title: "Terrain Agricole",
    location: "Azaguié",
    surface: "5000 m²",
    features: ["Sol fertile", "Accès route", "Eau disponible", "Titre foncier"],
    price: "À partir de 20 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
  },
  {
    id: 15,
    title: "Villa Architecte",
    location: "Cocody Riviera Golf",
    surface: "550 m²",
    features: ["5 Chambres", "Design moderne", "Domotique", "Cave à vin"],
    price: "À partir de 280 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
  },
  {
    id: 16,
    title: "Appartement F3",
    location: "Marcory Résidentiel",
    surface: "95 m²",
    features: ["2 Chambres", "Balcon", "Parking", "Proche commerces"],
    price: "À partir de 45 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
  },
  {
    id: 17,
    title: "Villa Coloniale",
    location: "Bingerville Centre",
    surface: "380 m²",
    features: ["4 Chambres", "Architecture coloniale", "Grand jardin", "Garage"],
    price: "À partir de 110 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
  },
  {
    id: 18,
    title: "Résidence Sécurisée",
    location: "Cocody Angré 8ème Tranche",
    surface: "220 m²",
    features: ["3 Chambres", "Gardiennage", "Piscine commune", "Aire de jeux"],
    price: "À partir de 95 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
  },
  {
    id: 19,
    title: "Terrain Loti Premium",
    location: "Grand Bassam Station",
    surface: "800 m²",
    features: ["Face mer", "Viabilisé", "Titre foncier", "Zone calme"],
    price: "À partir de 45 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
  },
  {
    id: 20,
    title: "Villa Moderne Eco",
    location: "Songon",
    surface: "320 m²",
    features: ["4 Chambres", "Panneaux solaires", "Récupération eau", "Jardin bio"],
    price: "À partir de 105 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
  },
  {
    id: 21,
    title: "Loft Industriel",
    location: "Zone 4C",
    surface: "180 m²",
    features: ["Open space", "Hauteur 5m", "Mezzanine", "Style industriel"],
    price: "À partir de 78 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800",
  },
  {
    id: 22,
    title: "Villa Piscine",
    location: "Assinie Mafia",
    surface: "400 m²",
    features: ["4 Chambres", "Grande piscine", "Bar extérieur", "Vue mer"],
    price: "À partir de 165 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
  },
  {
    id: 23,
    title: "Immeuble R+3",
    location: "Adjamé Commerce",
    surface: "600 m²",
    features: ["8 Appartements", "Commerces RDC", "Rentabilité 8%", "Titre foncier"],
    price: "À partir de 350 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
  },
  {
    id: 24,
    title: "Maison Container",
    location: "Azaguié",
    surface: "120 m²",
    features: ["3 Chambres", "Design contemporain", "Économique", "Écologique"],
    price: "À partir de 35 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
  },
  {
    id: 25,
    title: "Villa Standing",
    location: "Cocody Blockhaus",
    surface: "380 m²",
    features: ["4 Chambres", "Piscine chauffée", "Sauna", "Salle de sport"],
    price: "À partir de 185 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800",
  },
  {
    id: 26,
    title: "Appartement Vue Mer",
    location: "Grand Bassam Phare",
    surface: "110 m²",
    features: ["2 Chambres", "Balcon face mer", "Meublé", "Résidence sécurisée"],
    price: "À partir de 55 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800",
  },
  {
    id: 27,
    title: "Ranch Équestre",
    location: "Dabou",
    surface: "2 hectares",
    features: ["Écuries", "Manège", "Maison 200m²", "Pâturages"],
    price: "À partir de 180 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800",
  },
  {
    id: 28,
    title: "Villa Smart Home",
    location: "Cocody Riviera Palmeraie",
    surface: "420 m²",
    features: ["5 Chambres", "Domotique complète", "Cinéma privé", "Piscine infinity"],
    price: "À partir de 245 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
  },
  {
    id: 29,
    title: "Chalet Montagne",
    location: "Man",
    surface: "180 m²",
    features: ["3 Chambres", "Cheminée", "Vue montagnes", "Jardin arboré"],
    price: "À partir de 68 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
  },
  {
    id: 30,
    title: "Complexe Touristique",
    location: "Assinie France",
    surface: "3000 m²",
    features: ["10 Bungalows", "Restaurant", "Piscine", "Accès plage privée"],
    price: "À partir de 450 000 000 FCFA",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
  },
];

const Offres = () => {
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

      <main>
        {/* Hero avec vidéo */}
        <section className="relative py-24 overflow-hidden h-[80vh] md:h-[60vh]">
          {/* Vidéo de fond */}
          <div className="absolute inset-0 z-0">
            {/* Option 1: Vidéo de Pexels directe */}
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
              {/* Option 2: Vidéo de Mixkit (alternative) */}
              {/* <source
                src="https://assets.mixkit.co/videos/preview/mixkit-modern-skyscraper-in-city-night-38260-large.mp4"
                type="video/mp4"
              /> */}
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

          {/* Bouton de contrôle vidéo */}

          {/* Contenu */}
          <div className="container-custom text-center relative z-10 h-full flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary text-sm font-semibold tracking-widest uppercase"
            >
              Nos Offres
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4"
            >
              Découvrez nos biens
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary-foreground/70 max-w-2xl mx-auto mt-6 text-lg"
            >
              Une sélection exclusive de biens immobiliers pour tous vos
              projets.
            </motion.p>

            {/* Sous-titre optionnel avec effet d'animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            ></motion.div>
          </div>
        </section>

        {/* Listings */}
        <section id="listings" className="py-24">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offres.map((offre, index) => (
                <motion.div
                  key={offre.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={offre.image}
                      alt={offre.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hurricane-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {offre.surface}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {offre.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm">{offre.location}</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {offre.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="w-4 h-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary">
                        {offre.price}
                      </span>
                      <Button variant="hero" size="sm" asChild>
                        <Link to="/contact">Contacter</Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-16 text-center"
            >
              <p className="text-muted-foreground mb-6">
                Vous ne trouvez pas ce que vous cherchez ?
              </p>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">
                  Contactez-nous pour une recherche personnalisée
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Offres;
