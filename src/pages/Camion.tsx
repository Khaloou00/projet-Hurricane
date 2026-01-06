import React from "react";
import { motion } from "framer-motion";
import Pub from "@/assets/Terrain.png";
import {
  Truck,
  Megaphone,
  Target,
  BarChart,
  CheckCircle,
  MapPin,
  Clock,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const Camion: React.FC = () => {
  return (
    <div>
      <section
        id="communication"
        className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        {/* Éléments décoratifs */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-50 to-transparent skew-x-12 transform translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-r from-red-100/30 to-transparent -skew-x-12 transform -translate-x-20"></div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Contenu texte */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-red-600 font-bold tracking-wider text-sm uppercase">
                Intermédiation Commerciale
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-2 mb-6">
                Achat &<br />
                <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                  Vente de biens Immobilier
                </span>
              </h2>

              <div className="w-24 h-1 bg-red-500 mb-8"></div>

              {/* Avantages */}

              {/* Statistiques */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { value: "50+", label: "Terrains", icon: Truck },
                  { value: "100%", label: "Couverture", icon: MapPin },
                  { value: "24/7", label: "Support", icon: Clock },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
                  >
                    <div className="text-2xl font-bold text-red-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Bouton CTA */}
              <Link to="/contact">
                <button className="px-10 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-lg hover:from-red-500 hover:to-red-400 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 uppercase tracking-wider text-sm flex items-center gap-3">
                  <Megaphone className="w-5 h-5" />
                  Prendre Rendez-Vous
                  <BarChart className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>

            {/* Image et services */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Image principale */}
              <div className="relative group mb-12">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-100 to-red-50 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>

                <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-xl">
                  <img
                    src={Pub}
                    alt="Camion LED Publicitaire Hurricane Services"
                    className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Badge sur l'image */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        EN DIFFUSION
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services détaillés */}

              {/* Témoignage */}
              <motion.div
                className="mt-12 bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-start gap-3">
                  <Users className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800 italic mb-2">
                      Le meilleur dans le domaine !
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Camion;
